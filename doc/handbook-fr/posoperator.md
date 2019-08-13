## PosOperator

### Invitation of PosOperators by PosDealers

The invitation of a PosOperator can only be made by a PosDealer, but not by a PosCreator or consultant.

However, the role of a PosDealer can also be activated by these companies and thus taken over in parallel to another role. (see chapter "[Roles](company.md#roles)")

[![https://portal.fiskaltrust.fr/PosOperator/](images/PosOperator/PosOperator.png "https://portal.fiskaltrust.fr/PosOperator" )](https://portal.fiskaltrust.fr/POSOperator)
PosOperator - Overview

By opening the PosOperator menu<img src="../images/Numbers/circle-1o.svg" width="24px"> an _Overview_<img src="../images/Numbers/circle-2o.svg" width="24px"> with the assigned PosOperators is shown.

The assignments of the PosOperators can be found under the menu item _Invitation_<img src="../images/Numbers/circle-3o.svg" width="24px">.

There are two ways to add/assign PosOperators to a PosDealer:

1. For adding a single PosOperator, see chapter [_Add PosOperator_](#add-posoperator).
2. Adding several PosOperators by importing a CSV file with _Invitation_.

[![https://portal.fiskaltrust.fr/PosOperator/PosOperators](images/PosOperator/PosOperators.png "https://portal.fiskaltrust.fr/PosOperator/PosOperators" )](https://portal.fiskaltrust.fr/POSOperator)
Invite PosOperators to a PosDealer account

<img src="../images/Numbers/circle-1o.svg" width="24px"> The CSV file is to be imported and selected via [Choose File].
<img src="../images/Numbers/circle-2o.svg" width="24px"> Then the import is carried out by clicking on [Import].
<img src="../images/Numbers/circle-3o.svg" width="24px"> The necessary structure of the CSV file is described using an example. This example can be obtained via [Download demo CSV file].

| Fields of the CSV file | Description | Mandatory |
|------------------------|-------------|:---------:|
| ContactFirstName | First name of the primary contact | yes |
| ContactLastName | Last name of primary contact | yes |
| ContactTitle | (Academic) Title of primary contact (before name) | no |
| ContactSuffix | Name suffix of the primary contact (after the name) | no |
| ContactEMail | Eail address of the primary contact<br>**IMPORTANT!**<br>This email address will be the user's login to this newly created company. | yes |
| ContactMobilePhone | Mobile phone number of the primary contact | no |
| AccountName | Company name, this should be written like in the commercial register | yes |
| AccountWeb | URL of the company's website | no |
| AccountEMail |Generel email address of the company<br>**IMPORTANT!**<br>All information about financial messages and all invoices will be sent to this email address! | no |
| AccountPhone | Company phone number | no |
| AccountAddressLine1 | Address, first line of the company | no |
| AccountAddressLine2 | Address, second line of the company | no |
| AccountPostalCode | Postcode of the company | yes |
| AccountCity | Address, first line of the company | yes |
| AccountCountry | Address, first line of the company | yes |
| AccountIdVat | UID number of the company.<br>**IMPORTANT!**<br>This is one of the identification criterias for legalisation of the service. | yes |
| AccountIdFibu| The _SIREN_ of the company<br>**IMPORTANT!**<br>This is one of the identification criterias for legalisation of the service. | yes |
| AccountIdGln | GLN of the company. | no |
| AccountIdTax | Tax office tax number of the company. | yes |

Not all of the fields _AccountIdVat_, _AccountIdTax_ and _AccountIdFibu_ are mandatory. Only one of the three fields have to be completed. It is recommended to use the field _AccountIdFibu_.

A pdf-file can be first choosen<img src="../images/Numbers/circle-4o.svg" width="24px"> and then imported<img src="../images/Numbers/circle-5o.svg" width="24px"> a PDF document, which is sent to the PosOperators as an attachment on the email invitations. This PDF document can be individually adapted to the rollout concept.

Before sending the invitation to all PosOperators listed in the csv file a text message<img src="../images/Numbers/circle-6o.svg" width="24px"> can be added to this invitation email.

By accepting the invitation the PosOperator gets assigned to the PosDealer's account and this get some rights on the PosOperators account. This surrogating rights can be defined in the claims list<img src="../images/Numbers/circle-7o.svg" width="24px">.

##### Error message importing a csv-file for invitations
![Import error on PosOperator invitations](images/PosOperator/Import.png "https://portal.fiskaltrust.at/PosOperator/CreatePosOperator/")
If not all of the mandatory fields of the csv file are completed an error message with the wrong or missing data is shown.

#### Add PosOperator<a name="add-posoperator"></a>

[![https://portal.fiskaltrust.fr/PosOperator/CreatePosOperator/](images/PosOperator//CreatePosOperator.png "https://portal.fiskaltrust.fr/PosOperator/CreatePosOperator/")](https://portal.fiskaltrust.fr/PosOperator/CreatePosOperator/)
Add PosOperator manually

PosOperators can be added manually using this function, by clicking the [+&nbsp;Add]-button in the PosOperator's list head section. This is particularly interesting for the on-site support given by the PosDealer if a PosOperator wants to use the ft.Services immediately - in connection with the commissioning of a POS-System.

The following fields are mandatory fields and must therefore be filled in:

- Contact First name
- Contact Surname
- Contact Email
- Company's name
- Zip code
- City
- location

This is to guarantee that the PosOperator can be found correctly in the ft.Portal via his email address and can be assigned to the PosDealer.

#### Managing the invitations
[![https://portal.fiskaltrust.fr/PosOperator/PosOperators/](images/PosOperator/PosOperators-Overview.png "https://portal.fiskaltrust.fr/PosOperator/PosOperators/")](https://portal.fiskaltrust.fr/PosOperator/PosOperators/)
Assigning, editing and deleting a PosOperator 

<img src="../images/Numbers/circle-1o.svg" width="24px"> Status of the invitation:
- ![Notsent](../images/Buttons/002.png "Notsent") Email invitation has not been sent yet.
- ![Error](../images/Buttons/002.png "Error") The data of the PosOperator is not correct and can not be assigned to the PosDealers account. It must be corrected with ![Edit](../images/Buttons/005.png "Edit").
- ![Checkmark](../images/Buttons/003.png "Checkmark") Email invitation was sent by clicking on ![Email](../images/Buttons/004.png "Email").

<img src="../images/Numbers/circle-2o.svg" width="24px"> By clicking on [Assign all cash register users] the email invitation can be sent to **all** not yet invited PosOperators.

<img src="../images/Numbers/circle-3o.svg" width="24px"> By clicking on [+&nbsp;Add] a [manual invitation](#add-posoperator) can be down.

<img src="../images/Numbers/circle-4o.svg" width="24px"> A click on [Protocol](#protocol) shows the history of invitations of this account.

<img src="../images/Numbers/circle-5o.svg" width="24px"> By clicking on ![Email](../images/Buttons/004.png "Email") the email invitation can be sent to a single PosOperator. The email invitation can be sent as an attachment with an individually designed PDF document.
![example of an invitation email](images/PosOperator/PosOperator-Invitation-Email.png)
Example email invitation of a PosOperator.

<img src="../images/Numbers/circle-6o.svg" width="24px"> The individual PosOperator can be edited again by clicking on ![Edit](../images/Buttons/005.png "Edit").

<img src="../images/Numbers/circle-7o.svg" width="24px"> The individual PosOperator can be removed by clicking ![Remove](../images/Buttons/006.png "Remove")

<img src="../images/Numbers/circle-8o.svg" width="24px"> The resend-button ![Resend](../images/Buttons/016.png "Resend") sends the invitation again to the PosOperator's email address.

<img src="../images/Numbers/circle-9o.svg" width="24px"> By entering text in the search field the list of PosOperators gets filtered and only the PosOperators matching the entered text are shown.

#### Protocol of invitations<a name="protocol"></a>
[![https://portal.fiskaltrust.fr/PosOperator/](images/PosOperator/PosOperatorsHistory.png "https://portal.fiskaltrust.fr/PosOperator/")](https://portal.fiskaltrust.fr/PosOperator/)
Protocol of PosOperator invitations

<img src="../images/Numbers/circle-1o.svg" width="24px"> The start date  of the log overview can be restricted using this field.
<img src="../images/Numbers/circle-2o.svg" width="24px"> The last date  of the log overview can be restricted using this field.
<img src="../images/Numbers/circle-3o.svg" width="24px"> By clicking on [Invoke&nbsp;protocol] the overview is filtered by the entered dsates. If the two fields are empty the whole protocol without any filter is shown
<img src="../images/Numbers/circle-4o.svg" width="24px"> By clicking on the button this window gets closed and the _Invitation_ module is shown.
<img src="../images/Numbers/circle-5o.svg" width="24px"> Entering a text filters the overview. By deleting all entered data in the search field the whole overview data is shown.
<img src="../images/Numbers/circle-6o.svg" width="24px"> Status of the invitation:
- ![Not sent](../images/Buttons/002.png "Not sent") Email invitation has not been sent yet.
- ![Error](../images/Buttons/002.png "Error") The data of the PosOperator is not correct and can not be assigned to the PosDealers account.
- ![Checkmark](../images/Buttons/003.png "Checkmark") Email invitation was sent.

<img src="../images/Numbers/circle-7o.svg" width="24px"> Available commands for this PosOperator:
- ![Details](../images/Buttons/007.png "Details") Detailed information about this contact is shown.
![Details of an invitation](images/PosOperator/DetailsInvitation.png)
- ![Resend](../images/Buttons/040.png "Resend") Sends the invitation to this contact again.
- ![Delete](../images/Buttons/006.png "Delete") Deletes this row from the protocol.
- ![Copy](../images/Buttons/041.png "Copy") Shows a window with the direct link for the invitation. This can be copyied in the clipboard and send by direct message.
![Direct link of an invitation](images/PosOperator/PosOperator-Invitation-Link.png)