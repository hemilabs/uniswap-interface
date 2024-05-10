export const UNI_LIST = 'https://cloudflare-ipfs.com/ipns/tokens.uniswap.org'
export const UNI_EXTENDED_LIST = 'https://cloudflare-ipfs.com/ipns/extendedtokens.uniswap.org'

export const OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json'
export const ARBITRUM_LIST = 'https://bridge.arbitrum.io/token-list-42161.json'
export const CELO_LIST = 'https://celo-org.github.io/celo-token-list/celo.tokenlist.json'
export const PLASMA_BNB_LIST = 'https://raw.githubusercontent.com/plasmadlt/plasma-finance-token-list/master/bnb.json'
export const AVALANCHE_LIST =
  'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/token_list.json'
export const BASE_LIST =
  'https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json'
export const HEMI_TESTNET_LIST = 'https://raw.githubusercontent.com/hemilabs/interface/main/hemi-testnet.tokenlist.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [HEMI_TESTNET_LIST]
export const DEFAULT_INACTIVE_LIST_URLS: string[] = []

export const DEFAULT_LIST_OF_LISTS: string[] = [...DEFAULT_ACTIVE_LIST_URLS, ...DEFAULT_INACTIVE_LIST_URLS]
