import React from "react"
import { RouteComponentProps } from "@reach/router"
import { FormTitle, Heading } from "@datapunt/asc-ui"
import { TrashBin } from "@datapunt/asc-assets/lib"

import DefaultLayout from "app/features/shared/components/layouts/DefaultLayout/DefaultLayout"
import ActionButtonWrap from "app/features/shared/components/atoms/ActionButtonWrap/ActionButtonWrap"
import ConfirmButton from "app/features/shared/components/molecules/ConfirmButton/ConfirmButton"

import Form from "app/features/cases/components/organisms/Form/Form"
import BagMap from "app/features/cases/components/organisms/BagMap/BagMap"

import { useEditPage } from "./hooks/useEditPage"

type Props = {
  id: API.Case["identification"]
}

const EditPage: React.FC<RouteComponentProps<Props>> = ({ id }) => {
  const { handleDelete, initialValues, isLoading, handleUpdate } = useEditPage(id)

  return (
    <DefaultLayout>
      <Heading>Aanpassen zaak</Heading>
      <ActionButtonWrap>
        <ConfirmButton
          data-e2e-id="delete"
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
      { !isLoading && (<BagMap bagId={initialValues.address.bag_id} />) }
    </DefaultLayout>
  )
}

export default EditPage
