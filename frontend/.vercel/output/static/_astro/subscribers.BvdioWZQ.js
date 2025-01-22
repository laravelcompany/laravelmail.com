import{$ as l,c as i}from"./_astro_assets.DtD32lsl.js";import{F as t}from"./scroll-area.DcbEPeDy.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const a={title:"Subscribers",hide_breadcrumbs:!1};function u(){return[{depth:2,slug:"overview",text:"Overview"},{depth:2,slug:"view-subscribers",text:"View Subscribers"},{depth:3,slug:"subscriber-table",text:"Subscriber Table"},{depth:3,slug:"filtering-subscribers",text:"Filtering Subscribers"},{depth:2,slug:"viewing-an-individual-subscriber",text:"Viewing an Individual Subscriber"},{depth:3,slug:"subscriber-details",text:"Subscriber Details"},{depth:3,slug:"messages",text:"Messages"},{depth:2,slug:"adding-and-updating-subscribers",text:"Adding and Updating Subscribers"},{depth:3,slug:"application-interface",text:"Application Interface"},{depth:4,slug:"adding-a-subscriber",text:"Adding A Subscriber"},{depth:4,slug:"updating-a-subscriber",text:"Updating A Subscriber"},{depth:3,slug:"csv-imports",text:"CSV Imports"},{depth:4,slug:"csv-file-format",text:"CSV File Format"},{depth:4,slug:"uploading-the-file",text:"Uploading The File"},{depth:4,slug:"segments",text:"Segments"},{depth:3,slug:"api",text:"API"},{depth:2,slug:"exporting-subscribers",text:"Exporting Subscribers"},{depth:2,slug:"unsubscribing",text:"Unsubscribing"},{depth:3,slug:"manually-unsubscribing",text:"Manually Unsubscribing"},{depth:3,slug:"unsubscribe-links",text:"Unsubscribe Links"}]}const p=!0;function r(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return i(t,{children:[i(e.h2,{id:"overview",children:"Overview"}),`
`,i(e.p,{children:[`Subscribers represent individuals that are available to you when sending out campaigns.
Subscribers can optionally belong to one or more `,i(e.a,{href:"/docs/segments",children:"segments"}),"."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["The email address for each Subscriber must be unique in each ",i(e.a,{href:"/docs/workspaces",children:"workspace"}),"."]}),`
`]}),`
`,i(e.h2,{id:"view-subscribers",children:"View Subscribers"}),`
`,i(e.p,{children:["To view a list of your subscribers, click the ",i(e.em,{children:"Subscribers"})," link in the sidebar. This will take you to the subscribers index page."]}),`
`,i(e.h3,{id:"subscriber-table",children:"Subscriber Table"}),`
`,i(e.p,{children:"Subscribers are listed in a paginated table, where each row represents a different subscriber."}),`
`,i(e.h3,{id:"filtering-subscribers",children:"Filtering Subscribers"}),`
`,i(e.p,{children:"The following filtering options are available:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:"Subscriber Email and/or Name. Partial matches will also be returned."}),`
`,i(e.li,{children:"Subscriber Subscription Status"}),`
`]}),`
`,i(e.h2,{id:"viewing-an-individual-subscriber",children:"Viewing an Individual Subscriber"}),`
`,i(e.p,{children:"To view an individual subscriber, head to the subscribers index page and click on the subscriber’s email in the table that’s presented to you."}),`
`,i(e.h3,{id:"subscriber-details",children:"Subscriber Details"}),`
`,i(e.p,{children:"Each subscriber’s email, first name, last name and subscription status is displayed when viewing an individual subscriber."}),`
`,i(e.p,{children:["In addition, if the subscriber is in any ",i(e.a,{href:"/docs/segments",children:"segments"})," then these are also displayed."]}),`
`,i(e.h3,{id:"messages",children:"Messages"}),`
`,i(e.p,{children:"If any messages have been sent to the subscriber, they will be listed in the Messages section."}),`
`,i(e.h2,{id:"adding-and-updating-subscribers",children:"Adding and Updating Subscribers"}),`
`,i(e.p,{children:"Subscribers can be added and updated in the following ways:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:"manually through the application interface"}),`
`,i(e.li,{children:"via a CSV upload"}),`
`,i(e.li,{children:"programmatically using the API."}),`
`]}),`
`,i(e.h3,{id:"application-interface",children:"Application Interface"}),`
`,i(e.h4,{id:"adding-a-subscriber",children:"Adding A Subscriber"}),`
`,i(e.p,{children:["Navigate to the subscribers index page and click ",i(e.em,{children:"New Subscriber"}),"."]}),`
`,i(e.h4,{id:"updating-a-subscriber",children:"Updating A Subscriber"}),`
`,i(e.p,{children:["Click the ",i(e.em,{children:"Edit"})," button on the subscriber’s row in the list."]}),`
`,i(e.p,{children:"The following information can be saved for each Subscriber:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:"email"}),`
`,i(e.li,{children:"first name (optional)"}),`
`,i(e.li,{children:"last name (optional)"}),`
`,i(e.li,{children:"subscription status"}),`
`,i(e.li,{children:"segments (optional)"}),`
`]}),`
`,i(e.h3,{id:"csv-imports",children:"CSV Imports"}),`
`,i(e.p,{children:"Laravel Mail Platform allows you to easily import multiple subscribers via a CSV upload. This can be used to create new subscribers and update existing ones."}),`
`,i(e.p,{children:["To import subscribers via CSV, click the ",i(e.em,{children:"Subscribers"})," link in the sidebar. From there, click the overflow menu button and then ",i(e.em,{children:"Import Subscribers"}),"."]}),`
`,i(e.h4,{id:"csv-file-format",children:"CSV File Format"}),`
`,i(e.p,{children:"The following fields are available in the CSV."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"id"})," (optional) - The ID field is only used when updating existing subscribers, and must be set if you wish to update the subscriber’s email address. The ",i(e.code,{children:"id"})," field should be present but left empty when importing new subscribers."]}),`
`,i(e.li,{children:[i(e.code,{children:"email"})," (required) - A unique email address for the subscriber. Note that if the email address is already present in Laravel Mail Platform, the row will instead update the ",i(e.code,{children:"first_name"})," and ",i(e.code,{children:"last_name"})," of the existing subscriber."]}),`
`,i(e.li,{children:[i(e.code,{children:"first_name"})," (optional) - The subscriber’s first name."]}),`
`,i(e.li,{children:[i(e.code,{children:"last_name"})," (optional) - The subscriber’s last name."]}),`
`]}),`
`,i(e.p,{children:["Additionally, the ",i(e.strong,{children:"first row"})," of the CSV ",i(e.strong,{children:"must"})," be a header row, where each column is the name as listed above, and must be provided in the order above."]}),`
`,i(e.p,{children:"Each row after the header row must represent a single subscriber. Optional fields can be left empty."}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:"The import page shows an example of a CSV file, with the header and a row."}),`
`]}),`
`,i(e.h4,{id:"uploading-the-file",children:"Uploading The File"}),`
`,i(e.p,{children:["To upload the file, click the ",i(e.em,{children:"Browse"})," button on the file selector, and choose the file you wish to upload. When you have selected your file, you can click the ",i(e.em,{children:"Upload"})," button to begin the upload process."]}),`
`,i(e.h4,{id:"segments",children:"Segments"}),`
`,i(e.p,{children:["Segments can be chosen for subscribers by using the ",i(e.code,{children:"Segments"})," selector. If you have any segments available, you can pick which ones to use here. Note that the chosen segments will apply to all subscribers uploaded in the chosen CSV. It is currently not possible to specify separate segments for each individual subscriber."]}),`
`,i(e.h3,{id:"api",children:"API"}),`
`,i(e.p,{children:["Refer to the ",i(e.a,{href:"/docs/subscribers",children:"subscribers API documentation"})," for information on how to manage subscribers through the API."]}),`
`,i(e.h2,{id:"exporting-subscribers",children:"Exporting Subscribers"}),`
`,i(e.p,{children:["To export subscribers, click the ",i(e.em,{children:"Subscribers"})," link in the sidebar. From there, click the overflow menu button and then ",i(e.em,{children:"Export Subscribers"}),"."]}),`
`,i(e.h2,{id:"unsubscribing",children:"Unsubscribing"}),`
`,i(e.h3,{id:"manually-unsubscribing",children:"Manually Unsubscribing"}),`
`,i(e.p,{children:["To manually unsubscribe a subscriber, you should go to the subscriber edit page, uncheck ",i(e.code,{children:"Subscribed"})," and then click ",i(e.em,{children:"Save"}),"."]}),`
`,i(e.h3,{id:"unsubscribe-links",children:"Unsubscribe Links"}),`
`,i(e.p,{children:["Laravel Mail Platform allows automatic injection of unsubscribe links in your templates and campaigns. See the ",i(e.a,{href:"/docs/templates",children:"templates"})," section for more information on how this works."]}),`
`,i(e.p,{children:"When a user clicks on the unsubscribe link, they will be sent to a web page asking them to confirm that they want to be unsubscribed."}),`
`,i(e.p,{children:"If they decide to unsubscribe, they will be shown a confirmation message that they have been unsubscribed, along with the option to resubscribe."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?i(e,{...n,children:i(r,{...n})}):r(n)}const m="src/content/docs/subscribers.mdx",g="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/subscribers.mdx",s=(n={})=>c({...n,components:{Fragment:t,...n.components,"astro-image":n.components?.img??l}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!a.layout;s.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/subscribers.mdx";export{s as Content,p as __usesAstroImage,s as default,g as file,a as frontmatter,u as getHeadings,m as url};
