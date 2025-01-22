const e="email-services.mdx",n="docs",o="email-services",t=`

## Introduction
Laravel Mail Platform must be integrated with at least one email service provider in order for your emails to be dispatched. 
You can have multiple email services configured at one given time. For example, you may wish to send newsletters via SES and transactional emails via Postmark.

> The credentials for each email service is stored in an encrypted format in the database. If the \`APP_KEY\` in your \`.env\` field is changed or lost, you will need to re-enter the credentials for each email service again.

Laravel Mail Platform currently integrates with the following five email service providers:

## Testing

You can test if an Email Service has been correctly configured by clicking on the \`Test\` button in the page that lists all of your Email Services.  

![/img/docs/providers/testing.png](/img/docs/providers/testing.png)

In order to test an Email Service you will have to provide the email address from which the email will be sent - this must be a verified email address or domain.



## AWS SES

### Sending Emails

To send e-mails using the Amazon SES provider, you will need an AWS account. If you don't already have an account, [visit the AWS website](https://aws.amazon.com/) and click the _Create an AWS Account_ button in the top right corner of the screen.

![/img/docs/providers/aws/aws-1.png](/img/docs/providers/aws/aws-1.png)

Be aware that you'll need to provide credit card details, even if you only intend to make use of the free tier.

Once you've created an account, navigate to the SES (Simple Email Service) control panel by typing "simple email service" into the \`Find Services\` input on the AWS Management Console and clicking on the relevant option in the dropdown.

![/img/docs/providers/aws/aws-2.png](/img/docs/providers/aws/aws-2.png)

Click _Go to identity management_;

![/img/docs/providers/aws/aws-3.png](/img/docs/providers/aws/aws-3.png)

You'll need to verify the domain from which you want to send all your e-mails, so click _Verify a New Domain_.

![/img/docs/providers/aws/aws-4.png](/img/docs/providers/aws/aws-4.png)

At this stage we're not going to generate the DKIM settings, but this is worth doing once you move to a production environment, as it will reduce the risk of any messages you send being marked as spam.

![/img/docs/providers/aws/aws-5.png](/img/docs/providers/aws/aws-5.png)

Once you click _Verify This Domain_ you'll be provided with a domain verification record;

![/img/docs/providers/aws/aws-6.png](/img/docs/providers/aws/aws-6.png)

You'll now need to visit the site that you use to manage DNS for the domain provided (usually the domain registrar). The steps to do this are beyond the scope of this documentation as they vary from provider to provider, but you will need to create a \`TXT\` entry for the relevant domain and paste in the strings from the \`Name\` and \`Value\` columns.

Once you've completed this step, click \`Close\`. At first the \`Verification status\` will be \`pending verification\` and \`Enabled for sending\` will be \`No\`.

![/img/docs/providers/aws/aws-7.png](/img/docs/providers/aws/aws-7.png)

As long as you have set the DNS entry correctly, the \`Verification status\` will transition to \`verified\` and \`Enabled for Sending\` will show \`Yes\`. You should also receive a notification via e-mail to say that the domain has been successfully verified.

![/img/docs/providers/aws/aws-8.png](/img/docs/providers/aws/aws-8.png)

It can take some time to make this transition, but if it doesn't work ensure you didn't accidentally copy and paste any whitespace at the beginning or end of either string.

We also need to create a "configuration set". In order to do that, select the _Configuration Sets_ option from the side menu of the SES panel.

![/img/docs/providers/aws/aws-9.png](/img/docs/providers/aws/aws-9.png)

If you don't require e-mail tracking (delivery, opens etc) you only need to create the configuration set.

![/img/docs/providers/aws/aws-10.png](/img/docs/providers/aws/aws-10.png)

Next we need to generate an access key pair. To do this you'll need to visit the [IAM (Identity and Access Management) module of AWS](https://console.aws.amazon.com/iam/home?#/home).

It's best to create a new IAM user, so click _Users_ and _Add user_. You can create the key pair using your root user account, but as this allows unrestricted access to the AWS console, it's a security risk if the credentials are ever compromised.

As the user doesn't need access to the management console, you can just select the \`Programmatic access\` option.

![/img/docs/providers/aws/aws-12.png](/img/docs/providers/aws/aws-12.png)

If you don't already have any groups configured, you'll need to create one at the next step. If you only want the account to be able to send e-mails then select the \`AmazonSESFullAccess\` policy.

![/img/docs/providers/aws/aws-13.png](/img/docs/providers/aws/aws-13.png)

If you also want to enable e-mail tracking, you'll need to add the \`AmazonSNSFullAccess\` policy.

![/img/docs/providers/aws/aws-14.png](/img/docs/providers/aws/aws-14.png)

Selecting tags for the user is optional, so we're not going to enter any at this stage. Once the user has been created you should now be able to copy and paste the access key and secret access key to the Laravel Mail Platform provider configuration.

![/img/docs/providers/aws/aws-15.png](/img/docs/providers/aws/aws-15.png)

We're now ready to configure the provider with Laravel Mail Platform.

![/img/docs/providers/aws/aws-11.png](/img/docs/providers/aws/aws-11.png)

Congratulations! You can now send e-mails using Amazon SES.

If you require any more information about SES, check the official [Amazon SES documentation](https://docs.aws.amazon.com/ses/index.html).

### Tracking

If you want to enable tracking for e-mails that you send through SES, then there are a few additional steps we need to complete.

You'll need to configure Amazon's SNS (Simple Notification Service) in order for it to send the required webhooks to Laravel Mail Platform, so navigate to the SNS page from the AWS Management Console.

Begin by creating a topic. Select _Topics_ from the menu and click _Create topic_. Everything other than a name is optional at this time.




![/img/docs/providers/aws/aws-16.png](/img/docs/providers/aws/aws-16.png)

We also need to create a subscription to go along with our topic. For the Topic ARN, select the topic that you just created and select \`HTTPS\` as the protocol. The \`Endpoint\` will depend on your domain, but must end with \`/api/v1/webhooks/aws\`. For example, if Laravel Mail Platform is installed at \`https://app.laravelmail.com\`, then each webhook should point to \`https://app.laravelmail.com/api/v1/webhooks/aws\`.

Do _not_ enable \`raw message delivery\`, otherwise the webhooks will not be handled correctly.

![/img/docs/providers/aws/aws-17.png](/img/docs/providers/aws/aws-17.png)

The subscription needs to be confirmed before we can use it, but if you've supplied the correct URL for your Laravel Mail Platform instance, and it's already available to the outside world, we'll do that automatically for you. You should see \`Status\` transition to \`Confirmed\`.

![/img/docs/providers/aws/aws-18.png](/img/docs/providers/aws/aws-18.png)

We now need to tell SES to send any e-mail tracking webhooks to this endpoint so navigate back to the SES panel (we're almost there now...).

Select the domain that you already configured from \`Domains\` and open the section titled \`Notifications\`.

![/img/docs/providers/aws/aws-19.png](/img/docs/providers/aws/aws-19.png)

Click _Edit Configuration_ and select the SNS topic that you created from the dropdown for each of the notification types.

![/img/docs/providers/aws/aws-20.png](/img/docs/providers/aws/aws-20.png)

Finally, we need to enable the notification types for the configuration step that we created. Select the configuration set from the list and select SNS from the dropdown next to \`Add Destination\`.

![/img/docs/providers/aws/aws-21.png](/img/docs/providers/aws/aws-21.png)

Select all the notification types you wish to receive (excluding \`Send\` and \`Rendering Failure\`), and select the Topic from the list.

![/img/docs/providers/aws/aws-22.png](/img/docs/providers/aws/aws-22.png)

Phew! That's it folks! You should now be setup to send and track e-mails using Amazon AWS.

![/img/docs/providers/aws/aws-23.png](/img/docs/providers/aws/aws-23.png)

For more information on Amazon SNS, visit the [official documentation](https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html).

For more information on configuring SNS notifications for SES, visit the [developer guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-sns-notifications.html).

### Throttling

AWS throttles the sending of e-mails via the SES API. Requests are limited to 1 per second by default, but you can apply to have this rate increased.

For this reason you need to have a cache configured when using AWS. For a small mailing list the \`file\` driver is sufficient, but for medium or large mailing lists we recommend implementing \`redis\`.

For more information on SES throttling, see the official documentation [here](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html?icmpid=docs_ses_console).


## Sendgrid

### Sending Emails

To send e-mails using the Twilio Sendgrid provider, you will need a Sendgrid account. If you don't already have one, [visit the Sendgrid website](https://sendgrid.com/) and sign up. No credit card is required and you can get up to 100 free emails per month.

Once registered, open the \`Setup Guide\`, choose the \`Web API\` integration and select the PHP language option.

![/img/docs/providers/sendgrid/sendgrid-1.png](/img/docs/providers/sendgrid/sendgrid-1.png)

Generate an API key and copy it to your Laravel Mail Platform configuration.

![/img/docs/providers/sendgrid/sendgrid-2.png](/img/docs/providers/sendgrid/sendgrid-2.png)

Check the \`I've integrated the code above\` box and click Next.

Send a test e-mail from Laravel Mail Platform and if it works successfully click _Verify integration_.

### Tracking

![/img/docs/providers/sendgrid/sendgrid-3.png](/img/docs/providers/sendgrid/sendgrid-3.png)

Open and click tracking is enabled by default in SendGrid, but if you'd like to check the settings you'll find them under _Settings_ > _Tracking_.

![/img/docs/providers/sendgrid/sendgrid-4.png](/img/docs/providers/sendgrid/sendgrid-4.png)

You can also enable subscription tracking from this page. If enabled, SendGrid will automatically add unsubscribe links to the bottom of every e-mail you send.

![/img/docs/providers/sendgrid/sendgrid-5.png](/img/docs/providers/sendgrid/sendgrid-5.png)

To enable tracking within Laravel Mail Platform you'll need to enable event notifications from _Settings_ > _Mail Settings_.

The \`HTTP POST URL\` depends on your domain, but must end with \`/api/v1/webhooks/sendgrid\`. For example, if Laravel Mail Platform is installed at \`https://app.laravelmail.com\`, then each webhook should point to \`https://app.laravelmail.com/api/v1/webhooks/sendgrid\`.

That's it! You're now setup to send and track e-mails using SendGrid.



## Postmark

### Sending Email

To send e-mails using the Postmark provider, you will need a Postmark account. If you don't already have an account, visit the [Postmark website](https://postmarkapp.com/) and click the _Start Free Trial_ button in the top right corner of the screen.

Postmark will automatically create a server for you, called \`My First Server\`. Click on the server and select the _API Tokens_ tab.

![/img/docs/providers/postmark/postmark-1.png](/img/docs/providers/postmark/postmark-1.png)

Copy the string from \`Server API tokens\` and create a provider within Laravel Mail Platform.

![/img/docs/providers/postmark/postmark-2.png](/img/docs/providers/postmark/postmark-2.png)

Next, navigate to _Sender Signatures_ and select the option to _Add Domain_.

![/img/docs/providers/postmark/postmark-3.png](/img/docs/providers/postmark/postmark-3.png)

Enter your domain name and click _Verify domain_.

![/img/docs/providers/postmark/postmark-4.png](/img/docs/providers/postmark/postmark-4.png)

You'll now need to visit the site that you use to manage DNS for the domain provided (usually the domain registrar). The steps to do this are beyond the scope of this documentation as they vary from provider to provider, but you will need to create a \`TXT\` entry for the relevant domain and paste in the strings from the \`Hostname\` and \`Add this value\` columns.

![/img/docs/providers/postmark/postmark-5.png](/img/docs/providers/postmark/postmark-5.png)

Once you've added the entry with your DNS provider, click the _Verify_ button and the DKIM status should transition to \`Verified\`. It can take some time to make this transition, but if it doesn't work ensure you didn't accidentally copy and paste any whitespace at the beginning or end of either string.

![/img/docs/providers/postmark/postmark-6.png](/img/docs/providers/postmark/postmark-6.png)

To configure e-mail tracking, select the server from the \`Servers\` page, select the \`Transactional\` (\`Default Transactional Stream\`) stream from the list of \`Message Streams\`.

![/img/docs/providers/postmark/postmark-7.png](/img/docs/providers/postmark/postmark-7.png)

Select the _Webhooks_ tab and click _Add webhook_.

![/img/docs/providers/postmark/postmark-8.png](/img/docs/providers/postmark/postmark-8.png)

The \`Webhook URL\` depends on your domain, but must end with \`/api/v1/webhooks/postmark\`. For example, if Laravel Mail Platform is installed at \`https://app.laravelmail.com\`, then each webhook should point to \`https://app.laravelmail.com/api/v1/webhooks/postmark\`.

![/img/docs/providers/postmark/postmark-9.png](/img/docs/providers/postmark/postmark-9.png)

You'll also need to enable open tracking and link tracking from the stream settings.

![/img/docs/providers/postmark/postmark-10.png](/img/docs/providers/postmark/postmark-10.png)

That's it! You're now setup to send and track e-mails using Postmark.



## Mailjet

### Sending Emails

To send e-mails using the Mailjet provider, you will need a Mailjet account. If you don't already have an account, visit the [Mailjet website](https://www.mailjet.com/) to create one.

> The Mailjet Free plan offers you 200 emails a day, which is enough to cover your basic needs if you are a small sender.

When you first begin, you need to add and configure the _"From:"_ email address, also known as the _Sender Address_. Extensive documentation for this step is available [here](https://app.mailjet.com/support/how-to-add-a-sender-address,96.htm).

Finally, in order to integrate Laravel Mail with Mailjet, you need to copy the \`API Key\` and the \`API Secret Key\`, which are [generated automatically](https://app.mailjet.com/account/api_keys) when your account is created, into your Laravel Mail provider configuration. 

![/img/docs/providers/mailjet/mailjet-1.png](/img/docs/providers/mailjet/mailjet-1.png)

Alternatively, if you don't want to use the _Master API Key_ (which grants full access to your account), you can set up Sub-account API Keys and limit their scope. 

### Tracking

By default the tracking options for \`opens\` and \`clicks\` are activated for all new accounts. These settings can be changed on your [Account Preferences page](https://app.mailjet.com/account/settings), but keep in mind that Laravel Mail will always override them with the values that you choose in the application when creating a new campaign.

To enable tracking however you will have to set up _Webhooks_ from the [Account Information page](https://app.mailjet.com/account/triggers).

![/img/docs/providers/mailjet/mailjet-2.png](/img/docs/providers/mailjet/mailjet-2.png)

The URL depends on your domain, but must end with \`/api/v1/webhooks/mailjet\`. For example, if Laravel Mail is installed at \`https://app.laravelmail.com\`, then each webhook should point to \`https://app.laravelmail.com/api/v1/webhooks/mailjet\`.

You'll need to add an entry for each type of event you want to track, but the URL is the same for each one of them.

If you want to limit the number of calls, you can choose to group together events that occurred over the last second. Laravel Mail is able to handle both single and grouped events.

That's it! You're now setup to send and track e-mails using Mailjet.


## SMTP

### Sending Emails
Laravel Mail can also send your campaigns via SMTP. If you select this option, then you will __not__ be able to track your campaigns - for example, deliveries, open and click tracking will not be available.

> For production environments, we recommend using one of the API Email Services instead of SMTP.

To create an SMTP Email Service in Laravel Mail, navigate to the **Email Services** tab, click the **Add Email Service** button and enter the relevant details, making sure to select **SMTP** as the type.



## Local MTA Sender

### Sending Emails
Laravel Mail can also send your campaigns via our LOCAL MTA AGENT ( An mta aggent is used for transfering the email to the smtp and not a replacement service). 
You will tend to use this when you have a high volume emails that needs dispaching.
If you select this option, then you will __not__ be able to track your campaigns - for example, deliveries, open and click tracking will not be available.


\`\`\`
[
  {
    "smtp": {
      "address": "smtp.gmail.com",
      "port": 587,
      "username": "your-email@gmail.com",
      "password": "your-email-password"
    },
    "message": {
      "from": "your-email@gmail.com",
      "to": "recipient1@example.com",
      "content": "<h1>Hello, Recipient 1!</h1><p>This is a test email sent using Laravel Mail.</p>"
    }
  },
  {
    "smtp": {
      "address": "smtp.gmail.com",
      "port": 587,
      "username": "your-email@gmail.com",
      "password": "your-email-password"
    },
    "message": {
      "from": "your-email@gmail.com",
      "to": "recipient2@example.com",
      "content": "<h1>Hello, Recipient 2!</h1><p>This is another test email sent using Laravel Mail.</p>"
    }
  }
]
\`\`\`\``,a={title:"Email Services",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},i={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/email-services.mdx",rawData:void 0};export{i as _internal,t as body,n as collection,a as data,e as id,o as slug};
