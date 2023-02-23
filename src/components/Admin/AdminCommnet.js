import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AdminComment() {
    const [data, setData] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    return (
        <div>
            
            <div>{data}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <input type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>)
}
export default AdminComment