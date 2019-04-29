import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = ({ children }: { children: Element | ReactElement }) => {
  const modalRoot = document.getElementById('modal-root');
  return (
    modalRoot &&
    ReactDOM.createPortal(
      <div>
        <div className="c-dimmer" />
        <div className="c-modal">{children}</div>
      </div>,
      modalRoot
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
