import { Logout } from "@datapunt/asc-assets"
import { MenuButton } from "@datapunt/asc-ui"

import useKeycloak from "app/state/auth/keycloak/useKeycloak"

import React from "react"

const UserInfo: React.FC = () => {
   const { keycloak } = useKeycloak()
   const onClick = () => keycloak.logout()

   return (
      <MenuButton
         as="a"
         tabIndex={0}
         onClick={ onClick }
         iconLeft={<Logout/>}
         title="Uitloggen"
         iconSize={24}
      >Uitloggen</MenuButton>
   )
}

export default UserInfo
