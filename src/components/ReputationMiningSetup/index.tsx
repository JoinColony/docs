/* eslint-disable no-alert */
import type { BigNumber } from 'ethers';

import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useColonyNetwork } from '../../useColonyNetwork';
import ConnectMetaMask from '../ConnectMetaMask';

interface StakingFormProps {
  amountToStake: string;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitting: boolean;
}

const StakingForm = ({
  amountToStake,
  onChangeAmount,
  onSubmit,
  submitting,
}: StakingFormProps) => (
  <form onSubmit={onSubmit}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">
      Stake CLNY for Reputation Mining
    </h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      2000 CLNY need to be staked to participate in Reputation Mining.
    </p>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-6">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="stake-amount"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Amount to stake (this is on top of the amount you already staked)
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="stake-amount"
                id="stake-amount"
                placeholder="2000"
                value={amountToStake || ''}
                required
                disabled={submitting}
                onChange={onChangeAmount}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Stake
      </button>
    </div>
  </form>
);

interface DelegateFormProps {
  delegateAddress: string;
  onChangeAddress: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitting: boolean;
}

const DelegateForm = ({
  delegateAddress,
  onChangeAddress,
  onSubmit,
  submitting,
}: DelegateFormProps) => (
  <form onSubmit={onSubmit}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">
      Speficy a delegate address
    </h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      Add an address that can mine for you. This is recommended as it doesn't
      require you to export your private key and save it on a server.
    </p>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-6">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="delegate-address"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Delegate address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="delegate-address"
                id="delegate-address"
                value={delegateAddress || ''}
                placeholder="0x..."
                required
                disabled={submitting}
                onChange={onChangeAddress}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Delegate
      </button>
    </div>
  </form>
);

interface UnstakingFormProps {
  amountToUnstake: string;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  stakedTokens: string;
  submitting: boolean;
}

const UnstakingForm = ({
  amountToUnstake,
  onChangeAmount,
  onSubmit,
  stakedTokens,
  submitting,
}: UnstakingFormProps) => (
  <form onSubmit={onSubmit}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">
      Unstake CLNY
    </h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      Here you can unstake your CLNY that you have staked for Reputation Mining.
      This will make you ineligible for Reputation Mining.
    </p>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-6">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="staked-amount"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Amount to unstake
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="staked-amount"
                id="staked-amount"
                placeholder={stakedTokens}
                value={amountToUnstake || ''}
                required
                max={stakedTokens}
                disabled={submitting}
                onChange={onChangeAmount}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Unstake
      </button>
    </div>
  </form>
);

interface MinerInfo {
  stakedTokens: BigNumber;
  clnyBalance: BigNumber;
  stakingAddress: string;
}

interface ReputationMiningFormProps {
  network: ReturnType<typeof useColonyNetwork>;
}

const ReputationMiningForm = ({ network }: ReputationMiningFormProps) => {
  const [minerInfo, setMinerInfo] = useState<MinerInfo>(null);
  const [amountToStake, setStaking] = useState<string>(null);
  const [delegateAddress, setDelegateAddress] = useState<string>(null);
  const [amountToUnstake, setUnstaking] = useState<string>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleStakingChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStaking(event.target.value);
    },
    [],
  );

  const updateMinerInfo = useCallback(async () => {
    const { colonyNetwork, ethereum } = network;
    const networkContract = colonyNetwork.getInternalNetworkContract();
    const metaColony = await colonyNetwork.getMetaColony();
    const balance = await metaColony.token.balanceOf(ethereum.selectedAddress);

    networkContract.getMiningStake(ethereum.selectedAddress).then((res) => {
      setMinerInfo({
        stakingAddress: ethereum.selectedAddress,
        stakedTokens: res.amount,
        clnyBalance: balance,
      });
    });
  }, [network.ethereum.selectedAddress]);

  const handleStakingSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true);
      const { colonyNetwork, ethers } = network;
      const networkContract = colonyNetwork.getInternalNetworkContract();
      try {
        const tx = await networkContract.stakeForMining(
          ethers.utils.parseEther(amountToStake),
        );
        alert(`Staking successful! Check transaction hash: ${tx.hash}`);
      } catch (e) {
        alert('Staking failed. See console for details.');
        return;
      } finally {
        setSubmitting(false);
      }
    },
    [amountToStake, network],
  );

  const handleDelegateSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true);
      const { colonyNetwork } = network;
      const networkContract = colonyNetwork.getInternalNetworkContract();
      try {
        const tx = await networkContract.setMiningDelegate(
          delegateAddress,
          true,
        );
        alert(
          `Mining delegate added successfully! Check transaction hash: ${tx.hash}`,
        );
      } catch (e) {
        alert('Adding delegate failed. See console for details.');
        return;
      } finally {
        setSubmitting(false);
      }
    },
    [amountToStake, network],
  );

  const handleUnstakingSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true);
      const { colonyNetwork, ethers } = network;
      const networkContract = colonyNetwork.getInternalNetworkContract();
      try {
        const tx = await networkContract.unstakeForMining(
          ethers.utils.parseEther(amountToUnstake),
        );
        alert(`Unstaking successful! Check transaction hash: ${tx.hash}`);
      } catch (e) {
        alert('Unstaking failed. See console for details.');
        return;
      } finally {
        setSubmitting(false);
      }
    },
    [amountToUnstake, network],
  );

  const handleDelegateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDelegateAddress(event.target.value);
    },
    [],
  );

  const handleUnstakingChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUnstaking(event.target.value);
    },
    [],
  );

  useEffect(() => {
    updateMinerInfo();
  }, [network.ethereum.selectedAddress]);

  const stakedTokens = minerInfo?.stakedTokens || 0;
  const balance = minerInfo?.clnyBalance || 0;

  const formattedStaked = parseFloat(
    network.ethers.utils.formatEther(stakedTokens),
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedBalance = parseFloat(
    network.ethers.utils.formatEther(balance),
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h2 className="text-lg font-semibold leading-7 text-gray-900">
        Current Staking Status
      </h2>
      <p className="mt-1 text-base font-semibold leading-7 text-gray-900">
        Staker address: <code>{minerInfo?.stakingAddress || 'Loading...'}</code>
        <br />
        Staked amount: <code>{formattedStaked}</code>
        <br />
        CLNY balance: <code>{formattedBalance}</code>
      </p>
      <StakingForm
        amountToStake={amountToStake}
        onChangeAmount={handleStakingChange}
        onSubmit={handleStakingSubmit}
        submitting={submitting}
      />
      <DelegateForm
        delegateAddress={delegateAddress}
        onChangeAddress={handleDelegateChange}
        onSubmit={handleDelegateSubmit}
        submitting={submitting}
      />
      <UnstakingForm
        amountToUnstake={amountToUnstake}
        onChangeAmount={handleUnstakingChange}
        onSubmit={handleUnstakingSubmit}
        stakedTokens={formattedStaked}
        submitting={submitting}
      />
    </div>
  );
};

const ReputationMiningSetup = () => {
  const network = useColonyNetwork();
  const [message, setMessage] = useState<string>(
    'Loading Reputation Mining Setup...',
  );

  setTimeout(() => {
    setMessage('Reticulating splines...');
    setTimeout(() => {
      setMessage('Hang on. Almost ready...');
    }, 3000);
  }, 3000);

  if (!network) {
    return <div>{message}</div>;
  }

  const { ethereum } = network;

  if (!ethereum.selectedAddress) {
    return <ConnectMetaMask />;
  }

  return <ReputationMiningForm network={network} />;
};

export default ReputationMiningSetup;
/* eslint-enable no-alert */
