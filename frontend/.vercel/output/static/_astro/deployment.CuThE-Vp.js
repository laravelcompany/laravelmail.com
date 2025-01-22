import{$ as r,c as n}from"./_astro_assets.CyBf8jje.js";import{F as i}from"./scroll-area.BX9G2LRw.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const o={title:"Deployment",hide_breadcrumbs:!0};function m(){return[{depth:1,slug:"installation",text:"Installation"},{depth:2,slug:"requirements",text:"Requirements"},{depth:2,slug:"installing-laravel-mail",text:"Installing Laravel Mail"},{depth:3,slug:"install-dependencies",text:"Install Dependencies"},{depth:3,slug:"webserver",text:"Webserver"}]}const u=!0;function t(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a.components};return n(i,{children:[n(e.p,{children:n(e.img,{src:"https://leadscaptain.com/images/logo.svg",alt:"https://leadscaptain.com/images/logo.svg"})}),`
`,n(e.h1,{id:"installation",children:"Installation"}),`
`,n(e.p,{children:"As of Version 0.0.2, Laravel Mail can be installed as a stand-alone application (i.e. including everything you need to run Laravel Mail), or as a package inside an existing Laravel application."}),`
`,n(e.p,{children:["This page covers the stand-alone installation. If you want to install Laravel Mail as a package, then head over to the ",n(e.a,{href:"/docs/package-installation",children:"Package Installation guide"}),"."]}),`
`,n(e.h2,{id:"requirements",children:"Requirements"}),`
`,n(e.p,{children:"To run Laravel Mail, your environment must meet a few minimum requirements:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"PHP ≥ 8.3"}),`
`,n(e.li,{children:"Git"}),`
`,n(e.li,{children:n(e.a,{href:"https://getcomposer.org/",rel:"nofollow",target:"_blank",children:"Composer"})}),`
`,n(e.li,{children:"MySQL (≥ 5.7), PostgreSQL (≥ 9.4), Sqlite (≥ 3.33)"}),`
`]}),`
`,n(e.h2,{id:"installing-laravel-mail",children:"Installing Laravel Mail"}),`
`,n(e.h3,{id:"install-dependencies",children:"Install Dependencies"}),`
`,n(e.p,{children:["Once cloned, navigate to the project’s root directory and run ",n(e.code,{children:"composer install"})," to install Laravel Mail and its dependencies."]}),`
`,n(e.p,{children:["From here, you can move on to the ",n(e.a,{href:"/docs//configuration",children:"Configuration & Setup"})," step."]}),`
`,n(e.h3,{id:"webserver",children:"Webserver"}),`
`,n(e.p,{children:"You will need to use a webserver (for example, Apache or nginx), in order to host your Laravel Mail installation."}),`
`,n(e.p,{children:["When setting up your webserver, it should be pointed to the ",n(e.code,{children:"public"})," directory in order to correctly serve Laravel Mail."]}),`
`,n(e.p,{children:"For example, in nginx:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"server {"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    listen 80;"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    server_name campaigns.example.com;"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"    root /var/www/campaigns.example.com/public;"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"}"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`,n(e.p,{children:["For more detailed information, see the ",n(e.a,{href:"https://laravel.com/docs/deployment",rel:"nofollow",target:"_blank",children:"Laravel deployment documentation"}),"."]})]})}function s(a={}){const{wrapper:e}=a.components||{};return e?n(e,{...a,children:n(t,{...a})}):t(a)}const g="src/content/docs/deployment.mdx",v="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/deployment.mdx",l=(a={})=>s({...a,components:{Fragment:i,...a.components,"astro-image":a.components?.img??r}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!o.layout;l.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/deployment.mdx";export{l as Content,u as __usesAstroImage,l as default,v as file,o as frontmatter,m as getHeadings,g as url};
