const e="configuration.mdx",n="docs",a="configuration",o=`
![https://leadscaptain.com/images/logo.svg](https://leadscaptain.com/images/logo.svg)



## Creating Configuration File

Laravel Mail Platform's configuration is handled through the\`.env\` file. 
By default, this file does not exist. 
To create it manually, you will need to clone the included \`.env.example\`, rename it to \`.env\` and make changes as necessary.

> Any keys that are set in the \`.env\` file will be used, even if they are blank. If you do not wish to actively set a key, you should remove it from your \`.env\` file, rather than leave it blank.

### Key Generation

If you did not run the setup command, or if for some reason the \`APP_KEY\` value is empty, you will need to create an encryption key. This is used by Laravel Mail Platform to apply encryption to things like user sessions.

To generate a new key, you should run the following command:

\`\`\`bash
php artisan key:generate
\`\`\`

> Although key generation can be run again, this will invalidate any sessions or make any stored encrypted data inaccessible. You should not generate a new key unless absolutely necessary.

### Base URL

You will need to set the \`APP_URL\` variable in the \`.env\` file to the base URL for your installation of Laravel Mail Platform.

For example, if you are hosting your installation of Laravel Mail Platform at \`campaigns.example.com\`, you will need to set the following:

\`\`\`
APP_URL=https://campaigns.example.com
\`\`\`

This is necessary to allow Laravel Mail Platform to correctly generate unsubscribe links, or links for user registration emails.

### Database Connection

In order for Laravel Mail Platform to connect to your database, you must set the database configuration values in the \`.env\` file.

Firstly, you need to specify what type of database you are using by setting the \`DB_CONNECTION\` value to either \`mysql\` for a MySQL database or \`pgsql\` for a PostgreSQL database.

Secondly, you need to set the connection details for your database installation. The following values need to be set:

- \`DB_HOST\` – This is the host of your database, e.g. \`127.0.0.1\` for a local installation
- \`DB_PORT\` - The port Laravel Mail Platform should use to talk to your database
- \`DB_DATABASE\` – The database Laravel Mail Platform should use to store its data
- \`DB_USERNAME\` – The username Laravel Mail Platform will use to authenticate itself with your database
- \`DB_PASSWORD\` – The password Laravel Mail Platform will use to authenticate itself with your database

### Database Migrations

To set up the database schema, migrations must be run. Migrations are instructions an application uses to configure database schema, running in sequence from beginning to end in order to ensure that the database is set up as the application expects it to be.

> Do not make custom modifications to the database yourself. Any database changes that Laravel Mail Platform requires should be accomplished through the running of migrations.

> Before running migrations, ensure that you have correctly configured your database connection, as schema changes will be made.

The included command-line setup command will run migrations for you (after a prompt), but you can run migrations manually using the following command:

\`\`\`bash
php artisan migrate:fresh ---seed
\`\`\`

### Publishing Vendor Files

Run the following command to publish the config, views, languages and assets from Laravel Mail Platform to your project:

\`\`\`bash
php artisan vendor:publish --provider=Laravel Mail Platform\\\\Base\\\\Laravel Mail LaravelMailServiceProvider
\`\`\`

### Workspaces & Users

If you do not use the setup command to create a workspace and user with which to administer Laravel Mail Platform, you will need to go through the web interface registration process.

You must follow the User Management Email configuration specified in Additional Configuration in order to allow registration and user invitation in Laravel Mail Platform.

## Additional Configuration

### Cron Jobs

Laravel Mail Platform makes use of regular background tasks and it is therefore essential to create a cron job to run every minute:

\`\`\`bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
\`\`\`

Please refer to the Laravel documentation on [Task Scheduling](https://laravel.com/docs/scheduling) for further information.

### Message Sending & Queues

Laravel Mail Platform sends email messages using a queue system. The queue can be processed synchronously or asynchronously. Asynchronous queues can be handled via your primary database or via redis.

You can specify which queue driver to use in the \`QUEUE_CONNECTION\` parameter in the \`.env\` file. This should be set to one of \`sync\`, \`database\` or \`redis\`, depending on your requirements. This configuration applies to all messages sent in Laravel Mail Platform and cannot be changed on a per-user, per-workspace or per-provider basis.

#### Sync

The synchronous queue runs any queued jobs as they are requested, requiring the user to wait until the job has been completed before any further action can be taken.

This has the advantage of being simple and requiring no additional configuration. However, as this does not scale well, this approach is only recommended for relatively small message sending requirements.

To use the synchronous queue, you only need to set the \`QUEUE_CONNECTION\` to \`sync\`, and no further configuration is required.

#### Database

Processing asynchronous queues via the database is considered a middle option. Running an asynchronous queue avoids the issues that come up using a synchronous queue, as messages can be processed without blocking further action being taken by the user, and will work until all jobs are completed regardless of how long it takes.

The advantage of using the database for running the asynchronous queue is that it requires no extra services to be run, as it uses the primary database (MySQL or Postgres) that you have already configured for Laravel Mail Platform.

The main disadvantage is that under heavy workloads the queue can negatively affect the performance of the database.

As such, the database queue is recommended for small to medium sized mailing lists.

To use the database driver, you must first set the \`QUEUE_CONNECTION\` to \`database\` in your \`.env\` file. You also need to run the following commands, which will create a new \`jobs\` table in your database, which that will be used to manage the queue.

\`\`\`bash
php artisan queue:table
php artisan migrate
\`\`\`

#### Redis

Redis is the recommended solution for running medium to large mailing lists.

You will of course need an installation of redis on your server. You will then need to set the \`QUEUE_CONNECTION\` to \`redis\` and set the following configuration values in your \`.env\` file:

- \`REDIS_HOST\`
- \`REDIS_PASSWORD\`
- \`REDIS_PORT\`

### Running the queue without Laravel Horizon

If you don't want to use Horizon to manage you redis queue or you're using the database driver you will have to run a [queue worker](https://laravel.com/docs/queues#running-the-queue-worker) for each queue that Laravel Mail Platform uses.

- \`Laravel Mail Platform-message-dispatch\`: dispatches messages to the email service
- \`Laravel Mail Platform-webhook-process\`: processes incoming webhooks

\`\`\`
php artisan queue:work --queue=Laravel Mail Platform-message-dispatch
php artisan queue:work --queue=Laravel Mail Platform-webhook-process
\`\`\`

### Running Redis Queues With Laravel Horizon

Laravel Mail Platform bundles [Laravel Horizon](https://laravel.com/docs/horizon) as an easy way to run and manage redis queues.

Configuration for the queues necessary to run Laravel Mail Platform is already included. In order to use Horizon as your queue manager, you should first publish the Horizon assets:

\`\`\`
php artisan horizon:publish
\`\`\`

To start processing your queue items with Horizon, you simply need to run the following command:

\`\`\`
php artisan horizon
\`\`\`

When using Horizon in production, you should consider using a service to ensure the queue runner restarts if it fails for any reason. The Horizon documentation has a [guide](https://laravel.com/docs/horizon#deploying-horizon) on how to use Supervisor to do this.

#### Autoscaling

The configuration for Horizon included with Laravel Mail Platform allows autoscaling of queue workers. By default, webhooks received and messages sent via the queue each have a minimum of 2 processes running, and a maximum of 10 or 20. If these values do not suit your requirements, they can be adjusted in the \`config/horizon.php\` file—in particular \`supervisor-2\` and \`supervisor-3\`—using the \`minProcesses\` and \`maxProcesses\` values.

### User Management Email

In order to use user management functionality (for example, inviting new users or password resets) in Laravel Mail Platform, it is necessary to set up an email service that Laravel Mail Platform can use to send the messages.

> If you are not going to be inviting any other users or team members to your Laravel Mail Platform installation, then this section can be ignored.

> There is no relationship between Laravel Mail Platform's internal mail configuration and any email services that are configured for a workspace.

> You will need to set \`Laravel Mail Platform_REGISTER=true\` in the \`.env\` file in order to use the registration and user invitation functionality.

> By default, users are granted the ability to reset their passwords. If you wish to disable password resets, you must set \`Laravel Mail Platform_PASSWORD_RESET=false\` in the \`.env\` file.

You first need to set \`MAIL_MAILER\` to your chosen service. The options here are \`smtp\`, \`sendmail\`, \`ses\`, \`mailgun\` and \`postmark\`.

#### SMTP & Sendmail

When using a regular SMTP provider, or sendmail, you should set the following configuration values:

- \`MAIL_HOST\` – This is the host for the SMTP server
- \`MAIL_PORT\` – This is the port that will be used to connect to the SMTP server
- \`MAIL_USERNAME\` – The username used to authenticate with the SMTP server
- \`MAIL_PASSWORD\` – The password used to authenticate with the SMTP server
- \`MAIL_FROM_ADDRESS\` – The address that mail will appear to come from
- \`MAIL_FROM_NAME\` – The name that mail will appear to come from

#### SES

When using SES as your mail service, you should set the following configuration values, adding them to the \`.env\` file if they are not already present:

- \`AWS_ACCESS_KEY_ID\` – Your AWS ID key
- \`AWS_SECRET_ACCESS_KEY\` – Your AWS secret key
- \`AWS_DEFAULT_REGION\` – Your AWS region (defaults to \`us-east-1\` if not included in the configuration file)

#### Mailgun

When using Mailgun as your mail service, you should set the following configuration values, adding them to the \`.env\` file if they are not already present:

- \`MAILGUN_DOMAIN\`
- \`MAILGUN_SECRET\`
- \`MAILGUN_ENDPOINT\` – (defaults to \`api.mailgun.net\` if not included in the configuration file)

#### Postmark

When using Postmark as your mail service, you should set the following configuration values, adding them to the \`.env\` file if they are not already present:

- \`POSTMARK_TOKEN\``,t={title:"Configuration",author:"Laravel Mail",draft:!1,tags:[],hide_breadcrumbs:!0,hide_toc:!1,hide_sidenav:!1,max_width:!1},s={type:"content",filePath:"/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/configuration.mdx",rawData:void 0};export{s as _internal,o as body,n as collection,t as data,e as id,a as slug};
