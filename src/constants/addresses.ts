import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238',

  [SupportedChainId.AVAX_FUJI]: '0x5425890298aed601595a70AB815c96711a31Bc65',

  [SupportedChainId.ARB_SEPOLIA]: '0x75faf114eafb1bdbe2f0316df893fd58ce46aa4d',

  [SupportedChainId.POLYGON_MAINNET]:
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',

  [SupportedChainId.SOLANA_MAINNET]:
    '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',

  [SupportedChainId.POLYGON_MUMBAI]:
    '0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.AVAX_FUJI]: '0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0',

  [SupportedChainId.ARB_SEPOLIA]: '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.POLYGON_MAINNET]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.SOLANA_MAINNET]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.POLYGON_MUMBAI]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0x7865fafc2db2093669d92c0f33aeef291086befd',

  [SupportedChainId.AVAX_FUJI]: '0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79',

  [SupportedChainId.ARB_SEPOLIA]: '0xacf1ceef35caac005e15888ddb8a3515c41b4872',

  [SupportedChainId.POLYGON_MAINNET]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.SOLANA_MAINNET]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',

  [SupportedChainId.POLYGON_MUMBAI]:
    '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5',
}
