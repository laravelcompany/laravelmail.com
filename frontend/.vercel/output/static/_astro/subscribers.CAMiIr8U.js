const e="subscribers.mdx",n="docs",s="subscribers",i=`
## Overview

Subscribers represent individuals that are available to you when sending out campaigns. 
Subscribers can optionally belong to one or more [segments](/docs/segments).

> The email address for each Subscriber must be unique in each [workspace](/docs/workspaces).

## View Subscribers

To view a list of your subscribers, click the _Subscribers_ link in the sidebar. This will take you to the subscribers index page.

### Subscriber Table

Subscribers are listed in a paginated table, where each row represents a different subscriber.

### Filtering Subscribers

The following filtering options are available:

- Subscriber Email and/or Name. Partial matches will also be returned.
- Subscriber Subscription Status

## Viewing an Individual Subscriber

To view an individual subscriber, head to the subscribers index page and click on the subscriber's email in the table that's presented to you.

### Subscriber Details

Each subscriber's email, first name, last name and subscription status is displayed when viewing an individual subscriber.

In addition, if the subscriber is in any [segments](/docs/segments) then these are also displayed.

### Messages

If any messages have been sent to the subscriber, they will be listed in the Messages section.

## Adding and Updating Subscribers

Subscribers can be added and updated in the following ways:

* manually through the application interface
* via a CSV upload
* programmatically using the API.

### Application Interface

#### Adding A Subscriber

Navigate to the subscribers index page and click _New Subscriber_.

#### Updating A Subscriber

Click the _Edit_ button on the subscriber's row in the list.

The following information can be saved for each Subscriber:

- email
- first name (optional)
- last name (optional)
- subscription status
- segments (optional)

### CSV Imports

Laravel Mail Platform allows you to easily import multiple subscribers via a CSV upload. This can be used to create new subscribers and update existing ones.

To import subscribers via CSV, click the _Subscribers_ link in the sidebar. From there, click the overflow menu button and then _Import Subscribers_.

#### CSV File Format

The following fields are available in the CSV.

- \`id\` (optional) - The ID field is only used when updating existing subscribers, and must be set if you wish to update the subscriber's email address. The \`id\` field should be present but left empty when importing new subscribers.
- \`email\` (required) - A unique email address for the subscriber. Note that if the email address is already present in Laravel Mail Platform, the row will instead update the \`first_name\` and \`last_name\` of the existing subscriber.
- \`first_name\` (optional) - The subscriber's first name.
- \`last_name\` (optional) - The subscriber's last name.

Additionally, the **first row** of the CSV **must** be a header row, where each column is the name as listed above, and must be provided in the order above.

Each row after the header row must represent a single subscriber. Optional fields can be left empty.

> The import page shows an example of a CSV file, with the header and a row.

#### Uploading The File

To upload the file, click the _Browse_ button on the file selector, and choose the file you wish to upload. When you have selected your file, you can click the _Upload_ button to begin the upload process.

#### Segments

Segments can be chosen for subscribers by using the \`Segments\` selector. If you have any segments available, you can pick which ones to use here. Note that the chosen segments will apply to all subscribers uploaded in the chosen CSV. It is currently not possible to specify separate segments for each individual subscriber.

### API

Refer to the [subscribers API documentation](/docs/subscribers) for information on how to manage subscribers through the API.

## Exporting Subscribers

To export subscribers, click the _Subscribers_ link in the sidebar. From there, click the overflow menu button and then _Export Subscribers_.

## Unsubscribing

### Manually Unsubscribing

To manually unsubscribe a subscriber, you should go to the subscriber edit page, uncheck \`Subscribed\` and then click _Save_.

### Unsubscribe Links

Laravel Mail Platform allows automatic injection of unsubscribe links in your templates and campaigns. See the [templates](/docs/templates) section for more information on how this works.

When a user clicks on the unsubscribe link, they will be sent to a web page asking them to confirm that they want to be unsubscribed.

If they decide to unsubscribe, they will be shown a confirmation message that they have been unsubscribed, along with the option to resubscribe.`,t={title:"Subscribers",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},a={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/subscribers.mdx",rawData:void 0};export{a as _internal,i as body,n as collection,t as data,e as id,s as slug};
