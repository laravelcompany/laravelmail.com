const e="deployment.mdx",n="docs",a="deployment",t=`
![https://leadscaptain.com/images/logo.svg](https://leadscaptain.com/images/logo.svg)

# Installation

As of Version 0.0.2, Laravel Mail can be installed as a stand-alone application (i.e. including everything you need to run Laravel Mail), or as a package inside an existing Laravel application.

This page covers the stand-alone installation. If you want to install Laravel Mail as a package, then head over to the [Package Installation guide](/docs/package-installation).


## Requirements

To run Laravel Mail, your environment must meet a few minimum requirements:

- PHP ≥ 8.3
- Git
- [Composer](https://getcomposer.org/)
- MySQL (≥ 5.7), PostgreSQL (≥ 9.4), Sqlite (≥ 3.33)

## Installing Laravel Mail

### Install Dependencies

Once cloned, navigate to the project's root directory and run \`composer install\` to install Laravel Mail and its dependencies.

From here, you can move on to the [Configuration & Setup](/docs//configuration) step.

### Webserver

You will need to use a webserver (for example, Apache or nginx), in order to host your Laravel Mail installation.

When setting up your webserver, it should be pointed to the \`public\` directory in order to correctly serve Laravel Mail.

For example, in nginx:

\`\`\`
server {
    listen 80;
    server_name campaigns.example.com;
    root /var/www/campaigns.example.com/public;
}
\`\`\`

For more detailed information, see the [Laravel deployment documentation](https://laravel.com/docs/deployment).`,o={title:"Deployment",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!0,hide_toc:!1,hide_sidenav:!1,max_width:!1},i={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/deployment.mdx",rawData:void 0};export{i as _internal,t as body,n as collection,o as data,e as id,a as slug};
