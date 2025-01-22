import{$ as r,c as i}from"./_astro_assets.CyBf8jje.js";import{F as s}from"./scroll-area.BX9G2LRw.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const o={title:"Campaigns",hide_breadcrumbs:!1};function p(){return[{depth:2,slug:"overview",text:"Overview"},{depth:2,slug:"view-campaigns",text:"View Campaigns"},{depth:2,slug:"starting-new-campaigns",text:"Starting New Campaigns"},{depth:3,slug:"fields",text:"Fields"},{depth:4,slug:"campaign-name",text:"Campaign Name"},{depth:4,slug:"subject",text:"Subject"},{depth:4,slug:"from-name",text:"From Name"},{depth:4,slug:"from-email",text:"From Email"},{depth:4,slug:"template-optional",text:"Template (optional)"},{depth:4,slug:"track-opens",text:"Track Opens"},{depth:4,slug:"track-clicks",text:"Track Clicks"},{depth:4,slug:"content",text:"Content"},{depth:2,slug:"sending-campaigns",text:"Sending Campaigns"},{depth:3,slug:"test-email",text:"Test Email"},{depth:3,slug:"sending-options",text:"Sending Options"},{depth:4,slug:"recipients",text:"Recipients"},{depth:4,slug:"schedule",text:"Schedule"},{depth:4,slug:"sending-behaviour",text:"Sending Behaviour"},{depth:4,slug:"campaign-analytics",text:"Campaign Analytics"}]}const u=!0;function t(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return i(s,{children:[i(e.p,{children:i(e.img,{src:"/img/campaigns.png",alt:"/img/messages.png"})}),`
`,i(e.h2,{id:"overview",children:"Overview"}),`
`,i(e.p,{children:["A campaign is a set of individual email messages that are sent to your ",i(e.a,{href:"/docs/subscribers",children:"subscribers"}),". An example may be a new product launch or a regular newsletter."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:"Before creating a campaign, the following must already be configured:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["at least one ",i(e.a,{href:"/docs//email-services",children:"email service"}),"."]}),`
`,i(e.li,{children:["a list of ",i(e.a,{href:"/docs/subscribers",children:"subscribers"})," to target with your campaign."]}),`
`,i(e.li,{children:["an ",i(e.a,{href:"/templates",children:"email template"})," for your campaign (optional, but recommended)."]}),`
`]}),`
`]}),`
`,i(e.h2,{id:"view-campaigns",children:"View Campaigns"}),`
`,i(e.p,{children:["To view a listing of your campaigns, click the ",i(e.em,{children:"Campaigns"})," link in the sidebar. This will take you to the campaigns index page."]}),`
`,i(e.h2,{id:"starting-new-campaigns",children:"Starting New Campaigns"}),`
`,i(e.p,{children:["Navigate to the campaigns index page and click the ",i(e.em,{children:"New Campaign"})," button."]}),`
`,i(e.p,{children:i(e.img,{src:"/img/create-campaign.png",alt:"/img/messages.png"})}),`
`,i(e.h3,{id:"fields",children:"Fields"}),`
`,i(e.h4,{id:"campaign-name",children:"Campaign Name"}),`
`,i(e.p,{children:"A friendly name for your campaign that is only used within Laravel Mail. It helps you properly distinguish one campaign from another. An example may be “Newsletter - May 2020”."}),`
`,i(e.h4,{id:"subject",children:"Subject"}),`
`,i(e.p,{children:["The subject of your campaign email. This is what your mail recipients will see in their inbox, so you should try to keep it clear and concise. The Subject can include placeholders for the Subscriber’s ",i(e.code,{children:"{{first_name}}"}),", ",i(e.code,{children:"{{last_name}}"})," and ",i(e.code,{children:"{{email}}"}),". Refer to the Placeholders section of the ",i(e.a,{href:"/docs/v2/features/templates",children:"Templates"})," documentation for more information."]}),`
`,i(e.h4,{id:"from-name",children:"From Name"}),`
`,i(e.p,{children:"Also known as the the email sender name. This tells the mail recipients who sent the message."}),`
`,i(e.h4,{id:"from-email",children:"From Email"}),`
`,i(e.p,{children:"This is what your mail recipients will see as the “from” address. This should be an address that you have ownership of and must match the settings for the selected email service."}),`
`,i(e.h4,{id:"template-optional",children:"Template (optional)"}),`
`,i(e.p,{children:"The template that you wish to use for your campaign email."}),`
`,i(e.h4,{id:"track-opens",children:"Track Opens"}),`
`,i(e.p,{children:"Determines whether or not individual email opens are tracked. If you wish to track opens, webhooks must be configured for your email service."}),`
`,i(e.h4,{id:"track-clicks",children:"Track Clicks"}),`
`,i(e.p,{children:"Determines whether or not individual email clicks are tracked. If you wish to track clicks, webhooks must be configured for your email service."}),`
`,i(e.h4,{id:"content",children:"Content"}),`
`,i(e.p,{children:"The body of your campaign email. This is what gets sent to your subscribers, so make it good!"}),`
`,i(e.p,{children:["The content can include placeholders. To understand which placeholders are available to you, see the Placeholders section of the ",i(e.a,{href:"/docs/templates",children:"Templates"})," documentation."]}),`
`,i(e.p,{children:["Once you have filled out the form, click ",i(e.em,{children:"Save and Continue"}),". Your campaign will now be marked as a ",i(e.strong,{children:"Draft"}),"."]}),`
`,i(e.h2,{id:"sending-campaigns",children:"Sending Campaigns"}),`
`,i(e.p,{children:"Campaigns are dispatched from the preview page."}),`
`,i(e.h3,{id:"test-email",children:"Test Email"}),`
`,i(e.p,{children:[`It’s good practice to send out a test email before you dispatch your campaign.
This allows you to see how your email will appear to your recipients and offers an opportunity to pick up on any mistakes you may have made.
To send a test email, simply enter an email address in the `,i(e.code,{children:"Recipient"})," field and click ",i(e.em,{children:"Send Test Email"}),". It will be dispatched using your configured email service."]}),`
`,i(e.h3,{id:"sending-options",children:"Sending Options"}),`
`,i(e.h4,{id:"recipients",children:"Recipients"}),`
`,i(e.p,{children:"You can choose to dispatch your campaign to your entire subscriber list or those with specific tags."}),`
`,i(e.h4,{id:"schedule",children:"Schedule"}),`
`,i(e.p,{children:"You can schedule your campaign to be dispatched immediately or at a later date and time."}),`
`,i(e.h4,{id:"sending-behaviour",children:"Sending Behaviour"}),`
`,i(e.p,{children:"You can specify one of two sending behaviours for your campaign:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"Queue Draft"})," - this will generate each of your messages as a draft and requires you to dispatch each email individually from the ",i(e.em,{children:"Messages"})," section. This is a good idea if you want to double check how each email will display prior to sending, especially if you’re using a complex template that may result in each email varying from subscriber to subscriber. We do not recommend this option if you have a large list of subscribers!"]}),`
`,i(e.li,{children:[i(e.code,{children:"Send Automatically"})," - this will generate your messages and dispatch them automatically."]}),`
`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["If you find that your campaigns do not send, please ensure you have configured scheduled tasks and queue workers as described in the ",i(e.a,{href:"/docs/configuration",children:"Configuration"})," section."]}),`
`]}),`
`,i(e.h4,{id:"campaign-analytics",children:"Campaign Analytics"}),`
`,i(e.p,{children:i(e.img,{src:"/img/campaign-analytics.png",alt:"/img/messages.png"})}),`
`,i(e.p,{children:"After a campaign has been sent you can view the analytics for that campaign."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?i(e,{...n,children:i(t,{...n})}):t(n)}const g="src/content/docs/campaigns.mdx",f="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/campaigns.mdx",a=(n={})=>c({...n,components:{Fragment:s,...n.components,"astro-image":n.components?.img??r}});a[Symbol.for("mdx-component")]=!0;a[Symbol.for("astro.needsHeadRendering")]=!o.layout;a.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/campaigns.mdx";export{a as Content,u as __usesAstroImage,a as default,f as file,o as frontmatter,p as getHeadings,g as url};
