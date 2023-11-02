import path from 'node:path';
import url from 'node:url';
import picocolors from 'picocolors';
import { walk } from './file';
import type { AppConfig, AppConfigMudule, SubscriptionConfig } from './types';
import _ from 'lodash';
import { pinyin } from 'pinyin-pro';

const apps: AppConfig[] = [];
for await (const tsFp of walk(process.cwd() + '/src/apps')) {
  const mod: AppConfigMudule = await import(url.pathToFileURL(tsFp).href);
  const appConfig = mod.default;
  if (path.basename(tsFp, '.ts') != appConfig.id) {
    throw new Error(
      `${picocolors.blue(
        tsFp,
      )} file basename is not equal to its app id ${picocolors.blue(
        appConfig.id,
      )} `,
    );
  }
  apps.push(appConfig);
}

const subsConfig: SubscriptionConfig = {
  id: 5700,
  name: 'XE5700的私人订阅',
  author: 'xe5700',
  supportUri: 'https://github.com/xe5700/subscription',
  apps: _.sortBy(apps, (a) => {
    const pyName = pinyin(a.name, { separator: '', toneType: 'none' });
    if (pyName === a.name) return a.name;
    return '\uFFFF' + pyName; // 让带拼音的全排在后面
  }),
};

export default subsConfig;
