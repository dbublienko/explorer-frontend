// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS, SMESHER } from '../../../config/constants';
import {byteConverter} from '../../../helper/converter';

type Props = {
  data: Array<Object>,
  viewStore: Object,
};

const SmesherRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`${SMESHER}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`${ACCOUNTS}/${data.coinbase}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.coinbase)}>
            {shortFormHash(data.coinbase)}
          </a>
        </div>
        <div className="td">
          {byteConverter(item.cSize)}
        </div>
        <div className="td">
          {item.totalAtxTxns}
          SMH
        </div>
      </div>
    ))
  );
};

export default observer(SmesherRow);
