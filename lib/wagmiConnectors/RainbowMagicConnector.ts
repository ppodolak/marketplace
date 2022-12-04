import { MagicConnectConnector } from '@everipedia/wagmi-magic-connector'
import { Wallet } from '@rainbow-me/rainbowkit'
import { WalletConnectWalletOptions } from '@rainbow-me/rainbowkit/dist/wallets/walletConnectors/walletConnectWallet/walletConnectWallet'
import { chainId, alchemyRpcUrls } from 'wagmi'

const MAGIC_LINK_API_KEY =
  process.env.NEXT_PUBLIC_MAGIC_CONNECT_API_KEY || undefined
const PUBLIC_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || alchemyRpcUrls.mainnet
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID || chainId.mainnet

export const rainbowMagicConnector = ({
  chains,
}: WalletConnectWalletOptions): Wallet => ({
  id: 'magic',
  name: 'Magic',
  iconUrl: 'https://svgshare.com/i/iJK.svg',
  iconBackground: '#fff',
  createConnector: (): any => {
    const connector = new MagicConnectConnector({
      chains: chains,
      options: {
        apiKey: MAGIC_LINK_API_KEY as string,
        magicSdkConfiguration: {
          network: {
            rpcUrl: PUBLIC_RPC_URL,
            chainId: CHAIN_ID as number,
          },
        },
      },
    })

    return {
      connector,
    }
  },
})
