import React from 'react';
import { render, screen } from '@testing-library/react';
import { Thead, Tbody, Tr, Th, Table } from './index';

describe('Table', () => {
  it('should render', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>name</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>brian</Th>
          </Tr>
        </Tbody>
      </Table>,
    );
    expect(screen.getByText('name')).toBeInTheDocument();
  });
});
