fetch('https://act.security.tencent.com/201909/TstsSign/apiGetWxConfig', {
  method: 'post',
  headers: {
    'X-Requested-With': "XMLHttpRequest"
  }
}).then((response) => {
  console.log('☞☞☞ ', response);
  var data = response.data;
  if (data) {
    var title = 'TSTS2019第12届腾讯安全技术峰会';
    var desc = 'TenSec 2019，\n报名参与第12届腾讯安全技术峰会。 ';
    var imgUrl = window.location.origin + "/cover.png";
    var link = window.location.href;
    // eslint-disable-next-line no-undef
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature,// 必填，签名
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
    });
    // eslint-disable-next-line no-undef
    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
      // eslint-disable-next-line no-undef
      wx.updateAppMessageShareData({
        title, // 分享标题
        desc, // 分享描述
        link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl, // 分享图标
        success: function () {
          // 设置成功
          // eslint-disable-next-line no-undef
          MtaH5.clickShare('wechat_friends');  //这里加上h5分享代码
        }
      });
      // eslint-disable-next-line no-undef
      wx.updateTimelineShareData({
        title, // 分享标题
        link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl, // 分享图标
        success: function () {
          // 设置成功
          // eslint-disable-next-line no-undef
          MtaH5.clickShare('wechat_moments');  //这里加上h5分享代码
        }
      })
    });
  }
});