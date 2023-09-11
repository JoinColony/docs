import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

const connect = () => {
  // If MetaMask is installed there will be an `ethereum` object on the `window`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.request({
    method: 'eth_requestAccounts',
    params: [],
  });
};

export default function ConnectMetaMask(): JSX.Element {
  const isBrowser = useIsBrowser();
  if (isBrowser && 'ethereum' in window) {
    return (
      <button className={styles.button} onClick={connect}>
        <img src="/img/metamask-fox.svg" />
        Connect MetaMask
      </button>
    );
  }
  return null;
}
