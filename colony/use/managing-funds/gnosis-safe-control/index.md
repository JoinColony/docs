---
description: Control a Safe (formerly Gnosis Safe) on another chain using your Colony’s governance mechanisms.
sidebar_position: 6
---

# Safe Control (Gnosis Safe)

:::info
Currently supported chains are **Ethereum Mainnet** and **Binance Smart Chain** (BSC/BNB). More chains will be added as suitable bridges are made available.
:::

![Colony Safe Integration](../../assets/colony-safe-integration.png)

## Why Colony and Safe?

Safe (formerly Gnosis Safe) has established itself as a secure way to store and manage crypto assets for individuals and organizations. Safe provides a multi-signature framework, whereby in order for transactions to be made within a Safe, a set number of on-chain signatures are required to approve it. This makes self-custodial fund management more secure, especially for DAOs with large treasuries.

Integrating a Safe with your colony unlocks the ability to use DAO governance mechanisms to manage assets held within a Safe. This makes for a more decentralized, scalable, and trustless fund management system.

### How can it be used?

Essentially, all actions you would like to perform from your Safe can now be controlled by a colony using Colony's governance mechanisms—most notably the [Motions](../../governance/motions-and-disputes/) process.

These actions include basic features such as transferring tokens and managing NFTs, to advanced capabilities such as arbitrary contract interactions. In the past, DAO treasury Safes have relied on a trusted band of multi-sig holders (usually core team members or elected treasury managers). Now, DAOs can decentralize the management of treasury Safes by utilizing Colony's governance processes and giving every DAO contributor a seat at the table.

This integration also works across chains, so colonies hosted on the Gnosis Chain can manage Safes on Ethereum Mainnet or BSC.

### How it all works

This integration works using an Arbitrary Message Bridge (AMB) for cross-chain communication and a Safe feature called Modules.

**Arbitrary Message Bridge (AMB):** The purpose of an AMB is to transfer arbitrary data between two networks, for example between Ethereum and Gnosis Chain. This data can be used to send a message to a contract on the other network and execute a transaction. You can [read more about AMBs here](https://docs.tokenbridge.net/amb-bridge/about-amb-bridge).

**Safe Modules**: Modules allow for external contracts to interact with a Safe and initiate transactions which can skip the need for the required number of signatures to approve the transaction. This elevates the functionality of a Safe to work with more scalable governance mechanisms.

### Next step

The following pages will detail the steps required to set up a Safe to be controlled by your colony.

See [**adding a Safe.**](adding-a-safe.md)
