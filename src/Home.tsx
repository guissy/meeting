import React from 'react';
import TitleMain from './components/TitleMain';
import arrow from './assets/images/arrow.png';
import TitleBox from './components/TitleBox';
import title0 from './assets/title0.png';
import BodyBox from './components/BodyBox';
import title1 from './assets/title1.png';
import body2 from './assets/yiti.svg';
import TitleButton from './components/TitleButton';
import companyLogo from './assets/compony_logo.png';
import './Home.css';

interface Props {
  setHash: (hash: string) => void;
}

const Home: React.FC<Props> = ({ setHash }) => {
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(14 + (w - 375) / 81), 18);
  return <>
    <div className="bannerBox" hidden={false}>
      {/*标题（图案）*/}
      <TitleMain />

      {/*标题（文字）*/}
      <section className="time-place" style={{fontSize}}>
        <time>2019.9.17</time>
        <p>深圳—科兴科学园国际会议中心3楼</p>
      </section>
      <div className="arrow-box">
        <img src={arrow} className="arrow" alt="more"/>
      </div>

      {/*峰会简介*/}
      <TitleBox img={title0} />
      <BodyBox content={`
        安全本有界，技术铸就的钢铁长城，守护万千数据与用户的生命线；
        安全亦无界，打破技术的坚壁高墙，协同开放才能更好地服务安全！
      `}/>
      <div className="arrow-box">
        <img src={arrow} className="arrow" alt="more"/>
      </div>

      {/*峰会议题*/}
      <TitleBox img={title1} className="yiti" style={{marginTop: '38px', border: 0}}/>
      <img className="body2" src={body2} alt="meeting schedule" />
      {/*<YiTiBox />*/}

      {/*报名按钮*/}
      <TitleButton title="点击报名" onClick={() => {
        // setHash('#form');
        window.location.href = 'https://oa.m.tencent.com/an:m_jf_oa/act/sign_result';
      }}/>
      <p className="note">（此会议仅针对腾讯员工开放）</p>
      <img className="company-logo" src={companyLogo} alt="tencent company"/>
    </div>
  </>
}

export default Home;