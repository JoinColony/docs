// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ConnectMetaMask from '@site/src/components/ConnectMetaMask';
import DiscordButton from '@site/src/components/DiscordButton';
import RegisterReputationMining from '@site/src/components/RegisterReputationMining';

const components = {
  // Re-use the default mapping
  ...MDXComponents,
  'connect-metamask': ConnectMetaMask,
  'join-discord': DiscordButton,
  'register-reputation-mining': RegisterReputationMining,
};

export default components;
