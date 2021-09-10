---
slug: /portal-manual/general/users-and-company/company
title: Company
---

# fiskaltrust.Portal
## User and Company
### Company

#### Active roles and contractual relationships including API-access

![Active roles and API-access](images/AccountProfile/overview-active-roles-third-parties.png)
Overview - All roles and contractual relationships with fiskaltrust

![Number 1](../images/Numbers/1.png) **Text:** "These roles have been assigned to your company on fiskaltrust.Portal."

![Number 2](../images/Numbers/2.png) **Text:** "Assign further roles to your company:"

![Number 3](../images/Numbers/3.png) **Text:** "Here you can enable connections to 3rd party partners:<br />
**DATEV MeinFiskal**<br />
Your company has not yet been assigned for DATEV MeinFiskal access.  Please change slider to ON to enable access on the next page."

![Number 4](../images/Numbers/4.png) **Text:** "API access

Your cash register`s fiskaltrust.Helipad online-functions will need an account ID and an access token to work automatically.<br />
If you are logged in as primary contact of your company you can reset these codes and thereby reassign them."

![Number 5](../images/Numbers/5.png) Here an account ID is generated, which serves as identification of the company for the registration of the company to the ft.Helipad. This can be copied to the clipboard for manual transfer to the cash register.

![Number 6](../images/Numbers/6.png) Here an AccessToken - as access key for the logon of the company to the fiskaltrust.Helipad is generated. This can be copied to the clipboard for manual transfer to the cash register.

![Number 7](../images/Numbers/7.png) The button `[Reset]` can be used to regenerate the account ID and the AccessToken.

#### Company employees

Add new employees to your company and manage their permissions.
![Company- Employees](images/AccountProfile/Employee-with-primary.png)
Company - Employees

![Number 1](../images/Numbers/1.png) By default, the primary contact of the company is the user who registered the company as an employee. The highlighted record is the one with the primary role.

![Number 2](../images/Numbers/2.png) By clicking on the arrow next to the First name, the sliders for changing the authorizations are displayed.

The different authorizations are described in chapter "[Employees of the company authorization administrations](#Employees-of-the-company-authorization-administration)".

![Number 3](../images/Numbers/3.png) In this case, the primary contact of the company is displayed. This user always has full rights. These authorizations cannot be reset either. Therefore the sliders are grey and cannot be changed.

If no employee has the administrative rights, you lose the possibility to access thee fiskaltrust portal. In this situation the [fiskaltrust.support](mailto:support@fiskaltrust.de) has to be contacted.

![Number 4](../images/Numbers/4.png) With this button new employees can be added to the company.

####<a name="add-employees"></a> Add employees

![Add employees](images/AccountProfile/AddEmployee.png)
Add employees

![Number 1](../images/Numbers/1.png) **Text:** "Here you can assign a new employee to your company. To do this, enter his/her email address."

![Number 2](../images/Numbers/2.png) After entering the email address, the email address is searched for in the fiskaltrust.Portal.

#### Assign employees

![Assign empoyee to the company](images/AccountProfile/AssociateEmployeeToCompany.png)
Assign found fiskaltrust.contact as employee to the company

![Number 1](../images/Numbers/1.png) If the contact with the email address that you are looking for has already been created in the fiskaltrust.Portal and is therefore found during the search, it is displayed.

This allows this user to be assigned as an employee. The master data of the sales activity cannot be changed here.

![Email for assigned employee](images/AccountProfile/AssociateEmployeeToCompany-Email.png)
Email information that you have been assigned to a company as a fiskaltrust contact.

A contact can only be assigned to one company as an employee.

If no contact is found, it can be invited on the next page.

#### Add employees new contact details

On this page the master data of the new contact can be entered to create it in the fiskaltrust.Portal as a new user and at the same time as an employee of the company.

![Add employees / Employee data](images/AccountProfile/AddNewEmployee.png)
Add employees / Employee data

![Number 1](../images/Numbers/1.png) **Text:** "Enter the employee's master data here. The employee is created in the fiskaltrust.Portal and receives an invitation by email to re-register with a personal password".

After creating a new user - who is not yet registered as a contact in the fiskaltrust.Portal - an email invitation will be sent to him.

![Email invitation of employee](images/AccountProfile/AddNewEmployee-Email.png)
Email invitation of a new employee who is to register in the portal and is already assigned to a company as a contact.

###<a name="Employees-of-the-company-authorization-administration"></a> Employees of the company authorization administration

![Authorization management for an employee](images/AccountProfile/Employee-Rights.png)
Authorization management for an employee

![Number 1](../images/Numbers/1.png) **Text:** "** Authorizations for the employee:**

**Read:** Master data of the company may be read.

**Write:** Master data of the company may be changed.

**Manage:** Authorizations can be granted or withdrawn for all employees.

**Substitution:** In the portal the functions for the assigned companies can be exercised.

**Conclusion-of-contract:** Contracts can be concluded e.g. as a PosCreator or payments can be made in the web shop.

**Checkout-product-Read:** Access to the menu item "Checkout products" and reading the contents (PosSystems).

**Cash-product-Write:** Edit cash products

**Configuration-Read:** Access to the menu item "Configuration" and thus to "Container", "Receipt Chains", "Helper" and "Signature Creation Devices".

**Configuration-Write:** Edit configurations."

![Number 2](../images/Numbers/2.png) The pictograms show the status of each authorization. If the authorization is not set, the pictogram is displayed in gray. If the authorization is set, the pictogram is displayed in blue. By clicking on the arrow next to the pictograms for displaying the authorizations, the sliders for changing the authorizations are displayed.

![Number 3](../images/Numbers/3.png) The permissions can be changed by clicking on the sliders. The authorizations of other employees can only be changed by a user with the "*Administrate*" permission set to \[Enabled\].

![Number 4](../images/Numbers/4.png) Clicking on \[Remove assignment\] cancels the assignment of the employee to the company immediately.

The employee could be reassigned later.

If the companies are assigned via the fiskaltrust.Portal, this administration of user rights can also be performed by an employee of a PosDealer for an assigned PosOperator.