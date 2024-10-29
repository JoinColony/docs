---
description: Motions and Simple Decisions

sidebar_position: 4
---

# Motions and Simple Decisions

**Motions** are reputation-based governance processes that automatically trigger outcomes on the blockchain. 

Whether you're paying contributors, managing a DAO treasury, or creating teams, Motions allow your DAO to carry out actions without the need for a trusted third party. Motions follow the [Lazy Consensus](lazy-consensus.md) model.

Does your DAO want to decide on proposals that cannot be executed automatically? That's where Simple Decisions come in.

For a quick overview of Motions, [view this Twitter thread](https://twitter.com/joincolony/status/1598009846544191488?s=20&t=tDd7GViC_aeTrXr0ElZDRg). 

## How Motions work

Within Colony, a Motion is an on-chain proposal whose two sides (*Yay* or *Nay*) can be supported by staking the Colony's native token for that side. Motions always have an **action** attached to them which is a contract transaction that can take place in a Colony. 

For example, Motions could be created to move funds from one team to another, for paying someone that did work or minting new native tokens (even arbitrary transaction on any contract in the name of the Colony are supported!). Motions that pass (the outcome is *Yay*) will execute the **action** once they are finalized. If the outcome is *Nay*, there is no action taking place.

## The Motion lifecycle

### Step 1: Create a Motion
Anyone within a colony can start a Motion.

### Step 2: Stake the Motion

Once a motion is created, native tokens can be staked to support either of its sides (*Yay* or *Nay*). A user can only stake as many tokens for either side as they have reputation in the team the motion is created in. A side can be staked by the motion creator and an arbitrary number of additional users as long as they adhere to the minimum stake per user that was defined in the extensions parameters. The maximum amount a user can stake is also determined by the amount of reputation in the team in which the Motion takes place.

### Step 3: View the staking results and vote (if necessary)

After the staking phase (which has a predetermined runtime) one of these four cases can happen:

* **Case 1:** Yay side reaches minimum stakes, Nay side does not: the motion passed and can be finalized. All stakes are returned
* **Case 2:** Nay side reaches minimum stakes, Yay side does not: the motion failed and will not execute. All stakes are returned
* **Case 3:** Neither Yay or Nay side have reached minimum stakes: nothing happens. All stakes are returned.
* **Case 4:** Both Yay and Nay sides are activated. The Motion will go into Voting immediately (and will not wait out the staking period).
Voting

As soon as the voting phase starts, anyone with reputation in the team the Motion was created in can vote for a side. Votes are secret (i.e. they're encrypted using your private key), and weighted by reputation. Vote weight is proportional to the voter's reputation in the team in which the vote is occurring.

Voters receive a reward for voting proportional to their reputation in the team in which the vote is occurring. The reward comes from the stake provided by whichever side of the dispute loses. It doesn't matter whether the voter voters for the winning or the losing side, they are rewarded the same either way.

### Step 4: Reveal the votes

After the voting period is complete, the Reveal phase starts. Votes must be Revealed in order to be counted, and for the voter to receive their voter reward. The Reveal phase ends when either the time runs out, or everyone who has voted reveals their vote, whichever comes first.

:::caution STAKING PENALTIES
If you staked tokens for the side that eventually lost you will lose some of your stake. The amount lost will be smaller the closer the decision ultimately ended up being.
:::

## Simple Decisions

Simple Decisions lets your DAO use reputation-weighted governance in virtually any Yes or No question. The process is similar to Motions:

1.  A proposal is submitted: “Should our DAO do this?” with rationale provided in the description
2.  The proposal is backed by staking the colony’s native tokens
3.  After a period of time, if there are no objections, the proposal passes
4.  If there is an objection, a vote is triggered and DAO members vote with their reputation
5.  This process—known as [Lazy Consensus](lazy-consensus.md)—maximizes efficiency while remaining fair to contributors. DAO members are incentivized to participate in the process by the staked tokens: if they’re on the winning side of a vote, they can walk away with rewards.

## Rewards and Penalties

### Rewards

Those who participate in a voting round are eligible to claim a reward. The total voting reward is set to a percentage of all stakes of the Motion when the extension is initialized. Your reward will be scaled with your share of reputation of all reputation that voted for the winning side. The reward is not fixed until the voting period is over (the more people who vote, the smaller your reward gets). Once the votes are revealed, rewards are paid out. 

:::note
You get rewarded for voting regardless of whether you were on the winning side or not!
:::

### Penalties

Voting on a Motion cannot be penalized, but staking can be. You will receive a penalty when you stake the losing side of a vote. This penalty is used to cover the reward for voters. The amount you get back after the voting reward was deducted depends on how close the voting result was. 

The maximum penalty occurs if 100% of all votes are on the opposing side of what you staked. In this case you won't get any of your staked tokens back. If voting results in a 50:50 split, you get all stakes back after the voting reward was deducted. In between these extremes it's scaled linearly and is split up among the stakers proportional to the amounts that they've staked. Also the "base" penalty to cover the voting reward is split proportionally among the stakers on the losing side. The penalty that is not accounted for yet (because the voting reward is lower than the staking penalty) will be rewarded to the winning staking side (proportional to their stakes).

### EXAMPLE

There are 4 people in a domain:

- Alice has 30% reputation
- Bob has 30% reputation
- Charlie has 20% reputation
- Danielle has 20% reputation

There is a Motion and the stakes are as follows:

- Alice stakes 50 tokens for Yay
- Bob stakes 100 tokens for Yay
- Charlie stakes 90 tokes for Nay (an objection)
- Danielle stakes 60 tokens for Nay

The voting reward is set to 25% of all stakes of the Motion.

In this scenario, let's assume both sides are active and everyone votes for the side they staked for. Alice and Bob have 60% of the reputation and voted for Yay, so the Yay side wins. The voting reward of 25% means that 75 Tokens will be paid out as voting reward to all voters. The losing staking side is 150 Tokens total (from which the voting rewards will be paid). The losing stakers will get back a share of the rest of the remaining 75 tokens, depending on how close the vote was.  

It was a close call, so we are only 20% on the way to the maximum penalty of 75 tokens. That means the total additional penalty is 75 * 0.2 = 15 Tokens. This will be assigned proportionally to Charlie and Danielle. Also the 75 Tokens "base" penalty will be assigned proportionally: Charlie loses 45  Tokens and Danielle loses 30 Tokens.

The rewards are for voting are 75 Tokens total. These will be distributed proportional to the share of reputation that voted. So Alice and Bob get 0.3 75 = 22.5 Tokens each, and Charlie and Danielle get 0.2 * 75 = 15 Tokens each.

The penalty that was not paid out as rewards (90 Tokens total penalty, 75 Tokens paid out as rewards = 15 Tokens) will be paid out to the winning staking side, proportional to their stakes. Alice gets 5 Tokens and Bob gets 10 Tokens.

If we now add up everything that means:

- Alice gets 27.5 Tokens (22.5 from voting and 5 from Staking)
- Bob gets 32.5  Tokens (22.5 from voting and 10 from Staking)
- Charlie loses 39 Tokens (Loses 45 + 9 for staking and gains 15 for voting)
- Danielle loses 21  Tokens (Loses 30 + 6 for staking and gains 15 for voting)
