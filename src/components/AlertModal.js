import { React, useState } from 'react'
import { Button, Modal } from 'bootstrap'

export default function AlertModal() {

    // controls the modal display options
    const [modalDisplay, setModalDisplay] = useState(false);

    // function to hide the modal
    const hideModal = () => setModalDisplay(true);

    return (
        <div>
            <Modal show={modalDisplay} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
