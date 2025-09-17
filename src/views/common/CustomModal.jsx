import React from 'react'
import { ModalTitle } from 'react-bootstrap'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function CustomModal({isOpen,toggle,title="",children,size="md",btnName,btnSubmit}) {
  return (
    <>
          <Modal isOpen={isOpen} toggle={toggle} centered size={size} >
              <ModalHeader toggle={toggle} >
                  <ModalTitle>{title}</ModalTitle>
              </ModalHeader>
              <ModalBody>
                  {children}
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>btnSubmit()} >{btnName}</Button>
              </ModalFooter>
          </Modal>
    </>
  )
}

export default CustomModal