###<a name="company"></a> Company
A click on the company's name in the left sidebar opens the menu with all commands to manage all the company related data.

####<a name="company-overview"></a> Overview of the company
[![Company overview, roles and API-Access](images/AccountProfile/Overview.png)]((https://portal.fiskaltrust.fr/AccountProfile))
Screenshot-FR 28: Company overview, roles and API-Access | https://portal.fiskaltrust.fr/AccountProfile

After opening the menu with a click on the _company name_<img src="../images/Numbers/circle-1o.svg" width="24px"> the roles of the company can be changed with the command _Overview_<img src="../images/Numbers/circle-2o.svg" width="24px">. Further more the keys for the API-Access can be retrieved or reseted.

##### Roles
In this section all active roles of the company are listed.

##### Assign further roles to your company
This section enables or disables the following roles
* PosOperator <img src="../images/Numbers/circle-3o.svg" width="24px">
* PosDealer <img src="../images/Numbers/circle-4o.svg" width="24px">
* PosCreator <img src="../images/Numbers/circle-5o.svg" width="24px">
* Consultant <img src="../images/Numbers/circle-6o.svg" width="24px">

By clicking on one of the assigned switches the role can be activated. With this a contract has to be signed.

![Enabling role](images/AccountProfile/EnableRole.png)
Screenshot-FR 29: Enabling role

Enter the first and last name in the field _Signatory_<img src="../images/Numbers/circle-1o.svg" width="24px">. By activating the checkbox<img src="../images/Numbers/circle-2o.svg" width="24px"> the _Terms and Conditions_ and the _Privacy Policy_ of fiskaltrust must be accepted. To read them entirely the link on the words can be clicked.

A click on the Button [Sign] activates the role and signs the contract. For this an E-Mail with the contract as attachment and the confirmation of the new role is send to the active user.

![E-Mail with contract for the enabled role](images/AccountProfile/EnabledRole-eMail.png)
Screenshot-FR 30: E-Mail with contract for the enabled role

##### Download contract
![Enabled roles](images/AccountProfile/Overview-Enabled-Roles.png)
Screenshot-FR 31: Download contract

The contract - if gone lost - can be downloaded with the hyperlink beneath the name of the role<img src="../images/Numbers/circle-1o.svg" width="24px">.

##### Deactivating a role
Clicking on a active switch<img src="../images/Numbers/circle-2o.svg" width="24px"> disables this role. By disabling a role all associated functions are deactivated too. If the role _PosOperator_ is disabled and there are active PosSystems, these are not secured from this moment on.

![Deactivating a role](images/AccountProfile/DisableRole.png)
Screenshot-FR 32: Deactivating Role

For deactivating a role it is mandatory to enter the _first and last name_ again. This can be done in the field _Signatory_<img src="../images/Numbers/circle-1o.svg" width="24px">. With a click on the button [Sign] the selected role gets deactivated immediately. As confirmation an eMail with the resigning contract as attachment is send to the active user.

![E-Mail when deactivating a role](images/AccountProfile/DisableRole-eMail.png)
Screenshot-FR 33: E-Mail when deactivating a role

#### <a name="company-master-data"></a>Master data
![Edit the master data of a company](images/AccountProfile/Edit.png)
Screenshot-FR 34: Edit the master data of a company

For editing the data of a company the _company menu_<img src="../images/Numbers/circle-1o.svg" width="24px"> has to be opened and afterwards the command _Master data_<img src="../images/Numbers/circle-2o.svg" width="24px"> has to be activated.

All mandatory fields are marked with an asterisk (*) after the name. For preparing the fiskaltrust.SecurityMechanism, the usage of the fiskaltrust.Service and to be compliant with the law the _SIREN_<img src="../images/Numbers/circle-3o.svg" width="24px"> and the _UID number_<img src="../images/Numbers/circle-4o.svg" width="24px"> have to be entered and saved with the button [Save].

One of the two commercial number fields has to be completed and checked to use the fiskaltrust.SecurityMechanism according to the French laws.

##### <a name="siren-data-cgheck-passed"></a>SIREN data check passed
The SIREN is an unique identifier for French companies. Fiskaltrust uses this number as identifier for companies too. This 9-digit-number has to be entered in the field<img src="../images/Numbers/circle-3o.svg" width="24px"> and afterwards a click on the _Data Check: button on the right side of the field has to be performed.

![Passed data check for a SIREN](images/AccountProfile/Edit-SIREN-Data-Check-ok.png)
Screenshot-FR 35: Passed data check for a SIREN

If a correct SIREN is entered the data check performs positive, the button turns to green with a checkmark inside. By hovering over the button an information about the result is shown. After this the data-field for the SIREN is set as read-only and the SIREN cannot be changed furthermore for this account.

The check of the SIREN is done against the commercial register of France. The enterprise has to be inscribed there and be active. If the company is newly founded the inscription in the public database can least up to five days. Furthermore the entered company name in the first field has to match the one in the commercial register to perform a positive check.

###### Invalid SIREN
By entering an invalid SIREN, like a wrong digit or not exact nine digits, the check does not perform and the following error message is shown.

![data check for a SIREN with invalid number](images/AccountProfile/Edit-SIREN-Data-Check-invalid.png)
Screenshot-FR 36: data check for a SIREN with invalid number

###### Wrong SIREN
By entering a valid SIREN from an other company the check does not perform and the following error message is shown.

![data check for a SIREN from another company](images/AccountProfile/Edit-SIREN-Data-Check-wrong-company.png)
Screenshot-FR 37: data check for a SIREN from another company

###### Wrong company name
By entering the valid SIREN and the company name does not match, the check does not perform and the following error message is shown. The check for the company name is not case sensitive.

![data check for a SIREN with a wrong company name](images/AccountProfile/Edit-SIREN-Data-Check-wrong-companyname.png)
Screenshot-FR 38: data check for a SIREN with a wrong company name

##### UID data check
The UID number is the unique identifier of the company assigned by the French fiscal authorities. If the company has no SIREN, than this number is mandatory to use the fiskaltrust.Service according to the French laws. This number has to be entered in the field<img src="../images/Numbers/circle-4o.svg" width="24px"> and afterwards a click on the _Data Check: button on the right side of the field has to be performed.

##### UID data check passed
![Passed data check for an UID](images/AccountProfile/Edit-UID-Data-Check-ok.png)
Screenshot-FR 39: Passed data check for an UID

If a correct UID number is entered the data check performs positive, the button turns to green with a checkmark inside. By hovering over the button an information about the result is shown.

The check of the UID number is done against the official service offered by the European Union. The company has to be active and the number has to be assigned for more than seven days. Furthermore the entered company name in the first field has to match the one in the files of the financial authorities of France to perform a positive check.

For a correct UID check in France the company's address has to be in France (the field _Country_ contains `France` as value) and the UID has to start with the two letters `FR`.

##### Invalid UID number
By entering an invalid UID number, like a wrong digit or not the exact format, the check does not perform and the following error message is shown.

![data check for a UID with invalid number](images/AccountProfile/Edit-UID-Data-Check-invalid.png)
Screenshot-FR 40: data check for a UID with invalid number

##### Wrong UID number
By entering a valid UID from an other company the check does not perform and the following error message is shown.

![data check for a UID from another company](images/AccountProfile/Edit-UID-Data-Check-wrong-company.png)
Screenshot-FR 41: data check for a UID from another company

##### Wrong company name
By entering the valid UID and the company name does not match, the check does not perform and the following error message is shown. The check for the company name is not case sensitive.

![data check for a UID with a wrong company name](images/AccountProfile/Edit-UID-Data-Check-wrong-companyname.png)
Screenshot-FR 42: data check for a UID with a wrong company name

#### <a name="company-sales-area"></a>Sales area
This section is only available for fiskaltrust.Portal users with the role _PosDealer_. By checking the boxes before the named areas the company is shown in the public list of fiskaltrust.Partners on http://www.fiskaltrust.fr/partners.

![Select sales areas for partners](images/AccountProfile/Territory.png)
Screenshot-FR 43: Select sales areas for partners

#### <a name="company-outlets"></a>Outlets
Before starting with configuring the fiskaltrust.SecurityMechanism at least one outlet must be configured.

![List of outlets](images/AccountOutlet/AccountOutlet.png)
Screenshot-FR 44: List of outlets

For this the outletmanagement<img src="../images/Numbers/circle-2o.svg" width="24px"> in the  company menu<img src="../images/Numbers/circle-1o.svg" width="24px"> has to be opened.

Right after the registration as new PosOperator there is one outlet, the default outlet or headquater, listed. By clicking the [Edit]-Button<img src="../images/Numbers/circle-3o.svg" width="24px"> on the outer right of the line this outlet must be updated.

![Edit an outlet](images/AccountOutlet/Edit.png)
Screenshot-FR 45: Edit an outlet

In the outletmanagement all mandatory fields are marked with an asterisk. Further on the following field should be filled out or checked.

The _Name_<img src="../images/Numbers/circle-1o.svg" width="24px"> identifies the outlet in all lists used in the fiskaltrust.Portal. This field is only for internal use and helps you to identify the outlet. The _Outlet number_<img src="../images/Numbers/circle-2o.svg" width="24px"> is an internal number for the fiskaltrust.Portal. But the number has to be an integer and unique for each outlet. With this identifier the CashBox (_**TODO LINK**_) can be connected to the outlet.

The field _Location ID_<img src="../images/Numbers/circle-3o.svg" width="24px"> contains in France the SIRET of the outlet. To use this field correctly the SIREN of the company has to be saved upfront in the [_Master Data_](#company-master-data). The first 9 digits of the SIRET are exactly the SIREN the following four digits are a given number from the French authorities and the last digit is a checksum. All 14 digits must be entered here and afterwards a _Data Check_<img src="../images/Numbers/circle-5o.svg" width="24px">. This check act exactly like the [_SIREN Data Check_](#siren-data-cgheck-passed) in the _Master Data_. Zo be able to use the outlet for a CashBox this data check has to be passed positive.

The fields shown at <img src="../images/Numbers/circle-4o.svg" width="24px"> _Address_, _Postal code_ and _City_ are not mandatory by the ft.Portal but should be completed. For a control by the financal authorities this can be a prove for correct data management. Furtheron this field can be used from the fiskaltrust.Service to print the outlet's address on any receipt.

Once all data is completed and the data check performed positive the outlet data can be send to the storage with the [Save]-Button.<img src="../images/Numbers/circle-6o.svg" width="24px">
