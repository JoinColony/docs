import type SDK from '@colony/sdk';
import type Ethers from 'ethers';
import type { ExternalProvider } from '@ethersproject/providers';
import type { MetaMaskInpageProvider } from '@metamask/providers';

import { useState, useEffect } from 'react';
import { useScript } from 'hoofd';
import useIsBrowser from '@docusaurus/useIsBrowser';

import IMPORT_MAP from './importMap.json';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const importMap = JSON.stringify(IMPORT_MAP);

export const useColonyNetwork = () => {
  const isBrowser = useIsBrowser();
  const [sdk, setSdk] = useState<typeof SDK>(null);
  const [ethers, setEthers] = useState<typeof Ethers>(null);
  useScript({
    id: 'colony-sdk-importmap',
    type: 'importmap',
    text: importMap,
  });
  useEffect(() => {
    if (isBrowser) {
      const getSDK = async () => {
        // eslint-disable-next-line import/no-extraneous-dependencies
        const fetchedSDK = await import('@colony/sdk');
        setSdk(fetchedSDK);
      };
      getSDK();
      const getEthers = async () => {
        // eslint-disable-next-line import/no-extraneous-dependencies
        const fetchedEthers = await import('ethers');
        setEthers(fetchedEthers);
      };
      getEthers();
    }
  }, [isBrowser]);
  if (isBrowser && window.ethereum && sdk && ethers) {
    const { ColonyNetwork } = sdk;
    const {
      providers: { Web3Provider },
    } = ethers;
    const signer = new Web3Provider(window.ethereum as ExternalProvider);
    const colonyNetwork = new ColonyNetwork(signer);
    return [colonyNetwork, ethers, signer, window.ethereum] as const;
  }
  return null;
};
