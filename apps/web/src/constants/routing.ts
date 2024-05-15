// a list of tokens by chain
import { ChainId, Currency, Token, WETH9 } from '@uniswap/sdk-core'

import {
  DAI_HEMI_SEPOLIA,
  WRAPPED_NATIVE_CURRENCY,
  WETH_HEMI_SEPOLIA,
  nativeOnChain,
} from './tokens'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [ChainId.HEMI_SEPOLIA]: [
    nativeOnChain(ChainId.HEMI_SEPOLIA),
    DAI_HEMI_SEPOLIA,
    WETH_HEMI_SEPOLIA
  ]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [ChainId.HEMI_SEPOLIA]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.HEMI_SEPOLIA],
    DAI_HEMI_SEPOLIA,
    WETH_HEMI_SEPOLIA,
  ],
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [ChainId.HEMI_SEPOLIA]: [],
}
