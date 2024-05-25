import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import WarningIcon from "@mui/icons-material/Warning";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "8px",
};

const ErrorModal = ({ isErrorModalOpen = true, ErrorModalMessage = "" }) => {
  const [open, setOpen] = useState(isErrorModalOpen);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(isErrorModalOpen);
  }, [isErrorModalOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-4 items-center relative p-4">
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
            <div>
              <WarningIcon style={{ fontSize: "50px", color: "red" }} />
            </div>
            <div className="-mt-2">
              {ErrorModalMessage || "Something went wrong, Please try again"}
            </div>
            <div>
              <button
                className="text-white cursor-pointer text-xs rounded-ful border-none"
                style={{
                  background: "#204289",
                  width: "6.5rem",
                  height: "2rem",
                  borderRadius: "0.75rem",
                }}
                onClick={handleClose}
              >
                Retry
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ErrorModal;
