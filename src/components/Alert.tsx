import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertTypeClass = {
    success: 'alert-success',
    error: 'alert-danger',
    info: 'alert-info',
    warning: 'alert-warning'
  }[type];

  return (
    <div className={`alert ${alertTypeClass} alert-dismissible fade show`} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
