---
title: Web standalone
sidebar_label: Web standalone
---

## 1. Overview

### Standalone web payments

Standalone web payments are completely handled by LexisNexis services. No front-end web development is required by the partner.  These payments can as simple as a blank form where a customer types in all information or LexisNexis can leverage existing partner data repositories, data sources, etc. in order to validate amounts owed, account numbers, etc.

### Validated payments

LexisNexis Payment Solutions can interface with the agency system to validate the amount the consumer owes the agency. LexisNexis develops and hosts all of the web pages to collect payment. The LexisNexis VitalChek web page sends the “account/citation/tax id/etc” look up request to the agency hosted web service. The agency looks up the account and replies to the LexisNexis web page with the predefined information.


## 2. Agency requirements

The agency must be able to provide a hyperlink that will direct customers to LexisNexis for payment.

For validated payments LexisNexis supports various methodologies to validate account numbers and payment amounts.

If the validated payment solution requires web services from LexisNexis to the agency, then a minimum of TLS 1.2 is required (see HTTPS – using 2048-bit RSA Encryption) ).


## 3. Workflows

### 3.1 Standalone payment workflow

1.	Select the product on the LexisNexis Payment Solutions page.
2.	Enter product information (including amount). The product information format is validated but the information (including amount) is NOT validated.

<img src="/docs/assets/test1.png" width="100%">

### 3.2 Validated payment workflow

xxxxxxxxxxxx
