import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  return (
    modalRoot &&
    ReactDOM.createPortal(
      <>
        ' \' \' \' \' '<div className="c-dimmer" />' '
        <div className="c-modal">{children}</div>' '
      </>,
      modalRoot
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
