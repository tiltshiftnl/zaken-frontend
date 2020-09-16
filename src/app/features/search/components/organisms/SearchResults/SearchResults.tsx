import React, { useMemo } from "react"
import { useBAG } from "app/state/rest"
import Table from "app/features/shared/components/molecules/Table/Table"
import OpenButton from "app/features/shared/components/atoms/OpenButton/OpenButton"
import to from "app/features/shared/routing/to"
import { BAGAddressResponse } from "app/state/rest/types/BAGAddressResponse"

type Props = {
  searchString: string
}

const columns = [
  { header:"Adres", minWidth: 300 },
  { header:"Postcode", minWidth: 210 },
  { minWidth: 210 }
]

// type SearchResult = Pick<BAGAddress, "adres" | "postcode" | "subtype_id">
type SearchResult = Pick<BAGAddressResponse["results"][0], "adres" | "postcode" | "subtype_id">
const mapData = (data: SearchResult) => [
  data.adres ?? "-",
  data.postcode ?? "-",
  data.subtype_id ? <OpenButton href={to("/adres/:id", { id: data.subtype_id })} text="Open" /> : null
]

const SearchResults: React.FC<Props> = ({ searchString }) => {
  const { data, isBusy } = useBAG(searchString)
  const mappedData = useMemo(() => data?.results?.map(mapData), [ data ])

  return (<Table
    columns={columns}
    data={mappedData}
    loading={data === undefined || isBusy}
    numLoadingRows={10}
    hasFixedColumn={true}
    noValuesPlaceholder={"Er zijn (nog) geen addressen gevonden"}
  />)
}
export default SearchResults
