import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const imgUrl="https://drive.google.com/uc?export=view&id="
const  ModalComponent = ({show, setShow, files}) => {
    console.log(files);
    return (
      <>
        <Modal dialogClassName="custom-dialog-style" show={show} onHide={() => setShow({...show, show:false})}>
          <Modal.Header closeButton>
            <Modal.Title>My Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <div className="d-flex flex-wrap justify-content-center" >
                  {
                      files.map((e) => {
                          return(
                              <div style={{height: "130px", margin: 4, width: "200px", border: "1px solid #eee",padding:"10px"}}>
                                  {e.mimeType === "image/jpeg" ?  <img src={`${imgUrl}${e.id}`} className="w-100 h-100"/>  : null}
                               
                              </div>
                          )
                      })
                  }

              </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onHide={() => setShow({...show, show:false})}>
              Close
            </Button>
            <Button variant="primary" onHide={() => setShow({...show, show:false})}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default ModalComponent
