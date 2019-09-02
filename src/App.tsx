import React, { useState, Suspense } from 'react';
import pageText1 from "./assets/images/pageText1.png";
import pageText2 from "./assets/images/pageText2.png";
import freeBtn from "./assets/images/free-btn.png";
import arrow from "./assets/images/arrow.png";
import page2 from "./assets/images/page2.jpg";
import page3 from "./assets/images/page3.jpg";
import './App.css';
const Apply = React.lazy(() => import("./Apply"));

interface StoreEntity {
  isForm: boolean;
  toForm?: () => void;
}

const Store = React.createContext(null as unknown as StoreEntity);

const Main: React.FC<{ toForm: () => void }> = ({ toForm }) => {
  return <>
    <div className="banner-box bannerBox">
      <div className="pageText1">
        <img src={pageText1}/>
      </div>
      <div className="pageText2">
        <img src={pageText2}/>
      </div>
      <a href="#form" onClick={toForm} className="free-btn free-btn1">
        <img src={freeBtn}/>
      </a>
      <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div>
    </div>
    <div className="banner-box f0">
      <img src={page2}/>
    </div>
    <div className="banner-box f0">
      <img src={page3}/>
      <a href="#form" onClick={toForm} className="free-btn free-btn2">
        <img src={freeBtn}/>
      </a>
    </div>
  </>
}

const App: React.FC<{}> = ({}) => {
  const [isForm, setIsForm] = useState(false);
  const toForm = React.useCallback(() => setIsForm(true), []);
  return (
    <Store.Provider value={{ isForm }}>
      <div className="main">
        {
          !isForm
            ? <Main toForm={toForm}/>
            : <Suspense fallback={<div className="page-loading">Loading...</div>}>
              <Apply isForm={isForm}/>
            </Suspense>
        }
      </div>
    </Store.Provider>
  );
};

export default App;