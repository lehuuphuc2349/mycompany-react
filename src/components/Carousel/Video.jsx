import React from "react";
import { Modal } from "react-bootstrap";
import "./Video.css";
function Video() {
  return (
    <Modal
      class="modal fade"
      id="videoModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Modal.Dialog role="document">
        <div class="modal-content">
          <Modal.Body>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src=""
                id="video"
                allowscriptaccess="always"
                allow="autoplay"
              ></iframe>
            </div>
          </Modal.Body>
        </div>
      </Modal.Dialog>
    </Modal>
  );
}

export default Video;
