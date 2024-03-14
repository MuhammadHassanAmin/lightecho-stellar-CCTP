/**
 * List of all the chains/networks supported
 */
export enum Chain {
  ETH = 'ETH',
  AVAX = 'AVAX',
  ARB = 'ARB',
  POLYGON = 'POLYGON',
  SOLANA = 'SOLANA',
  POLYGON_MUMBAI = 'POLYGON_MUMBAI',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
  ETH_SEPOLIA = 11155111,
  AVAX_FUJI = 43113,
  ARB_SEPOLIA = 421614,
  POLYGON_MAINNET = 137,
  SOLANA_MAINNET = 101,
  POLYGON_MUMBAI = 80001,
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
  ETH_SEPOLIA: '0xaa36a7',
  AVAX_FUJI: '0xa869',
  ARB_SEPOLIA: '0x66eee',
  POLYGON_MAINNET: '0x89',
  SOLANA_MAINNET: '0x65',
  POLYGON_MUMBAI: '0x13881',
}

interface ChainToChainIdMap {
  [key: string]: number
}

/**
 * Maps a chain to it's chain ID
 */

export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
  [Chain.ETH]: SupportedChainId.ETH_SEPOLIA,
  [Chain.AVAX]: SupportedChainId.AVAX_FUJI,
  [Chain.ARB]: SupportedChainId.ARB_SEPOLIA,
  [Chain.POLYGON]: SupportedChainId.POLYGON_MAINNET,
  [Chain.SOLANA]: SupportedChainId.SOLANA_MAINNET,
  [Chain.POLYGON_MUMBAI]: SupportedChainId.POLYGON_MUMBAI,
}

interface ChainToChainNameMap {
  [key: string]: string
}

/**
 * Maps a chain to it's readable name
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
  ETH: 'Ethereum',
  AVAX: 'Avalanche',
  ARB: 'Arbitrum',
  POLYGON: 'Polygon',
  SOLANA: 'Solana',
  POLYGON_MUMBAI: 'Polygon Mumbai',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
  ETH = 0,
  AVAX = 1,
  ARB = 3,
  POLYGON = 4,
  SOLANA = 5,
  POLYGON_MUMBAI = 6,
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

const ETH_SEPOLIA: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_SEPOLIA,
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
  chainName: 'Sepolia Test Network',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://sepolia.infura.io/v3/'],
}

const AVAX_FUJI: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.AVAX_FUJI,
  blockExplorerUrls: ['https://testnet.snowtrace.io/'],
  chainName: 'Avalanche FUJI C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
}

const ARB_SEPOLIA: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_SEPOLIA,
  blockExplorerUrls: ['https://sepolia.arbiscan.io/'],
  chainName: 'Arbitrum Sepolia Testnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb-sepolia.g.alchemy.com/v2/demo'],
}

interface ChainIdToChainParameters {
  [key: string]: AddEthereumChainParameter
}

const POLYGON_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.POLYGON_MAINNET,
  blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com/'],
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
}

const MUMBAI_TESTNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.POLYGON_MUMBAI, // Chain ID for Mumbai Testnet
  chainName: 'Mumbai Testnet',
  blockExplorerUrls: ['https://mumbai.polygonscan.com/'], // Block explorer URL
  rpcUrls: ['https://rpc-mumbai.matic.today'], // RPC endpoint
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
}

const SOLANA_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.SOLANA_MAINNET,
  blockExplorerUrls: ['https://explorer.solana.com/'],
  chainName: 'Solana Mainnet',
  nativeCurrency: {
    name: 'Sol',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: ['https://api.mainnet-beta.solana.com/'],
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
  [SupportedChainIdHex.ETH_SEPOLIA]: ETH_SEPOLIA,
  [SupportedChainIdHex.AVAX_FUJI]: AVAX_FUJI,
  [SupportedChainIdHex.ARB_SEPOLIA]: ARB_SEPOLIA,
  [SupportedChainIdHex.POLYGON_MAINNET]: POLYGON_MAINNET,
  [SupportedChainIdHex.SOLANA_MAINNET]: SOLANA_MAINNET,
  [SupportedChainIdHex.POLYGON_MUMBAI]: MUMBAI_TESTNET,
}
