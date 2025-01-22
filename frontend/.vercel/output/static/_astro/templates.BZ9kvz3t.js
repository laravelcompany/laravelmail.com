import{$ as s,c as t}from"./_astro_assets.CyBf8jje.js";import{F as i}from"./scroll-area.BX9G2LRw.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const r={title:"Templates",hide_breadcrumbs:!1};function m(){return[{depth:1,slug:"templates",text:"Templates"},{depth:2,slug:"overview",text:"Overview"},{depth:2,slug:"importing-templates",text:"Importing Templates"},{depth:2,slug:"view-templates",text:"View Templates"},{depth:2,slug:"creating-and-updating-templates",text:"Creating and Updating Templates"},{depth:3,slug:"tags",text:"Tags"},{depth:3,slug:"url-tags",text:"URL Tags"},{depth:3,slug:"inline-css-styles",text:"Inline CSS Styles"}]}const u=!0;function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return t(i,{children:[t(e.h1,{id:"templates",children:"Templates"}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(e.p,{children:`Templates make it easy for you to reuse content and designs across your campaigns.
You may, for example, want to create a template for your monthly newsletter.
This would make it easier for you to keep the design of your emails consistent and reduce the effort that’s needed to prepare your newsletter each month.
Our dynamic templating system also allows you to insert subscriber details into your templates, such as their name.`}),`
`,t(e.h2,{id:"importing-templates",children:"Importing Templates"}),`
`,t(e.p,{children:"To import our big list of templates we have create an console command which will download and import all templates."}),`
`,t(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:t(e.code,{children:[t(e.span,{class:"line",children:[t(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),t(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),t(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" app:import-templates"})]}),`
`,t(e.span,{class:"line"})]})}),`
`,t(e.h2,{id:"view-templates",children:"View Templates"}),`
`,t(e.p,{children:["To view a listing of your templates, click the ",t(e.em,{children:"Templates"}),` link in the sidebar.
This will take you to the templates index page.`]}),`
`,t(e.h2,{id:"creating-and-updating-templates",children:"Creating and Updating Templates"}),`
`,t(e.p,{children:["To add a template, navigate to the templates index page and then click the ",t(e.em,{children:"New Template"})," button."]}),`
`,t(e.p,{children:"A template requires the following:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:"A name"}),`
`,t(e.li,{children:"Contents of the template"}),`
`]}),`
`,t(e.p,{children:"The contents of a template must be valid HTML."}),`
`,t(e.p,{children:["Additionally, the template ",t(e.strong,{children:"must"})," include a ",t(e.code,{children:"content"}),` tag that acts as a placeholder for the contents of a campaign.
To set the placeholder, you should include the following at the desired place in your template:`]}),`
`,t(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:t(e.code,{children:[t(e.span,{class:"line",children:t(e.span,{children:"{{content}}"})}),`
`,t(e.span,{class:"line",children:t(e.span,{})})]})}),`
`,t(e.p,{children:["When sending a ",t(e.a,{href:"/docs/campaigns",children:"campaign"}),", the campaign’s content will be substituted for this tag."]}),`
`,t(e.h3,{id:"tags",children:"Tags"}),`
`,t(e.p,{children:["As well as the required ",t(e.code,{children:"content"})," tag, the following tags are available in templates:"]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[t(e.code,{children:"email"})," – The subscriber’s email"]}),`
`,t(e.li,{children:[t(e.code,{children:"first_name"})," – The subscriber’s first name (if set)"]}),`
`,t(e.li,{children:[t(e.code,{children:"last_name"})," – The subscriber’s last name (if set)"]}),`
`,t(e.li,{children:[t(e.code,{children:"unsubscribe_url"})," – A URL generated to allow the subscriber to unsubscribe"]}),`
`,t(e.li,{children:[t(e.code,{children:"webview_url"})," – A URL generated to allow the subscriber to view the message in a web view"]}),`
`]}),`
`,t(e.p,{children:["Tags should be wrapped in pairs of double braces (",t(e.code,{children:"{{"})," & ",t(e.code,{children:"}}"}),"), e.g.:"]}),`
`,t(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:t(e.code,{children:[t(e.span,{class:"line",children:t(e.span,{children:"{{ email }}"})}),`
`,t(e.span,{class:"line",children:t(e.span,{})})]})}),`
`,t(e.p,{children:"Or"}),`
`,t(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:t(e.code,{children:[t(e.span,{class:"line",children:t(e.span,{children:"{{email}}"})}),`
`,t(e.span,{class:"line",children:t(e.span,{})})]})}),`
`,t(e.h3,{id:"url-tags",children:"URL Tags"}),`
`,t(e.p,{children:["The URL tags (",t(e.code,{children:"unsubscribe_url"})," and ",t(e.code,{children:"webview_url"}),") generate the URL only; they do not create a clickable link such as an HTML anchor tag."]}),`
`,t(e.p,{children:["This means that simply placing one of these tags in the template will result in the URL being displayed as plain text. You are required to create an appropriate anchor tag and include the URL as the ",t(e.code,{children:"href"})," property if you wish to create clickable links. For example:"]}),`
`,t(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"html",children:t(e.code,{children:[t(e.span,{class:"line",children:[t(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"<"}),t(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"a"}),t(e.span,{style:{color:"#DF8E1D","--shiki-dark":"#EED49F"},children:" href"}),t(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"="}),t(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'"{{unsubscribe_url}}"'}),t(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"}),t(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Click here to unsubscribe"}),t(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"</"}),t(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"a"}),t(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"})]}),`
`,t(e.span,{class:"line"})]})}),`
`,t(e.h3,{id:"inline-css-styles",children:"Inline CSS Styles"}),`
`,t(e.p,{children:["Although external stylesheets and embedded styles (i.e. including the styles in the ",t(e.code,{children:"<head>"})," of an HTML page) work well for web pages, many email clients will ignore or strip out these elements."]}),`
`,t(e.p,{children:"SendPortal automatically inlines all of your CSS styles when the emails are dispatched. You can therefore continue to use the convenience of CSS and/or embedded styles in your templates, but still ensure that your emails display correctly for your subscribers."}),`
`,t(e.p,{children:"If your template contains CSS and inline styles, the inline styles will be retained, and the CSS and/or embedded styles will be added to the existing inline styles."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(l,{...n})}):l(n)}const g="src/content/docs/templates.mdx",f="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/templates.mdx",a=(n={})=>c({...n,components:{Fragment:i,...n.components,"astro-image":n.components?.img??s}});a[Symbol.for("mdx-component")]=!0;a[Symbol.for("astro.needsHeadRendering")]=!r.layout;a.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/templates.mdx";export{a as Content,u as __usesAstroImage,a as default,f as file,r as frontmatter,m as getHeadings,g as url};
