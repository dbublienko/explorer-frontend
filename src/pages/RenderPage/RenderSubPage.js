// @flow
import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import TitleBlock from '../../components/common/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { AmountBlock } from '../../components/common/CountBlock';
import Table from '../../components/common/Table';
import DetailAtxs from '../../components/common/Details/DetailAtxs';
import DetailReward from '../../components/common/Details/DetailReward';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS, ACCOUNTS,
} from '../../config/constants';
import longFormHash from '../../helper/longFormHash';
import {smhCoinConverter} from '../../helper/converter';
import RightCountBlock from '../../components/common/CountBlock/RightCountBlock';

type Props = {
  name: string,
  id: string,
  subPage: string,
  uiStore: Object,
  viewStore: Object,
};

const RenderSubPage = (props: Props) => {
  const { name, id, subPage, uiStore, viewStore } = props;
  const data = toJS(viewStore.currentView.data);

  const { epoch, layer, network } = toJS(viewStore.mainInfo);

  switch (name) {
    case EPOCHS:
      if (subPage === LAYERS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Layers`}
                color={getColorByPageName(name)}
                desc={`Layers contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && (epoch.layers)} startTime={epoch && epoch.start} unit="layers" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${longFormHash(id)} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} unit="txns" startTime={network && network.genesis} color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === SMESHER) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Participating Smashers`}
                color={getColorByPageName(name)}
                desc="Smeshers submitting at least one honest block"
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.smeshers} startTime={network && network.genesis} unit="smeshers in the epoch" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns since genesis" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Epoch ${longFormHash(id)} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards contained within Epoch ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.rewards} startTime={network && network.genesis} unit="awards" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case LAYERS:
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions within Layer ${id}`}
                uiStore={uiStore}
              />
              <RightCountBlock
                color={getColorByPageName(name)}
                number={layer && layer.txs}
                caption="txns"
                coinCaption="total txns value"
                coins={layer && smhCoinConverter(layer.txsamount)}
              />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions within layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === BLOCKS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - blocks`}
                color={getColorByPageName(name)}
                desc={`Blocks within layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={layer && layer.block} startTime={layer && layer.start} unit="layer blocks" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === SMESHER) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layers ${id} - Participating Smashers`}
                color={getColorByPageName(name)}
                desc="Smeshers in this layer who submit at least one honest block"
                uiStore={uiStore}
              />
              <AmountBlock number={layer && layer.smeshers} startTime={layer && layer.start} unit="smeshers" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Layer ${id} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards within Layer ${id}`}
                uiStore={uiStore}
              />
              <AmountBlock number={layer && (layer.number)} startTime={layer && layer.start} unit="layers" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case SMESHER:
      if (subPage === ATXS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Smesher ${longFormHash(id)} - ATX Details`}
                color={getColorByPageName(name)}
                desc="Smesher details for this ATX"
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`Smesher ${longFormHash(id)} - Details`}
                color={getColorByPageName(name)}
                desc="Smesher details for this reward"
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    case ACCOUNTS:
      if (subPage === TXNS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`ACCOUNT ${longFormHash(id)} - Transactions`}
                color={getColorByPageName(name)}
                desc={`Transactions contained within account ${longFormHash('0x0klsda7as8asbadskjhkjdjyuye32423423')}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      if (subPage === REWARDS) {
        return (
          <>
            <div className="page-wrap">
              <TitleBlock
                title={`ACCOUNT ${longFormHash(id)} - Rewards`}
                color={getColorByPageName(name)}
                desc={`Rewards contained within account ${longFormHash(id)}`}
                uiStore={uiStore}
              />
              <AmountBlock number={epoch && epoch.stats.cumulative.transactions} startTime={network && network.genesis} unit="txns" color={getColorByPageName(name)} />
            </div>
            <Table name={subPage} viewStore={viewStore} />
          </>
        );
      }
      break;
    default:
      break;
  }
};

export default observer(RenderSubPage);
