import React, { Component } from 'react';
import testMount from '../../../tests/testMount';
import testSnapshot from '../../../tests/testSnapshot';
import Avatar from '..';

describe('🧪 Avatar', () => {
  testMount(Avatar);
  testSnapshot(Avatar);
});
