import React from "react"
import styled from "styled-components"
import { Typography, breakpoint, themeSpacing } from "@amsterdam/asc-ui"

import { useBAG } from "app/state/rest"
import ShowOtherAddressesButton from "app/features/addresses/components/AddressSuffixSwitcher/ShowOtherAddressesButton"
import useOtherAddressesByBagId from "app/state/rest/custom/useOtherAddresses/useOtherAddresses"

type Props = {
  bagId: string
  headingSize?: "h1" | "h2"
  isHeader?: boolean
  enableSwitch?: boolean
}

const Div = styled.div<{ isHeader: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and ${ breakpoint("min-width", "laptop") } {
    justify-content: ${ props => props.isHeader ? "flex-start" : "flex-end" };
  }
`

const TypographyWrap = styled.div`
  span {
    margin-bottom: 0;
  }
`

const ButtonWrap = styled.div`
  margin-left: ${ themeSpacing(3) };
`

const AddressHeader: React.FC<Props> = ({ bagId, headingSize = "h2", isHeader = false, enableSwitch = true }) => {
  const { data } = useBAG(bagId)
  const { data: otherAddresses } = useOtherAddressesByBagId(bagId)

  const title = data ? `${ data.results[0].adres }, ${ data.results[0].postcode }` : undefined
  const showTitle = title !== undefined

  const showButton = enableSwitch && (otherAddresses?.results !== undefined && otherAddresses.results.length > 1)
  const isCurrentAddress = (address: { adres: string }) => address.adres.trim() === data?.results[0].adres.trim()
  const addressIndex = otherAddresses?.results.findIndex(isCurrentAddress)
  const index = addressIndex === 0 ? "first" : addressIndex === (otherAddresses?.results.length ! - 1) ? "last" : undefined

  // TODO: Show loading status visually
  return (
    <Div isHeader={ isHeader }>
      { showTitle &&
        <TypographyWrap>
          <Typography as={ isHeader ? headingSize : "span" } styleAs={ headingSize }>{ title }</Typography>
        </TypographyWrap>
      }
      { showButton &&
        <ButtonWrap>
          <ShowOtherAddressesButton bagId={bagId} index={index} />
        </ButtonWrap>
      }
    </Div>
  )
}
export default AddressHeader
