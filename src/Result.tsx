import React, { useState } from 'react';
import TitleButton from './components/TitleButton';
import companyLogo from './assets/compony_logo.png';
import './Form.css';

interface Props {
  setHash: (hash: string) => void;
  hash: string;
  height: number;
}

const Result: React.FC<Props> = ({ setHash, hash, height }) => {
  const style = { height, backgroundSize: '100% ' + height + 'px' };
  let title = '信息已提交';
  let msg = '我们会企业微信联系报名成功的小伙伴';
  if (hash === '#success') {
    msg = '我们会企业微信联系报名成功的小伙伴';
  } else if (hash === '#fail') {
    title = '报名失败';
    msg = '请用您OA绑定的微信号登陆进行报名！';
  } else if (hash === '#repeat') {
    title = '报名失败';
    msg = '您已报名，请勿重复提交！';
  }
  return (
    <div className="message-box" style={style}>
      <p className="input-label">{title}</p>
      <div className="input-wrap">
        <p>{msg}</p>
        <p>请关注企业微信消息</p>
      </div>
      <TitleButton title="返回首页" onClick={() => {
        // window.history.go(-1);
        setHash('#');
      }}/>
      <img className="company-logo success-bottom" src={companyLogo} alt=""/>
      <footer style={{ width: '100%', height: 1 }}>
        {/*不能有margin-bottom*/}
      </footer>
    </div>
  );
};

export default Result;