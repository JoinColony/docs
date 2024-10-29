---
description: >-
  The Parameters required when setting up this Extension and their Default
  Values.

sidebar_position: 2
---

# Parameters

To use Governance, it must first be enabled. Enabling this extension requires that you set some additional parameters. These parameters cannot be changed after enabling it. To do so, you must uninstall the extension, and then install and enable it again with new parameters. Note that uninstalling the extension results in all Motions being lost.

:::note
If you intend to set up a colony **for testing purposes only**, you may want to adjust some of the default settings in order to speed up some processes while testing in real-time with other users, such as on a call. _For that purpose, we recommend setting the "End Vote Threshold" to 50% and the duration of all four phases to 0.1 hours._ For asynchronous testing and a more realistic experience, you may want to stick the default values listed below.
:::

### Required Stake

_What percentage of the team’s reputation, in token terms, should need to stake on each side of a motion?_

**Default value: 1%**

E.g., if a team has 100 reputation points between them, and the Required Stake is 1%, then 1 token would need to be staked to either support or object to a motion.

### Voter Reward

_In a dispute, what percentage of the losing side’s stake should be awarded to the voters?_

**Default value: 20%**

E.g., if both the colony members who create a motion, and the colony members who raise an objection stake 50 tokens, and the Voter Reward is 20%, then the voters will share 20 tokens between them, proportional to their reputations (i.e. 20% of the combined stake of both side of the dispute).

For unbalanced voting outcomes the reward calculation is on a linear scale between 0 and 100% of the defined Voter Reward. The remainder will be shared between the stakers proportional to the outcome of the vote. 

The calculation for this is: 

_rewardFactor = (2 \* Winning Votes Count / (Winning Votes Count + Losing Votes Count)) - 1_/
_totalReward = rewardFactor \* Voter Reward Value_

### Minimum Stake

_What is the minimum percentage of the total stake that each staker should have to provide?_

**Default value: 1%**

E.g., 1% means anybody who wishes to stake must provide at least 1% of the Required Stake. 100% means that one person must provide the entire stake.

### End Vote Threshold

_At what threshold of reputation having voted should the voting period to end?_

**Default value: 70%**

E.g., If the End Vote Threshold is 70%, then the voting period will end as soon as 70% of the reputation in a team has cast their vote. This helps votes get settled faster. If you want to ensure everyone gets to vote if they want to, set the value to 100%.

:::note
For testing purposes, we recommend a value of 50%.
:::note

### Staking Phase Duration

_How long do you want to allow each side of a motion to get staked?_

**Default value: 72 hours**

E.g., if the staking phase is 72 hours, then once a motion is created members will have 72 hours to provide the full stake required to back the motion. If the motion does not receive the full stake in 72 hours, it will fail. Once the motion has been fully staked, the staking period will reset and members will have a further 72 hours in which to “Object” by staking against the motion if they wish to take the decision to a vote. If the full stake for the objection is not staked, then the motion will automatically pass.

:::note
For testing purposes, we recommend a value of 0.1 hours.
:::

### Voting Phase Duration

_How long do you want to give members to cast their votes?_

**Default value: 72 hours**

E.g., if the vote duration is 72 hours, then after both sides of the motion are fully staked, members with reputation in the team will have 72 hours in which to vote, unless the “End Vote Threshold” is reached, in which case the vote will end early.

:::note
For testing purposes, we recommend a value of 0.1 hours.
:::

### Reveal Phase Duration

_How long do you want to give members to reveal their votes?_

**Default value: 72 hours**

E.g., votes in colony are secret while the vote is ongoing, and so must be revealed once votes have been cast. If the reveal phase is 72 hours long, then members will have 72 hours to reveal their votes, otherwise their votes will not be counted and they will not receive a share of the voter reward. If all votes are revealed before the end of the reveal phase, then the reveal phase will end.

:::note
For testing purposes, we recommend a value of 0.1 hours.
:::

### Escalation Phase Duration

_How long do you wish to allow for members to escalate a dispute to a higher team?_

**Default value: 72 hours**

E.g., if the escalation phase is 72 hours, once the outcome of a vote is known, if the loser feels the outcome was for any reason incorrect, then they will have 72 hours in which to escalate the dispute to a higher team in the colony by increasing the stake to meet the required stake of that higher team.

:::note
For testing purposes, we recommend a value of 0.1 hours.
:::

:::caution
Please note that Dispute escalation is not yet supported.
:::
