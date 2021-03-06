import React from "react"
import styled from "styled-components"
import { breakpoint, Button } from "@amsterdam/asc-ui"
import { displayDate, displayTime } from "app/features/shared/components/atoms/DateDisplay/DateDisplay"
import ButtonLink from "app/features/shared/components/atoms/ButtonLink/ButtonLink"
import { Edit } from "app/features/shared/components/atoms/Icons"

type Props = {
  target: string
  disabled?: boolean
  editable_until: string
}

const ButtonWrap = styled.div`
  @media ${ breakpoint("min-width", "laptop") } {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`
const StyledButton = styled(Button)`
  background-color: transparent;

  &:disabled {
    background-color: transparent;
  }
`

const ButtonEditEvent: React.FC<Props> = ({ target, disabled = false, editable_until }) => {
    const editableUntilText = `Wijzigen mogelijk tot ${ displayDate(editable_until) } ${ displayTime(editable_until) } uur`
  
    return (
      <ButtonWrap>
        { 
        !disabled ?
          <ButtonLink to={ target } >
            <StyledButton size={60} variant="blank" iconSize={36} icon={<Edit /> } disabled={disabled} title={editableUntilText} />
          </ButtonLink>
          :
          <StyledButton size={60} variant="blank" iconSize={36} icon={<Edit /> } disabled={disabled} title={editableUntilText} />
        }
      </ButtonWrap>
    )
  }

  export default ButtonEditEvent