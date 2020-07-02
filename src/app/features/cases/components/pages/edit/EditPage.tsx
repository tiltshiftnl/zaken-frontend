import React from "react"
import { RouteComponentProps } from "@reach/router"
import { FormTitle, Heading } from "@datapunt/asc-ui"
import { TrashBin } from "@datapunt/asc-assets/lib"

import DefaultLayout from "app/features/shared/components/layouts/DefaultLayout/DefaultLayout"
import ActionButtonWrap from "app/features/shared/components/atoms/ActionButtonWrap/ActionButtonWrap"
import ConfirmButton from "app/features/shared/components/molecules/ConfirmButton/ConfirmButton"

import Form from "app/features/cases/components/organisms/Form/Form"

import { useEditPage } from "./hooks/useEditPage"

type Props = {
  uuid: API.Case["uuid"]
}

const EditPage: React.FC<RouteComponentProps<Props>> = ({ uuid }) => {
  const { handleDelete, initialValues, isLoading, handleUpdate } = useEditPage(uuid)

  return (
    <DefaultLayout>
      <Heading>Aanpassen zaak</Heading>
      <ActionButtonWrap>
        <ConfirmButton
          disabled={isLoading}
          onConfirm={handleDelete}
          iconLeft={<TrashBin />}
          variant="secondary"
          modalTitle="Weet je zeker dat je deze zaak wilt verwijderen?"
          modalContent="Let op! Deze actie kan niet ongedaan worden gemaakt."
        >
          Verwijder deze zaak
        </ConfirmButton>
      </ActionButtonWrap>
      <FormTitle>Gebruik dit formulier een zaak te wijzigen</FormTitle>
      <Form
        onSubmit={handleUpdate}
        isLoading={isLoading}
        initialValues={initialValues}
      />
    </DefaultLayout>
  )
}

export default EditPage
