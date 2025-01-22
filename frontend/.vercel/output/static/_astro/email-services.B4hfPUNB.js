import{$ as r,c as n}from"./_astro_assets.DtD32lsl.js";import{F as o}from"./scroll-area.DcbEPeDy.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const s={title:"Email Services",hide_breadcrumbs:!1};function m(){return[{depth:2,slug:"introduction",text:"Introduction"},{depth:2,slug:"testing",text:"Testing"},{depth:2,slug:"aws-ses",text:"AWS SES"},{depth:3,slug:"sending-emails",text:"Sending Emails"},{depth:3,slug:"tracking",text:"Tracking"},{depth:3,slug:"throttling",text:"Throttling"},{depth:2,slug:"sendgrid",text:"Sendgrid"},{depth:3,slug:"sending-emails-1",text:"Sending Emails"},{depth:3,slug:"tracking-1",text:"Tracking"},{depth:2,slug:"postmark",text:"Postmark"},{depth:3,slug:"sending-email",text:"Sending Email"},{depth:2,slug:"mailjet",text:"Mailjet"},{depth:3,slug:"sending-emails-2",text:"Sending Emails"},{depth:3,slug:"tracking-2",text:"Tracking"},{depth:2,slug:"smtp",text:"SMTP"},{depth:3,slug:"sending-emails-3",text:"Sending Emails"},{depth:2,slug:"local-mta-sender",text:"Local MTA Sender"},{depth:3,slug:"sending-emails-4",text:"Sending Emails"}]}const g=!0;function a(i){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",span:"span",strong:"strong",...i.components};return n(o,{children:[n(e.h2,{id:"introduction",children:"Introduction"}),`
`,n(e.p,{children:`Laravel Mail Platform must be integrated with at least one email service provider in order for your emails to be dispatched.
You can have multiple email services configured at one given time. For example, you may wish to send newsletters via SES and transactional emails via Postmark.`}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["The credentials for each email service is stored in an encrypted format in the database. If the ",n(e.code,{children:"APP_KEY"})," in your ",n(e.code,{children:".env"})," field is changed or lost, you will need to re-enter the credentials for each email service again."]}),`
`]}),`
`,n(e.p,{children:"Laravel Mail Platform currently integrates with the following five email service providers:"}),`
`,n(e.h2,{id:"testing",children:"Testing"}),`
`,n(e.p,{children:["You can test if an Email Service has been correctly configured by clicking on the ",n(e.code,{children:"Test"})," button in the page that lists all of your Email Services."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/testing.png",alt:"/img/docs/providers/testing.png"})}),`
`,n(e.p,{children:"In order to test an Email Service you will have to provide the email address from which the email will be sent - this must be a verified email address or domain."}),`
`,n(e.h2,{id:"aws-ses",children:"AWS SES"}),`
`,n(e.h3,{id:"sending-emails",children:"Sending Emails"}),`
`,n(e.p,{children:["To send e-mails using the Amazon SES provider, you will need an AWS account. If you don’t already have an account, ",n(e.a,{href:"https://aws.amazon.com/",rel:"nofollow",target:"_blank",children:"visit the AWS website"})," and click the ",n(e.em,{children:"Create an AWS Account"})," button in the top right corner of the screen."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-1.png",alt:"/img/docs/providers/aws/aws-1.png"})}),`
`,n(e.p,{children:"Be aware that you’ll need to provide credit card details, even if you only intend to make use of the free tier."}),`
`,n(e.p,{children:["Once you’ve created an account, navigate to the SES (Simple Email Service) control panel by typing “simple email service” into the ",n(e.code,{children:"Find Services"})," input on the AWS Management Console and clicking on the relevant option in the dropdown."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-2.png",alt:"/img/docs/providers/aws/aws-2.png"})}),`
`,n(e.p,{children:["Click ",n(e.em,{children:"Go to identity management"}),";"]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-3.png",alt:"/img/docs/providers/aws/aws-3.png"})}),`
`,n(e.p,{children:["You’ll need to verify the domain from which you want to send all your e-mails, so click ",n(e.em,{children:"Verify a New Domain"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-4.png",alt:"/img/docs/providers/aws/aws-4.png"})}),`
`,n(e.p,{children:"At this stage we’re not going to generate the DKIM settings, but this is worth doing once you move to a production environment, as it will reduce the risk of any messages you send being marked as spam."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-5.png",alt:"/img/docs/providers/aws/aws-5.png"})}),`
`,n(e.p,{children:["Once you click ",n(e.em,{children:"Verify This Domain"})," you’ll be provided with a domain verification record;"]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-6.png",alt:"/img/docs/providers/aws/aws-6.png"})}),`
`,n(e.p,{children:["You’ll now need to visit the site that you use to manage DNS for the domain provided (usually the domain registrar). The steps to do this are beyond the scope of this documentation as they vary from provider to provider, but you will need to create a ",n(e.code,{children:"TXT"})," entry for the relevant domain and paste in the strings from the ",n(e.code,{children:"Name"})," and ",n(e.code,{children:"Value"})," columns."]}),`
`,n(e.p,{children:["Once you’ve completed this step, click ",n(e.code,{children:"Close"}),". At first the ",n(e.code,{children:"Verification status"})," will be ",n(e.code,{children:"pending verification"})," and ",n(e.code,{children:"Enabled for sending"})," will be ",n(e.code,{children:"No"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-7.png",alt:"/img/docs/providers/aws/aws-7.png"})}),`
`,n(e.p,{children:["As long as you have set the DNS entry correctly, the ",n(e.code,{children:"Verification status"})," will transition to ",n(e.code,{children:"verified"})," and ",n(e.code,{children:"Enabled for Sending"})," will show ",n(e.code,{children:"Yes"}),". You should also receive a notification via e-mail to say that the domain has been successfully verified."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-8.png",alt:"/img/docs/providers/aws/aws-8.png"})}),`
`,n(e.p,{children:"It can take some time to make this transition, but if it doesn’t work ensure you didn’t accidentally copy and paste any whitespace at the beginning or end of either string."}),`
`,n(e.p,{children:["We also need to create a “configuration set”. In order to do that, select the ",n(e.em,{children:"Configuration Sets"})," option from the side menu of the SES panel."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-9.png",alt:"/img/docs/providers/aws/aws-9.png"})}),`
`,n(e.p,{children:"If you don’t require e-mail tracking (delivery, opens etc) you only need to create the configuration set."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-10.png",alt:"/img/docs/providers/aws/aws-10.png"})}),`
`,n(e.p,{children:["Next we need to generate an access key pair. To do this you’ll need to visit the ",n(e.a,{href:"https://console.aws.amazon.com/iam/home?#/home",rel:"nofollow",target:"_blank",children:"IAM (Identity and Access Management) module of AWS"}),"."]}),`
`,n(e.p,{children:["It’s best to create a new IAM user, so click ",n(e.em,{children:"Users"})," and ",n(e.em,{children:"Add user"}),". You can create the key pair using your root user account, but as this allows unrestricted access to the AWS console, it’s a security risk if the credentials are ever compromised."]}),`
`,n(e.p,{children:["As the user doesn’t need access to the management console, you can just select the ",n(e.code,{children:"Programmatic access"})," option."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-12.png",alt:"/img/docs/providers/aws/aws-12.png"})}),`
`,n(e.p,{children:["If you don’t already have any groups configured, you’ll need to create one at the next step. If you only want the account to be able to send e-mails then select the ",n(e.code,{children:"AmazonSESFullAccess"})," policy."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-13.png",alt:"/img/docs/providers/aws/aws-13.png"})}),`
`,n(e.p,{children:["If you also want to enable e-mail tracking, you’ll need to add the ",n(e.code,{children:"AmazonSNSFullAccess"})," policy."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-14.png",alt:"/img/docs/providers/aws/aws-14.png"})}),`
`,n(e.p,{children:"Selecting tags for the user is optional, so we’re not going to enter any at this stage. Once the user has been created you should now be able to copy and paste the access key and secret access key to the Laravel Mail Platform provider configuration."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-15.png",alt:"/img/docs/providers/aws/aws-15.png"})}),`
`,n(e.p,{children:"We’re now ready to configure the provider with Laravel Mail Platform."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-11.png",alt:"/img/docs/providers/aws/aws-11.png"})}),`
`,n(e.p,{children:"Congratulations! You can now send e-mails using Amazon SES."}),`
`,n(e.p,{children:["If you require any more information about SES, check the official ",n(e.a,{href:"https://docs.aws.amazon.com/ses/index.html",rel:"nofollow",target:"_blank",children:"Amazon SES documentation"}),"."]}),`
`,n(e.h3,{id:"tracking",children:"Tracking"}),`
`,n(e.p,{children:"If you want to enable tracking for e-mails that you send through SES, then there are a few additional steps we need to complete."}),`
`,n(e.p,{children:"You’ll need to configure Amazon’s SNS (Simple Notification Service) in order for it to send the required webhooks to Laravel Mail Platform, so navigate to the SNS page from the AWS Management Console."}),`
`,n(e.p,{children:["Begin by creating a topic. Select ",n(e.em,{children:"Topics"})," from the menu and click ",n(e.em,{children:"Create topic"}),". Everything other than a name is optional at this time."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-16.png",alt:"/img/docs/providers/aws/aws-16.png"})}),`
`,n(e.p,{children:["We also need to create a subscription to go along with our topic. For the Topic ARN, select the topic that you just created and select ",n(e.code,{children:"HTTPS"})," as the protocol. The ",n(e.code,{children:"Endpoint"})," will depend on your domain, but must end with ",n(e.code,{children:"/api/v1/webhooks/aws"}),". For example, if Laravel Mail Platform is installed at ",n(e.code,{children:"https://app.laravelmail.com"}),", then each webhook should point to ",n(e.code,{children:"https://app.laravelmail.com/api/v1/webhooks/aws"}),"."]}),`
`,n(e.p,{children:["Do ",n(e.em,{children:"not"})," enable ",n(e.code,{children:"raw message delivery"}),", otherwise the webhooks will not be handled correctly."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-17.png",alt:"/img/docs/providers/aws/aws-17.png"})}),`
`,n(e.p,{children:["The subscription needs to be confirmed before we can use it, but if you’ve supplied the correct URL for your Laravel Mail Platform instance, and it’s already available to the outside world, we’ll do that automatically for you. You should see ",n(e.code,{children:"Status"})," transition to ",n(e.code,{children:"Confirmed"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-18.png",alt:"/img/docs/providers/aws/aws-18.png"})}),`
`,n(e.p,{children:"We now need to tell SES to send any e-mail tracking webhooks to this endpoint so navigate back to the SES panel (we’re almost there now…)."}),`
`,n(e.p,{children:["Select the domain that you already configured from ",n(e.code,{children:"Domains"})," and open the section titled ",n(e.code,{children:"Notifications"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-19.png",alt:"/img/docs/providers/aws/aws-19.png"})}),`
`,n(e.p,{children:["Click ",n(e.em,{children:"Edit Configuration"})," and select the SNS topic that you created from the dropdown for each of the notification types."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-20.png",alt:"/img/docs/providers/aws/aws-20.png"})}),`
`,n(e.p,{children:["Finally, we need to enable the notification types for the configuration step that we created. Select the configuration set from the list and select SNS from the dropdown next to ",n(e.code,{children:"Add Destination"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-21.png",alt:"/img/docs/providers/aws/aws-21.png"})}),`
`,n(e.p,{children:["Select all the notification types you wish to receive (excluding ",n(e.code,{children:"Send"})," and ",n(e.code,{children:"Rendering Failure"}),"), and select the Topic from the list."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-22.png",alt:"/img/docs/providers/aws/aws-22.png"})}),`
`,n(e.p,{children:"Phew! That’s it folks! You should now be setup to send and track e-mails using Amazon AWS."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/aws/aws-23.png",alt:"/img/docs/providers/aws/aws-23.png"})}),`
`,n(e.p,{children:["For more information on Amazon SNS, visit the ",n(e.a,{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html",rel:"nofollow",target:"_blank",children:"official documentation"}),"."]}),`
`,n(e.p,{children:["For more information on configuring SNS notifications for SES, visit the ",n(e.a,{href:"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-sns-notifications.html",rel:"nofollow",target:"_blank",children:"developer guide"}),"."]}),`
`,n(e.h3,{id:"throttling",children:"Throttling"}),`
`,n(e.p,{children:"AWS throttles the sending of e-mails via the SES API. Requests are limited to 1 per second by default, but you can apply to have this rate increased."}),`
`,n(e.p,{children:["For this reason you need to have a cache configured when using AWS. For a small mailing list the ",n(e.code,{children:"file"})," driver is sufficient, but for medium or large mailing lists we recommend implementing ",n(e.code,{children:"redis"}),"."]}),`
`,n(e.p,{children:["For more information on SES throttling, see the official documentation ",n(e.a,{href:"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html?icmpid=docs_ses_console",rel:"nofollow",target:"_blank",children:"here"}),"."]}),`
`,n(e.h2,{id:"sendgrid",children:"Sendgrid"}),`
`,n(e.h3,{id:"sending-emails-1",children:"Sending Emails"}),`
`,n(e.p,{children:["To send e-mails using the Twilio Sendgrid provider, you will need a Sendgrid account. If you don’t already have one, ",n(e.a,{href:"https://sendgrid.com/",rel:"nofollow",target:"_blank",children:"visit the Sendgrid website"})," and sign up. No credit card is required and you can get up to 100 free emails per month."]}),`
`,n(e.p,{children:["Once registered, open the ",n(e.code,{children:"Setup Guide"}),", choose the ",n(e.code,{children:"Web API"})," integration and select the PHP language option."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/sendgrid/sendgrid-1.png",alt:"/img/docs/providers/sendgrid/sendgrid-1.png"})}),`
`,n(e.p,{children:"Generate an API key and copy it to your Laravel Mail Platform configuration."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/sendgrid/sendgrid-2.png",alt:"/img/docs/providers/sendgrid/sendgrid-2.png"})}),`
`,n(e.p,{children:["Check the ",n(e.code,{children:"I've integrated the code above"})," box and click Next."]}),`
`,n(e.p,{children:["Send a test e-mail from Laravel Mail Platform and if it works successfully click ",n(e.em,{children:"Verify integration"}),"."]}),`
`,n(e.h3,{id:"tracking-1",children:"Tracking"}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/sendgrid/sendgrid-3.png",alt:"/img/docs/providers/sendgrid/sendgrid-3.png"})}),`
`,n(e.p,{children:["Open and click tracking is enabled by default in SendGrid, but if you’d like to check the settings you’ll find them under ",n(e.em,{children:"Settings"})," > ",n(e.em,{children:"Tracking"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/sendgrid/sendgrid-4.png",alt:"/img/docs/providers/sendgrid/sendgrid-4.png"})}),`
`,n(e.p,{children:"You can also enable subscription tracking from this page. If enabled, SendGrid will automatically add unsubscribe links to the bottom of every e-mail you send."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/sendgrid/sendgrid-5.png",alt:"/img/docs/providers/sendgrid/sendgrid-5.png"})}),`
`,n(e.p,{children:["To enable tracking within Laravel Mail Platform you’ll need to enable event notifications from ",n(e.em,{children:"Settings"})," > ",n(e.em,{children:"Mail Settings"}),"."]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"HTTP POST URL"})," depends on your domain, but must end with ",n(e.code,{children:"/api/v1/webhooks/sendgrid"}),". For example, if Laravel Mail Platform is installed at ",n(e.code,{children:"https://app.laravelmail.com"}),", then each webhook should point to ",n(e.code,{children:"https://app.laravelmail.com/api/v1/webhooks/sendgrid"}),"."]}),`
`,n(e.p,{children:"That’s it! You’re now setup to send and track e-mails using SendGrid."}),`
`,n(e.h2,{id:"postmark",children:"Postmark"}),`
`,n(e.h3,{id:"sending-email",children:"Sending Email"}),`
`,n(e.p,{children:["To send e-mails using the Postmark provider, you will need a Postmark account. If you don’t already have an account, visit the ",n(e.a,{href:"https://postmarkapp.com/",rel:"nofollow",target:"_blank",children:"Postmark website"})," and click the ",n(e.em,{children:"Start Free Trial"})," button in the top right corner of the screen."]}),`
`,n(e.p,{children:["Postmark will automatically create a server for you, called ",n(e.code,{children:"My First Server"}),". Click on the server and select the ",n(e.em,{children:"API Tokens"})," tab."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-1.png",alt:"/img/docs/providers/postmark/postmark-1.png"})}),`
`,n(e.p,{children:["Copy the string from ",n(e.code,{children:"Server API tokens"})," and create a provider within Laravel Mail Platform."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-2.png",alt:"/img/docs/providers/postmark/postmark-2.png"})}),`
`,n(e.p,{children:["Next, navigate to ",n(e.em,{children:"Sender Signatures"})," and select the option to ",n(e.em,{children:"Add Domain"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-3.png",alt:"/img/docs/providers/postmark/postmark-3.png"})}),`
`,n(e.p,{children:["Enter your domain name and click ",n(e.em,{children:"Verify domain"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-4.png",alt:"/img/docs/providers/postmark/postmark-4.png"})}),`
`,n(e.p,{children:["You’ll now need to visit the site that you use to manage DNS for the domain provided (usually the domain registrar). The steps to do this are beyond the scope of this documentation as they vary from provider to provider, but you will need to create a ",n(e.code,{children:"TXT"})," entry for the relevant domain and paste in the strings from the ",n(e.code,{children:"Hostname"})," and ",n(e.code,{children:"Add this value"})," columns."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-5.png",alt:"/img/docs/providers/postmark/postmark-5.png"})}),`
`,n(e.p,{children:["Once you’ve added the entry with your DNS provider, click the ",n(e.em,{children:"Verify"})," button and the DKIM status should transition to ",n(e.code,{children:"Verified"}),". It can take some time to make this transition, but if it doesn’t work ensure you didn’t accidentally copy and paste any whitespace at the beginning or end of either string."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-6.png",alt:"/img/docs/providers/postmark/postmark-6.png"})}),`
`,n(e.p,{children:["To configure e-mail tracking, select the server from the ",n(e.code,{children:"Servers"})," page, select the ",n(e.code,{children:"Transactional"})," (",n(e.code,{children:"Default Transactional Stream"}),") stream from the list of ",n(e.code,{children:"Message Streams"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-7.png",alt:"/img/docs/providers/postmark/postmark-7.png"})}),`
`,n(e.p,{children:["Select the ",n(e.em,{children:"Webhooks"})," tab and click ",n(e.em,{children:"Add webhook"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-8.png",alt:"/img/docs/providers/postmark/postmark-8.png"})}),`
`,n(e.p,{children:["The ",n(e.code,{children:"Webhook URL"})," depends on your domain, but must end with ",n(e.code,{children:"/api/v1/webhooks/postmark"}),". For example, if Laravel Mail Platform is installed at ",n(e.code,{children:"https://app.laravelmail.com"}),", then each webhook should point to ",n(e.code,{children:"https://app.laravelmail.com/api/v1/webhooks/postmark"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-9.png",alt:"/img/docs/providers/postmark/postmark-9.png"})}),`
`,n(e.p,{children:"You’ll also need to enable open tracking and link tracking from the stream settings."}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/postmark/postmark-10.png",alt:"/img/docs/providers/postmark/postmark-10.png"})}),`
`,n(e.p,{children:"That’s it! You’re now setup to send and track e-mails using Postmark."}),`
`,n(e.h2,{id:"mailjet",children:"Mailjet"}),`
`,n(e.h3,{id:"sending-emails-2",children:"Sending Emails"}),`
`,n(e.p,{children:["To send e-mails using the Mailjet provider, you will need a Mailjet account. If you don’t already have an account, visit the ",n(e.a,{href:"https://www.mailjet.com/",rel:"nofollow",target:"_blank",children:"Mailjet website"})," to create one."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"The Mailjet Free plan offers you 200 emails a day, which is enough to cover your basic needs if you are a small sender."}),`
`]}),`
`,n(e.p,{children:["When you first begin, you need to add and configure the ",n(e.em,{children:"“From:”"})," email address, also known as the ",n(e.em,{children:"Sender Address"}),". Extensive documentation for this step is available ",n(e.a,{href:"https://app.mailjet.com/support/how-to-add-a-sender-address,96.htm",rel:"nofollow",target:"_blank",children:"here"}),"."]}),`
`,n(e.p,{children:["Finally, in order to integrate Laravel Mail with Mailjet, you need to copy the ",n(e.code,{children:"API Key"})," and the ",n(e.code,{children:"API Secret Key"}),", which are ",n(e.a,{href:"https://app.mailjet.com/account/api_keys",rel:"nofollow",target:"_blank",children:"generated automatically"})," when your account is created, into your Laravel Mail provider configuration."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/mailjet/mailjet-1.png",alt:"/img/docs/providers/mailjet/mailjet-1.png"})}),`
`,n(e.p,{children:["Alternatively, if you don’t want to use the ",n(e.em,{children:"Master API Key"})," (which grants full access to your account), you can set up Sub-account API Keys and limit their scope."]}),`
`,n(e.h3,{id:"tracking-2",children:"Tracking"}),`
`,n(e.p,{children:["By default the tracking options for ",n(e.code,{children:"opens"})," and ",n(e.code,{children:"clicks"})," are activated for all new accounts. These settings can be changed on your ",n(e.a,{href:"https://app.mailjet.com/account/settings",rel:"nofollow",target:"_blank",children:"Account Preferences page"}),", but keep in mind that Laravel Mail will always override them with the values that you choose in the application when creating a new campaign."]}),`
`,n(e.p,{children:["To enable tracking however you will have to set up ",n(e.em,{children:"Webhooks"})," from the ",n(e.a,{href:"https://app.mailjet.com/account/triggers",rel:"nofollow",target:"_blank",children:"Account Information page"}),"."]}),`
`,n(e.p,{children:n(e.img,{src:"/img/docs/providers/mailjet/mailjet-2.png",alt:"/img/docs/providers/mailjet/mailjet-2.png"})}),`
`,n(e.p,{children:["The URL depends on your domain, but must end with ",n(e.code,{children:"/api/v1/webhooks/mailjet"}),". For example, if Laravel Mail is installed at ",n(e.code,{children:"https://app.laravelmail.com"}),", then each webhook should point to ",n(e.code,{children:"https://app.laravelmail.com/api/v1/webhooks/mailjet"}),"."]}),`
`,n(e.p,{children:"You’ll need to add an entry for each type of event you want to track, but the URL is the same for each one of them."}),`
`,n(e.p,{children:"If you want to limit the number of calls, you can choose to group together events that occurred over the last second. Laravel Mail is able to handle both single and grouped events."}),`
`,n(e.p,{children:"That’s it! You’re now setup to send and track e-mails using Mailjet."}),`
`,n(e.h2,{id:"smtp",children:"SMTP"}),`
`,n(e.h3,{id:"sending-emails-3",children:"Sending Emails"}),`
`,n(e.p,{children:["Laravel Mail can also send your campaigns via SMTP. If you select this option, then you will ",n(e.strong,{children:"not"})," be able to track your campaigns - for example, deliveries, open and click tracking will not be available."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"For production environments, we recommend using one of the API Email Services instead of SMTP."}),`
`]}),`
`,n(e.p,{children:["To create an SMTP Email Service in Laravel Mail, navigate to the ",n(e.strong,{children:"Email Services"})," tab, click the ",n(e.strong,{children:"Add Email Service"})," button and enter the relevant details, making sure to select ",n(e.strong,{children:"SMTP"})," as the type."]}),`
`,n(e.h2,{id:"local-mta-sender",children:"Local MTA Sender"}),`
`,n(e.h3,{id:"sending-emails-4",children:"Sending Emails"}),`
`,n(e.p,{children:[`Laravel Mail can also send your campaigns via our LOCAL MTA AGENT ( An mta aggent is used for transfering the email to the smtp and not a replacement service).
You will tend to use this when you have a high volume emails that needs dispaching.
If you select this option, then you will `,n(e.strong,{children:"not"})," be able to track your campaigns - for example, deliveries, open and click tracking will not be available."]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"["})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"  {"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'    "smtp": {'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "address": "smtp.gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "port": 587,'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "username": "your-email@gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "password": "your-email-password"'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'    "message": {'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "from": "your-email@gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "to": "recipient1@example.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "content": "<h1>Hello, Recipient 1!</h1><p>This is a test email sent using Laravel Mail.</p>"'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"  },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"  {"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'    "smtp": {'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "address": "smtp.gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "port": 587,'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "username": "your-email@gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "password": "your-email-password"'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'    "message": {'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "from": "your-email@gmail.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "to": "recipient2@example.com",'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:'      "content": "<h1>Hello, Recipient 2!</h1><p>This is another test email sent using Laravel Mail.</p>"'})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"  }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(a,{...i})}):a(i)}const u="src/content/docs/email-services.mdx",v="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/email-services.mdx",t=(i={})=>d({...i,components:{Fragment:o,...i.components,"astro-image":i.components?.img??r}});t[Symbol.for("mdx-component")]=!0;t[Symbol.for("astro.needsHeadRendering")]=!s.layout;t.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/email-services.mdx";export{t as Content,g as __usesAstroImage,t as default,v as file,s as frontmatter,m as getHeadings,u as url};
