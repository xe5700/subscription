import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zbj.zhouse',
  name: '知户型',
  groups: [
    {
      key: 1,
      name: '自动进入知户型',
      activityIds: ['com.zbj.zhouse.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.zbj.zhouse:id/btn_enter"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13242667', //获取链接的方法在上一步有说明
        },
      ],
    },
    {
      key: 2,
      name: '自动关闭广告弹窗',
      activityIds: ['com.zbj.zhouse.activity.DynamicMainActivity'],
      rules: [
        {
          matches: '[id="com.zbj.zhouse:id/ad_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13242680', //获取链接的方法在上一步有说明
        },
      ],
    },
  ],
});
