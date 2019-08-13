## Configuration

For using a template or a package see chapter [Buying a package in the shop or using a template](shop.md#buy-package-in-shop-or-use-a-template).

[![https://portal.fiskaltrust.at/CashBox/](images/CashBox/001.png "https://portal.fiskaltrust.at/CashBox/")](https://portal.fiskaltrust.at/CashBox/)
Overview of configured and available configuration containers

The creation and management of the components is discussed in the following chapters:

**in general**
- [Signature creation device](#SCU)
- [Helper](#helper)
- [Queue](#queue)
- [CashBox](#cashbox)

**for Austria**
- [Signature creation device](../handbook-at/configuration.md#SCU)
- [CashBox](../handbook-at/configuration.md#cashbox)

**in France**
- [Signature creation device](../handbook-fr/configuration.md#SCU)
- [Queue](#queue)
- [CashBox](#cashbox)

### CashBox

The CashBox is a kind of configuration container and is restricted by national laws. Refer to the chapter "Configuration" in the Appendix for each country.

### Queue

The functions are described in the currently valid interface description: [https://github.com/fiskaltrust/interface-doc](https://github.com/fiskaltrust/interface-doc). Be aware that a queue like the SCU itself are based on national laws. Refer to the chapters in the appendices for the national implementations.

### Helper

Helpers are modules which are extending the [CashBox](#cashbox) with further functionality.

#### Installation of the helpers

[![https://portal.fiskaltrust.at/Helper/](images/Helper/001.png "https://portal.fiskaltrust.at/Helper/")](https://portal.fiskaltrust.at/Helper/)
Overview of the Helpers

![Number 1](../images/Numbers/1.png) In order to get to the installation and configuration of the helpers, click on the menu item "*Helper*".

![Number 2](../images/Numbers/2.png) By clicking on \[Create new\] a page is called up, on which a new Helper can be created.

#### Add a helper

[![https://portal.fiskaltrust.at/Helper/](images/Helper/002.png "https://portal.fiskaltrust.at/Helper/")](https://portal.fiskaltrust.at/Helper/)
Add Helper

![Number 1](../images/Numbers/1.png) In this field the name of the helper can be changed.

![Number 2](../images/Numbers/2.png) Here you can use the dropdown menu to select from the various package versions.

![Number 3](../images/Numbers/3.png) The package version can also be selected using a dropdown menu. These can be updated by clicking on ![Refresh](../images/Buttons/008.png "Refresh").

![Number 4](../images/Numbers/4.png) Click on \[Save\] to save the Helper configuration.

#### Overview Helper

[![https://portal.fiskaltrust.at/Helper/](images/Helper/003.png "https://portal.fiskaltrust.at/Helper/")](https://portal.fiskaltrust.at/Helper/)
Overview Helper

![Number 1](../images/Numbers/1.png) To get to the Helper configuration, click on the menu item "*Helper*".

![Number 2](../images/Numbers/2.png) Click on \[Create new\] to go to the page for creating a new helper.

![Number 3](../images/Numbers/3.png) The name of the helper is displayed here.

![Number 4](../images/Numbers/4.png) By clicking on ![Gear](../images/Buttons/009.png "Gear"), the basic settings and package configuration for individual use of the Helper in the cash register can be called up again.

![Number 5](../images/Numbers/5.png) By clicking on ![Edit](../images/Buttons/010.png "Edit") things like the description, package name and version of the helper may be edited.

![Number 6](../images/Numbers/6.png) Click on ![Trash](../images/Buttons/011.png "Trash") to delete the helper. However, the button to delete the helper is currently inactive for legal reasons, so no helper can currently be deleted.

![Number 7](../images/Numbers/7.png) A brief overview of the data for the selected helper is displayed here.

![Number 8](../images/Numbers/8.png) With the help of the search function, a helper can be searched for by entering any parameter in the search field.

#### Helper configuration

[![https://portal.fiskaltrust.at/Helper/](images/Helper/004.png "https://portal.fiskaltrust.at/Helper/")](https://portal.fiskaltrust.at/Helper/)
Helper - Configuration

![Number 1](../images/Numbers/1.png) Here you can choose between the individual modes "least active" and "round robin" in the dropdown menu.

![Number 2](../images/Numbers/2.png) In this field the name of the helper can be changed.

![Number 3](../images/Numbers/3.png) Here you can create a URL for your Helper. By clicking on ![net pipe](../images/Buttons/012.png "net pipe") you get a URL, which is suitable for local use without internet connection, because no firewall settings are required.

![Number 4](../images/Numbers/4.png) By clicking on the ![http](../images/Buttons/013.png "http") button, the system generates a URL for you with which the POS system can access the helper. You can rename the URL yourself. This can look like this: http://localhost.1200/Helperfiskaltrust

Click on \[Save\] to save the Helper configuration.

#### Helper delete

[![https://portal.fiskaltrust.at/Helper/](images/Helper/005.png "https://portal.fiskaltrust.at/Helper/")](https://portal.fiskaltrust.at/Helper/)
Helper - Delete

For legal reasons it is currently not possible to delete the helper.

### Signature Creation Unit<a name="SCU"></a>
Refer to the chapters in the appendices for the national implementations of a signature creation unit.