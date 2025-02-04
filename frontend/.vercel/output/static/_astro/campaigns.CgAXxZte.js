const e="campaigns.mdx",a="docs",n="campaigns",i=`
![/img/messages.png](/img/campaigns.png)

## Overview

A campaign is a set of individual email messages that are sent to your [subscribers](/docs/subscribers). An example may be a new product launch or a regular newsletter.

> Before creating a campaign, the following must already be configured:
> - at least one [email service](/docs//email-services).
> - a list of [subscribers](/docs/subscribers) to target with your campaign.
> - an [email template](/templates) for your campaign (optional, but recommended).

## View Campaigns

To view a listing of your campaigns, click the _Campaigns_ link in the sidebar. This will take you to the campaigns index page.

## Starting New Campaigns

Navigate to the campaigns index page and click the _New Campaign_ button.

![/img/messages.png](/img/create-campaign.png)

### Fields

#### Campaign Name

A friendly name for your campaign that is only used within Laravel Mail. It helps you properly distinguish one campaign from another. An example may be "Newsletter - May 2020".

#### Subject

The subject of your campaign email. This is what your mail recipients will see in their inbox, so you should try to keep it clear and concise. The Subject can include placeholders for the Subscriber's \`{{first_name}}\`, \`{{last_name}}\` and \`{{email}}\`. Refer to the Placeholders section of the [Templates](/docs/v2/features/templates) documentation for more information.

#### From Name

Also known as the the email sender name. This tells the mail recipients who sent the message.

#### From Email

This is what your mail recipients will see as the "from" address. This should be an address that you have ownership of and must match the settings for the selected email service.

#### Template (optional)

The template that you wish to use for your campaign email.

#### Track Opens

Determines whether or not individual email opens are tracked. If you wish to track opens, webhooks must be configured for your email service.

#### Track Clicks

Determines whether or not individual email clicks are tracked. If you wish to track clicks, webhooks must be configured for your email service.

#### Content

The body of your campaign email. This is what gets sent to your subscribers, so make it good!

The content can include placeholders. To understand which placeholders are available to you, see the Placeholders section of the [Templates](/docs/templates) documentation.

Once you have filled out the form, click _Save and Continue_. Your campaign will now be marked as a **Draft**.

## Sending Campaigns

Campaigns are dispatched from the preview page.

### Test Email

It's good practice to send out a test email before you dispatch your campaign. 
This allows you to see how your email will appear to your recipients and offers an opportunity to pick up on any mistakes you may have made.
 To send a test email, simply enter an email address in the \`Recipient\` field and click _Send Test Email_. It will be dispatched using your configured email service.

### Sending Options

#### Recipients

You can choose to dispatch your campaign to your entire subscriber list or those with specific tags.

#### Schedule

You can schedule your campaign to be dispatched immediately or at a later date and time.

#### Sending Behaviour

You can specify one of two sending behaviours for your campaign:

- \`Queue Draft\` - this will generate each of your messages as a draft and requires you to dispatch each email individually from the _Messages_ section. This is a good idea if you want to double check how each email will display prior to sending, especially if you're using a complex template that may result in each email varying from subscriber to subscriber. We do not recommend this option if you have a large list of subscribers!
- \`Send Automatically\` - this will generate your messages and dispatch them automatically.

> If you find that your campaigns do not send, please ensure you have configured scheduled tasks and queue workers as described in the [Configuration](/docs/configuration) section.


#### Campaign Analytics
![/img/messages.png](/img/campaign-analytics.png)

After a campaign has been sent you can view the analytics for that campaign.
`,s={title:"Campaigns",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},t={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/campaigns.mdx",rawData:void 0};export{t as _internal,i as body,a as collection,s as data,e as id,n as slug};
