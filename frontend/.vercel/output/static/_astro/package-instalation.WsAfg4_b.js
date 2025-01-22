const e="package-instalation.mdx",a="docs",n="package-instalation",o=`


This page covers the Package installation. If you want to install Laravel Mail as a stand-alone application, then head over to the [Installation guide](/docs/installation).

## Requirements

- Laravel ≥ 8.3
- PHP ≥ 7.3
- MySQL (≥ 5.7) / PostgreSQL (≥ 9.4) or Sqlite (≥ 3.28)

## Installation

To install Laravel Mail as a package from your command line, run the following command:

\`\`\`bash
composer require laravelcompay/mail
\`\`\`

Alternatively, you can add the following to your \`composer.json\` file:

\`\`\`json
"laravelcompay/mail": "^0."
\`\`\`

and then run \`composer update\` to install it.

## Publish Assets
Run the following command to publish Laravel Mail's assets:

\`\`\`bash
php artisan vendor:publish --provider=LaravelCompany\\\\Mail\\\\LaravelMailServiceProvider
\`\`\`

## Resolvers & Routes
Laravel Mail's functionality is linked to your application through the use of the \`LaravelMail\` facade. The following sections will detail how to use this facade to get Laravel Mail up and running inside your application.

> Please read all sections and decide on the relevancy to your use case. Some sections are marked as Required, and will need to be completed for a successful integration with Laravel Mail. Other sections are marked as Optional and may or may not be required for your own use case.

## Workspace Resolver (Required)
In order to support multi-tenancy, Laravel Mail requires a "Workspace ID" for the session. Even if your host application does not use multi-tenancy, you will still need to provide a "dummy" integer.

The Workspace ID will be used in both web and API sessions and will be stored to the database in the \`workspace_id\` column of tables like \`campaigns\`, \`subscribers\`, etc.

> Multi-tenancy is optional. If your application is not multi-tenant, or you do not wish to use Laravel Mail in a multi-tenant way, you can provide a hardcoded integer value of your choice to the resolver.
> 
### Registering the Workspace Resolver
Inside the \`boot\` method of a service provider class, provide a closure to the \`LaravelCompany\\Facades\\LaravelMail::setCurrentWorkspaceIdResolver()\` method that resolves a workspace ID.

The return value of your closure __must__ be an integer value and __must not__ be null.

As an example:

\`\`\`php
<?php
declare(strict_types=1);

namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;
use LaravelCompany\\Mail\\Facades\\Laravel Mail;

class AppServiceProvider extends ServiceProvider
{
    // …
    public function boot(): void
    {
        Laravel Mail::setCurrentWorkspaceIdResolver(function () {
            return 1;
        });
    }
}
\`\`\`

## Routes

There are 4 route definitions that can be defined:

- Web Routes (required)
- Public Web Routes (required)
- Public API Routes (required)
- API Routes (optional)

The following routes can all be placed inside a route group, in which case any group prefixes, names, middlewares, etc, will also be applied. However, note that Laravel Mail's route names already include \`laravel-mail.\`.

### Web Routes (Required)
To access Laravel Mail's application resources (e.g. Campaigns, Subscribers, Templates, Messages etc) from the browser, you must register Laravel Mail's web routes.

Inside a routes file, call the \`LaravelCompany\\Mail\\Facades\\LaravelMail::webRoutes()\` method. 

> These routes include features like subscriber management and campaign sending, and therefore should not be exposed without some means of authentication.

\`\`\`php
// routes/web.php
Route::middleware(['auth'])->prefix('Laravel Mail')->group(function () {
    LaravelMail::webRoutes();
});
\`\`\`

### Public Web Routes (Required)
To provide access to features such as unsubscribing from a mailing list and viewing subscriber emails in the browser, you must register Laravel Mail's public web routes.

Inside a routes file, call the \`LaravelCompany\\Mail\\Facades\\LaravelMail::publicWebRoutes()\` method. 

> These routes include publically accessible features such as unsubscribing from a mailing list, and therefore should _not_ be guarded by authentication.

\`\`\`php
// routes/web.php
LaravelMail::publicWebRoutes();
\`\`\`

### Public API Routes (Required)
To handle campaign tracking (i.e. webhooks from your email service provider), you must register Laravel Mail's public API routes.

Inside a routes file, call the \`LaravelCompany\\Mail\\Facades\\LaravelMail::publicApiRoutes()\` method. 

> These routes include webhooks that are needed to track campaigns inside Laravel Mail, and must be accessible to your email service.

\`\`\`php
// routes/api.php
LaravelMail::publicApiRoutes();
\`\`\`

### Set Up Laravel Mail API Routes (Optional)
If you wish to provide access to Laravel Mail's API, then you must register Laravel Mail's API routes.

Inside a routes file, call the \`LaravelCompany\\Mail\\Facades\\LaravelMail::apiRoutes()\` method.

> These routes include features like subscriber and campaign management, and should not be exposed to the internet without some means of authentication.

\`\`\`php
// routes/api.php
Route::middleware(['auth:api'])->group(function() {
    Laravel Mail::apiRoutes();
});
\`\`\`

## Set Up Sidebar HTML Content Resolver (Optional)
Optionally, you can provide content to the sidebar navigation in Laravel Mail. This allows you to inject new menu items that can link to resources you build yourself. This is helpful for providing access to functionality like user management inside Laravel Mail.

### Registering Sidebar HTML Resolver
Inside the \`boot\` method of a service provider class, provide a closure to the \`LaravelCompany\\Mail\\Facades\\LaravelMail::setSidebarHtmlContentResolver()\` method.

The return value of your closure __must__ be a string value or null. You should ideally provide HTML, as it will be rendered directly into the view as provided.

As an example:

\`\`\`php
    public function boot(): void
    {
        LaravelMail::setSidebarHtmlContentResolver(function () {
            return view('layouts.sidebar.manageUsersMenuItem')->render();
        });
    }
\`\`\`

## Set Up Header HTML Content Resolver (Optional)
You can optionally provide content to the header in Laravel Mail. This allows you to inject resources that you build yourself. This is helpful for providing functionality like user profile management or workspace switchers inside Laravel Mail.

### Registering Header HTML Resolver
Inside the \`boot\` method of a service provider class, provide a closure to the \`LaravelCompany\\Mail\\Facades\\LaravelMail::setHeaderHtmlContentResolver()\` method.

The return value of your closure __must__ be a string value or null. You should ideally provide HTML, as it will be rendered directly into the view as provided.

As an example:

\`\`\`php
    public function boot(): void
    {
        Laravel Mail::setHeaderHtmlContentResolver(function () {
            return view('layouts.header.userManagementHeader')->render();
        });
    }
\`\`\`

## Further Examples
To see an example of Laravel Mail used as a fully multi-tenant application, please see our own [host application](https://github.com/laravelcompany/app.laravelmail.com Mail), which takes advantage of all the integration features available in the Laravel Mail package.

In particular, see the \`App\\Providers\\AppServiceProvider\` class for registering resolvers, and see the \`routes/web.php\` and \`routes/api.php\` files for registering routes.`,i={title:"Package Installation",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},t={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/package-instalation.mdx",rawData:void 0};export{t as _internal,o as body,a as collection,i as data,e as id,n as slug};
