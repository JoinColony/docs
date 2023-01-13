---
description: Control your Safe from within your colony.
sidebar_position: 1
---

# Safe Control (Gnosis Safe)

## Control a Safe (formerly Gnosis Safe) on another chain using your Colony’s governance mechanisms.

:::tip
Currently supported chains are Ethereum Mainnet and Binance Smart Chain (BNB). More chains will be added as suitable bridges are made available.
:::

## Why Colony and Safe? 

Safe has established itself as a secure way to store and managed personal funds for individuals to massive treasuries for teams, and organisations. Providing a multi-signature framework, whereby in order for transactions to be made within a Safe, a set number of on-chain signatures are required to approve it. Making self-custodial fund management more secure.
The power of integrating a Safe with Colony, is you are then able to unlock the governance mechanisms of a DAO built on Colony to also be used to manage funds. Making for a more decentralised, scalable, and trustless fund management system.

## How can it be used?

Essentially, all actions you would like to perform from your Safe can now be controlled by a Colony and Colony's governance mechanism, most notably the Motions process.
So, anything from a simple token transfer, to managing NFTs held in a Safe, to arbitrary contract interactions from a Safe.
The integration also works across chains, so, you can have a Colony on the Gnosis Chain and use it to manage funds on Ethereum Mainnet.

## How it works

This integration works using an Arbitrary Message Bridge (AMB) for cross-chain communication and a Safe's feature called Modules.

**Arbitrary Message Bridge (AMB):** The purpose of an AMB is to transfer arbitrary data between two networks, for example between Ethereum and Gnosis Chain). This data can be used to send a message to a contract on the other network and execute a transaction. You can read more about AMBs here.

**Safe Modules:** Modules allow for external contracts to interact with a Safe and initiate transactions which can skip the need for the required number of signatures to approve the transaction. This elevates the functionality of a Safe to work with more scalable goverance mechanisms.

## Next steps

The following pages will detail the steps required to set up a Safe to be controlled by your Colony.