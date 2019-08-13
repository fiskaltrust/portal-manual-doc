## Configuration

Before starting with the configuration the master data of the enterprise and the outlet has to be completed and checked. For this see chapter [_Master data_](company.md#company-master-data) and [_Outlets_](company.md#outlets)

### CashBox

#### Creation of a CashBox

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/CashBox.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Creating the configuration containers

By opening the menu _Configuration_<img src="../images/Numbers/circle-1o.svg" width="24px"> and clicking on _CashBox_<img src="../images/Numbers/circle-2o.svg" width="24px"> the overview of all configured CashBoxes (configuration containers) is shown.
Click on [+&nbsp;Add]<img src="../images/Numbers/circle-3o.svg" width="24px"> to create a new configuration container.

#### Add a CashBox

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/Create.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Configuration container - Add

<img src="../images/Numbers/circle-1o.svg" width="24px"> In this field, you can change the name of the configuration container. It should be unique so a CashBox can be identified in even a long list.

<img src="../images/Numbers/circle-2o.svg" width="24px"> If you are working in a network mode, enter the IP address of the endpoint here. 

<img src="../images/Numbers/circle-3o.svg" width="24px"> Click on [Save] to save the changes to the configuration container ad go back to the overview.

<img src="../images/Numbers/circle-4o.svg" width="24px"> Clicking [Cancel] cancels the operation without saving the changes and show the overview.

#### Overview first CashBox<a name ="overview-firstcashbox"></a>

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/CashBox-Details.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Overview - First configuration container 

<img src="../images/Numbers/circle-1o.svg" width="24px"> After creating a CashBox, it is initially empty, it only has the _CashBoxID_ and the _AccessToken_ which are required to access the CashBox. It can be seen by opening the information section by clicking on the chevron on the beginning of the line.

<img src="../images/Numbers/circle-2o.svg" width="24px"> This area shows all the assigned queues, helpers and SCUs for the configuration container. Since the CashBox has just been created and nothing is stored yet, the fields are empty.

<img src="../images/Numbers/circle-3o.svg" width="24px"> By clicking on ![dotnet Launcher](../images/Buttons/024.png "dotnet Launcher") you can download the _dotnet Launcher_. This must be used if there is an internet connection to the cash register.

<img src="../images/Numbers/circle-4o.svg" width="24px"> The _dotnet useOffline Launcher_ should be used if no internet connection can be established. This can be downloaded by clicking on ![Download](../images/Buttons/025.png "Download").

<img src="../images/Numbers/circle-5o.svg" width="24px"> For using the fiskaltrust.Service with a MacOS or Linux system the _mono useOffline Launcher_ is needed. It can be downloaded by clicking on ![mono Launcher](../images/Buttons/026.png "mono Launcher"). This is set to _useOffline_ by default.

<img src="../images/Numbers/circle-6o.svg" width="24px"> If no _ArchiveAuditable_ has yet been purchased, the purchase can be made by clicking on ![Dollarsign](../images/Buttons/020.png "Dollarsign"). If a package has already been purchased, the validity date is displayed here.

<img src="../images/Numbers/circle-7o.svg" width="24px"> The CashBox can be edited with a click on ![Drag&Drop](../images/Buttons/027.png "Drag&Drop") by Drag & Drop.

<img src="../images/Numbers/circle-8o.svg" width="24px"> The CashBox can also be edited in a list view by clicking on ![List](../images/Buttons/028.png "List").

<img src="../images/Numbers/circle-9o.svg" width="24px"> By clicking on ![Trash](../images/Buttons/029.png "Trash") an empty configuration container can be deleted.

#### Edit CashBox by Drag & Drop

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/Edit-DragDrop.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Edit CashBox by Drag & Drop

<img src="../images/Numbers/circle-1o.svg" width="24px"> The first widget shows all the created queues in this account. This corresponds to a data acquisition protocol and therefore a POS-System.

<img src="../images/Numbers/circle-2o.svg" width="24px"> The second widget shows all created Helpers, which can be used in a CashBox, further information see chapter [_Helpers_](../handbook-general/configuration.md#helper).

<img src="../images/Numbers/circle-3o.svg" width="24px"> The last widget contains all the SCUs created in this account and can be used in a CashBox, further information can be found in chapter [_Signature creation unit_](#SCU).<br>A SCU must not be direct associated to a CashBox. Because the configuration container has a connection to the outlet and the SCU is coupled to an outlet, a loose coupling in between exists. It is essential for legal compliance to use the same outlet number in the SCU-configuration and the CashBox-configuration.<br>This loose coupling enabley the usage of a single SCU for more than one queue in the same outlet.

<img src="../images/Numbers/circle-4o.svg" width="24px"> The field _Outlet_ is mandatory and has to contain the number of a valid outlet. For further informations see chapter [_Outlets_](company.md#outlets).

<img src="../images/Numbers/circle-5o.svg" width="24px"> This field contains the active CashBox. Using Drag & Drop, untits from the three widgets on the right side can be integrated in this CashBox.

Clicking on [Save] stores the changes to the configuration container.

#### Edit CashBox by List

Furthermore, the CashBox can be edited via a list.
[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/Edit-List.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Edit CashBox by list

<img src="../images/Numbers/circle-1o.svg" width="24px"> The list view is divided into three sections showing the available objects (_Queues_, _Helper_, _Signature creation Unit_).

<img src="../images/Numbers/circle-2o.svg" width="24px"> The required objects can be added to the cash box by ticking the checkbox at the beginning if the row.

<img src="../images/Numbers/circle-3o.svg" width="24px"> Click ![Gear](../images/Buttons/030.png "Gear") on the ending of a row to display the settings for each object.

<img src="../images/Numbers/circle-4o.svg" width="24px"> Each Queue owns a certificate from a SCU for signing all the data send to. With the button ![Certificate download](../images/Buttons/039.png "Certificate download") the certificate of a assigned SCU can be downloaded and verified.

<img src="../images/Numbers/circle-5o.svg" width="24px"> For filtering all the tables/sections in this window at least 3 characters have to be entered. 

#### Ready configured CashBox

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/Cashbox-Detail-Configured.png "http://portal.fiskaltrust.at/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Ready configured CashBox

<img src="../images/Numbers/circle-1o.svg" width="24px"> By clicking on [+&nbsp;Add] you can create a new configuration container (CashBox).

<img src="../images/Numbers/circle-2o.svg" width="24px"> In the section _Queues_ the deposited POS-System identification number (_CashBoxID_) as well as the automatically generated AES key (Base64 encryption) (_AccessToken_) can be found.<br>Clicking on ![Gear](../images/Buttons/030.png "Gear") the confiiguration of the queue can be edited.

<img src="../images/Numbers/circle-3o.svg" width="24px"> In this section the connected helpers as well as the package name and version is shown. By clicking on ![Gear](../images/Buttons/030.png "Gear") each helper can be configured in a own window.

<img src="../images/Numbers/circle-4o.svg" width="24px"> The connected signature creation units can be displayed here. But it is not necessary to connect a CashBox one-to-one to a SCU. Because a SCU can be used more than once for an outlet there is a loose connection between SCU and CashBox.

#### Delete a CashBox
For legal reasons it is currently not possible to delete a CashBox. However, there is the exception, that if the CashBox was not yet in use, it can still be deleted.

Before deleting a CashBox it has to be ensured that all elements from the configuration container are removed. Removing the element from the CashBox do not delete them, they are only put back in the general section for further use.<br>If a CashBox is not empty it can not be deleted.<br>By deleting a CashBox only the wrapping configuration container gets removed from the system. No data, certificate, queue, archives or anything else is touched or deleted.
[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/Delete.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Delete CashBox

#### Download Launcher

[![https://portal-sandbox.fiskaltrust.fr/CashBox](images/CashBox/CashBox-Download-Launcher.png "http://portal.fiskaltrust.fr/CashBox")](http://portal.fiskaltrust.fr/CashBox)
Download Launcher

<img src="../images/Numbers/circle-1o.svg" width="24px"> By clicking on one of this buttons, the launcher needed for commissioning is downloaded. This is a ZIP file that you download into the download folder. The zip-file can be founded in the local download-folder and ectrected there for further use on a POS-System.

For further information see chapter [Overview first CashBox](#overview-firstcashbox)

### Queue<a name="queue"></a>

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/Queue.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Overview of queues

To get to the creation and _Configuration_<img src="../images/Numbers/circle-1o.svg" width="24px"> of a queue, click on the menu item _Queue_<img src="../images/Numbers/circle-2o.svg" width="24px">.

To find a specific queue, a text can be entered in the search field<img src="../images/Numbers/circle-3o.svg" width="24px">. Starting with the second entered character the table beneath gets filtered automatically.

A click on the button _+&nbsp;Create new_<img src="../images/Numbers/circle-4o.svg" width="24px"> adds a new queue to the accoung

#### Add a queue

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/Create.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue - Adding

<img src="../images/Numbers/circle-1o.svg" width="24px"> This field, holds the name of the queue. It can be anything which helps to identify each queue.

<img src="../images/Numbers/circle-2o.svg" width="24px"> The appropriate storage method depending on your operating system can be selected. This value can not be changed after creation of the queue.

<img src="../images/Numbers/circle-3o.svg" width="24px"> The package version can also be selected using a dropdown menu. For updating the package version a click on ![Refresh](../images/Buttons/008.png "Refresh") is mandatory.<br>**To configure the POS-System with a law compliant fiksaltrust.Service the correct package has to be selected. The certified version for the used POS-System is written on the certificate, knows your PosDealer oder PosCreator.**

<img src="../images/Numbers/circle-4o.svg" width="24px"> Sets a timeout in milliseconds for the connection attempt with the signature creation unit.

<img src="../images/Numbers/circle-5o.svg" width="24px"> The country in which the queue is used can be selected in this dropdown list. This value can not be changed after creation of the queue.<br>**For a law compliant configuration _France (FR)_ has to be chosen.**

<img src="../images/Numbers/circle-6o.svg" width="24px"> This identification value has to be unique in the account. This value can not be changed after creation of the queue.

<img src="../images/Numbers/circle-7o.svg" width="24px"> The [_Save_]-button creates the queue and stores it.

#### Queue configuration<a name="configure-a-queue"></a>

The configuration has to be done directly after the creation of a queue. Nevertheless it can be changed afterwards with the ![Configuration](../images/Buttons/009.png "Configuration") button in the queue overview.

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/Configuration.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue configuration

<img src="../images/Numbers/circle-1o.svg" width="24px"> This box can be ticked to activate the verification of the connection certificate.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Activating this options speeds up the signing of the first certificate, but slows down the queue starting.

<img src="../images/Numbers/circle-3o.svg" width="24px"> This line gives the possibility to add a key-value-pair to the configuration of the queue.<br><img src="../images/Numbers/circle-4o.svg" width="24px"> The ![add line](../images/Buttons/042.png "add line") button adds another line for a new pair and the ![remove line](../images/Buttons/043.png "remove line") button removes the line from the configuration.

<img src="../images/Numbers/circle-5o.svg" width="24px"> The name of the queue can be changed in this field.

<img src="../images/Numbers/circle-6o.svg" width="24px"> The type of the storage can only be defined on queue creation and can not be changed later on.

<img src="../images/Numbers/circle-7o.svg" width="24px"> The package version can also be selected using a dropdown menu. For updating the package version a click on ![Refresh](../images/Buttons/008.png "Refresh") is mandatory.<br>**To configure the POS-System with a law compliant fiksaltrust.Service the correct package has to be selected. The certified version for the used POS-System is written on the certificate, knows your PosDealer oder PosCreator.**

<img src="../images/Numbers/circle-8o.svg" width="24px"> The URL to access the queue can be defined in this field. By clicking on ![net pipe](../images/Buttons/012.png "net pipe") a URL is used, which is suitable for local use without internet connection, because no firewall settings are required. By clicking on ![http](../images/Buttons/013.png "http"), the system generates a URL with which the POS-System can access the queue. The URL can be renamed, to have it like this: [http://localhost.1200/Queuefiskaltrust]().<br>The ![add URL](../images/Buttons/042.png "add URL") button adds another line for a new URL and the ![remove URL](../images/Buttons/043.png "remove URL") button removes the URL from the configuration.

<img src="../images/Numbers/circle-9o.svg" width="24px"> [Save] or [Save and close] saves the configuration of the queue (and closes the configuration module).

#### Queue overview

By opening the _Queue_-Module in the _Configuration_-menu an overview from all created queues are shown.

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/Queue-New.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue overview

<img src="../images/Numbers/circle-1o.svg" width="24px"> Clicking on the _chevron right_ shows the base information for this queue and the used CashBox, if already configured.

<img src="../images/Numbers/circle-2o.svg" width="24px"> This column shows the localisation (for which country the queue is used) and the _CashBox identification_.

<img src="../images/Numbers/circle-3o.svg" width="24px"> The third column contains a checkmark ![Checkmark](../images/Buttons/044.png "Checkmark") when the queue is activated. A so called _start receipt_ has been send and the queue is ready to sign and chain receipts or contains already some receipts.<br>If this column is empty no start receipt was send or a _stop receipt_ was send and the queue does not accept any receipt for chaining and signing.

<img src="../images/Numbers/circle-4o.svg" width="24px"> A queue contains two type of journals. Both of them are chained and secured against changes and contains already transmitted receipts.<br>By clicking on ![ReceiptJournal](../images/Buttons/017.png "ReceiptJournal") all transmitted receipts are displayed in a list, see chapter [_ReceiptJournal of a queue_](#receiptjournal-of-a-queue).<br>By clicking on ![ActionJournal](../images/Buttons/018.png "ActionJournal") all important actions and status changes of the queue a shown in a list, see chapter [_ActionJournal of a queue_](#actionjournal-of-a-queue).

<img src="../images/Numbers/circle-5o.svg" width="24px"> To stop the transmission from the local POS-System to the queue the ![Disable upload](../images/Buttons/045.png "Disable upload") button can be clicked. Starting from this moment the queue does not save any receipt in the cloud. With ![Reset upload](../images/Buttons/046.png "Reset upload") the queue receives all the not transmitted receipts form the moment the button is clicked.

<img src="../images/Numbers/circle-6o.svg" width="24px"> The queue export can be started by pressing the button ![Export](../images/Buttons/019.png "Export"). For further information see chapter [_Export a queue_](#export-a-queue).

<img src="../images/Numbers/circle-8o.svg" width="24px"> The last column contains the commands to manage a queue.<br> By clicking on ![Used french signature creation unit](../images/Buttons/021.png "Used french signature creation unit") the connected SCUs can be displayed and managed. For further information see chapter [_SCUs used by a queue_](#scus-used-by-a-queue).<br>Here the configuration of the queue can be opened by clicking on ![Configure queue](../images/Buttons/009.png "Configure queue"), see [_Configure a queue_](#configure-a-queue).<br>Clicking on ![Edit](../images/Buttons/005.png "Edit") edits the description, package version and timeout of the queue, see [_Edit a queue_](#edit-a-queue).<br>Clicking on ![Trash](../images/Buttons/011.png "Trash") deletes the queue. However, the button for deleting the queue is currently inactive for legal reasons, so no queue can be deleted after creation. The possibility to delete a queue does not depend on the status or the content of a queue. Once created no deletion is possible. There will be an option to hide queues in the future.

#### SCUs used by a queue<a name="scus-used-by-a-queue"></a>

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/QueueFRSCUList/inactive.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue - Connected Signature Creation Devices (SCU)

<img src="../images/Numbers/circle-1o.svg" width="24px"> By setting a check mark the SCU to be connected to the queue is selected.
<img src="../images/Numbers/circle-2o.svg" width="24px"> The SIRET of the attached outlet to the SCU is shown.
<img src="../images/Numbers/circle-3o.svg" width="24px"> Shows the serial number of the certificate used by this SCU.
<img src="../images/Numbers/circle-4o.svg" width="24px"> With the button ![Download certificate](../images/Buttons/047.png "Download certificate") the certificate of the SCU can be downloaded.

![Certificate detail](images/Queue/QueueFRSCUList/certificate-detail.png)
Detail of a certificate

The content of the certificate can verified with a double click on it.

#### Edit a Queue<a name="edit-a-queue"></a>

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/Edit.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Edit a queue

<img src="../images/Numbers/circle-1o.svg" width="24px"> The name of the queue can be changed with this field.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Various package versions can be selected by using the drop-down menu. These can be updated by clicking on ![Refresh](../images/Buttons/008.png "Refresh"). To take this change in effect on the POS-Systems, this has to be restarted.<br>**To configure the POS-System with a law compliant fiksaltrust.Service the correct package has to be selected. The certified version for the used POS-System is written on the certificate, knows your PosDealer oder PosCreator.**

<img src="../images/Numbers/circle-3o.svg" width="24px"> Sets a timeout in milliseconds for the connection attempt with the signature creation unit.

All other values shown on the page are read-only and con not be changed. Tis values shows the current state of the queue and the saved counters of the different receipt types.

At the most bottom of the page the buttons [Save] or [Save and close] saves the configuration of the queue (and closes the configuration module).

#### ReceiptJournal of a Queue<a name="receiptjournal-of-a-queue"></a>

[![https://portal.fiskaltrust.fr/Queue/](images/Queue/ReceiptJournal.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue - Overview ReceiptJournal

This journal shows all receipt created by a POS-System connected to the fiskaltrust.Service. All _special receipt types_ like a closure receipt, an archive request or warnings are shown in the [ActionJournal](#actionjournal-of-a-queue).

<img src="../images/Numbers/circle-1o.svg" width="24px"> This dropdown limits the shown rows of a journal to 50, 100, 500 or a full list. If the journal is long the last open _full list_ can take some time to be shown.

<img src="../images/Numbers/circle-2o.svg" width="24px"> This dropdown list defines the type of receipt shown.

<img src="../images/Numbers/circle-3o.svg" width="24px"> The first column shows the date/time the receipt was created.

<img src="../images/Numbers/circle-4o.svg" width="24px"> Shows the overall counter of all receipts in the queue.

<img src="../images/Numbers/circle-5o.svg" width="24px"> Shows the receipt number created by the fiskltrust.Service.

<img src="../images/Numbers/circle-6o.svg" width="24px"> The button ![Show Receipt](../images/Buttons/023.png "Show receipt") displays the respective receipt.

#### Detailed receipt
[![https://portal.fiskaltrust.fr/Queue/](images/Queue/ShowReceipt.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue - Detailed receipt

After selecting a receipt, it is displayed as follows. This view makes it possible to verify the accuracy of the receipt content.

#### ActionJournal of a Queue<a name="actionjournal-of-a-queue"></a>
[![https://portal.fiskaltrust.fr/Queue/](images/Queue/ActionJournal.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Queue - Overview ActionJournal

This list shows all _special receipt types_ of a queue. For regular receipts see [ReceiptJournal](#receiptjournal-of-a-queue). A click of the right chevron<img src="../images/Numbers/circle-1o.svg" width="24px"> opens the detailed view of the data of the receipt.

#### Export a queue<a name="export-a-queue"></a>

TODO!

### Signature creation unit (SCU)<a name="SCU"></a>

The SCU is the part of the fiskaltrust.Service for securing all the receipts send to it. In France the SCU is the holder of the certificate to guarantee the unalterability, securtiy, conservation and archiving of the send data.

#### Overview of signature creation units

[![https://portal.fiskaltrust.fr/SignatureCreationUnit/](images/SignatureCreationUnit/SignatureCreationUnit.png "https://portal.fiskaltrust.fr/SignatureCreationUnit/")](https://portal.fiskaltrust.fr/SignatureCreationUnit/)
Overview - Signature Creation Units (SCU)

To find a specific SCU, a text can be entered in the search field<img src="../images/Numbers/circle-1o.svg" width="24px">. Starting with the second entered character the table beneath gets filtered automatically.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Clicking on [+&nbsp;Create] opens the module for creating a new signature creation unit, see [_Creation of a SCU_](#creation-of-a-scu).

<img src="../images/Numbers/circle-3o.svg" width="24px"> The SIRET used by the SCU is displayed here. This reflects the loose coupling of the SCU to the outlet, see for more information chapter [_Outlets_](company.md#outlets).

<img src="../images/Numbers/circle-4o.svg" width="24px"> Shows the serial number of the certificate of the SCU. 

<img src="../images/Numbers/circle-5o.svg" width="24px"> Each SCU holds a certificate for signing all the data send to. With the button ![Certificate download](../images/Buttons/047.png "Certificate download") the certificate of this SCU can be downloaded and verified.

<img src="../images/Numbers/circle-6o.svg" width="24px"> Click on ![Delete SCU](../images/Buttons/029.png "Delete SCU") to delete the SCU. However, the button to delete any signature creation unit is currently inactive for legal reasons, so no SCU can be deleted.

#### Creation of a SCU<a name="creation-of-a-scu"></a>

[![https://portal.fiskaltrust.fr/SignatureCreationUnitFR/](images/SignatureCreationUnitFR/Create.png "https://portal.fiskaltrust.fr/SignatureCreationUnitFR/")](https://portal.fiskaltrust.fr/SignatureCreationUnitFR/)
Adding a signature creation unit

To create the signature creation unit, command _Signature creation device_<img src="../images/Numbers/circle-2o.svg" width="24px"> in the _Configuration_<img src="../images/Numbers/circle-1o.svg" width="24px"> menu. A click on [+&nbsp;Create] opens the page for adding a new SCU to the company.

In the dropdown list all [outlets](company.md#outlets) of the company are shown. To create a SCU an outlet has to be selected. It is not necessary to create more then one SCU for an outlet, but at least one per outlet has to be created. It is not possible to use one signature creation unit for more then one outlet because the SIRET of the selected outlet is used to created the certificate for a SCU.

#### Add signature creation unit

To connect a SCU to a CashBox or more special to a queue see [Outlets](company.md#outlets) and[SCUs used by a queue](#scus-used-by-a-queue)

#### Delete a signature creation unit

The button for deleting a signature creation unit is for legal reasons inactive. No created SCU can be deleted from the fiskaltrust.Service. In the future there will be a filter to hide unused or inactive SCUs.
