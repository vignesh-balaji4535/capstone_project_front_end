import React from 'react';

const SuccessPopUp = ({ message, onClose }) => {
  return (
    <div className="alert alert-success alert-dismissible fade show postion-sticky" role="alert">
      <strong style={{fontFamily:"Protest Revolution,sans-serif"}}>{message}</strong>
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default SuccessPopUp;
