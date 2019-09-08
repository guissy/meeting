import React from 'react';
import './YiTiBox.css';

const content = `【开源协同下的安全新机遇】 @TEG安全平台部  lakehu (胡珀)
【浅谈运维安全运营体系建设】 @IEG技术运营部  riverzheng (郑江林)
【企业蓝军以攻促防】@TEG安全平台部  wqzhong (钟武强)
【IT安全的红与蓝】@TEG企业IT部  geminicai (蔡晨)
【PCG web漏洞收敛的探索】@PCG技术运营部  ruilin (林锐林)
【网络安全技术人员眼中的法律漏洞】@S1数据安全部  blshi (史波良)
【浅谈金融业务主机入侵防御体系建设】@CDG平台研发部  fowlerzhu (朱峰)
【Binary Analysis Platform - Java and Dalvik virtual machines】@CSIG科恩实验室  akochkov (ANTON KOCHKOV)`.split('\n')
  .map(v => {
    const [title, ...tail] = v.split('@');
    return { title, user: tail.join('  ') }
  });
const YiTiBox: React.FC = () => {
  return (
    <div className="yiti-box">
      <ul>
        {
          content.map((v, i) => (
            <li key={i}>
              <div className="num" style={{ backgroundImage: '' }}/>
              <div className="line"/>
              <div className="content">
                <p>{v.title}</p>
                <small>{v.user}</small>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default YiTiBox;