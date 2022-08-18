---
description: What is Reputation in Colony, and how does it work?
---

# Reputation

### What is Reputation?

Reputation is an off-chain attribute that is calculated through on-chain data and verified by **Reputation Miners**, that stake **CLNY** to provide network updates.

Reputation is an attribute that quantifies a particular individual’s influence and is calculated from the sum of work that has been completed within the colony. Both **native tokens** and **reputation** are required to create motions, raise disputes, and vote.

![](../../.gitbook/assets/Frame-40.png)

**Reputation confers influence in a colony by mediating a member's ability to adjust various aspects of the organization.** Whether it is the ability to move funds, create new teams, or settle disputes, reputation determines influence by degrees.

### Can Reputation be Transferred?

Unlike tokens, reputation cannot be transferred between accounts and can only be gained or lost through receiving a colony's native token **(contributions)** or resolving disputes (**participating in the colony governance**).

### Earning Reputation

When a member of a colony receives a payment in the colony native tokens, they earn Reputation in that Team as well as all parent Teams, including Root.

**They do not earn any reputation in child Teams or sibling Teams.**

![Example of a colony structure.](../../.gitbook/assets/domains\_1-fcfb92e273169bc60b983c3a4f765839.png)

To make an example, earning reputation as a result of an internal token payment in **Backend**, will earn reputation in **Backend**, **Development,** and in **Root.**

**No reputation** will be earned in child Teams (**Ruby**, **Node.js)**, or in sibling or uncle teams (**Frontend** & **Design)**.

{% hint style="info" %}
Currently, Colony allows **only one layer of Teams**. Nested Teams are planned.
{% endhint %}

### Reputation Decay

One of the unique characteristics of reputation is that it **decays over time**. This **incentivizes consistent contribution** to a colony, and maintains decentralization by ensuring that reputation represents _recent_ contributions.

Every 600000 blocks, a user’s reputation in every team decays by a factor of 2. **This implies a 'reputation half-life' of about 3.5 months.** Reputation slowly decays on a per-block basis.

To know more about **Reputation Decay**, **Reputation Mining**, and **how it's calculated**, please refer to the [Whitepaper](https://colony.io/whitepaper.pdf).

