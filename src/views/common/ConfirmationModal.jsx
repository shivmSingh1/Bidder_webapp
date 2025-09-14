import React from 'react'
import { Button } from 'react-bootstrap'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function ConfirmationModal({ isOpen, toggle, headertext, bodyMessage, cancleBtnText, acceptBtnText, handleAccept }) {
	return (
		<div>
			<Modal toggle={toggle} isOpen={isOpen} centered >
				<ModalHeader toggle={toggle}>{headertext}</ModalHeader>
				<ModalBody> {bodyMessage} </ModalBody>
				<ModalFooter>
					<div className='d-flex gap-4' >
						<Button onClick={() => handleAccept()} >{acceptBtnText}</Button>
						<Button onClick={() => toggle()} >{cancleBtnText}</Button>
					</div>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default ConfirmationModal