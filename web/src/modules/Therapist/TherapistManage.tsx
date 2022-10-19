/**
 *
 * TherapistManage
 *
 */
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, FormattedRelativeTime } from 'react-intl';
import { graphql, useFragment } from 'react-relay';

import { useNavigate } from '@tanstack/react-location';
import { TherapistType } from 'enums.graphql';

import { usePromiseMutation } from 'lib/relay';
import { createToast, deleteToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';

import { relativeTime } from 'intl/relativeTime';

import { AutocompleteUser } from 'modules/Autocomplete/AutocompleteUser';
import { TherapistTypeSelectOptions } from 'modules/TherapistTypeSelectOptions';

import { GenderSelectOptions } from '../GenderSelectOptions';
import { TherapistManageCreateMutation } from './__generated__/TherapistManageCreateMutation.graphql';
import { TherapistManageDeleteMutation } from './__generated__/TherapistManageDeleteMutation.graphql';
import { TherapistManageUpdateMutation } from './__generated__/TherapistManageUpdateMutation.graphql';
import { TherapistManage_query$key } from './__generated__/TherapistManage_query.graphql';
import {
  Gender,
  TherapistManage_therapist$key,
} from './__generated__/TherapistManage_therapist.graphql';

export interface TherapistManageProps {
  query: TherapistManage_query$key;
  therapist: TherapistManage_therapist$key | null;
}

export const TherapistManage: React.FC<TherapistManageProps> = (props) => {
  const { query: queryRef, therapist: therapistRef } = props;

  const navigate = useNavigate();
  const { confirmDelete } = useConfirm();

  const query = useFragment(
    graphql`
      fragment TherapistManage_query on Query {
        ...AutocompleteUser_query
        viewer @required(action: THROW) {
          canInsertTherapist
        }
      }
    `,
    queryRef,
  );

  const therapist = useFragment(
    graphql`
      fragment TherapistManage_therapist on Therapist {
        rowId
        enabled
        disabled # just to keep both states up-to-date
        type
        title
        fullName
        firstName
        lastName
        dateOfBirth
        telephone
        gender
        email
        user: userByUserRowId {
          ...AutocompleteUser_item @relay(mask: false)
        }

        canViewerUpdate
        canViewerDelete

        updatedAt
      }
    `,
    therapistRef,
  );

  const [createTherapist] = usePromiseMutation<TherapistManageCreateMutation>(graphql`
    mutation TherapistManageCreateMutation($input: CreateTherapistInput!) {
      createTherapist(input: $input) {
        therapist {
          rowId
        }
        therapistEdge {
          node {
            rowId
            ...TherapistManage_therapist
            ...TherapistsTable_therapist
          }
        }
      }
    }
  `);

  const [updateTherapist] = usePromiseMutation<TherapistManageUpdateMutation>(graphql`
    mutation TherapistManageUpdateMutation($input: UpdateTherapistInput!) {
      updateTherapist(input: $input) {
        therapist {
          rowId
          ...TherapistManage_therapist
          ...TherapistsTable_therapist
        }
      }
    }
  `);

  const [deleteTherapist] = usePromiseMutation<TherapistManageDeleteMutation>(graphql`
    mutation TherapistManageDeleteMutation($input: DeleteTherapistInput!) {
      deleteTherapist(input: $input) {
        therapist {
          id
        }
      }
    }
  `);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      enabled: therapist?.enabled ?? true,
      type: therapist?.type ?? ('PSYCHOTHERAPIST' as TherapistType),
      title: therapist?.title ?? null,
      firstName: therapist?.firstName ?? '',
      lastName: therapist?.lastName ?? '',
      gender: therapist?.gender ?? ('FEMALE' as Gender),
      dateOfBirth: therapist?.dateOfBirth ?? '',
      telephone: therapist?.telephone ?? null,
      email: therapist?.email ?? '',
      user: therapist?.user ?? null,
    },
  });

  useUnsavedChangesPrompt(Boolean(therapist) && isDirty);

  const canDelete = therapist?.canViewerDelete;
  const canSave = therapist ? therapist.canViewerUpdate : query.viewer.canInsertTherapist;

  return (
    <form
      className="content"
      onSubmit={handleSubmit((values) => {
        const { enabled, user, ...rest } = values;
        if (therapist) {
          return saveToast(
            (async () => {
              const data = await updateTherapist({
                variables: {
                  input: {
                    rowId: therapist.rowId,
                    disabled: !enabled,
                    userRowId: user?.rowId ?? null,
                    ...rest,
                  },
                },
              });
              if (!data.updateTherapist?.therapist) {
                throw new Error('Forbidden');
              }
              reset(values);
            })(),
          );
        }

        return createToast(
          (async () => {
            const data = await createTherapist({
              variables: {
                input: {
                  disabled: !enabled,
                  userRowId: user?.rowId ?? null,
                  ...rest,
                },
              },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createTherapist?.therapist) {
              throw new Error('Forbidden');
            }

            // reset, propagate and navigate
            reset(values);
            const therapist = data.createTherapist.therapist;
            setTimeout(
              () =>
                navigate({
                  to: '/therapists/' + therapist.rowId,
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
        {therapist ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="THERAPIST" />
            </small>
            <br />
            {therapist.fullName}
          </>
        ) : (
          <FormattedMessage id="NEW_THERAPIST" />
        )}
      </h2>

      <div className="form-row">
        <div className="col">
          <div className="custom-switch">
            <input {...register('enabled')} type="checkbox" id="enabled" disabled={!canSave} />
            <label htmlFor="enabled">
              <FormattedMessage id="VISIBLE" />
            </label>
          </div>
          <div className="form-text">
            <FormattedMessage id="IS_THERAPIST_VISIBLE_IN_HELTIN" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <Controller
            control={control}
            name="user"
            render={({ field: { ref, ...field } }) => (
              <AutocompleteUser {...field} query={query} readOnly={!canSave} />
            )}
          />
          <div className="form-text">
            <FormattedMessage id="THERAPIST_USER_FORM_TEXT" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="type" className="required">
            <FormattedMessage id="TYPE" />
          </label>
          <select
            {...register('type')}
            id="type"
            className="form-control"
            required
            disabled={!canSave}
          >
            <TherapistTypeSelectOptions hideEmptyOption />
          </select>
        </div>
      </div>

      <div className="form-row row-eq-spacing-md">
        <div className="col-md-2 col-lg-2">
          <label htmlFor="title">
            <FormattedMessage id="PROFESSIONAL_TITLE" />
          </label>
          <input
            {...register('title', { setValueAs: (v) => v || null })}
            type="text"
            className="form-control"
            id="title"
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

      <div className="form-row row-eq-spacing-sm">
        <div className="col-sm">
          <label htmlFor="telephone">
            <FormattedMessage id="TELEPHONE" />
          </label>
          <input
            {...register('telephone', { setValueAs: (v) => v || null })}
            type="text"
            className="form-control"
            id="telephone"
            readOnly={!canSave}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="email" className="required">
            E-Mail
          </label>
          <input
            {...register('email')}
            type="email"
            className="form-control"
            id="email"
            required
            readOnly={!canSave}
          />
        </div>
      </div>

      <div className="form-row align-items-center">
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
                    const data = await deleteTherapist({
                      variables: { input: { rowId: therapist!.rowId } },
                      updater: (store) => {
                        store.invalidateStore();
                      },
                    });
                    if (!data.deleteTherapist?.therapist) {
                      throw new Error('Forbidden');
                    }
                    navigate({
                      to: '/therapists',
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

      {therapist && (
        <div className="form-row">
          <div className="col text-right text-muted">
            <FormattedMessage
              id="LAST_CHANGE_AGO"
              tagName="small"
              values={{
                updatedAgo: (
                  <FormattedRelativeTime {...relativeTime(therapist.updatedAt)} style="long" />
                ),
              }}
            />
          </div>
        </div>
      )}
    </form>
  );
};
