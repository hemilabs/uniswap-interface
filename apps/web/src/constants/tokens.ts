import { ChainId, Currency, NativeCurrency, Token, UNI_ADDRESSES, WETH9 } from '@uniswap/sdk-core'
import invariant from 'tiny-invariant'

// eslint-disable-next-line no-restricted-syntax
export const NATIVE_CHAIN_ID = 'NATIVE'

export const DAI_HEMI_SEPOLIA = new Token(
  ChainId.HEMI_SEPOLIA,
  '0xec46e0efb2ea8152da0327a5eb3ff9a43956f13e',
  18,
  'DAI',
  'Testnet Hemi DAI'
)


export const USDC_HEMI_SEPOLIA = new Token(
  ChainId.HEMI_SEPOLIA,
  '0xD47971C7F5B1067d25cd45d30b2c9eb60de96443',
  6,
  'USDC.e',
  'USD Coin'
)

export const USDT_HEMI_SEPOLIA = new Token(
  ChainId.HEMI_SEPOLIA,
  '0x3Adf21A6cbc9ce6D5a3ea401E7Bae9499d391298',
  6,
  'USDT.e',
  'Tether USD'
)

export const WETH_HEMI_SEPOLIA = new Token(
  ChainId.HEMI_SEPOLIA,
  '0x0C8aFD1b58aa2A5bAd2414B861D8A7fF898eDC3A',
  18,
  'WETH',
  'Wrapped Ether'
)

export const UNI: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESSES[ChainId.MAINNET], 18, 'UNI', 'Uniswap'),
  [ChainId.GOERLI]: new Token(ChainId.GOERLI, UNI_ADDRESSES[ChainId.GOERLI], 18, 'UNI', 'Uniswap'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, UNI_ADDRESSES[ChainId.SEPOLIA], 18, 'UNI', 'Uniswap'),
}

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  ...(WETH9 as Record<ChainId, Token>),
  [ChainId.HEMI_SEPOLIA]: WETH_HEMI_SEPOLIA
}


/*export function isHemi(chainId: number): chainId is ChainId.HEMI {
  return chainId === ChainId.HEMI
}

class HemiNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isHemi(this.chainId)) throw new Error('Not Hemi')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isHemi(chainId)) throw new Error('Not Hemi')
    super(chainId, 18, 'ETH', 'ETH')
  }
}*/
export function isHemiSepolia(chainId: number): chainId is ChainId.HEMI_SEPOLIA {
  return chainId === ChainId.HEMI_SEPOLIA
}

class HemiSepoliaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isHemiSepolia(this.chainId)) throw new Error('Not Hemi Sepolia')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isHemiSepolia(chainId)) throw new Error('Not Hemi Sepolia')
    super(chainId, 18, 'ETH', 'ETH')
  }
}

class ExtendedEther extends NativeCurrency {
  public get wrapped(): Token {
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    if (wrapped) return wrapped
    throw new Error(`Unsupported chain ID: ${this.chainId}`)
  }

  protected constructor(chainId: number) {
    super(chainId, 18, 'ETH', 'Ethereum')
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {}
export function nativeOnChain(chainId: number): NativeCurrency | Token {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId]
  let nativeCurrency: NativeCurrency | Token

  /*if (isHemi(chainId)) {
    nativeCurrency = new HemiNativeCurrency(chainId)
  } else */if (isHemiSepolia(chainId)) {
    nativeCurrency = new HemiSepoliaNativeCurrency(chainId)
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId)
  }
  return (cachedNativeCurrency[chainId] = nativeCurrency)
}

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId in ChainId]?: string } } = {
  USDC: {
    [ChainId.HEMI_SEPOLIA]: USDC_HEMI_SEPOLIA.address,
  },
  USDT: {
    [ChainId.HEMI_SEPOLIA]: USDT_HEMI_SEPOLIA.address,
  },
}

const STABLECOINS: { [chainId in ChainId]: Token[] } = {
  [ChainId.MAINNET]: [],
  [ChainId.ARBITRUM_ONE]: [],
  [ChainId.ARBITRUM_GOERLI]: [],
  [ChainId.OPTIMISM]: [],
  [ChainId.OPTIMISM_GOERLI]: [],
  [ChainId.POLYGON]: [],
  [ChainId.POLYGON_MUMBAI]: [],
  [ChainId.BNB]: [],
  [ChainId.BASE]: [],
  [ChainId.CELO]: [],
  [ChainId.CELO_ALFAJORES]: [],
  [ChainId.GOERLI]: [],
  [ChainId.SEPOLIA]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.GNOSIS]: [],
  [ChainId.MOONBEAM]: [],
  [ChainId.BASE_GOERLI]: [],
  [ChainId.OPTIMISM_SEPOLIA]: [],
  [ChainId.ARBITRUM_SEPOLIA]: [],
  [ChainId.ZORA]: [],
  [ChainId.ZORA_SEPOLIA]: [],
  [ChainId.ROOTSTOCK]: [],
  [ChainId.BLAST]: [],
  [ChainId.HEMI_SEPOLIA]: [DAI_HEMI_SEPOLIA, USDT_HEMI_SEPOLIA],
}

export function isStablecoin(currency?: Currency): boolean {
  if (!currency) return false

  return STABLECOINS[currency.chainId as ChainId].some((stablecoin) => stablecoin.equals(currency))
}
