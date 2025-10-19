import { MenuEntry } from '@labswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0x15d46B30207991425dCa153d91eEcaa746d57eb1',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
     label: t('Pools'),
     icon: 'PoolIcon',
     href: '/pools',
  },
  {
    label: t('Docs'),
    icon: 'InfoIcon',
    href: 'https://labswap.gitbook.io/labswap-docs/getting-started/get-started',
    external: true
  },
  {
    label: t('Website'),
    icon: 'WebsiteIcon',
    href: 'https://labswapecosystem.com',
    external: true
  },
  {
    label: t('Marketing Solutions'),
    icon: 'NftIcon',
    href: 'https://labswapecosystem.com/#marketing',
    external: true
  },
]

export default config
