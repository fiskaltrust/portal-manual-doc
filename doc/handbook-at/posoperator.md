---
slug: /portal-manual/austria/posoperator
title: PosOperator
---

## PosOperator

:::danger **No maintenance anymore**

These manuals are no longer maintained! 

In case of any questions, we encourage you to refer to our current **[fiskaltrust Documentation Platform](https://docs.fiskaltrust.cloud/de/ "fiskaltrust Documentation Platform")**.  
For further details, check the corresponding Knowledge Base Articles (KBA), which can be found on the fiskaltrust.Portal.

:::

### Invitation of PosOperators by PosDealers

The invitation of a PosOperator can only be made by a PosDealer, but not by a manufacturer or consultant.

However, the role of a PosDealer can also be activated by these companies and thus taken over in parallel to another role. (see chapter "[Company Role PosCreator](company.md#company-role-poscreator)")

[![https://portal.fiskaltrust.at/POSOperator](images/portal-sandbox.fiskaltrust.at/POSOperator/001.png "https://portal.fiskaltrust.at/POSOperator" )](https://portal.fiskaltrust.at/POSOperator)
Screenshot-AT 45: Invitation of the PosOperators by a PosDealer

![Number 1](../images/Numbers/1.png) The assignments of the PosOperators can be found under the menu item "Invitations".

There are two ways to add PosOperators to a PosDealer:

1. ![Number 2](../images/Numbers/2.png) add a single PosOperator see chapter [Add PosOperator](#add-posoperator).
2. ![Number 3](../images/Numbers/3.png) add several PosOperators by importing a CSV file.
    1. ![Number 4](../images/Numbers/4.png)  The CSV file is to be imported and selected via \[Choose File\].
    2. ![Number 5](../images/Numbers/5.png)  Then the import is carried out by clicking on \[Import\].
    3. ![Number 6](../images/Numbers/6.png)  The necessary structure of the CSV file is described using an example. This example can be obtained via \[Download demo CSV file\].

| Fields of the CSV file | Description |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ContactFirstName | First name of the primary contact |
| ContactLastName | Last name of primary contact |
| ContactTitle | (Academic) Title of primary contact (before name) |
| ContactSuffix | Name suffix of the primary contact (after the name) |
| ContactEMail | E-mail address of the primary contact IMPORTANT\! This e-mail address will be the user's login to this newly created company.                     |
| ContactMobilePhone | Mobile phone number of the primary contact |
| AccountName | Company name |
| AccountWeb | URL of the company's website |
| IMPORTANT: All information about financial online messages and all invoices will be sent to this e-mail address\!        |
| AccountPhone | Company phone number |
| AccountAddressLine1 | Address, first line of the company |
| AccountAddressLine2 | Address, second line of the company |
| AccountPostalCode | Postcode of the company |
| AccountCity | Address, first line of the company |
| AccountCountry | Address, first line of the company |
| AccountIdVat | UID number of the company; This is important for the Finanz Online-Meldungen\! AccountIdFibu; company register number (if available) |<
| AccountIdGln | GLN of the company ([https://firmen.wko.at](https://firmen.wko.at)) |
| AccountIdTax | Tax office tax number of the company 2 digits tax office number, 3 digits "/" 4 digits tax number = 9 digits without special characters and without spaces. |

![Number 7](../images/Numbers/7.png) **Text:** "PDF document as an attachment to the e-mail invitation"

Import a PDF document, which is sent to the PosOperators as an attachment on the e-mail invitations. This PDF document can be individually adapted to the rollout concept (see chapter [Example of a PDF attachment](#example-of-a-pdf-attachment))

#### Add PosOperator

[![https://portal.fiskaltrust.at/PosOperator/CreatePosOperator/](images/portal-sandbox.fiskaltrust.at/PosOperator/CreatePosOperator/001.png "https://portal.fiskaltrust.at/PosOperator/CreatePosOperator/")](https://portal.fiskaltrust.at/PosOperator/CreatePosOperator/)

Screenshot-AT 46: Add PosOperator

PosOperators can be added manually using this function. This is particularly interesting for the on-site support given by the PosDealer if a PosOperator wants to use the ft.services immediately - in connection with the commissioning of a cash register.

The following fields are mandatory fields and must therefore be filled in:

- Contact E-Mail
- Contact First name
- Contact Surname
- company's name
- zip code
- location

This is to guarantee that the PosOperator can be found correctly in the ft.Portal via his e-mail address and can be assigned to the PosDealer.

[![https://portal.fiskaltrust.at/PosOperator/PosOperators/](images/portal-sandbox.fiskaltrust.at/PosOperator/PosOperators/002.png "https://portal.fiskaltrust.at/PosOperator/PosOperators/")](https://portal.fiskaltrust.at/PosOperator/PosOperators/)
Screenshot-AT 47: Assigning, editing and deleting a PosOperator 

![Number 1](../images/Numbers/1.png) Status of the invitation:

- ![Notsent](../images/Buttons/002.png "Notsent") Email invitation has not been sent yet. 
- ![Checkmark](../images/Buttons/003.png "Checkmark") Email invitation was sent by clicking on ![Mail](../images/Buttons/004.png "Mail") or ![Edit](../images/Buttons/005.png "Edit").

![Number 2](../images/Numbers/2.png) By clicking on ![Mail](../images/Buttons/004.png "Mail") the e-mail invitation can be sent to a single PosOperator. The e-mail invitation can be sent as an attachment with an individually designed PDF document.

![Number 3](../images/Numbers/3.png) By clicking on \[Assign all cash register users\] the e-mail invitation can be sent to ALL not yet invited PosOperators.

![Number 4](../images/Numbers/4.png) The individual PosOperator can be edited again by clicking on ![Edit](../images/Buttons/005.png "Edit").

[![portal.fiskaltrust.at/PosOperator/](images/portal-sandbox.fiskaltrust.at/PosOperator/EditPosOperator/001.png "https://portal-sandbox.fiskaltrust.at/PosOperator/")](https://portal-sandbox.fiskaltrust.at/PosOperator/)
Screenshot-AT 48: Edit PosOperator

![Number 5](../images/Numbers/5.png) The individual PosOperator can be removed by clicking ![Remove](../images/Buttons/006.png "Remove")

![Number 6](../images/Numbers/6.png) By clicking \[Protocol\)] the historical sequence of the assignment can be called up.

[![https://portal.fiskaltrust.at/PosOperator/](images/portal-sandbox.fiskaltrust.at/PosOperator/PosOperatorHistory/001.png "https://portal.fiskaltrust.at/PosOperator/")](https://portal.fiskaltrust.at/PosOperator/)
Screenshot-AT 49 Protocol overview of the historical sequence of assignments 

![Number 1](../images/Numbers/1.png) The period of the log overview can be restricted using this function.

![Number 2](../images/Numbers/2.png) By clicking ![Info](../images/Buttons/007.png "Info") the detailed data for the invitation of a PosOperator can be called up.

[![https://portal.fiskaltrust.at/PosOperator/](images/portal-sandbox.fiskaltrust.at/PosOperator/DetailsInvitation/001.png "https://portal.fiskaltrust.at/PosOperator/")](https://portal.fiskaltrust.at/PosOperator/)
Screenshot-AT 50: Detailed data of the protocol from the invitation of a PosOperator

The following e-mail invitation is sent:

![](images/portal-sandbox.fiskaltrust.at/Email/009.png)
Screenshot-AT 51: Example e-mail invitation of a PosOperator.

PosOperator

  By clicking on the link, the portal login is called up and the PosOperator has to register as a new user and as a new company or log in with his existing data. (see chapter "[Registration and Login](registration-login.md)")

#### Example of a pdf-attachment

PosDealer name

street

Zip Code - City

client name

street

Zip Code - City

Cash register safety device for 1.4.2017

Dear customer\! Dear Customer\!

With this letter we would like to inform you about the procedure **to retrofit your cash register system with the prescribed manipulation protection** to meet the cash register obligation set April 1. 2017 with **fiskaltrust**.

1. cash register software:

The XXX version must be installed ... This costs EUR XXX.

2. important steps for setting up the manipulation protection with fiskaltrust:
    1. registration of your company at https://portal.fiskaltrust.at (according to e-mail)
    2. installation of the free fiskaltrust security device
    3. acquisition of a signature creation device from the trust service provider
    4. registration of the cash register via Finanz Online and examination of the start receipt
3. start of live operation set April 1. 2017 at the latest
4. there is a bonus of at least € 200,- for purchase or conversion. (bonus payments ended with 31st of december 2017)

> fiskaltrust ensures compliance with the law and offers interesting additional products to simplify and optimise the legal obligations.

We recommend the product fiskaltrust.Carefree as a cost-effective all-in-one package.

Further information can be found on the supplement or can also be found here:

https://www.fiskaltrust.at

[https://www.bmf.gv.at/steuern/selbststaendige-unternehmer/Sicherheitseinrichtung_in_Registrierkassen.html](https://www.bmf.gv.at/steuern/selbststaendige-unternehmer/Sicherheitseinrichtung_in_Registrierkassen.html "https://www.bmf.gv.at/steuern/selbststaendige-unternehmer/Sicherheitseinrichtung_in_Registrierkassen.html") <!-- markdown-link-check-disable-line -->

If you have any questions please do not hesitate to contact us

Contact us

How do I get to the
manipulation protection
for my cash register?

Installation of the technical safety device

fiskaltrust - All-In-One

All processes are optimally supported in the **free fiskaltrust.Portal**:

1. You are a **PosOperator** recieved an invetation email from the **PosDealer**
2. Free **Registration** as a user and company on [https://portal.fiskaltrust.at](https://portal.fiskaltrust.at)
3. **Assignment** of the company to the PosDealer, tax consultant by e-mail invitations
4. **Configuration** of the cash register in the fiskaltrust.Portal
5. Acquisition of a signature creation device (chip or online)
6. **Commissioning** Safety device = creation of start receipt
7. **Reporting** Notification of the cash register and signature creation device via Finanz Online
8. **Checking** the start receipt via Finanz Online or BMF-App
9. Legally compliant audit-proof data backup 
10. Preparation of the **monthly receipts**
11. Preparation of **yearly receipt** and verification via Finanz Online
12. **Notification** of failures, recommissioning or deregistrations via Finanz Online

![](images/portal-sandbox.fiskaltrust.at/002.png)
