// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ConnectMetaMask from '@site/src/components/ConnectMetaMask';
import MetaMaskAddChain from '@site/src/components/MetaMaskAddChain';
import DiscordButton from '@site/src/components/DiscordButton';
import ReputationMiningSetup from '@site/src/components/ReputationMiningSetup';

const components = {
  // Re-use the default mapping
  ...MDXComponents,
  'connect-metamask': ConnectMetaMask,
  'metamask-add-chain': MetaMaskAddChain,
  'join-discord': DiscordButton,
  'reputation-mining-setup': ReputationMiningSetup,
};

export default components;
