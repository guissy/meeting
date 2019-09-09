import React, { Suspense, useEffect, useState, lazy } from 'react';
import './App.css';

interface StoreEntity {
  hash: string;
  toForm?: () => void;
}

const Store = React.createContext(null as unknown as StoreEntity);
const Home = lazy(() => import('./Home'));
const Form = lazy(() => import('./Form'));
const Result = lazy(() => import('./Result'));

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    if (hash === '#form') {
      window.history.pushState({ path: '#form' }, 'TSTS2019第12届腾讯安全技术峰会', '#form');
    } else {
      window.history.replaceState({ path: '#' }, 'TSTS2019第12届腾讯安全技术峰会', '#');
    }
    const cb = (e: any) => {
      setHash(e.state && e.state.path);
    };
    window.addEventListener('popstate', cb);
    return () => {
      window.removeEventListener('popstate', cb);
    }
  }, [hash]);
  return (
    <Store.Provider value={{ hash }}>
      <div className="main">
        {(hash === '#'|| hash === '') &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Home setHash={setHash}/>
        </Suspense>}
        {hash === '#form' &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Form setHash={setHash}/>
        </Suspense>}
        {(hash === '#success' || hash === '#fail' || hash === '#repeat') &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Result setHash={setHash} hash={hash} />
        </Suspense>}
      </div>
    </Store.Provider>
  );
};

export default App;