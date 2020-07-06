// @flow
import * as React from 'react';

import { observer } from 'mobx-react';

import SidebarMenu from '../../components/common/SidebarMenu';
import CornerBoxWrapper from '../../components/common/CornerBoxWrapper';
import RenderMainPage from "../RenderPage/RenderMainPage";
import RenderDetailPage from "../RenderPage/RenderDetailPage";
import RenderSubPage from "../RenderPage/RenderSubPage";
import {OVERVIEW, TXNS} from "../../config/constants";

type Props = {
  viewStore: Object,
  uiStore: Object,
};

const PageContainer = (props: Props) => {
  const { viewStore, uiStore } = props;

  const renderCurrentPage = () => {
    const { name, id, subPage } = viewStore.currentView;

    const isMainPage = name && !id && !subPage;
    const isDetailsPage = name && id && !subPage;
    const isSubPage = name && id && subPage;

    if (isMainPage) {
      return (
        <RenderMainPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
        />
      )
    }

    if (isDetailsPage) {
      return (
        <RenderDetailPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
        />
      )
    }

    if (isSubPage) {
      return (
        <RenderSubPage
          viewStore={viewStore}
          uiStore={uiStore}
          name={name}
          id={id}
          subPage={subPage}
        />
      )
    }
  };

  return (
    <div className="container">
      <div className="grid">
        <aside className="sidebar">
          <SidebarMenu viewStore={viewStore}/>
        </aside>
        <section className="main">
          <CornerBoxWrapper>
            <div className="page">
              { renderCurrentPage() }
            </div>
          </CornerBoxWrapper>
          {viewStore.currentView.name === OVERVIEW && (
            <div className="browseAll-link">
              <a href={`/${TXNS}`} onClick={() => viewStore.showPage({page: TXNS})}>browse all</a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default observer(PageContainer);
