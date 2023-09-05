import type SDK from '@colony/sdk';
import type Ethers from 'ethers';
import type { ExternalProvider } from '@ethersproject/providers';
import type { MetaMaskInpageProvider } from '@metamask/providers';

import { useState, useEffect } from 'react';
import { useScript } from 'hoofd';
import useIsBrowser from '@docusaurus/useIsBrowser';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const importMap = `
{
  "imports": {
    "ethers": "https://unpkg.com/ethers@legacy-v5/dist/ethers.esm.min.js"
  }
}
`;

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
        const fetchedSDK = await import(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          'https://unpkg.com/@colony/sdk@next/dist/prod/index.min.js'
        );
        setSdk(fetchedSDK);
      };
      getSDK();
      const getEthers = async () => {
        const fetchedEthers = await import(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          'https://unpkg.com/ethers@legacy-v5/dist/ethers.esm.min.js'
        );
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
