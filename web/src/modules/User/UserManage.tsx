/**
 *
 * UserManage
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, FormattedRelativeTime } from 'react-intl';
import { graphql, useFragment } from 'react-relay';

import { useNavigate } from '@tanstack/react-location';

import { usePromiseMutation } from 'lib/relay';
import { createToast, deleteToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';

import { relativeTime } from 'intl/relativeTime';

import { UserManageCreateMutation } from './__generated__/UserManageCreateMutation.graphql';
import { UserManageDeleteMutation } from './__generated__/UserManageDeleteMutation.graphql';
import { UserManageUpdateMutation } from './__generated__/UserManageUpdateMutation.graphql';
import { UserManage_user$key } from './__generated__/UserManage_user.graphql';
import { UserManage_viewer$key } from './__generated__/UserManage_viewer.graphql';

export interface UserManageProps {
  viewer: UserManage_viewer$key;
  user: UserManage_user$key | null;
}

export const UserManage: React.FC<UserManageProps> = (props) => {
  const { viewer: viewerRef, user: userRef } = props;

  const navigate = useNavigate();
  const { confirmDelete } = useConfirm();

  const viewer = useFragment(
    graphql`
      fragment UserManage_viewer on User {
        canInsertUser
      }
    `,
    viewerRef,
  );

  const user = useFragment(
    graphql`
      fragment UserManage_user on User {
        rowId
        enabled
        email
        isAdmin

        canViewerUpdate
        canViewerDelete

        updatedAt
      }
    `,
    userRef,
  );

  const [createUser] = usePromiseMutation<UserManageCreateMutation>(graphql`
    mutation UserManageCreateMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          rowId
        }
        userEdge {
          node {
            rowId
            ...UserManage_user
            ...UsersTable_user
          }
        }
      }
    }
  `);

  const [updateUser] = usePromiseMutation<UserManageUpdateMutation>(graphql`
    mutation UserManageUpdateMutation($input: UpdateUserInput!) {
      updateUser(input: $input) {
        user {
          rowId
          ...UserManage_user
          ...UsersTable_user
        }
      }
    }
  `);

  const [deleteUser] = usePromiseMutation<UserManageDeleteMutation>(graphql`
    mutation UserManageDeleteMutation($input: DeleteUserInput!) {
      deleteUser(input: $input) {
        user {
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
      enabled: user?.enabled ?? true,
      email: user?.email ?? '',
      admin: user?.isAdmin ?? false,
      password: '', // must be always empty
    },
  });

  useUnsavedChangesPrompt(Boolean(user) && isDirty);

  const canDelete = user?.canViewerDelete;
  const canSave = user ? user.canViewerUpdate : viewer.canInsertUser;

  return (
    <form
      className="content"
      onSubmit={handleSubmit((values) => {
        if (user) {
          return saveToast(
            (async () => {
              const data = await updateUser({
                variables: {
                  input: {
                    rowId: user.rowId,
                    email: values.email,
                    admin: values.admin,
                    enabled: values.enabled,
                    password: values.password || null,
                  },
                },
              });
              if (!data.updateUser?.user) {
                throw new Error('Forbidden');
              }
              reset(values);
            })(),
          );
        }

        return createToast(
          (async () => {
            const data = await createUser({
              variables: {
                input: {
                  email: values.email,
                  admin: values.admin,
                  enabled: values.enabled,
                  password: values.password,
                },
              },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createUser?.user) {
              throw new Error('Forbidden');
            }
            navigate({
              to: '/users/' + data.createUser.user.rowId,
              search: true,
              replace: true,
            });
          })(),
        );
      })}
    >
      <h2 className="content-title">
        {user ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="USER" />
            </small>
            <br />
            {user.email}
          </>
        ) : (
          <FormattedMessage id="NEW_USER" />
        )}
      </h2>

      <div className="form-row">
        <div className="col">
          <div className="custom-switch">
            <input {...register('enabled')} type="checkbox" id="enabled" disabled={!canSave} />
            <label htmlFor="enabled">
              <FormattedMessage id="ENABLED" />
            </label>
          </div>
          <div className="form-text">
            <FormattedMessage id="CAN_USER_ACCESS_HELTIN" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <div className="custom-switch">
            <input {...register('admin')} type="checkbox" id="admin" disabled={!canSave} />
            <label htmlFor="admin">
              <FormattedMessage id="ADMINISTRATOR" />
            </label>
          </div>
        </div>
      </div>

      <div className="form-row row-eq-spacing-sm">
        <label htmlFor="email" className="required">
          <FormattedMessage id="EMAIL" />
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

      <div className="form-row row-eq-spacing-sm">
        <label htmlFor="password" className={user ? undefined : 'required'}>
          <FormattedMessage id={user ? 'NEW_PASSWORD' : 'PASSWORD'} />
        </label>
        <input
          {...register('password', { setValueAs: (v) => v || null })}
          type="password"
          className="form-control"
          id="password"
          required={user ? false : true}
          readOnly={!canSave}
        />
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
                return deleteToast(
                  (async () => {
                    const data = await deleteUser({
                      variables: { input: { rowId: user!.rowId } },
                      updater: (store) => {
                        store.invalidateStore();
                      },
                    });
                    if (!data.deleteUser?.user) {
                      throw new Error('Forbidden');
                    }
                    navigate({
                      to: '/users',
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

      {user && (
        <div className="form-row">
          <div className="col text-right text-muted">
            <FormattedMessage
              id="LAST_CHANGE_AGO"
              tagName="small"
              values={{
                updatedAgo: (
                  <FormattedRelativeTime {...relativeTime(user.updatedAt)} style="long" />
                ),
              }}
            />
          </div>
        </div>
      )}
    </form>
  );
};
