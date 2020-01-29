## Export fiscal archive

### Login
For exporting the fiscal archive the PosOperator has to login to the portal at https://portal.fiskaltrust.fr with his proper credentials.

[![https://portal.fiskaltrust.fr/](images/fiscal-archive/01-login.png "https://portal.fiskaltrust.fr/" )](https://portal.fiskaltrust.fr/)
Export fiscal archive - Login to the fiskaltrust.Portal

<img src="../images/Numbers/circle-1o.svg" width="24px"> Enter the email-address of the account to get fiscal archive.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Enter the password according to the email-address used as user.

<img src="../images/Numbers/circle-3o.svg" width="24px"> Click on button \[Login\] to gain access to the fiskaltrust.Portal.

### Identify queue for creating the fiscal archive

As the second step, the queue for the POS-System and/or outlet has to be identified for creating a fiscal archive. An outlet usually has one queue which holds all the receipts issued. To enhance performance or avoid working issues there can be more than one queue per outlet. In this case, this and the following steps have to be repeated to get for each queue to create a fiscal archive.

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/02-identify-queue.png "https://portal.fiskaltrust.fr/Queue/" )](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Identify the queue to be exported in the fiskaltrust.Portal

<img src="../images/Numbers/circle-1o.svg" width="24px"> On the left side of the portal the menu can be found. Click on the word _Configuration_ to open this menu.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Click on _Queue_ to show the whole list of queues created for the company.

<img src="../images/Numbers/circle-3o.svg" width="24px"> Each queue has an own description shown in this list. Normally it should be clear enough to identify the queue.

<img src="../images/Numbers/circle-4o.svg" width="24px"> Each queue is assigned to a _CashBox_ (a configuration container) and the ID of the CashBox can be found in the column _Localisation_. The _name/description_ can be found in the details of a queue. To access this information click on the chevron right just in front of the queue description.

<img src="../images/Numbers/circle-5o.svg" width="24px"> To start the configuration of the queue's export click on the export button ![Export queue](../images/Buttons/019.png "Export queue").

### Define the limits of the receipts to export

The first step to create a fiscal archive is the definition of receipts to be included in the export. For defining these limits, there are several possibilities offered by the fiskaltrust.Portal. Each of the methods result in the same archive. They are present to offer the best ways to limit the export. 

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/03-define-queue-limits.png "https://portal.fiskaltrust.fr/Queue/" )](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Define the receipts to be included in the fiscal archive

#### Select by receipt number
Here the numbering of the queue itself is used, **don't use the local receipt number**. By changing value in the first line, the slider limits are adjusted automatically.

<img src="../images/Numbers/circle-1o.svg" width="24px"> Enter the number of the first receipt (which will be included) to export. If this number is larger than the maximum of the receipts stored in the queue nothing is exported.

<img src="../images/Numbers/circle-2o.svg" width="24px"> Enter the number of the last receipt (which will be included) to export. If this number is larger than the maximum of the receipts stored in the queue, the whole queue starting with the number entered by _from:_ is exported.

#### Select by date and time
Here the time of the fiskaltrust.Service is used. For this the date and/or time cannot be tampered with by the POS-System.

<img src="../images/Numbers/circle-3o.svg" width="24px"> Enter the date of the first day which should be included in the fiscal archive. By changing the date, the time of this day is set to _00:00_ so the first receipt of the day is included in all circumstances.<br>By clicking on ![Select date](../images/Buttons/049.png "Select date") the date can be selected from a graphical calendar.

<img src="../images/Numbers/circle-4o.svg" width="24px"> To adjust the time of first receipt in the fiscal archive, a time can be entered here. This can be used for example to export by the start of a shift.<br>By clicking on ![Select time](../images/Buttons/050.png "Select time") the time can be selected from a graphical clock.

<img src="../images/Numbers/circle-5o.svg" width="24px"> Enter the date of the last day which should be included in the fiscal archive. By changing the date the time of this day is set to _23:59_ so the last receipt of the day is included in all circumstances.<br>By clicking on ![Select date](../images/Buttons/049.png "Select date") the date can be selected from a graphical calendar.

<img src="../images/Numbers/circle-6o.svg" width="24px"> To adjust the time of last receipt in the fiscal archive a time can be entered here. This can be used for example to export to the end of a shift.<br>By clicking on ![Select time](../images/Buttons/050.png "Select time") the time can be selected from a graphical clock.

#### Select with the slider

<img src="../images/Numbers/circle-7o.svg" width="24px"> By dragging the left handle of the slider the starting point of the export can be fixed. When the dragging is finished and the mouse button is released, the date and time of the first exported receipt will be shown on the left handle.

<img src="../images/Numbers/circle-8o.svg" width="24px"> By dragging the right handle of the slider the end point of the export can be fixed. When the dragging is finished and the mouse button is released the date and time of the last exported receipt will be shown on the left handle.

### Define journals to export

The journals included in an export have to be defined in this step. The fiskaltrust.Service divides the journal in several types. The fields and contents of the journals are described in the chapter _Condition “Archiving”_ of the file _11.fiskaltrust-security-mechansim.md_

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/04_1-drag-journal-elements.png "https://portal.fiskaltrust.fr/Queue/" )](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Drag journal elements to the export container

For including elements in the export container take an element<img src="../images/Numbers/circle-1o.svg" width="24px"> from the right side by pointing with mouse on it, hold the left mouse button and drag it to the export container<img src="../images/Numbers/circle-2o.svg" width="24px"> (gray area) on the left side. Once over this area, release the mouse button and drop the element.

For removing an element from the export container, just do the inverse and drag them to the right side.

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/04_2-journal-elements.png "https://portal.fiskaltrust.fr/Queue/" )](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Journal elements to export

<img src="../images/Numbers/circle-1o.svg" width="24px"> **Ticket journal**<br>A journal/file of all tickets issued in the selected queue.


<img src="../images/Numbers/circle-2o.svg" width="24px"> **Bill journal**<br>A journal/file of all bills issued in the selected queue.

<img src="../images/Numbers/circle-3o.svg" width="24px"> **Invoice journal**<br>A journal/file of all invoices issued in the selected queue.

<img src="../images/Numbers/circle-4o.svg" width="24px"> **Copy journal**<br>A journal/file of all duplicates issued in the selected queue.

<img src="../images/Numbers/circle-5o.svg" width="24px"> **Payment Prove journal**<br>A journal/file of all payment proves issued in the selected queue.

<img src="../images/Numbers/circle-6o.svg" width="24px"> **Training journal**<br>A journal/file of all receipts issued in training mode in the selected queue.

<img src="../images/Numbers/circle-7o.svg" width="24px"> **Grand total journal**<br>A journal/file of all counters created and maintained in the selected queue.

<img src="../images/Numbers/circle-8o.svg" width="24px"> **Archive journal**<br>A journal/file of all archives created from the selected queue.

<img src="../images/Numbers/circle-9o.svg" width="24px"> **Log journal**<br>A journal/file of all log entries done in the selected queue.

**Full export (XML)**<br>This type is a combination of the eight journals mentioned above. These eight journals are converted to a xml-format containing the same data. This xml-file can be opened as clear text file with every editor. On the other hand the xml is formatted in that way, to be ready to open in _Microsoft Excel_ too.

### Define export locations

The export can be saved in additional locations shown on the right side. These elements can be dragged to the left side. For each location, one item has to be dragged to the left side. As default, the export is saved in the clients storage from fiskaltrust and no additional location has to be used.

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/05-export-locations.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Storage locations of the export

For each location element in the export container, credentials have to be entered. The popup window is shown after a click on ![Enter credentials](../images/Buttons/030.png "Enter credentials"). Depending on the type of location the necessary credentials differ. No credentials are saved and are only used once to access the storage for saving the export.

### Start the export

After adding the necessary journals and storage location the export has to be started.

[![https://portal.fiskaltrust.fr/Queue/](images/fiscal-archive/06-start-export.png "https://portal.fiskaltrust.fr/Queue/")](https://portal.fiskaltrust.fr/Queue/)
Export fiscal archive - Storage locations of the export

At the bottom of the export module the button [Start export and close] has to be clicked to start the export in the background.

### Running export

If the export has started and the status can be verified in the fiskaltrust.Portal.

[![https://portal.fiskaltrust.fr/Queue/Export/](images/fiscal-archive/07-running-export.png "https://portal.fiskaltrust.fr/Queue/Export/")](https://portal.fiskaltrust.fr/Queue/Export/)
Export fiscal archive - Verify a running export

The newest started export is shown on top of a list which can be called in the menu _Tools_<img src="../images/Numbers/circle-1o.svg" width="24px"> with the command _Export_<img src="../images/Numbers/circle-2o.svg" width="24px">.

In the first column the start date and time is shown. In the column _Targets_<img src="../images/Numbers/circle-3o.svg" width="24px"> the symbol ![Running export](../images/Buttons/008.png "Running export") is shown until the end of the export.

### Finished export

For a finished export, the information shown in the above window changes.

[![https://portal.fiskaltrust.fr/Queue/Export/](images/fiscal-archive/08-finished-export.png "https://portal.fiskaltrust.fr/Queue/Export/")](https://portal.fiskaltrust.fr/Queue/Export/)
Export fiscal archive - Finished export

The symbol in the column _Targets_ changes to ![Upload location](../images/Buttons/008.png "Upload location"). For each location one icon is shown. By hovering with the mouse pointer over it a tooltip with the location is shown.

In the column _Formats_ a symbol for each journal and/or format is shown. For the journals the symbol ![Journal](../images/Buttons/051.png "Journal") and for the xml-format the symbol ![xml format](../images/Buttons/052.png "xml format") is displayed. As in the _Targets_ column, hovering over the icon shows a tooltip with more information.

The column _State_ shows information about the data. The first line shows how many paths with leafs are in the queue and the second line shows if the chain has errors or is correct.

In the last column _Info_ the first and last exported receipt number is shown and in the last row which queue was effected.

By clicking on the _chevron right_ the downloadable files are shown. Each export started in the fiskaltrust.Portal gets uploaded to the storage of the active account.

#### Information about the export

The file _output.json_ contains the information about the processed export and the checked data.

[![https://portal.fiskaltrust.fr/Queue/Export/](images/fiscal-archive/09_1-files-output_json.png "https://portal.fiskaltrust.fr/Queue/Export/")](https://portal.fiskaltrust.fr/Queue/Export/)
Export fiscal archive - Example of _output.json_

| field name | type        | meaning                              | example                                  |
|------------|-------------|--------------------------------------|------------------------------------------|
| LogItemId  | GUID        | ID of this export in the log journal | `7948984a-ef54-4c78-8404-66b397280442`   |
| Moment     | date / time | Moment of finished export            | `2019-08-19T23:18:44.245682Z`            |
| Level      | integer     |                                      | `0`                                      |
| DataType   | string      |                                      | `AzureStorageDownloaderOutput`           |
| Data       | json object |                                      |                                          |
Export fiscal archive - content of the _output.json_ (main part)

| field name            | type        | meaning                              | example                        |
|-----------------------|-------------|--------------------------------------|--------------------------------|
| ChainsCount           | integer     | number of chains exported            | `1`                            |
| StrictAscendingChains | integer     | number of chains with no errors      | `1`                            |
| OrphanedEntries       | integer     | entries with no parents and child    | `0`                            |
| Nodes                 | integer     | number of nodes in a chain           | `0`                            |
| Leafs                 | integer     | number of leafs in a chain           | `1`                            |
| Sources               | integer     | number of sources in a chain         | `1`                            |
| Paths                 | integer     | number of paths in a chain           | `1`                            |
| Message               | string      |                                      | The Queue is chained correctly |
Export fiscal archive - content of the _output.json_ (data object)

#### xml export

The full export in xml format contains all journals of a queue in a xml structure. This xml format is created as plain text file and readable with any editor, as shown in the following picture.

[![https://portal.fiskaltrust.fr/Queue/Export/](images/fiscal-archive/09_2-files-xml_full_receiptjournal_code.png "https://portal.fiskaltrust.fr/Queue/Export/")](https://portal.fiskaltrust.fr/Queue/Export/)
Export fiscal archive - Example of file xml export (code)

But the xml structure is done in the way for getting a Workbook in _Microsoft Excel_ if it is opened with this application, as shown in the following picture.

[![https://portal.fiskaltrust.fr/Queue/Export/](images/fiscal-archive/09_3-files-xml_full_receiptjournal_excel.png "https://portal.fiskaltrust.fr/Queue/Export/")](https://portal.fiskaltrust.fr/Queue/Export/)
Export fiscal archive - Example of fill xml export (_Microsoft Excel Workbook__)

### Open an archive csv-format

#### Unformatted raw data
The easiest way is to open the file without any formatting with an editor, like _Notepad_ on _Microsoft Windows_. This gives a comma separated list of the archive's content.

![Example for raw data in an editor](images/fiscal-archive/csv-example-notepad.png)
Export fiscal archive - Example of an opened csv-file in notepad

#### Formatted raw data
If an application for spreadsheets is installed on the system, like _Microsoft Excel_, the raw data can be shown up more user friendly. The following steps can be done with the version 2017 or 2019 or Office 365 of the calculation program.

**Open Microsoft Excel with a new workbook.**
![New workbook in Microsoft Excel](images/fiscal-archive/01-excel-new-workbook.png)
After the start of _Microsoft Excel_ click on _Blank workbook_

**Get data from Text/CSV.**
By clicking on the word _Data_ on the top of the application, the data-band gets opened.

![New workbook in Microsoft Excel](images/fiscal-archive/02-excel-data-band-csv.png)

Here on the left side the button _From Text/CSV_ has to be identified and clicked.

**Find csv-file to import**
In the new opened window the csv-file to import can be chosen.
![Find data/csv to import](images/fiscal-archive/03-excel-import-data.png)
On the left side the different folders can be opened. The list of files shows all csv-files that can be imported. One of them can be selected and with a click on the button _Import_ this files gets used by _Microsoft Excel_.

**Choose the correct character set**
After the import _Microsoft Excel_ offers the data for several formatting options. This occurs because the application tries to find the ideal mode to import and present the data. So the user can change this suggestions.
![Change character set](images/fiscal-archive/04-excel-import-data-charset.png)

In the list _File Origin_ the correct character set can be selected. In case of national characters in the text of the charge or payment items the best selection is _65001: Unicode (UTF-8)_.

**Change the format of some columns**
Because _Microsoft Excel_ suggests often the format _number_ some columns are not presented perfect. To change the format first of all a click on the button _Transform Data_ has to be done. This changes the shown windows to one that offers formats in each column.

Like shown in the following figure the format of the SIRET is not perfect, because it is considered as number. By clicking in the head of column on _1.2_ the menu for the available formats gets opened. 

![Change format for column SIRET](images/fiscal-archive/05-excel-import-data-col-siret.png)

The format is _Text_ which is chosen with a click in the menu. For not changing data by accident the following message has to be confirmed with a click on the button _Replace current_.

![Confirm the changement of the format](images/fiscal-archive/06-excel-import-data-col-siret-confirm.png)

The same procedure with the same format change should be done with the penultimate column called _ReceiptCase_.

**Get data into a _Microsoft Excel_ workbook**
After finishing all format changes the data gets imported with a click on the button _Close & Load_ in the upper left corner of the window.

![Import the data in the workbook](images/fiscal-archive/07-excel-import-data-close-load.png)

### Content of the French data export (FR-DEX)<a name="frdex"></a>

| Fieldname                        | Description                                                                                                                                                                                                                                                                                                          | example data                                   |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| QueueId                          | Unique id for the queue containing the receipt. Can be found on the *Queue Configuration page* in the portal.                                                                                                                                                                                                        | `a0a11aa6-a831-4e6f-b24b-2109280debed`         |
| CashBoxIdentification            | Value to identify the Queue. Can be found on the *Queue Configuration page* in the portal.                                                                                                                                                                                                                           | `RueHelder_1`                                  |
| Siret                            | The SIRET of the outlet using the queue. Can be found on the *Outlets page* as *Location Id* and on the *Queue Configuration page* in the used SCU.                                                                                                                                                                  | `84159024300017`                               |
| ReceiptId                        | Up counting receipt number allocated through fiskaltrust.SecurityMechanisms when send a request. It consists of two values the up counting value in hexadecimal value starting with *ft* and ending with *#*. The second part is an up counting number within the used journal, which is written as starting letter. | `ft1F4#T499`                                   |
| ReceiptMoment                    | The time of receipt creation in UTC (Coordinated Universal Time)                                                                                                                                                                                                                                                     | `08.06.2019  07:42:49`                         |
| QueueItemId                      | Unique id for a single item in the queue; provided by the ft.SecurityMechanism                                                                                                                                                                                                                                       | `aae8709c-ad14-41ba-a684-ec8b92a26ee8`         |
| JournalType                      | specifies the content of the journal like shown in [Receipt journals](#ReceiptJournal)                                                                                                                                                                                                                               | `T`                                            |
| ATotalizer                       | Archive totalizer overall: sums up all receipt totals in the archive; is reset on each send archive request to zero                                                                                                                                                                                                  | `145678.73`                                    |
| ACINormal                        | Archive totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                            | `89120.23`                                     |
| ACIReduced1                      | Archive totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                      | `36591.65`                                     |
| ACIReduced2                      | Archive totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                      | `11956.06`                                     |
| ACIReducedS                      | Archive totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                            | `7923.56`                                      |
| ACIZero                          | Archive totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                       | `81.53`                                        |
| ACIUnknown                       | Archive totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                               | `5.70`                                         |
| APICash                          | Archive totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                               | `76591.23`                                     |
| APINonCash                       | Archive totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                    | `66981.25`                                     |
| APIInternal                      | Archive totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                   | `2004.09`                                      |
| APIUnknown                       | Archive totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                           | `102.16`                                       |
| LastActionJournalId              | Unique key of the last stored zero receipt in the action journal                                                                                                                                                                                                                                                     | `73e0850f-446f-4b99-9b4f-85c14d50fb11`         |
| LastJournalFRId                  | Unique key of the last signed receipt                                                                                                                                                                                                                                                                                | `45bf4a92-3f57-47c6-b581-72b84577b3ea`         |
| LastReceiptJournalId             | Unique key of the last saved receipt                                                                                                                                                                                                                                                                                 | `fe7921db-feac-4603-ab4b-5baeb6db2697`         |
| PreviousArchiveQueueItemId       | The GUID of the journal item which contains the preceding archive                                                                                                                                                                                                                                                    | `709a3bd1-2318-40dc-a5d1-74634c477354`         |
| FirstContainedReceiptQueueItemId | The GUID of the first item of the queue contained in this archive                                                                                                                                                                                                                                                    | `9a16ebc7-1fd6-4985-ad5f-b942a7757b43`         |
| FirstContainedReceiptMoment      | The timestamp of the first item contained in this archive                                                                                                                                                                                                                                                            | `2017-07-20T22:55:52.944Z`                     |
| LastContainedReceiptQueueItemId  | The GUID of the last item of the queue contained in this archive                                                                                                                                                                                                                                                     | `54c1e932-d5b5-4514-a911-53a850cd1411`         |
| LastContainedReceiptMoment       | The timestamp of the last item contained in this archive                                                                                                                                                                                                                                                             | `2018-07-19T23:27:52.944Z`                     |
| DTotalizer                       | Day totalizer overall: sums up all receipt totals form the last daily closing; is reset on daily closing receipt                                                                                                                                                                                                     | `13597.37`                                     |
| DCINormal                        | Day totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                                | `5574.92`                                      |
| DCIReduced1                      | Day totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                          | `6118.82`                                      |
| DCIReduced2                      | Day totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                          | `679.87`                                       |
| DCIReducedS                      | Day totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                                | `407.92`                                       |
| DCIZero                          | Day totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                           | `679.87`                                       |
| DCIUnknown                       | Day totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                                   | `135.97`                                       |
| DPICash                          | Day totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                                   | `5031.03`                                      |
| DPINonCash                       | Day totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                        | `7070.63`                                      |
| DPIInternal                      | Day totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                       | `1223.76`                                      |
| DPIUnknown                       | Day totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                               | `271.95`                                       |
| MTotalizer                       | Month totalizer overall: sums up all receipt totals form the last monthly closing; is reset on monthly closing receipt                                                                                                                                                                                               | `322665.61`                                    |
| MCINormal                        | Month totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                              | `132292.90`                                    |
| MCIReduced1                      | Month totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                        | `145199.52`                                    |
| MCIReduced2                      | Month totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                        | `16133.28`                                     |
| MCIReducedS                      | Month totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                              | `9679.97`                                      |
| MCIZero                          | Month totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                         | `16133.28`                                     |
| MCIUnknown                       | Month totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                                 | `3226.61`                                      |
| MPICash                          | Month totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                                 | `119386.28`                                    |
| MPINonCash                       | Month totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                      | `167786.12`                                    |
| MPIInternal                      | Month totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                     | `29039.90`                                     |
| MPIUnknown                       | Month totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                             | `6453.31`                                      |
| YTotalizer                       | Year totalizer overall: sums up all receipt totals form the last yearly closing; is reset on yearly closing receipt                                                                                                                                                                                                  | `4152706.39`                                   |
| YCINormal                        | Year totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                               | `1702609.62`                                   |
| YCIReduced1                      | Year totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                         | `1868717.88`                                   |
| YCIReduced2                      | Year totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                         | `207635.32`                                    |
| YCIReducedS                      | Year totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                               | `124581.19`                                    |
| YCIZero                          | Year totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                          | `207635.32`                                    |
| YCIUnknown                       | Year totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                                  | `41527.06`                                     |
| YPICash                          | Year totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                                  | `1536501.36`                                   |
| YPINonCash                       | Year totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                       | `2159407.32`                                   |
| YPIInternal                      | Year totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                      | `373743.58`                                    |
| YPIUnknownTotalizer              | Year totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                              | `83054.13`                                     |
| Totalizer                        | Totalizer over all items                                                                                                                                                                                                                                                                                             | `132945514.64`                                 |
| CINormal                         | Perpetual totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                          | `2945514.64`                                   |
| CIReduced1                       | Perpetual totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                    | `3232881.92`                                   |
| CIReduced2                       | Perpetual totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                    | `359209.10`                                    |
| CIReducedS                       | Perpetual totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                          | `215525.46`                                    |
| CIZero                           | Perpetual totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                     | `359209.10`                                    |
| CIUnknown                        | Perpetual totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                             | `71841.83`                                     |
| PICash                           | Perpetual totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                             | `2658147.36`                                   |
| PINonCash                        | Perpetual totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                  | `3735774.67`                                   |
| PIInternal                       | Perpetual totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                 | `646576.38`                                    |
| PIUnknown                        | Perpetual totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                         | `143683.64`                                    |
| SCINormal                        | Shift totalizer chargeitem normal: the total cost of items of *undefined type of service for FR normal*                                                                                                                                                                                                              | `2549.63`                                      |
| SCIReduced1                      | Shift totalizer chargeitem reduced 1: the total cost of items of *undefined type of service for FR reduced-1*                                                                                                                                                                                                        | `431.79`                                       |
| SCIReduced2                      | Shift totalizer chargeitem reduced 2: the total cost of items of *undefined type of service for FR reduced-2*                                                                                                                                                                                                        | `69.47`                                        |
| SCIReducedS                      | Shift totalizer chargeitem special: the total cost of items of *undefined type of service for FR super reduced*; with rates that are not contained in the previous ones                                                                                                                                              | `13.62`                                        |
| SCIZero                          | Shift totalizer chargeitem zero: the total cost of items of *undefined type of service for FR zero*; with data which are indicated with 0% sales tax and data where the sales tax is unknown                                                                                                                         | `78.94`                                        |
| SCIUnknown                       | Shift totalizer chargeitem unknown: the total cost of items not considered in the 5 totalizer before                                                                                                                                                                                                                 | `359.41`                                       |
| SPICash                          | Shift totalizer payitem cash: The total amount of all payment types *cash*, *credit card*, *voucher*                                                                                                                                                                                                                 | `2346.92`                                      |
| SPINonCash                       | Shift totalizer payitem non-cash: The total amount of all payment types *wire-transfer*, *debit card*, *paypal*                                                                                                                                                                                                      | `945.77`                                       |
| SPIInternal                      | Shift totalizer payitem internal: The total amount of all payment types *payables*, *receivable*                                                                                                                                                                                                                     | `175.14`                                       |
| SPIUnknown                       | Shift totalizer payitem unknown: The total amount of all payment types not listed before                                                                                                                                                                                                                             | `35.03`                                        |
| CopiedReceiptReference           | Reference to the origin receipt used for a copy                                                                                                                                                                                                                                                                      | `Ticket-6890`                                  |
| ReceiptCase                      | The kind of the receipt, shown in table [Receipt cases](#ReceiptCases)                                                                                                                                                                                                                                               | `5067112530745229313`                          |
| LastHash                         | The hash value of the preceding receipt                                                                                                                                                                                                                                                                              | `2LpY9Zw4tr8NjNmF60rdpIfof40MRtcrX0avsBj8gXY=` |
| CertificateSerialNumber          | The serial number of the certificate used for signing the receipts                                                                                                                                                                                                                                                   | `08d791c48c4b727e`                             |

#### Receipt journals<a name="ReceiptJournal"></a>

| Letter | Journal | Receipt Case                  | Signed | Chained | Counters raised | Details                                                                                                                                                                                                  |
|:------:|---------|-------------------------------|:------:|:-------:|:---------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A      | Archive | Archive                       | yes    | yes     | no              | Starts the archiving process and will trigger automatically a daily closing                                                                                                                              |
| B      | Bill    | Bill                          | yes    | yes     | no              | bill and payment prove are created, this does not replace a ticket creation; a ticket or an invoice have to be issued to raise turnover and raise the GT counters as well                                |
| B      | Bill    | Foreign sales                 | yes    | yes     | no              | bill and payment prove are created, this does not replace a ticket creation; a ticket or an invoice have to be issued to raise turnover and raise the GT counters as well                                |
| C      | Copy    | Copy                          | yes    | yes     | no              | in a request the previous receipt reference is mandatory; it contains the receipt number of the cash register which was handed out as a copy                                                             |
| G      | General | Daily Receipt                 | yes    | yes     | no              | Adds daily counter to month-counter an then resets daily counter; keeps shift counter                                                                                                                    |
| G      | General | Monthly Receipt               | yes    | yes     | no              | Adds daily counter to month-counter an then resets daily counter; Adds monthly counter to yearly counter and then resets monthly counter; keeps shift counter                                            |
| G      | General | Shift Receipt                 | yes    | yes     | no              | Resets shift counter, keeps all other counters                                                                                                                                                           |
| G      | General | Start Receipt                 | yes    | yes     | no              | A receipt with empty charge items block and empty payment block which amounts to a total of "0"; This receipt starts the ft.SecurityMechanism and has to be send as first receipt before using the queue |
| G      | General | Stop Receipt                  | yes    | yes     | no              | A receipt with empty charge items block and empty payment block which amounts to a total of "0"; This receipt stops the ft.SecurityMechanism and has to be send as last receipt before closing the queue |
| G      | General | Yearly Receipt                | yes    | yes     | no              | Adds daily counter to month-counter an then resets daily counter; Adds monthly counter to yearly counter and then resets monthly counter; Resets yearly counter; keeps shift counter                     |
| G      | General | Zero Receipt                  | yes    | yes     | no              | A receipt with empty charge items block and empty payment block which amounts to a total of "0"                                                                                                          |
| I      | Invoice | Invoice                       | yes    | yes     | yes             | A reference to the ticket can be created by using the previous receipt number in the request                                                                                                             |
| L      | Logging | Protocol / Accounting / Audit | yes    | yes     | no              | Can be used by the POS system to log custom accounting or auditing data                                                                                                                                  |
| L      | Logging | Protocol / Custom             | yes    | yes     | no              | Can be used by the POS system to log custom data                                                                                                                                                         |
| L      | Logging | Protocol / Technical Event    | yes    | yes     | no              | Can be used by the POS system to log custom technical data                                                                                                                                               |
| P      | Payment | Cash Deposit                  | yes    | yes     | no              | total amount is always zero                                                                                                                                                                              |
| P      | Payment | Pay Out                       | yes    | yes     | no              | total amount is always zero                                                                                                                                                                              |
| P      | Payment | Payment Prove                 | yes    | yes     | no              | total amount is always zero                                                                                                                                                                              |
| P      | Payment | Payment Transfer              | yes    | yes     | no              | Switch between Payment method, e.g. from cash to credit card                                                                                                                                             |
| T      | Ticket  | Ticket                        | yes    | yes     | yes             | Issues a ticket with charge and pay items, has to be secured by printing the signatures send back by the service                                                                                         |

#### Receipt cases<a name="ReceiptCases"></a>

| Receipt Case                  | Value hex          | Value int64         |
|-------------------------------|-------------------:|--------------------:|
| Archive                       | 0x4652000000000015 | 5067112530745229333 |
| Bill                          | 0x4652000000000008 | 5067112530745229320 |
| Cash Deposit                  | 0x465200000000000A | 5067112530745229322 |
| Copy                          | 0x4652000000000016 | 5067112530745229334 |
| Daily Receipt                 | 0x4652000000000005 | 5067112530745229317 |
| Delivery Note                 | 0x4652000000000009 | 5067112530745229321 |
| Foreign sales                 | 0x465200000000000E | 5067112530745229326 |
| Internal / Material           | 0x465200000000000D | 5067112530745229325 |
| Invoice                       | 0x4652000000000003 | 5067112530745229315 |
| Monthly Receipt               | 0x4652000000000006 | 5067112530745229318 |
| Protocol / Accounting / Audit | 0x4652000000000013 | 5067112530745229331 |
| Protocol / Custom             | 0x4652000000000014 | 5067112530745229332 |
| Protocol / Technical Event    | 0x4652000000000012 | 5067112530745229330 |
| Pay Out                       | 0x465200000000000B | 5067112530745229323 |
| Payment Prove                 | 0x4652000000000002 | 5067112530745229314 |
| Payment Transfer              | 0x465200000000000C | 5067112530745229324 |
| Shift Receipt                 | 0x4652000000000004 | 5067112530745229316 |
| Start Receipt                 | 0x4652000000000010 | 5067112530745229328 |
| Stop Receipt                  | 0x4652000000000011 | 5067112530745229329 |
| Ticket                        | 0x4652000000000001 | 5067112530745229313 |
| Unknown (processed as ticket) | 0x4652000000000000 | 5067112530745229312 |
| Yearly Receipt                | 0x4652000000000007 | 5067112530745229319 |
| Zero Receipt                  | 0x465200000000000F | 5067112530745229327 |

#### Journal types

| Value hex          | Value int64         | Description                                                                                                        |
|-------------------:|--------------------:|--------------------------------------------------------------------------------------------------------------------|
| 0x4652000000000000 | ‭5067112530745229312‬ | Version information                                                                                                |
| 0x4652000000000001 | 5067112530745229313 | ActionJournal in internal format; contains all *zero-receipts*                                                     |
| 0x4652000000000002 | 5067112530745229314 | ReceiptJournal in internal format; contains all *receipts* that are not *zero-receipts*                            |
| 0x4652000000000003 | 5067112530745229315 | QueueitemJournal in internal format; contains all detailed information                                             |
