import React, { useCallback, useEffect, useState } from 'react';
import tit from './assets/images/baom-tit.png';
import ready from './assets/images/ready.png';
import './Apply.css';
import { Formik } from 'formik';

interface Post {
  name: string;
  phone: string;
  smsCode: string;
  company: string;
  job: string;
  email: string;
  domain: string;
}

const domains = ["大数据", "人工智能应用与其安全研究", "移动互联网", "云计算", "互联网", "区块链", "虚拟化", "智能网联汽车", "安全工具开发与应用", "桌面端应用", "OS等嵌入式开发与集成", "其他"];

const Apply: React.FC<{ isForm: boolean }> = ({ isForm }) => {
  const [domain, setDomain] = useState('');
  const [domainVisible, setDomainVisible] = useState(false);
  const [domainOpacity, setDomainOpacity] = useState(0);
  const [{message, type}, setMessage] = useState({message: '', type: 0});
  const toggleDomain = useCallback(() => {
    setDomainVisible(!domainVisible);
  }, [domainVisible]);
  const selectDomain = useCallback((domain) => {
    setDomain(domain);
    setDomainOpacity(0);
    setTimeout(() => setDomainVisible(false), 800)
  }, [domain]);
  useEffect(() => {
    setDomainOpacity(domainVisible ? 1 : 0);
  }, [domainVisible]);
  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage({message: '', type: 0}), 1500)
    }
  }, [message]);
  return (
    <>
      <Formik
        initialValues={{ name: '', phone: '', smsCode: '', company: '', job: '', email: '', domain: '' }}
        validate={values => {
          let errors = {} as Post;
          if (!values.name) {
            errors.name = '姓名不能为空';
          } else if (!values.phone) {
            errors.phone = '手机不能为空';
          }  else if (!values.smsCode) {
            errors.smsCode = '验证码不能为空';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            // errors.email = 'Invalid email address';
          }
          // console.log('☞☞☞ 9527 Apply 31', errors);
          //
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setMessage({message: '验证码错误', type: 0});
          // setMessage({message: '您已报名，请勿重复提交', type: 0});
          // setMessage({message: '操作频繁，请稍后重试', type: 0});
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setMessage({message: '提交成功', type: 1});
            setSubmitting(false);
          }, 4000);
        }}
      >{({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
           setFieldValue
         }) => (
        <form onSubmit={handleSubmit}>
          <div className="baom-tit">
            <img src={tit}/>
          </div>
          <div className="form-box">
            <fieldset id="form">
              <input type="hidden" name="mid" id="mid" defaultValue={'4982087607801771565'}/>
              <input type="hidden" name="tokenid2" id="tokenid2" defaultValue="393D8C11FA848720B9E000C7CDCC7BA6"/>
              <input type="hidden" name="checkType" id="checkType" defaultValue={'1'}/>
              <div className={"form-group clearfix" + (errors.name ? ' error' : '')}>
                <div className="form-groupL">
                  姓名<i/>
                </div>
                <div className="form-groupR">
                  <input type="text " name="name"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.name}/>
                </div>
              </div>
              <div className={"form-group clearfix" + (errors.phone ? ' error' : '')}>
                <div className="form-groupL">
                  联系方式<i/>
                </div>
                <div className="form-groupR">
                  <input type="tel" name="phone" className="getCodeInput"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.phone}/>
                  <a className="getCode">获取验证码</a>
                </div>
              </div>
              <div className={"form-group clearfix" + (errors.smsCode ? ' error' : '')}>
                <div className="form-groupL">
                  验证码<i/>
                </div>
                <div className="form-groupR">
                  <input type="text " name="smsCode"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.smsCode}/>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="form-groupL">
                  公司名称<i/>
                </div>
                <div className="form-groupR">
                  <input type="text " name="company"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.company}/>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="form-groupL">
                  业务领域<i/>
                </div>
                <div className="form-groupR form-domain" onClick={toggleDomain}>
                  <input type="text " className="form-domainInput"
                         name="domain"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.domain}
                         readOnly/>
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="form-groupL">
                  职位<i/>
                </div>
                <div className="form-groupR">
                  <input type="text " name="job"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.job}/>
                </div>
              </div>
              <div className={"form-group clearfix"}>
                <div className="form-groupL">
                  联系邮箱<i/>
                </div>
                <div className="form-groupR">
                  <input type="email" name="email"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email}/>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="domain-box"
               style={{ display: domainVisible ? 'block' : 'none', opacity: domainOpacity }}
          >
            <div className="domain-list">
              <ul>
                {domains.map(v => (
                  <li key={v} className={v === domain ? 'activeli' : ''}
                      onClick={() => {
                        selectDomain(v);
                        setFieldValue('domain', v);
                      }}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="loading-box" style={{ display: isSubmitting ? 'block' : 'none' }}>
            <div className="layui-layer layui-layer-loading"
                 style={{ zIndex: 19891015, top: 356, left: 177 }}>
              <div className="layui-layer-content layui-layer-loading0"/>
              <span className="layui-layer-setwin"/>
            </div>
          </div>
          <div className="msg-box" style={{ display: message ? 'block' : 'none' }}>
            <div className="layui-layer layui-layer-dialog layui-layer-border layui-layer-msg">
              <div className="layui-layer-content layui-layer-padding">
                <i className={"layui-layer-ico "+'layui-layer-ico'+type} />{message}
              </div>
            </div>
          </div>
          <div className="sure-box">
            <img src={ready}/>
            <a className="submitBtn" type="submit"
               onClick={(e) => handleSubmit(e as any)}/>
          </div>
        </form>
      )}
      </Formik>
    </>
  );
};

export default Apply;