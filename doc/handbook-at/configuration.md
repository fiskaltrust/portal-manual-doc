## Configuration

For further information for PosCreators or PosDealers Rollout see chapter [Rollout for PosCreators and PosDealers - Important process steps](fiskalization.md#rollout-for-poscreators-and-posdealers-important-process-steps).

### CashBox

#### Creation of a CashBox

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/002.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 56: Creating the configuration containers

![Number 1](../images/Numbers/1.png) **Text:** "Here you can see all the cash registers you have created. You can add, delete or configure some."

![Number 2](../images/Numbers/2.png) To get to the creation and configuration of a queue, click on the menu item "*Queue*".

![Number 3](../images/Numbers/3.png) Click on \[add\] to create a new configuration container.

#### Add a CashBox

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/003.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 57: Configuration container - Add

![Number 1](../images/Numbers/1.png) In this field, you can change the name of the configuration container.

![Number 2](../images/Numbers/2.png) If you are working in a network mode, enter the IP address of the endpoint here. 

![Number 3](../images/Numbers/3.png) Click on \[Save\] to save the changes to the configuration container.

![Number 4](../images/Numbers/4.png) Clicking \[Cancel\] cancels the operation without saving the changes.

####<a name ="overview-firstcashbox"></a> Overview first CashBox

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/004.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 58: Overview - First configuration container 

![Number 1](../images/Numbers/1.png) After creating a CashBox, it is initially empty, it only has the CashBox ID and the AccessToken which are required to access the CashBox.

![Number 2](../images/Numbers/2.png) Here you can see the assigned queues, helpers, and SCUs. Since the configuration container has just been created and nothing is stored yet, the fields are empty.

![Number 3](../images/Numbers/3.png) By clicking on ![dotnet Launcher](../images/Buttons/024.png "dotnet Launcher") you can download the "dotnet Launcher". This must be used if there is an Internet connection to the cash register.

![Number 4](../images/Numbers/4.png) The "dotnet useOffline Launcher" should be used if no internet connection can be established. This can be downloaded by clicking on ![Download](../images/Buttons/025.png "Download").

![Number 5](../images/Numbers/5.png) If you are using a Linux system, download the "mono useOffline Launcher" by clicking on ![mono Launcher](../images/Buttons/026.png "mono Launcher"). This is set to "useOffline" by default.

![Number 6](../images/Numbers/6.png) If no carefree package has yet been purchased, the purchase can be made by clicking on ![Dollarsign](../images/Buttons/020.png "Dollarsign"). If a package has already been purchased, the validity date is displayed here.

![Number 7](../images/Numbers/7.png) The CashBox can be edited with a click on ![Drag&Drop](../images/Buttons/027.png "Drag&Drop") by Drag\&Drop.

![Number 8](../images/Numbers/8.png) The CashBox can also be edited in a list view by clicking on ![List](../images/Buttons/028.png "List").

![Number 9](../images/Numbers/9.png) By clicking on ![Trash](../images/Buttons/029.png "Trash") the cashbox can be deleted.

#### Edit CashBox by Drag \& Drop

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/005.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 59: Edit CashBox by Drag \& Drop

![Number 1](../images/Numbers/1.png) Here you can see your already created queues. This corresponds to a data acquisition protocol and therefore a PosSystem in the sense of the RKSV.

![Number 2](../images/Numbers/2.png) Here you can see your already created helpers. Further information see chapter [Helpers](../handbook-general/configuration.md#helper).

![Number 3](../images/Numbers/3.png) Here you can see the signature creation devices that you have already created.

![Number 4](../images/Numbers/4.png) This field contains your CashBox. Using Drag\&Drop, you can now drag units that have already been created from and into the fields.

![Number 5](../images/Numbers/5.png) Click on \[Save\] to save the changes to the configuration container.

#### Edit CashBox by List

Furthermore, the CashBox can be edited via a list.
[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/006.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 60: Edit CashBox by list

![Number 1](../images/Numbers/1.png) The list view is divided into three sections showing the available objects (Queues, Helper, Signature Creation Device)

![Number 2](../images/Numbers/2.png) The required objects can be added to the cash box by ticking the checkbox.

![Number 3](../images/Numbers/3.png) Click ![Gear](../images/Buttons/030.png "Gear") to display the settings for each object.

#### Ready configured CashBox

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/007.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 61: Ready configured CashBox

![Number 1](../images/Numbers/1.png) **Text:** "Here you can see all the cash registers you have created. You can add, delete or configure them."

![Number 2](../images/Numbers/2.png) By clicking on "+Add" you can create a new configuration container.

![Number 3](../images/Numbers/3.png) In the section Queues you will find the deposited cash register identification number as well as the automatically generated AES key (Base64 encryption)

**Only for Austria:**
This key  is required to register the cash register with FinanzOnline. By clicking on ![Gear](../images/Buttons/030.png "Gear") you can configure your queue(s) and set which signature creation devices the queue can access. See Chapter [AT FinanzOnline Messages](messages.md#atfon-messages).

For further information see chapter "[Messages](messages.md) ".

By clicking on ![Gear](../images/Buttons/030.png "Gear") you can edit them again.

![Number 4](../images/Numbers/4.png) In this section you can see the connected helpers as well as the package name and version. By clicking on ![Gear](../images/Buttons/030.png "Gear") you can edit them again.

![Number 5](../images/Numbers/5.png) The connected signature creation devices are displayed here, and the package name and version are also displayed. By clicking on ![Gear](../images/Buttons/030.png "Gear") you can edit them again.

##### Example: Overview several ready configured CashBoxes

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/008.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 62: Example: Overview - several ready configured CashBoxes

#### Delete a CashBox

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/009.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 63: Delete CashBox

For legal reasons it is currently not possible to delete a CashBox. However, there is the exception, that if the CashBox was not yet in use, it can still be deleted.

#### Download Launcher

[![https://portal-sandbox.fiskaltrust.at/CashBox](images/portal-sandbox.fiskaltrust.at/CashBox/010.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.at/CashBox)
Screenshot-AT 64: Download Launcher

![Number 1](../images/Numbers/1.png) By clicking on this button, you download the launcher you need for commissioning. This is a ZIP file that you download into the download folder. Extract the file from your download folder with a right-click, then click "Extract" and "Save".

For further information see chapter [Overview first CashBox](#overview-firstcashbox)

###<a name="queue"></a> Queue

#### Creating a queue

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/001.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 65: Creating the queue

![Number 1](../images/Numbers/1.png) To get to the creation and configuration of a queue, click on the menu item "*Queue*".

![Number 2](../images/Numbers/2.png) Click on \[Create new\] to add a new queue.

#### Add a queue

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/002.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 66: Queue - Adding

![Number 1](../images/Numbers/1.png) In this field, you can change the name of the queue.

![Number 2](../images/Numbers/2.png) Here you can select the appropriate storage method depending on your operating system.

![Number 3](../images/Numbers/3.png) The package version can also be selected using a dropdown menu. These can be updated by clicking on ![Refresh](../images/Buttons/008.png "Refresh")

![Number 4](../images/Numbers/4.png) Here you can set a timeout for the connection attempt with the signature creation device. (The time is given in milliseconds)

![Number 5](../images/Numbers/5.png) Enter the country in which you would like to use fiskaltrust here.

![Number 6](../images/Numbers/6.png) Enter the desired health insurance identification number here.

![Number 7](../images/Numbers/7.png) The system automatically generates the encryption key for you when you click on ![Encryptgen](../images/Buttons/038.png "Encryptgen").

![Number 8](../images/Numbers/8.png) Click on \[Save\] to save the configuration of the queue.

##### Fiskalization example for Germany

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/003.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 67: Fiskalization - Example Germany

German fiskalization does not (yet) include a signature creation device. This function is in test mode.

#### Queue overview

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/004.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 68: Queue overview

![Number 1](../images/Numbers/1.png) Click on ![Receipt](../images/Buttons/014.png "Receipt") to go to the receipt check. For further explanations see chapter [Receipt validation](messages.md#receipt-validation)

![Number 2](../images/Numbers/2.png) Here the current status of the PosSystem is displayed, by clicking on ![Questionmark](../images/Buttons/015.png "Questionmark") a message about the status can be sent.

![Number 3](../images/Numbers/3.png) By clicking on ![Refresh](../images/Buttons/016.png "Refresh") a status check is immediately transmitted to Finanz Online.

![Number 4](../images/Numbers/4.png) By clicking on ![List](../images/Buttons/017.png "List") all transmitted receipts are displayed.

![Number 5](../images/Numbers/5.png) The Action Journal can be accessed by clicking on ![Ajournal](../images/Buttons/018.png "Ajournal"). All status changes and important actions are displayed here.

![Number 6](../images/Numbers/6.png) The queue export can be started by pressing the button ![Export](../images/Buttons/019.png "Export"). For further information see chapter "Queue - Export" in the national appendices.

![Number 7](../images/Numbers/7.png) The POS archive can be placed in the shopping cart by clicking on ![Dollarsign](../images/Buttons/020.png "Dollarsign").

![Number 8](../images/Numbers/8.png) By clicking on ![Connect](../images/Buttons/021.png "Connect") the connected SCUs can be displayed and managed.

![Number 9](../images/Numbers/9.png) Here the configuration of the queue can be opened by clicking on ![Gear](../images/Buttons/009.png "Gear").

![Number 10](../images/Numbers/10.png) Click on ![Gear](../images/Buttons/009.png "Gear") to edit the description, package version and timeout of the queue.

![Number 11](../images/Numbers/11.png) Click ![Trash](../images/Buttons/011.png "Trash") to delete the queue. However, the button for deleting the queue is currently inactive for legal reasons, so no queue can be deleted there will be an option to hide queues in the future.

#### SCUs used by Queues

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/QueueATSCUList/001.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 69: Queue - Connected Signature Creation Devices (SCU)

![Number 1](../images/Numbers/1.png) By setting a check mark the SCU to be connected to the queue is selected.

![Number 2](../images/Numbers/2.png) The previously selected URL of the SCU is stored here.

![Number 3](../images/Numbers/3.png) The drop-down menu allows you to choose between different timeout modes. Normal and Backup, and different times.

![Number 4](../images/Numbers/4.png) Click on \[Save\]  to save the configuration of the queue.

#### Queue configuration

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/Configuration/001.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 70: Queue configuration

![Number 1](../images/Numbers/1.png) In this field, you can change the name of the signature creation device.

![Number 2](../images/Numbers/2.png) Here you can create a URL for your queue. By clicking on ![net pipe](../images/Buttons/012.png "net pipe") you get a URL, which is suitable for local use without internet connection, because no firewall settings are required.

![Number 3](../images/Numbers/3.png) By clicking on ![http](../images/Buttons/013.png), the system generates a URL for you with which the POS system can access the queue. You can rename the URL yourself. This can look like this: http://localhost.1200/Queuefiskaltrust

![Number 4](../images/Numbers/4.png) Click on \[Save\] to save the configuration of the queue.

#### Receipt journal of a Queue

![](images/portal-sandbox.fiskaltrust.at/Queue/ReceiptJournal/001.png)
Screenshot-AT 71: Queue - Overview ReceiptJournal

![Number 1](../images/Numbers/1.png) The receipts created so far are listed here.

![Number 2](../images/Numbers/2.png) Click on ![Eye](../images/Buttons/023.png "Eye") to display the respective receipt.

After selecting a receipt, it is displayed as follows.This view makes it possible to verify the accuracy of the receipt content.

[![https://portal.fiskaltrust.at/Queue](images/portal-sandbox.fiskaltrust.at/Queue/005.png "https://portal.fiskaltrust.at/Queue")](https://portal.fiskaltrust.at/Queue)
Screenshot-AT 105: Queue - Start receipt

#### Edit a queue

[![https://portal.fiskaltrust.at/Queue](images/portal-sandbox.fiskaltrust.at/Queue/Edit/001.png "https://portal.fiskaltrust.at/Queue")](https://portal.fiskaltrust.at/Queue)
Screenshot-AT 72: Queue - Edit

![Number 1](../images/Numbers/1.png) In this field, you can change the name of the queue.

![Number 2](../images/Numbers/2.png) The previously selected package name is displayed here.

![Number 3](../images/Numbers/3.png) Here you can select from the various package versions using the drop-down menu. These can be updated by clicking on ![Refresh](../images/Buttons/008.png "Refresh").

#### Export a queue

[![https://portal.fiskaltrust.at/Queue/](images/portal-sandbox.fiskaltrust.at/Queue/ExportConfiguration/001.png "https://portal.fiskaltrust.at/Queue/")](https://portal.fiskaltrust.at/Queue/)
Screenshot-AT 73: Queue - Export

![Number 1](../images/Numbers/1.png) First you have to define the area which should be exported, this is done with the help of the receipt number and the slider.

![Number 2](../images/Numbers/2.png) The export format must then be dragged to the left ![Number 4](../images/Numbers/4.png) using Drag\&Drop.

![Number 3](../images/Numbers/3.png) The export target is also dragged to the left ![Number 4](../images/Numbers/4.png) using Drag\&Drop.

![Number 5](../images/Numbers/5.png) Click on \[Start\] to start the export, then you will be redirected to a page showing the progress of the export. After completion of the export you will receive an info mail.

### Signature creation unit (SCU)<a name="SCU"></a>

#### Creation of a SCU

[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/001.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 74: Adding a signature creation device

![Number 1](../images/Numbers/1.png) To create, configure and delete the signature creation devices, click on the "Signature creation device" menu item.

![Number 2](../images/Numbers/2.png) Click on \[Create\] to open a page where a new signature creation device can be created.

#### Add Signature creation unit

[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/002.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 75: Adding a signature creation device

![Number 1](../images/Numbers/1.png) **Text:** "Here you can assign another signature creation device to your company. Enter the data and click on "Save".

![Number 1](../images/Numbers/2.png) Here you can name your signature creation device.

![Number 3](../images/Numbers/3.png) Here you can select the package to be used. This must be specified by the PosCreator.

![Number 4](../images/Numbers/4.png) Click on \[Save\] to save the configuration of the SCU.

#### Overview of Signature creation units

[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/003.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 76: Overview - Signature Creation Devices (SCU)

![Number 1](../images/Numbers/1.png) To get to the configuration of the signature creation devices, click on the menu item "*Signature creation device*".

![Number 2](../images/Numbers/2.png) Click on \[Create\] to go to the page for creating a new signature creation device.

![Number 3](../images/Numbers/3.png) The name of the SCU is displayed here.

![Number 4](../images/Numbers/4.png) By clicking on ![Gear](../images/Buttons/009.png "Gear"), the basic settings and package configuration for individual use of the signature creation device in the cash register can be called up again.

![Number 5](../images/Numbers/5.png) By clicking on ![Edit](../images/Buttons/005.png "Edit") things like the description, package name, version and mode of SCU may be edited.

![Number 6](../images/Numbers/6.png) Click on ![Trash](../images/Buttons/029.png "Trash") to delete the SCU. However, the button to delete the helper is currently inactive for legal reasons, so no helper can currently be deleted.

![Number 7](../images/Numbers/7.png) A brief overview of the data for the selected signature creation device is displayed here.

![Number 8](../images/Numbers/8.png) The search function can be used to search for a SCU by entering any parameter in the search field.

#### Configuration of a Signature creation unit

[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/004.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 77: Signature Creation Device - Configuration

![Number 1](../images/Numbers/1.png) The serial number of the certificate is stored here after creation.

![Number 2](../images/Numbers/2.png) In this field, you can change the name of the signature creation device.

![Number 3](../images/Numbers/3.png) Here you can create a URL for your signature creation device. By clicking on ![net pipe](../images/Buttons/012.png "net pipe") you get a URL, which is suitable for local use without internet connection, because no firewall settings are required.

![Number 4](../images/Numbers/4.png) By clicking on the ![http](../images/Buttons/013.png "http"), the system generates a URL for you with which the POS system can access the SCU. You can rename the URL yourself. This can look like this: http://localhost.1200/SCUfiskaltrust

![Number 5](../images/Numbers/5.png) Click on \[Save\] to save the configuration of the SCU.

#### Edit a Signature creation unit

[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/005.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 78: Signature creation device - Edit

![Number 1](../images/Numbers/1.png) In this field, you can change the name of the signature creation device.

![Number 2](../images/Numbers/2.png) Here you can use the dropdown menu to select from the various package names.

![Number 3](../images/Numbers/3.png) The package version can also be selected using a dropdown menu. These can be updated by clicking on ![Refresh](../images/Buttons/008.png "Refresh").

![Number 4](../images/Numbers/4.png) In the field Mode you can choose between the different modes "Normal", "Backup" and "Deactivated".

![Number 5](../images/Numbers/5.png) Click on \[Save\] to save the configuration of the SCU.

#### Delete a Signature creation unit

For legal reasons, it is currently not possible to delete the signature creation device.
[![https://portal.fiskaltrust.at/SignatureCreation/](images/portal-sandbox.fiskaltrust.at/SignatureCreation/006.png "https://portal.fiskaltrust.at/SignatureCreation/")](https://portal.fiskaltrust.at/SignatureCreation/)
Screenshot-AT 79: Signature creation device - Delete

![Number 1](../images/Numbers/1.png) The button for deleting a SCU is currently inactive.
