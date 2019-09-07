import React, { useCallback, useEffect, useState } from 'react';
import TitleButton from './components/TitleButton';
import './Form.css';
import h1_txt from './assets/h1_txt.png';
import companyLogo from './assets/compony_logo.png';
import MsgBox from './components/MsgBox';

interface Props {
  toHome: () => void;
}

function post(wx: string) {
  if (wx) {
    fetch('/wx/' + wx).then(v => v.json()).then(v => console.log(v));
  }
}

const maxHeight = window.innerHeight;

const Form: React.FC<Props> = ({ toHome }) => {
  const [focus, setFocus] = useState(false);
  const [wx, setWx] = useState('');
  const [submited, setSubmited] = useState(false);
  const [msg, setMsg] = useState('');
  const [height, setHeight] = useState(maxHeight);
  const style = { height, backgroundSize: '100% ' + height + 'px'};
  const submit = () => {
    setFocus(false);
    const isZh = /[^\x00-\xff]/.test(wx);
    const isSymbol = /[,.\\\/\[\]\!%\^\*\?\(\)\=\`\~\&:;"'<>\+\|\{\}\$\#]/.test(wx);
    if (isZh || isSymbol) {
      setMsg('请输入企业微信的英文ID');
    } else if (wx.trim() === '') {
      setMsg('微信名不能为空');
    } else {
      post(wx.trim());
      setSubmited(true);
    }
  }
  const fixScrollTop = () => {
    setHeight(maxHeight);
  }
  useEffect(() => {
    let timer: any;
    if (!focus || msg || submited) {
      timer = setTimeout(fixScrollTop);
      window.addEventListener('focusout', fixScrollTop);
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener('focusout', fixScrollTop);
    };
  }, [focus, wx, submited, msg]);
  useEffect(() => {
    if (submited) {
      window.history.pushState({}, 'TSTS2019第12届腾讯安全技术峰会', '#success');
    }
  }, [submited]);
  return !submited ? (
    <form className="form-box" style={style} onSubmit={submit}>
      <img src={h1_txt} className="h1-txt2"/>
      <p className="input-label">请输入您的企业微信名</p>
      <div className={"input-wrap" + (focus || wx ? ' editing' : '')}>
        <input
          // imeMode="disabled"
          // placeholder="|"
          // autoFocus={true}
          onFocus={() => {
            setFocus(true);
            setMsg('');
          }}
          onChange={(e) => {
            // setFocus(false);
            setWx(e.target.value);
          }}
          onBlur={(e) => {
            setFocus(false);
            setWx(e.target.value);
          }}
          lang="en"
        />
      </div>
      <TitleButton title="确定报名" onClick={submit}/>
      <MsgBox msg={msg} setMsg={setMsg}/>
      <img className="company-logo bottom" src={companyLogo} alt=""/>
      <footer style={{ width: '100%', height: '1px' }}>
        {/*不能有margin-bottom*/}
      </footer>
    </form>
  ) : (
    <div className="message-box" style={style}>
      <p className="input-label">信息已提交</p>
      <div className="input-wrap">
        <p>我们会企业微信联系报名成功的小伙伴</p>
        <p>请关注企业微信消息</p>
      </div>
      <TitleButton title="返回首页" onClick={() => {
        setSubmited(false);
        toHome();
      }}/>
      <footer style={{ width: '100%', height: '1px' }}>
        {/*不能有margin-bottom*/}
      </footer>
    </div>
  );
};

export default Form;