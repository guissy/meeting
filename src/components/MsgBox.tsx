import React, { useCallback, useEffect, useState } from 'react';
import './MsgBox.css';

interface Props {
  msg: string;
  setMsg: (s: string) => void;
}
const MsgBox: React.FC<Props> = ({ msg, setMsg }) => {
  const [{ message, type }, setMessage] = useState({ message: msg, type: 0 });
  if (msg !== message) {
    setMessage({ message: msg, type: 0 });
  }
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage({ message: '', type: 0 });
        setMsg('');
      }, 1500)
    }
  }, [message, msg]);
  return (
    <div className="msg-box" style={{ display: message ? 'block' : 'none' }}>
      <div className="layui-layer layui-layer-dialog layui-layer-border layui-layer-msg">
        <div className="layui-layer-content layui-layer-padding">
          <i className={"layui-layer-ico " + 'layui-layer-ico' + type}/>{message}
        </div>
      </div>
    </div>
  );
};

export default MsgBox;