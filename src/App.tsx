import React, { Suspense, useState } from 'react';
import arrow from "./assets/images/arrow.png";
import './App.css';
import TitleBox from './components/TitleBox';
import title0 from './assets/title0.png';
import title1 from './assets/title1.png';
import body2 from './assets/body2.png';
import companyLogo from './assets/compony_logo.png';
import TitleMain from './components/TitleMain';
import BodyBox from './components/BodyBox';
import TitleButton from './components/TitleButton';
import Form from './Form';

interface StoreEntity {
  isForm: boolean;
  toForm?: () => void;
}

const Store = React.createContext(null as unknown as StoreEntity);

const Main: React.FC<{ toForm: () => void }> = ({ toForm }) => {
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(12 + (w - 375) / 81), 18);
  return <>
    <div className="bannerBox" hidden={false}>
      <TitleMain />
      <section className="time-place" style={{fontSize}}>
        <p>2019.9.17</p>
        <p>深圳—科兴科学园国际会议中心3楼</p>
      </section>
      <TitleBox img={title0} />
      <BodyBox content={`
            秩序诞生之前，万物归于混沌，我们造文字、创语言、划星系、定历法
                       世界被规范，想象力反而无限延伸
      `}/>
      <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div>
      <TitleBox img={title1} style={{marginTop: '20px'}}/>
      <img className="body2" src={body2} height={396} />
      <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div>
      <TitleButton title="点击报名" onClick={toForm}/>
      <img className="company-logo" src={companyLogo} alt=""/>
    </div>
  </>
}

const App: React.FC<{}> = ({}) => {
  const [isForm, setIsForm] = useState(false);
  const toForm = React.useCallback(() => setIsForm(true), []);
  const toHome = React.useCallback(() => setIsForm(false), []);
  return (
    <Store.Provider value={{ isForm }}>
      <div className="main">
        {
          !isForm
            ? <Main toForm={toForm}/>
            : <Suspense fallback={<div className="page-loading">Loading...</div>}>
              <Form toHome={toHome}/>
            </Suspense>
        }
      </div>
    </Store.Provider>
  );
};

export default App;