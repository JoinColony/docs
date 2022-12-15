// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ConnectMetaMask from '@site/src/components/ConnectMetaMask';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  'connect-metamask': ConnectMetaMask,
};
