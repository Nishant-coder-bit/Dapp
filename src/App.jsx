import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendToken } from './SendToken';
import { SignMessage } from './SignMessage';


function App() {
     return (
          <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{ height:"50vh", padding:"2rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <WalletMultiButton />
            {/* <RequestAirdrop/> */}
            {/* <ShowBalance/> */}
            {/* <SendToken/> */}
            <SignMessage/>
            </div>
          
            
          
              </WalletModalProvider>
      </WalletProvider>
  </ConnectionProvider>

     ) 
}

export default App
