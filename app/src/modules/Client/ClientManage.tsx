/**
 *
 * ClientManage
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, FormattedRelativeTime } from 'react-intl';
import { graphql, useFragment } from 'react-relay';
import { Link, useNavigate } from '@tanstack/react-location';
import { useNativeFormSubmit } from 'lib/form';
import { usePromiseMutation } from 'lib/relay';
import { createToast, deleteToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';
import { relativeTime } from 'intl/relativeTime';
import { GenderSelectOptions } from '../GenderSelectOptions';
import { ClientManage_client$key, Gender } from './__generated__/ClientManage_client.graphql';
import { ClientManage_viewer$key } from './__generated__/ClientManage_viewer.graphql';
import { ClientManageCreateMutation } from './__generated__/ClientManageCreateMutation.graphql';
import { ClientManageDeleteMutation } from './__generated__/ClientManageDeleteMutation.graphql';
import { ClientManageUpdateMutation } from './__generated__/ClientManageUpdateMutation.graphql';

export interface ClientManageProps {
  viewer: ClientManage_viewer$key;
  client: ClientManage_client$key | null;
  nextAvailableClientNumber: number | null;
}

export const ClientManage: React.FC<ClientManageProps> = (props) => {
  const { viewer: viewerRef, client: clientRef, nextAvailableClientNumber } = props;

  const navigate = useNavigate();
  const { confirmDelete } = useConfirm();

  const viewer = useFragment(
    graphql`
      fragment ClientManage_viewer on User {
        isAdmin
        isTherapist
        canInsertClient
      }
    `,
    viewerRef,
  );

  const client = useFragment(
    graphql`
      fragment ClientManage_client on Client {
        rowId
        fullName
        number
        firstName
        lastName
        dateOfBirth
        telephone
        gender
        city
        address
        email
        note
        discrete

        updatedAt
        updatedBy: userByUpdatedBy {
          fullName
          therapist: therapistByUserRowId {
            rowId
          }
        }
        createdBy: userByCreatedBy @required(action: THROW) {
          fullName
          therapist: therapistByUserRowId {
            rowId
          }
        }

        canViewerUpdate
        canViewerDelete
      }
    `,
    clientRef,
  );

  const [createClient] = usePromiseMutation<ClientManageCreateMutation>(graphql`
    mutation ClientManageCreateMutation($input: CreateClientInput!) {
      createClient(input: $input) {
        client {
          rowId
        }
        clientEdge {
          node {
            rowId
            ...ClientManage_client
            ...ClientsTable_client
          }
        }
      }
    }
  `);

  const [updateClient] = usePromiseMutation<ClientManageUpdateMutation>(graphql`
    mutation ClientManageUpdateMutation($input: UpdateClientInput!) {
      updateClient(input: $input) {
        client {
          rowId
          ...ClientManage_client
          ...ClientsTable_client
        }
      }
    }
  `);

  const [deleteClient] = usePromiseMutation<ClientManageDeleteMutation>(graphql`
    mutation ClientManageDeleteMutation($input: DeleteClientInput!) {
      deleteClient(input: $input) {
        client {
          id
        }
      }
    }
  `);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      number: client?.number ?? nextAvailableClientNumber ?? 1,
      address: client?.address ?? '',
      city: client?.city ?? '',
      dateOfBirth: client?.dateOfBirth ?? '',
      email: client?.email ?? null,
      firstName: client?.firstName ?? '',
      gender: client?.gender ?? ('FEMALE' as Gender),
      lastName: client?.lastName ?? '',
      telephone: client?.telephone ?? '',
      note: client?.note ?? '',
      discrete: client?.discrete ?? false,
    },
  });

  useUnsavedChangesPrompt(Boolean(client) && isDirty);

  const canDelete = client?.canViewerDelete;
  const canSave = client ? client.canViewerUpdate : viewer.canInsertClient;

  const [formRef, , submitOnCtrlEnter] = useNativeFormSubmit();

  return (
    <form
      ref={formRef}
      className="content"
      onSubmit={handleSubmit((values) => {
        if (client) {
          return saveToast(
            (async () => {
              const data = await updateClient({
                variables: { input: { ...values, rowId: client.rowId } },
              });
              if (!data.updateClient?.client) {
                throw new Error('Forbidden');
              }
              reset(values);
            })(),
          );
        }

        return createToast(
          (async () => {
            const data = await createClient({
              variables: { input: values },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createClient?.client) {
              throw new Error('Forbidden');
            }

            // reset, propagate and navigate
            reset(values);
            const client = data.createClient.client;
            setTimeout(
              () =>
                navigate({
                  to: '/clients/' + client.rowId,
                  search: true,
                  replace: true,
                }),
              0,
            );
          })(),
        );
      })}
    >
      <h2 className="content-title">
        {client ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="MEDICAL_RECORD" />
              &nbsp;#{client.number}
            </small>
            <br />
            {client.fullName}
          </>
        ) : (
          <FormattedMessage id="NEW_CLIENT" />
        )}
      </h2>

      {(viewer.isAdmin || viewer.isTherapist) && (
        <div className="form-row">
          <div className="col">
            <div className="custom-switch">
              <input {...register('discrete')} type="checkbox" id="discrete" disabled={!canSave} />
              <label htmlFor="discrete">
                <FormattedMessage id="DISCRETE" />
              </label>
            </div>
            <div className="form-text">
              <FormattedMessage id="DISCRETE_CLIENT_FORM_TEXT" />
            </div>
          </div>
        </div>
      )}

      <div className="form-row row-eq-spacing-md">
        <div className="col-md-2 col-lg-2">
          <label htmlFor="number" className="required">
            <FormattedMessage id="NUMBER" />
          </label>
          <input
            {...register('number', { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="number"
            required
            readOnly={!canSave}
          />
        </div>

        <div className="col-md-5 col-lg-3">
          <label htmlFor="firstName" className="required">
            <FormattedMessage id="NAME" />
          </label>
          <input
            {...register('firstName')}
            type="text"
            className="form-control"
            id="firstName"
            required
            readOnly={!canSave}
          />
        </div>

        <div className="col-md-5 col-lg-3 pr-0 pr-lg-10">
          <label htmlFor="lastName" className="required">
            <FormattedMessage id="SURNAME" />
          </label>
          <input
            {...register('lastName')}
            type="text"
            className="form-control"
            id="lastName"
            required
            readOnly={!canSave}
          />
        </div>

        <div className="form-v-spacer hidden-sm-and-down hidden-lg-and-up" />

        <div className="col-md-6 col-lg-2 pl-0 pl-lg-10">
          <label htmlFor="gender" className="required">
            <FormattedMessage id="GENDER" />
          </label>
          <select
            {...register('gender')}
            id="gender"
            className="form-control"
            required
            disabled={!canSave}
          >
            <GenderSelectOptions hideEmptyOption />
          </select>
        </div>

        <div className="col-md-6 col-lg-2">
          <label htmlFor="dateOfBirth" className="required">
            <FormattedMessage id="DATE_OF_BIRTH" />
          </label>
          <input
            {...register('dateOfBirth')}
            type="date"
            placeholder="YYYY-MM-DD" // for browsers that don't support the date input
            className="form-control"
            id="dateOfBirth"
            required
            readOnly={!canSave}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="email">E-Mail</label>
          <input
            {...register('email', { setValueAs: (v) => v || null })}
            type="email"
            className="form-control"
            id="email"
            readOnly={!canSave}
          />
          <div className="form-text">
            <FormattedMessage id="CLIENT_EMAIL_FORM_TEXT" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="telephone" className="required">
            <FormattedMessage id="TELEPHONE" />
          </label>
          <input
            {...register('telephone')}
            type="text"
            className="form-control"
            id="telephone"
            required
            readOnly={!canSave}
          />
        </div>
      </div>

      <div className="form-row row-eq-spacing-md">
        <div className="col-md-8">
          <label htmlFor="address" className="required">
            <FormattedMessage id="ADDRESS" />
          </label>
          <input
            {...register('address')}
            type="text"
            className="form-control"
            id="address"
            required
            readOnly={!canSave}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="city" className="required">
            <FormattedMessage id="CITY" />
          </label>
          <input
            {...register('city')}
            type="text"
            className="form-control"
            id="city"
            required
            readOnly={!canSave}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="note">
            <FormattedMessage id="NOTE" />
          </label>
          <textarea
            {...register('note')}
            className="form-control"
            id="note"
            readOnly={!canSave}
            onKeyDown={submitOnCtrlEnter}
          />
        </div>
      </div>

      <div className="form-row align-items-center">
        {client && (
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              disabled={!canDelete || isSubmitting}
              aria-disabled={!canDelete || isSubmitting}
              onClick={() => {
                if (confirmDelete()) {
                  reset();
                  deleteToast(
                    (async () => {
                      const data = await deleteClient({
                        variables: { input: { rowId: client!.rowId } },
                        updater: (store) => {
                          store.invalidateStore();
                        },
                      });
                      if (!data.deleteClient?.client) {
                        throw new Error('Forbidden');
                      }
                      navigate({
                        to: '/clients',
                        search: true,
                        replace: true,
                      });
                    })(),
                  );
                }
              }}
            >
              <i className="fa-solid fa-ban"></i>
              &nbsp;
              <FormattedMessage id="DELETE" />
            </button>
          </div>
        )}

        <div className="col text-right">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={!canSave || isSubmitting}
            aria-disabled={!canSave || isSubmitting}
          >
            <i className="fa-solid fa-floppy-disk"></i>
            &nbsp;
            <FormattedMessage id="SAVE" />
          </button>
        </div>
      </div>

      {client && (
        <div className="form-row">
          <div className="col text-right text-muted">
            <FormattedMessage
              id="LAST_CHANGE_BY_AGO"
              tagName="small"
              values={{
                updatedBy: (() => {
                  const actor = client.updatedBy ?? client.createdBy;
                  if (!actor.therapist) {
                    return actor.fullName;
                  }
                  return (
                    <Link to={`/therapists/${actor.therapist.rowId}`} search>
                      {actor.fullName}
                    </Link>
                  );
                })(),
                updatedAgo: (
                  <FormattedRelativeTime {...relativeTime(client.updatedAt)} style="long" />
                ),
              }}
            />
          </div>
        </div>
      )}
    </form>
  );
};
