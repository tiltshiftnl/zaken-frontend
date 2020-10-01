import React from "react"
import styled from "styled-components"
import { breakpoint } from "@datapunt/asc-ui"
import Row from "app/features/shared/components/atoms/Grid/Row"
import Column from "app/features/shared/components/atoms/Grid/Column"
import BreadCrumbs from "app/features/addresses/components/molecules/BreadCrumbs/BreadCrumbs"
import AddressDisplay from "app/features/addresses/components/atoms/AddressDisplay/AddressDisplay"
type Props = {
  bagId: string
}

const ColumnAlignRight = styled(Column)`
@media screen and ${ breakpoint("min-width", "laptop") } {
  text-align: right;
}`


const DetailHeader: React.FC<Props> = ({ bagId }) => (    
  <Row>
    <Column spanLarge={50}>
      <BreadCrumbs bagId={ bagId! } />
    </Column>
    <ColumnAlignRight spanLarge={50}>
      <AddressDisplay bagId={ bagId! } />
    </ColumnAlignRight>
  </Row>
)

export default DetailHeader