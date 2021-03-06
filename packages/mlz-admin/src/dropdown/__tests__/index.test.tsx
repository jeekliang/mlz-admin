import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../../../tests';
import Dropdown from '..';
import Menu from '../../menu';

const TempDropdownMounter = () => (
  <Dropdown
    overlay={
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    }>
    <a className="ant-dropdown-link">Hover me</a>
  </Dropdown>
);

describe('🧪 Dropdown', () => {
  testMount(TempDropdownMounter);
  testSnapshot(TempDropdownMounter);
});
