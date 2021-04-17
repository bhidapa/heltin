/**
 *
 * ClientAssignedProfessionalsManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { ClientAssignedProfessionalsManage_client$key } from 'relay/artifacts/ClientAssignedProfessionalsManage_client.graphql';
import { ClientAssignedProfessionalsManageCreateMutation } from 'relay/artifacts/ClientAssignedProfessionalsManageCreateMutation.graphql';
import { ClientAssignedProfessionalsManageDeleteMutation } from 'relay/artifacts/ClientAssignedProfessionalsManageDeleteMutation.graphql';

// ui
import { Flex, Button, Text } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';
import { TrashIcon } from 'lib/icons';

// form
import { Form, Controller } from 'lib/form';
import {
  AutocompleteProfessional,
  AutocompleteProfessionalItem,
} from 'modules/Autocomplete/AutocompleteProfessional';

// decorate
import { decorate, Decorate } from './decorate';
import { usePromiseMutation } from 'relay/hooks';

export interface ClientAssignedProfessionalsManageProps {
  client: ClientAssignedProfessionalsManage_client$key;
}

const ClientAssignedProfessionalsManage: React.FC<
  ClientAssignedProfessionalsManageProps & Decorate
> = (props) => {
  const { classes, client: clientKey } = props;
  const client = useFragment(
    graphql`
      fragment ClientAssignedProfessionalsManage_client on Client {
        rowId
        latestAssignedTherapist: latestAssignedMentalHealthProfessional {
          therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
            fullName
          }
        }
        assignedTherapists: clientAssignedMentalHealthProfessionalsByClientRowId(
          orderBy: [CREATED_AT_ASC]
        ) {
          nodes {
            id
            rowId
            therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
              rowId
              type
              fullName
            }
            createdAt
          }
        }
      }
    `,
    clientKey,
  );

  const assignTherapist = usePromiseMutation<ClientAssignedProfessionalsManageCreateMutation>(
    graphql`
      mutation ClientAssignedProfessionalsManageCreateMutation(
        $input: CreateClientAssignedMentalHealthProfessionalInput!
      ) {
        createClientAssignedMentalHealthProfessional(input: $input) {
          clientByClientRowId {
            ...ClientAssignedProfessionalsManage_client
          }
        }
      }
    `,
  );

  const deleteAssignedTherapist = usePromiseMutation<ClientAssignedProfessionalsManageDeleteMutation>(
    graphql`
      mutation ClientAssignedProfessionalsManageDeleteMutation(
        $input: DeleteClientAssignedMentalHealthProfessionalInput!
      ) {
        deleteClientAssignedMentalHealthProfessional(input: $input) {
          clientByClientRowId {
            ...ClientAssignedProfessionalsManage_client
          }
        }
      }
    `,
  );

  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="medium" weight="medium">
          <FormattedMessage id="ASSIGNED_THERAPISTS" />
        </Text>
        <Text color="gray40">
          <FormattedMessage id="ASSIGNED_THERAPISTS_DESCRIPTION" />
        </Text>
      </Flex>
      <Flex item>
        {client.assignedTherapists.nodes.length > 0 ? (
          client.assignedTherapists.nodes.map(({ rowId, therapist }) => (
            <ResolveOnTrigger
              key={rowId}
              params={{ variables: { input: { rowId } } }}
              promise={deleteAssignedTherapist}
            >
              {({
                trigger: triggerDelete,
                error: deleteError,
                clearError: clearDeleteError,
                loading: deleting,
              }) => (
                <div className={classes.therapist}>
                  {deleteError ? (
                    <DismissableAlert message={deleteError} onDismiss={clearDeleteError} />
                  ) : (
                    <Flex container spacing="tiny" align="center">
                      <Flex item flex={1} style={{ display: 'flex' }}>
                        <Button
                          variant="link"
                          component={makeLink({
                            to: `${PROFESSIONALS_PAGE_ROUTE}/${therapist.rowId}`,
                          })}
                        >
                          <FormattedMessage id={therapist.type} />
                          &nbsp;
                          {therapist.fullName}
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          style={{ display: 'flex' }}
                          color="danger"
                          variant="text"
                          onClick={triggerDelete}
                          disabled={deleting}
                        >
                          <TrashIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </div>
              )}
            </ResolveOnTrigger>
          ))
        ) : (
          <Text color="warning">
            <FormattedMessage id="NO_ENTRIES" />
          </Text>
        )}
      </Flex>
      <Flex item>
        <Form
          resetOnSuccessfulSubmit
          defaultValues={{
            therapist: null as AutocompleteProfessionalItem | null,
          }}
          onSubmit={async ({ therapist }) => {
            await assignTherapist({
              variables: {
                input: {
                  clientRowId: client.rowId,
                  mentalHealthProfessionalRowId: therapist!.rowId,
                },
              },
            });
          }}
        >
          <Flex container spacing="tiny" align="center">
            <Flex item flex={1}>
              <FormattedMessage id="ASSIGN_THERAPIST">
                {(msg: string) => (
                  <Controller
                    name="therapist"
                    render={({ field: { value, onChange } }) => (
                      <AutocompleteProfessional
                        selectedItem={value}
                        onChange={onChange}
                        required
                        label={undefined}
                        placeholder={msg}
                      />
                    )}
                  />
                )}
              </FormattedMessage>
            </Flex>
            <Flex item>
              <Button variant="primary" size="tiny" type="submit">
                <FormattedMessage id="ADD" />
              </Button>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedClientAssignedProfessionalsManage = decorate(ClientAssignedProfessionalsManage);
export { ComposedClientAssignedProfessionalsManage as ClientAssignedProfessionalsManage };
