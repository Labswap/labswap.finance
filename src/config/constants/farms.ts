import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 8 ) should always be at the top of the file we use them for price strings.
   */
  {
    pid: 0,
    lpSymbol: 'FLASK',
    lpAddresses: {
      97: '',
      56: '0x15d46b30207991425dca153d91eecaa746d57eb1',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
   {
     pid: 1,
     lpSymbol: 'FLASK-BNB LP',
     lpAddresses: {
       97: '',
       56: '0x84F0A43B51A6d40F7bbC3247a459Fc1dc1500831',
     },
     token: tokens.cake,
     quoteToken: tokens.wbnb,
   },
   {
    pid: 2,
    lpSymbol: 'FLASK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x934ad248cb4b4291aadd1b5ee8e80896bdf83a23',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
   {
    pid: 8,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
 },
  /* Add new farms below this line */

]

export default farms
