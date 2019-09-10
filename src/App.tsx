import React, { Suspense, useEffect, useState, lazy, useCallback } from 'react';
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
  const [height, setHeight] = useState(window.innerHeight);
  const resize = useCallback(() => {
    setHeight(Math.max(height, window.innerHeight));
  }, [height]);
  const resizeForce = useCallback(() => {
    setHeight(window.innerHeight);
  }, [height]);
  useEffect(() => {
    if (hash !== window.location.hash) {
      if (hash === '#' || hash === '') {
        window.history.replaceState({ path: '#' }, 'TSTS2019第12届腾讯安全技术峰会', '#');
      } else {
        window.history.pushState({ path: hash }, 'TSTS2019第12届腾讯安全技术峰会', hash);
      }
    }
    const cb = (e: any) => {
      setHash(e.state && e.state.path);
    };
    window.addEventListener('popstate', cb);
    window.addEventListener('resize', resize);
    window.addEventListener('onorientationchange', resizeForce);
    if (window.screen && window.screen.orientation) {
      window.screen.orientation.lock("natural");
    }
    if (hash == null) {
      setHash(window.location.hash);
    }
    return () => {
      window.removeEventListener('popstate', cb);
      window.removeEventListener('resize', resize);
      window.removeEventListener('onorientationchange', resizeForce);
    }
  }, [hash, resize, resizeForce]);
  return (
    <Store.Provider value={{ hash }}>
      <div className="main">
        {(hash === '#'|| hash === '') &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Home setHash={setHash} />
        </Suspense>}
        {hash === '#form' &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Form setHash={setHash} height={height}/>
        </Suspense>}
        {(hash === '#success' || hash === '#fail' || hash === '#repeat') &&
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Result setHash={setHash} hash={hash} height={height}/>
        </Suspense>}
      </div>
    </Store.Provider>
  );
};

export default App;