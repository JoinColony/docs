import styles from './styles.module.css';

export default function ConnectMetaMask(): JSX.Element {
  return (
    <a
      className={styles.button}
      href="https://discord.gg/feVZWwysqM"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img src="/img/discord-mark-white.svg" />
      Join our Discord
    </a>
  );
}
