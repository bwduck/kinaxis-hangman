import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <>
      <div className="c-dimmer" />
      <div className="c-modal">{children}</div>
    </>,
    document.getElementById('modal-root')
  );

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
