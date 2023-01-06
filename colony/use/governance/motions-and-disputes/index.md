---
description: Now we govern our DAO.

sidebar_position: 4
---

# 🧩 Lazy Consensus Extension

The Lazy Consensus extension serves as the core of your DAO governance. This extension allows any member of your colony to propose a _Motion_ to take an _Action_ that will pass after a security delay unless somebody _Objects_. This applies to all Actions, such as creating an expenditure, managing funds, or managing teams.

The Lazy Consensus model was designed to make DAO decision-making as efficient and fair as possible. Early iterations of DAO governance models had members vote on every single decision, which is incredibly inefficient. In a colony, a vote only needs to be triggered if there is a disagreement. If there are no objections, a proposed action can go through without the need for a governance vote. 

### The Lazy Consensus Process

How it works:

* A DAO member creates a Motion to carry out an action such as, “Pay Alice 100 xDAI”
* A staking period begins, where the colony’s native tokens are used to back the Motion
* If the Motion has been adequately staked and no objections are raised, it passes and is executed automatically
* If someone objects to the Motion, they can raise an objection and trigger a reputation-weighted governance vote
* DAO members who vote can be awarded a portion of the staked tokens after voting concludes


For more on the rationale behind Lazy Consensus, see [**this page**](../../../learn/dao-builders-toolkit/lazy-consensus.md).
