import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.nubia.neostore',
  name: '努比亚应用中心',
  groups: [
    {
      key: 1,
      name: '跳过自动更新',
      activityIds: ['cn.nubia.neostore.ui.main.HomeActivity'],
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.nubia.neostore:id/content_title"][text="发现新版本"]',
        },
        {
          matches: '[id="cn.nubia.neostore:id/iv_btn_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13243131', //获取链接的方法在上一步有说明
          preKeys: [1],
        },
      ],
    },
    {
      key: 2,
      name: '跳过装机必备',
      activityIds: ['cn.nubia.neostore.ui.start.NewPhoneNecessaryActivity'],
      rules: [
        {
          key: 1,
          matches: '[id="cn.nubia.neostore:id/tv_title"][text="新机必备"]',
        },
        {
          matches: '[id="cn.nubia.neostore:id/iv_button_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13243131', //获取链接的方法在上一步有说明
          preKeys: [1],
        },
      ],
    },
  ],
});
