import { getTags } from '../../../services/conduit';
import { store } from '../../../state/store';
import { useStoreWithInitializer } from '../../../state/storeHooks';

import { changeTab, loadTags, startLoadingTags } from './Home.slice';

export function Home() {
  const { tags, selectedTab } = useStoreWithInitializer(({ home }) => home, load);

  return (
    <div className='home-page'>
      {renderBanner()}
    </div>
  );
}

async function load() {
  store.dispatch(startLoadingTags());

  const tagsResult = await getTags();
  store.dispatch(loadTags(tagsResult.tags));
}

function renderBanner() {
  //const { selectedTab } = store.getState().home;
  const { tags, selectedTab } = useStoreWithInitializer(({ home }) => home, load);

  const listItems = tags.map(tag =>
    <li key={tag}>
      {tag}
    </li>
  );
  
  return (
    <div className='banner'>
      <div className='container'>
        <h1 className='logo-font'>{selectedTab}</h1>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}


