import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";

import "./ProjectModal.css";
import ProjectInfoTabs from "../ProjectInfoTabs/ProjectInfoTabs";

const ProjectModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="HandCursor" onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        className="d-flex align-content-center ProjectBoxModel"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={open}>
          <div className="container align-self-center justify-content-center ProjectBoxContainer p-0">
            <div className="p-3">
              <h4 className="Center">{props.name}</h4>
              <ProjectInfoTabs
                {...props}
              />
            </div>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
};

export default ProjectModal;
