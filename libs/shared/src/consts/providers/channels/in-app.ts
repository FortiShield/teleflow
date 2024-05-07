import { teleflowInAppConfig } from '../credentials';

import { InAppProviderIdEnum } from '../provider.enum';
import { IProviderConfig } from '../provider.interface';

import { ChannelTypeEnum } from '../../../types';

export const inAppProviders: IProviderConfig[] = [
  {
    id: InAppProviderIdEnum.Teleflow,
    displayName: 'Teleflow In-App',
    channel: ChannelTypeEnum.IN_APP,
    credentials: teleflowInAppConfig,
    docReference: 'https://docs.teleflow.co/notification-center/getting-started',
    logoFileName: { light: 'teleflow.png', dark: 'teleflow.png' },
  },
];
