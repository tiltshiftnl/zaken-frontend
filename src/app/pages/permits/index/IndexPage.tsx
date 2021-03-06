import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Link, Heading } from "@amsterdam/asc-ui"

import Row, { RowWithColumn } from "app/features/shared/components/atoms/Grid/Row"
import PageHeading from "app/features/shared/components/molecules/PageHeading/PageHeading"
import DefaultLayout from "app/features/shared/components/layouts/DefaultLayout/DefaultLayout"
import PermitDetailsList from "app/features/permits/components/PermitDetails/PermitDetailsList"
import DetailHeader from "app/features/shared/components/molecules/DetailHeader/DetailHeader"
import Column from "app/features/shared/components/atoms/Grid/Column"
import MockWrapper from "app/features/shared/components/molecules/MockWrapper/MockWrapper"

type Props = {
  bagId: Components.Schemas.Address["bag_id"]
}

const IndexPage: React.FC<RouteComponentProps<Props>> = ({ bagId }) => (
  <DefaultLayout>
    <DetailHeader bagId={ bagId! } />
    <RowWithColumn>
      <PageHeading />
    </RowWithColumn>
    <RowWithColumn>
      <Heading forwardedAs="h2">Vergunningen vakantieverhuur</Heading>
    </RowWithColumn>
    <Row>
      <Column spanLarge={50}>
        <MockWrapper>
          <PermitDetailsList bagId={ bagId! }></PermitDetailsList>
        </MockWrapper>
      </Column>
    </Row>
    <RowWithColumn>
      {/* TODO: make hardcoded link dynamic */}
      <Link href="https://decosdvl.amsterdam.nl/" variant="inline" icon="external" target="_blank" rel="noreferer">
          Alle vergunningen zie Decos Join
      </Link>
    </RowWithColumn>
  </DefaultLayout>
)

export default IndexPage
