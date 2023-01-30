// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ConnectMetaMask from '@site/src/components/ConnectMetaMask';
import DiscordButton from '@site/src/components/DiscordButton';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  'connect-metamask': ConnectMetaMask,
  'join-discord': DiscordButton,
};
