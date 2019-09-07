import React, { Suspense, useEffect, useState } from 'react';
import arrow from "./assets/images/arrow.png";
import './App.css';
import TitleBox from './components/TitleBox';
import title0 from './assets/title0.png';
import title1 from './assets/title1.png';
import body2 from './assets/yiti.svg';
import companyLogo from './assets/compony_logo.png';
import TitleMain from './components/TitleMain';
import BodyBox from './components/BodyBox';
import TitleButton from './components/TitleButton';
import Form from './Form';
// import YiTi from './components/YiTi';

interface StoreEntity {
  isForm: boolean;
  toForm?: () => void;
}

const Store = React.createContext(null as unknown as StoreEntity);

const Main: React.FC<{ toForm: () => void }> = ({ toForm }) => {
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(14 + (w - 375) / 81), 18);
  return <>
    <div className="bannerBox" hidden={false}>
      <TitleMain />
      <section className="time-place" style={{fontSize}}>
        <time>2019.9.17</time>
        <p>深圳—科兴科学园国际会议中心3楼</p>
      </section>
      <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div>
      <TitleBox img={title0} />
      <BodyBox content={`
        安全本有界，技术铸就的钢铁长城，守护万千数据与用户的生命线；
        安全亦无界，打破技术的坚壁高墙，协同开放才能更好地服务安全！
      `}/>
      <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div>
      <TitleBox img={title1} className="yiti" style={{marginTop: '38px', border: 0}}/>
      <img className="body2" src={body2} />
      {/*<YiTi />*/}
      {/* <div className="arrow-box">
        <img src={arrow} className="arrow"/>
      </div> */}
      <TitleButton title="点击报名" onClick={toForm}/>
      <img className="company-logo" src={companyLogo} alt=""/>
    </div>
  </>
}

const App: React.FC<{}> = ({}) => {
  const [isForm, setIsForm] = useState(false);
  const toForm = React.useCallback(() => setIsForm(true), []);
  const toHome = React.useCallback(() => setIsForm(false), []);
  useEffect(() => {
    if (isForm) {
      window.history.pushState({path: '#form'}, 'TSTS2019第12届腾讯安全技术峰会', '#form');
    } else {
      window.history.replaceState({path: '#'}, 'TSTS2019第12届腾讯安全技术峰会', '#');
    }
    const cb = (e: any) => {
      setIsForm(e.state && e.state.path === '#form');
    };
    window.addEventListener('popstate', cb);
    return () => {
      window.removeEventListener('popstate', cb);
    }
  }, [isForm]);
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