import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

const addColonyRPC = () => {
  // If MetaMask is installed there will be an `ethereum` object on the `window`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x64',
        chainName: 'Gnosis Chain via Colony',
        nativeCurrency: {
          name: 'xDAI',
          symbol: 'XDAI',
          decimals: 18,
        },
        rpcUrls: ['https://xdai.colony.io/rpc/'],
        blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
      },
    ],
  });
};

export default function MetaMaskAddChain(): JSX.Element {
  const isBrowser = useIsBrowser();
  if (isBrowser && 'ethereum' in window) {
    return (
      <button className={styles.button} onClick={addColonyRPC}>
        <img src="/img/metamask-fox.svg" />
        Add Gnosis Chain to MetaMask
      </button>
    );
  }
  return null;
}
