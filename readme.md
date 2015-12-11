# Sample Azure Deployment

Sample project illustrating how you can combine deployment to Azure Web Apps with Gulp-driven builds. Combined with Deployment slots this approach allows you to setup a structured release process for your application.

## Getting started

1. Clone this repo
1. In Azure create a new **Web App**
1. On the **Settings** blade, from the **Publishing** group, choose the **Continuous deployment** option
1. On the **Source** blade choose the **Local Git Repository** option
1. From the main blade of your Web App get the **Git clone url**
1. Add the **Azure Web App Git clone url** as a remote repo to the cloned repo (`$ git remote add azure-prod <url>`)
1. Make a change to the **index.html** (eg. change version from *v0.1* to *v0.2*)
1. Push the changes to the Git repo behind your Azure Web App. You will notice that the push takes some more time due to the build process which is now a part of the commit

## Additional steps

This approach can be combined with Deployment slots which allow you to verify that the latest build is correct before releasing it to production.

The following steps illustrate how you can release your Web App to a staging slot and after verifying that your changes work as expected swap it with the production release.

1. Ensure that your Web App is hosted on a Standard Plan which enables access to Deployment slots
1. On the **Settings** blade, from the **Publishing** group click the **Deployment slots** option
1. From the menu click the **Add Slot** button
1. Call the new slot `staging` and set **Configuration Source** to your main slot
1. In the list of **Deployment slots** click on the newly created **Staging** slot
1. On the **Staging** slot's Web App blade copy the **Git clone url**
1. Add the **Staging slot Git clone url** as a remote repo to the cloned repo
1. Make a change to the **index.html** (eg. change version from *v0.2* to *v0.3*)
1. Push the changes to the **Staging** remote repo
1. In the **Azure Management Portal** click on the URL of the staging Web App to confirm that changes have been released as expected
1. On the **Staging** slot's Web App blade in the menu click the **Swap** button to put the changes to production
1. Since the production and staging slots have been swapped the current staging slot contains old code. To align it with the latest release code push your changes to the **Staging** remote repo again