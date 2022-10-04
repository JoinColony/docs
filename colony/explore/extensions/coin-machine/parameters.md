---
description: >-
  The Parameters required when setting up this Extension and their Default
  Values.
---

# Parameters

:::danger
Coin Machine is moving to a stand alone product and is therefore no longer being included in the Colony DApp. The documentation for Coin Machine will also be moved to it's own Gitbook as required.
:::

As part of the installation process, you need to define certain parameters _that cannot be changed afterwards_, unless Coin Machine is uninstalled and installed again. This page describes these parameters and their default values.

:::caution
To modify the default parameters and better understand how these will affect your token sale, you may copy and experiment with this [Google Sheet](https://docs.google.com/spreadsheets/d/1ZCuFcwqI4S6ZK5OwTl1yN7AK8mjv5d\_V3g-\_kMen01Y/edit#gid=2013814210) to model your own sale.
:::

### Token To Be Sold

Select the token you wish to sell.

**Default value: The** [**native token**](../../key-concepts/native-tokens.md) **of your colony.**

:::note
If the token is not in this list, you must add it to your colony by going to [New Action / Manage Funds / Manage tokens](../../manage-funds/manage-tokens.md).
:::

### Purchase Token

Select the token you wish to receive in exchange for the token you are selling.

**Default value: XDAI.**

:::note
If the token is not in this list, you must add it to your colony by going to [New Action / Manage Funds / Manage tokens](../../manage-funds/manage-tokens.md).
:::

### Period Length

How long in hours each period of the sale should last.

**Default value: 1 hour**

### Window Size

This is the number of periods over which the moving average of your token’s price will be calculated. In the long term, 86% of the weighting will be in this window size. The higher the number, the slower the price will be to adjust.

**Default value: 24 periods**

### Target Per Period

The number of tokens to aim to sell per period. If this target is not met, the price in the next period will be lower. If this target is exceeded, the price in the next period will be higher.

**Default value: 200000 units of the** [**native token**](../../key-concepts/native-tokens.md) **of your colony**

### Maximum Per Period

The number of tokens to aim to sell per period. If this target is not met, the price in the next period will be lower. If this target is exceeded, the price in the next period will be higher.

**Default value: 400000 units of the** [**native token**](../../key-concepts/native-tokens.md) **of your colony**

### Per user purchase limit

The maximum percent of the total tokens that a single account can purchase.

**Default value: 100%**

### Starting Price

The price at which the first period’s tokens will be sold.

**Default value: 0.1 XDAI**
