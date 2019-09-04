import React, { useState, Suspense } from 'react';
import pageText1 from "./assets/images/pageText1.png";
import pageText2 from "./assets/images/pageText2.png";
import freeBtn from "./assets/images/free-btn.png";
import arrow from "./assets/images/arrow.png";
import page2 from "./assets/images/page2.jpg";
import page3 from "./assets/images/page3.jpg";
import './App.css';
import TitleBox from './components/TitleBox';
import title0 from './assets/title0.png';
import title1 from './assets/title1.png';
import body2 from './assets/body2.png';
import companyLogo from './assets/compony_logo.png';
import TitleMain from './components/TitleMain';
import BodyBox from './components/BodyBox';
import TitleButton from './components/TitleButton';
const Apply = React.lazy(() => import("./Apply"));

interface StoreEntity {
  isForm: boolean;
  toForm?: () => void;
}

const Store = React.createContext(null as unknown as StoreEntity);

const Main: React.FC<{ toForm: () => void }> = ({ toForm }) => {
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(12 + (w - 375) / 81), 18);
  return <>
    <div className="bannerBox">
      <TitleMain />
      <section className="time-place" style={{fontSize}}>
        <p>2019.9.17</p>
        <p>深圳—科兴科学园国际会议中心3楼</p>
      </section>
      <TitleBox img={title0} />
      <BodyBox content={`
            秩序诞生之前，万物归于混沌，我们造文字、创语言、划星系、定历法
                       世界被规范，想象力反而无限延伸

            当人工和智能的定义被重构，当虚拟和现实的边界被推翻
                以数字转型为名，数据洪流的智能浪潮席卷全球
                   当束缚黑产的镣铐被击碎，当网络安全的风险日益突出
                以全新技术为器，新型网络威胁的潘多拉魔盒被打开

                 当网络世界面临边界重构，当互联网安全再次走向规范秩序，亟待重建
               这是时代赋予每一个鹅厂人最艰难，也是最荣耀的使命
            十一年积淀，安全平台部从新出发，诚邀各BG业务与安全团队
              ——新世界，由你定序！
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