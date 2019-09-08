import React, { useEffect, useState } from 'react';
import './MsgBox.css';

interface Props {
  msg: string;
  setMsg: (s: string) => void;
}

const MsgBox: React.FC<Props> = ({ msg, setMsg }) => {
  const [{ message, type }, setMessage] = useState({ message: msg, type: 0 });
  if (msg !== message) {
    const isFormMsg = msg.includes('请输入') || msg.includes('不能为空');
    setMessage({ message: msg, type: isFormMsg ? 0 : 5 });
  }
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage({ message: '', type: 0 });
        setMsg('');
      }, 1800)
    }
  }, [message, msg, setMsg]);
  return (
    <div className="msg-box" style={{ display: message ? 'block' : 'none', color: !type ? '#BD790E' : '#E85546' }}>
      <div className="layui-layer layui-layer-dialog layui-layer-border layui-layer-msg">
        <div className="layui-layer-content layui-layer-padding">
          <i className={"layui-layer-ico layui-layer-ico" + type}/>{message}
        </div>
      </div>
    </div>
  );
};

export default MsgBox;