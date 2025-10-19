import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x078103420CDB535bAD73B93532658a51B3C1e644',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 1,
    isFinished: false,
  },

]

export default pools
