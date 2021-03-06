import React from "react"

import Modal, { ModalBlock } from "app/features/shared/components/molecules/Modal/Modal"
import OtherAddressesTable from "./OtherAddressesTable"

export type Props = {
  bagId: string
  isOpen: boolean
  closeModal: () => void
}

const OtherAddressesModal: React.FC<Props> = ({ isOpen, closeModal, bagId }) => (
  <Modal isOpen={isOpen} onClose={closeModal} title="Andere adressen">
    <ModalBlock>
      <OtherAddressesTable bagId={bagId} onAddressChosen={closeModal}  />
    </ModalBlock>
  </Modal>
)

export default OtherAddressesModal
