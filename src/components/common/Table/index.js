// @flow
import * as React from 'react';
import TransactionsRow from './TransactionsRow';

import { nanoid } from 'nanoid';
import EpochsRow from './EpochsRow';

import tableFieldConfig from './config/tableFieldConfig';

type Props = {
  viewStore: Object,
};

const transactionTableData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 32,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh'
  },
];

const epochTableData = [
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH'
  },
];

const Table = (props: Props) => {
  const { viewStore } = props;
  const { name } = viewStore.currentView;

  const renderTableData = () => {
    switch(name) {
      case 'overview':
        return (
          <TransactionsRow key={nanoid()} data={transactionTableData} config={tableFieldConfig[name]} viewStore={viewStore}/>
        );
      case 'epochs':
        return (
          <EpochsRow key={nanoid()} data={epochTableData} config={tableFieldConfig[name]} viewStore={viewStore}/>
        );
      case 'txns':
        return (
          <TransactionsRow key={nanoid()} data={transactionTableData} config={tableFieldConfig[name]} viewStore={viewStore}/>
        );
    }
  };

  return (
    <div className="table">
      <div className="tr th">
        { tableFieldConfig[name].map(item => <div key={nanoid()} className="td">{item.fieldName}</div>) }
      </div>
      { renderTableData() }
    </div>

  );
};

export default Table;
