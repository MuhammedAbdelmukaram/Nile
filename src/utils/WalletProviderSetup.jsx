import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Import the CSS for wallet adapter
import '@solana/wallet-adapter-react-ui/styles.css';

const WalletProviderSetup = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                    <WalletMultiButton />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletProviderSetup;
