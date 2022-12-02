---
description: Permissions within Colony
sidebar_position: 0
---

# Roles & Permissions

SOME TEXT WHY WE NEED ROLES, MAYBE MENTION REPUTATION BOOTSTRAPPING IN THE BEGINNING OF A COLONY AND SUCH THINGS.

## Available roles in Colony

### Root

*Root* allows you to take actions affecting the Colony as a whole, such as changing the colony details and minting tokens.

### Administration

*Administration* allows you to create and manage expenditures, but not to fund them.

### Architecture

*Architecture* allows you to set permissions in the active team, as well as changing the Team details. Architecture permission in Root allows you to create and edit teams.

### Funding

*Funding* allows you to fund expenditures, and transfer funds between Teams.

### Arbitration

*Arbitration* allows you to resolve disputes, make state changes, and punish bad behavior.

### Recovery

Recovery mode allows you to disable the colony in an emergency, update storage, and approve reactivation. The *Recovery* role is only effective in **Root**.

## Actions that require permissions

| Action | Required permission(s) | Method on contract | Notes |
| :------ | :------ | :------ | :------ |
| Move funds between teams (domains) | *Funding* | `moveFundsBetweenPots` | Requires the Funding permission in a parent domain of both domains (e.g. Root) |
| Create a team (domain) | *Architecture* | `addDomain` | |
| (Un-)set *Architecture* role for user | *Architecture*[^1] | `setArchitectureRole` | Applies only to subdomains |
| (Un-)set *Funding* role for user | *Architecture*[^1] | `setFundingRole` | |
| (Un-)set *Administration* role for user | *Architecture*[^1] | `setAdministrationRole` | |
| (Un-)set *Root* role for user | *Root*[^2] | `setRootRole` | |
| Add *Recovery*[^3] role to user | *Root* | `setRecoveryRole` | |
| Remove *Recovery*[^3] role from user | *Root* | `removeRecoveryRole` | |
| Mint tokens | *Root* | `mintTokens` | Only if colony has access to mint function on token |
| Upgrade colony | *Root* | `upgrade` | Upgrades the colony to a new version (non-reversible) |
| Install extension | *Root* | `installExtension` | |
| Upgrade extension | *Root* | `upgradeExtension` | |
| Deprecate extension | *Root* | `deprecateExtension` | |
| Uninstall extension | *Root* | `uninstallExtension` | |
| Make arbitrary transaction | *Root* | `makeArbitraryTransaction` | |
| Make multiple arbitrary transactions | *Root* | `makeArbitraryTransactions` | |
| Edit colony | *Root* | `editColony` | Edit a Colony's metadata |
| Burn tokens | *Root* | `burnTokens` | |
| Unlock the colony's token | *Root* | `unlockToken` | |
| Deprecate team/domain | *Architecture* | `deprecateDomain` | |
| Unlock the colony's token | *Root* | `unlockToken` | |
| Claim Colony funds | - | `claimColonyFunds` | Anyone can claim funds **for** the Colony that were send to it |

## One Transaction Payment (`OneTxPayment`) extension permissions

:::info
The One Transaction Payment extension contract itself needs the *Administration* and *Funding* permissions in the *Root* domain to function.
:::

| Action | Required permission(s) | Method on contract | Notes |
| :------ | :------ | :------ | :------ |
| Pay someone from a domain | *Funding*, *Administration* | `makePaymentFundedFromDomain` | |

## Motions & Disputes (`VotingReputation`) permissions

:::info
The Motions & Disputes extension contract itself needs the *Root*, *Administration*, *Arbitration*, *Architecture* and *Funding* permissions in the *Root* domain to function.
:::

| Action | Required permission(s) | Method on contract | Notes |
| :------ | :------ | :------ | :------ |
| Create a motion | - | `createMotion` | Anyone can create a motion as long as there is reputation within the motion's team |
| Stake a motion | - | `stakeMotion` | Anyone can stake a motion as long as they have enough tokens and reputation to do so |
| Finalize a motion | - | `finalizeMotion` | Anyone can finalize a motion |


## Some notes on permissions

This list of actions is not complete, but rather covers the most common actions that you come across within the UI.

* The *Root* role can only be assigned in the `Root` team/domain.

[^1]: Be aware that when you have the *Architecture* role in one team, you can only apply these actions in teams that are nested within the one you have the *Architecture* role in. E.g. you can't assign yourself the *Funding* role in the same team you have the *Architecture* role in

[^2]: When a user has the *Root* role, they can set permissions for the *Root* domain (which doesn't have any parents), essentially meaning that the limitation in [^1] is lifted.

[^3]: The *Recovery* role is a special role that enables a user to put the Colony into and out of Recovery Mode. Read more about Recovery Mode [here](recovery-mode.md)
