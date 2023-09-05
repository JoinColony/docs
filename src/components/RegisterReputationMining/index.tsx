import React from 'react';

import { useColonyNetwork } from '../../useColonyNetwork';

// const addColonyRPC = () => {
//   // If MetaMask is installed there will be an `ethereum` object on the `window`
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (window as any).ethereum.request({
//     method: 'wallet_addEthereumChain',
//     params: [
//       {
//         chainId: '0x64',
//         chainName: 'Gnosis Chain via Colony',
//         nativeCurrency: {
//           name: 'xDAI',
//           symbol: 'XDAI',
//           decimals: 18,
//         },
//         rpcUrls: ['https://xdai.colony.io/rpc/'],
//         blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
//       },
//     ],
//   });
// };

const RegisterReputationMining = () => {
  const network = useColonyNetwork();
  if (!network) {
    return <div>Loading Colony SDK...</div>;
  }
  const [colonyNetwork, ethers, signer, ethereum] = network;
  console.log(ethereum.selectedAddress);
  return (
    <div>
      <input
        type="text"
        className="h-10 w-full border-gray-300 rounded-md"
        placeholder="Enter your colony address"
      />
    </div>
  );
};

export default RegisterReputationMining;
