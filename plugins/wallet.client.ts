import { initWallet, WalletMultiButton } from 'solana-wallets-vue'

import 'solana-wallets-vue/styles.css'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'

export default defineNuxtPlugin((nuxtApp) => {
  const walletOptions = {
    wallets: [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
    ],
    autoConnect: false,
  }

  initWallet(walletOptions)

  nuxtApp.vueApp.component('WalletMultiButton', WalletMultiButton)
})
