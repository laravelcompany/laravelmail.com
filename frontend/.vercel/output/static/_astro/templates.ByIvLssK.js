const e="templates.mdx",t="docs",n="templates",a=`
# Templates

## Overview

Templates make it easy for you to reuse content and designs across your campaigns. 
You may, for example, want to create a template for your monthly newsletter. 
This would make it easier for you to keep the design of your emails consistent and reduce the effort that's needed to prepare your newsletter each month. 
Our dynamic templating system also allows you to insert subscriber details into your templates, such as their name.

## Importing Templates

To import our big list of templates we have create an console command which will download and import all templates.

\`\`\`bash
php artisan app:import-templates
\`\`\`



## View Templates

To view a listing of your templates, click the _Templates_ link in the sidebar.
 This will take you to the templates index page.

## Creating and Updating Templates

To add a template, navigate to the templates index page and then click the _New Template_ button.

A template requires the following:

- A name
- Contents of the template

The contents of a template must be valid HTML.

Additionally, the template **must** include a \`content\` tag that acts as a placeholder for the contents of a campaign. 
To set the placeholder, you should include the following at the desired place in your template:

\`\`\`
{{content}}
\`\`\`

When sending a [campaign](/docs/campaigns), the campaign's content will be substituted for this tag.

### Tags

As well as the required \`content\` tag, the following tags are available in templates:

- \`email\` – The subscriber's email
- \`first_name\` – The subscriber's first name (if set)
- \`last_name\` – The subscriber's last name (if set)
- \`unsubscribe_url\` – A URL generated to allow the subscriber to unsubscribe
- \`webview_url\` – A URL generated to allow the subscriber to view the message in a web view

Tags should be wrapped in pairs of double braces (\`{{\` & \`}}\`), e.g.:

\`\`\`
{{ email }}
\`\`\`

Or

\`\`\`
{{email}}
\`\`\`

### URL Tags

The URL tags (\`unsubscribe_url\` and \`webview_url\`) generate the URL only; they do not create a clickable link such as an HTML anchor tag.

This means that simply placing one of these tags in the template will result in the URL being displayed as plain text. You are required to create an appropriate anchor tag and include the URL as the \`href\` property if you wish to create clickable links. For example:

\`\`\`html
<a href="{{unsubscribe_url}}">Click here to unsubscribe</a>
\`\`\`

### Inline CSS Styles

Although external stylesheets and embedded styles (i.e. including the styles in the \`<head>\` of an HTML page) work well for web pages, many email clients will ignore or strip out these elements.

SendPortal automatically inlines all of your CSS styles when the emails are dispatched. You can therefore continue to use the convenience of CSS and/or embedded styles in your templates, but still ensure that your emails display correctly for your subscribers.

If your template contains CSS and inline styles, the inline styles will be retained, and the CSS and/or embedded styles will be added to the existing inline styles.`,s={title:"Templates",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},l={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/templates.mdx",rawData:void 0};export{l as _internal,a as body,t as collection,s as data,e as id,n as slug};
