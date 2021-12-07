import React from "react";
import { Modal, Button } from "react-bootstrap";

const imgUrl = "https://drive.google.com/uc?export=view&id=";
const pdfUrl = "https://drive.google.com/uc?export=view&id=";
const ModalComponent = ({ show, setShow, files, allfiles }) => {
  console.log(files,"files")
  return (
    <>
      <Modal
        dialogClassName="custom-dialog-style"
        show={show.show}
        onHide={() => setShow({ ...show, show: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Drive Files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap justify-content-center">
            {files.map((e, index) => {
              return (
                <div className="MainFileContent" key={index}>
                  {e.mimeType === "image/jpeg" ? (
                    <img
                      src={`${imgUrl}${e.id}`}
                      alt="DriveImages"
                      className="w-100 h-100"
                    />
                  ) : e.mimeType === "application/pdf" ? (
                    <iframe
                      title={e.name}
                      src={`${pdfUrl}${e.id}`}
                      height="150"
                      width="600"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShow({ ...show, show: false })}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setShow({ ...show, show: false })}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
