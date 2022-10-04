import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Shimmer, Wallet } from '../../../icons';

interface LanguagesProps {
  languages?: { [key: string]: string };
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => (
  <div className='libraries__cards'>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Shimmer />
          </div>
          <Languages
            languages={{
              Rust: '/iota.rs/getting_started/rust',
              NodeJS: '/iota.rs/getting_started/nodejs',
              Python: '/iota.rs/getting_started/python',
              Java: '/iota.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='libraries__header'>Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iota.rs/how_tos/get_node_info'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/how_tos/post_block'>
              Send a data block
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/how_tos/prepare_sign_transaction'>
              Send a transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iota.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Wallet />
          </div>
          <Languages
            languages={{
              Rust: '/wallet.rs/getting_started/rust',
              NodeJS: '/wallet.rs/getting_started/nodejs',
              Python: '/wallet.rs/getting_started/python',
            }}
          />
        </div>
        <h3 className='libraries__header'>Wallet</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/explanations/library_overview'>
              The library in a nutshell
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account'>
              Create and store an account
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/how_tos/outputs_and_transactions/send_transaction'>
              Transfer tokens
            </Link>
          </li>
        </ul>
        <Link
          to='/wallet.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Shimmer />
          </div>
          <Languages
            languages={{
              TypeScript: '/iotajs/welcome',
            }}
          />
        </div>
        <h3 className='libraries__header'>TypeScript Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/simple'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/data'>Send a data message</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iotajs/how_tos/transaction'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iotajs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
  </div>
);

export default LibrariesSection;
