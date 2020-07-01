import React from "react"
import { ScaffoldAvailableFields, ScaffoldField as AmsterdamScaffoldField } from "amsterdam-react-final-form"

import CaseTypeField, { CaseTypeFieldProps } from "./CaseTypeField/CaseTypeField"
import CaseStatusField, { CaseStatusFieldProps } from "./CaseStatusField/CaseStatusField"

export type Field =
// NOTE: add your own custom types here:
  | { type: "CaseTypeField", props: CaseTypeFieldProps }
  | { type: "CaseStatusField", props: CaseStatusFieldProps }
  | ScaffoldAvailableFields

type ScaffoldFieldProps = {
  field: Field
}

const ScaffoldField: React.FC<ScaffoldFieldProps> = ({ field }) => {
  switch (field.type) {
    case "CaseTypeField":
      return <CaseTypeField {...field.props} />
    case "CaseStatusField":
      return <CaseStatusField {...field.props} />
    default:
      return <AmsterdamScaffoldField field={field} />
  }
}

export default ScaffoldField
