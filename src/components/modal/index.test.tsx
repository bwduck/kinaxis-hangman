import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';

const globalAny: any = global;

describe('Modal component', () => {
  const Child = () => <div>Yolo</div>;
  let component;

  // add a div with #modal-root id to the global body
  const modalRoot = globalAny.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = globalAny.document.querySelector('body');
  body && body.appendChild(modalRoot);

  it('should render all the styled components and the children', () => {
    const wrapper = mount(
      <Modal>
        <Child />
      </Modal>
    );
    expect(wrapper.find('div.c-dimmer').exists()).toBeTruthy();
    expect(wrapper.find(Modal).contains(Child)).toBeTruthy();
  });
});
