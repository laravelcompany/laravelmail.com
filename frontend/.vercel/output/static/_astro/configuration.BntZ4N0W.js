import{$ as t,c as n}from"./_astro_assets.DtD32lsl.js";import{F as r}from"./scroll-area.DcbEPeDy.js";import"./astro/assets-service.Cu1PeyQ-.js";import"./index.D5KARNLn.js";const l={title:"Configuration",hide_breadcrumbs:!0};function p(){return[{depth:2,slug:"creating-configuration-file",text:"Creating Configuration File"},{depth:3,slug:"key-generation",text:"Key Generation"},{depth:3,slug:"base-url",text:"Base URL"},{depth:3,slug:"database-connection",text:"Database Connection"},{depth:3,slug:"database-migrations",text:"Database Migrations"},{depth:3,slug:"publishing-vendor-files",text:"Publishing Vendor Files"},{depth:3,slug:"workspaces--users",text:"Workspaces & Users"},{depth:2,slug:"additional-configuration",text:"Additional Configuration"},{depth:3,slug:"cron-jobs",text:"Cron Jobs"},{depth:3,slug:"message-sending--queues",text:"Message Sending & Queues"},{depth:4,slug:"sync",text:"Sync"},{depth:4,slug:"database",text:"Database"},{depth:4,slug:"redis",text:"Redis"},{depth:3,slug:"running-the-queue-without-laravel-horizon",text:"Running the queue without Laravel Horizon"},{depth:3,slug:"running-redis-queues-with-laravel-horizon",text:"Running Redis Queues With Laravel Horizon"},{depth:4,slug:"autoscaling",text:"Autoscaling"},{depth:3,slug:"user-management-email",text:"User Management Email"},{depth:4,slug:"smtp--sendmail",text:"SMTP & Sendmail"},{depth:4,slug:"ses",text:"SES"},{depth:4,slug:"mailgun",text:"Mailgun"},{depth:4,slug:"postmark",text:"Postmark"}]}const g=!0;function o(a){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a.components};return n(r,{children:[n(e.p,{children:n(e.img,{src:"https://leadscaptain.com/images/logo.svg",alt:"https://leadscaptain.com/images/logo.svg"})}),`
`,n(e.h2,{id:"creating-configuration-file",children:"Creating Configuration File"}),`
`,n(e.p,{children:["Laravel Mail Platform’s configuration is handled through the",n(e.code,{children:".env"}),` file.
By default, this file does not exist.
To create it manually, you will need to clone the included `,n(e.code,{children:".env.example"}),", rename it to ",n(e.code,{children:".env"})," and make changes as necessary."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["Any keys that are set in the ",n(e.code,{children:".env"})," file will be used, even if they are blank. If you do not wish to actively set a key, you should remove it from your ",n(e.code,{children:".env"})," file, rather than leave it blank."]}),`
`]}),`
`,n(e.h3,{id:"key-generation",children:"Key Generation"}),`
`,n(e.p,{children:["If you did not run the setup command, or if for some reason the ",n(e.code,{children:"APP_KEY"})," value is empty, you will need to create an encryption key. This is used by Laravel Mail Platform to apply encryption to things like user sessions."]}),`
`,n(e.p,{children:"To generate a new key, you should run the following command:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" key:generate"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"Although key generation can be run again, this will invalidate any sessions or make any stored encrypted data inaccessible. You should not generate a new key unless absolutely necessary."}),`
`]}),`
`,n(e.h3,{id:"base-url",children:"Base URL"}),`
`,n(e.p,{children:["You will need to set the ",n(e.code,{children:"APP_URL"})," variable in the ",n(e.code,{children:".env"})," file to the base URL for your installation of Laravel Mail Platform."]}),`
`,n(e.p,{children:["For example, if you are hosting your installation of Laravel Mail Platform at ",n(e.code,{children:"campaigns.example.com"}),", you will need to set the following:"]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"APP_URL=https://campaigns.example.com"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`,n(e.p,{children:"This is necessary to allow Laravel Mail Platform to correctly generate unsubscribe links, or links for user registration emails."}),`
`,n(e.h3,{id:"database-connection",children:"Database Connection"}),`
`,n(e.p,{children:["In order for Laravel Mail Platform to connect to your database, you must set the database configuration values in the ",n(e.code,{children:".env"})," file."]}),`
`,n(e.p,{children:["Firstly, you need to specify what type of database you are using by setting the ",n(e.code,{children:"DB_CONNECTION"})," value to either ",n(e.code,{children:"mysql"})," for a MySQL database or ",n(e.code,{children:"pgsql"})," for a PostgreSQL database."]}),`
`,n(e.p,{children:"Secondly, you need to set the connection details for your database installation. The following values need to be set:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"DB_HOST"})," – This is the host of your database, e.g. ",n(e.code,{children:"127.0.0.1"})," for a local installation"]}),`
`,n(e.li,{children:[n(e.code,{children:"DB_PORT"})," - The port Laravel Mail Platform should use to talk to your database"]}),`
`,n(e.li,{children:[n(e.code,{children:"DB_DATABASE"})," – The database Laravel Mail Platform should use to store its data"]}),`
`,n(e.li,{children:[n(e.code,{children:"DB_USERNAME"})," – The username Laravel Mail Platform will use to authenticate itself with your database"]}),`
`,n(e.li,{children:[n(e.code,{children:"DB_PASSWORD"})," – The password Laravel Mail Platform will use to authenticate itself with your database"]}),`
`]}),`
`,n(e.h3,{id:"database-migrations",children:"Database Migrations"}),`
`,n(e.p,{children:"To set up the database schema, migrations must be run. Migrations are instructions an application uses to configure database schema, running in sequence from beginning to end in order to ensure that the database is set up as the application expects it to be."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"Do not make custom modifications to the database yourself. Any database changes that Laravel Mail Platform requires should be accomplished through the running of migrations."}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"Before running migrations, ensure that you have correctly configured your database connection, as schema changes will be made."}),`
`]}),`
`,n(e.p,{children:"The included command-line setup command will run migrations for you (after a prompt), but you can run migrations manually using the following command:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" migrate:fresh"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" ---seed"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"publishing-vendor-files",children:"Publishing Vendor Files"}),`
`,n(e.p,{children:"Run the following command to publish the config, views, languages and assets from Laravel Mail Platform to your project:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" vendor:publish"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" --provider=Laravel"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" Mail"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" Platform"}),n(e.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"\\\\"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"Base"}),n(e.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"\\\\"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"Laravel"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" Mail"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" LaravelMailServiceProvider"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"workspaces--users",children:"Workspaces & Users"}),`
`,n(e.p,{children:"If you do not use the setup command to create a workspace and user with which to administer Laravel Mail Platform, you will need to go through the web interface registration process."}),`
`,n(e.p,{children:"You must follow the User Management Email configuration specified in Additional Configuration in order to allow registration and user invitation in Laravel Mail Platform."}),`
`,n(e.h2,{id:"additional-configuration",children:"Additional Configuration"}),`
`,n(e.h3,{id:"cron-jobs",children:"Cron Jobs"}),`
`,n(e.p,{children:"Laravel Mail Platform makes use of regular background tasks and it is therefore essential to create a cron job to run every minute:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"*"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" *"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" *"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" *"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" *"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" cd /path-to-your-project "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"&&"}),n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:" php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" schedule:run"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" >>"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" /dev/null"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" 2>&1"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:["Please refer to the Laravel documentation on ",n(e.a,{href:"https://laravel.com/docs/scheduling",rel:"nofollow",target:"_blank",children:"Task Scheduling"})," for further information."]}),`
`,n(e.h3,{id:"message-sending--queues",children:"Message Sending & Queues"}),`
`,n(e.p,{children:"Laravel Mail Platform sends email messages using a queue system. The queue can be processed synchronously or asynchronously. Asynchronous queues can be handled via your primary database or via redis."}),`
`,n(e.p,{children:["You can specify which queue driver to use in the ",n(e.code,{children:"QUEUE_CONNECTION"})," parameter in the ",n(e.code,{children:".env"})," file. This should be set to one of ",n(e.code,{children:"sync"}),", ",n(e.code,{children:"database"})," or ",n(e.code,{children:"redis"}),", depending on your requirements. This configuration applies to all messages sent in Laravel Mail Platform and cannot be changed on a per-user, per-workspace or per-provider basis."]}),`
`,n(e.h4,{id:"sync",children:"Sync"}),`
`,n(e.p,{children:"The synchronous queue runs any queued jobs as they are requested, requiring the user to wait until the job has been completed before any further action can be taken."}),`
`,n(e.p,{children:"This has the advantage of being simple and requiring no additional configuration. However, as this does not scale well, this approach is only recommended for relatively small message sending requirements."}),`
`,n(e.p,{children:["To use the synchronous queue, you only need to set the ",n(e.code,{children:"QUEUE_CONNECTION"})," to ",n(e.code,{children:"sync"}),", and no further configuration is required."]}),`
`,n(e.h4,{id:"database",children:"Database"}),`
`,n(e.p,{children:"Processing asynchronous queues via the database is considered a middle option. Running an asynchronous queue avoids the issues that come up using a synchronous queue, as messages can be processed without blocking further action being taken by the user, and will work until all jobs are completed regardless of how long it takes."}),`
`,n(e.p,{children:"The advantage of using the database for running the asynchronous queue is that it requires no extra services to be run, as it uses the primary database (MySQL or Postgres) that you have already configured for Laravel Mail Platform."}),`
`,n(e.p,{children:"The main disadvantage is that under heavy workloads the queue can negatively affect the performance of the database."}),`
`,n(e.p,{children:"As such, the database queue is recommended for small to medium sized mailing lists."}),`
`,n(e.p,{children:["To use the database driver, you must first set the ",n(e.code,{children:"QUEUE_CONNECTION"})," to ",n(e.code,{children:"database"})," in your ",n(e.code,{children:".env"})," file. You also need to run the following commands, which will create a new ",n(e.code,{children:"jobs"})," table in your database, which that will be used to manage the queue."]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" queue:table"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"php"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" artisan"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" migrate"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h4,{id:"redis",children:"Redis"}),`
`,n(e.p,{children:"Redis is the recommended solution for running medium to large mailing lists."}),`
`,n(e.p,{children:["You will of course need an installation of redis on your server. You will then need to set the ",n(e.code,{children:"QUEUE_CONNECTION"})," to ",n(e.code,{children:"redis"})," and set the following configuration values in your ",n(e.code,{children:".env"})," file:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"REDIS_HOST"})}),`
`,n(e.li,{children:n(e.code,{children:"REDIS_PASSWORD"})}),`
`,n(e.li,{children:n(e.code,{children:"REDIS_PORT"})}),`
`]}),`
`,n(e.h3,{id:"running-the-queue-without-laravel-horizon",children:"Running the queue without Laravel Horizon"}),`
`,n(e.p,{children:["If you don’t want to use Horizon to manage you redis queue or you’re using the database driver you will have to run a ",n(e.a,{href:"https://laravel.com/docs/queues#running-the-queue-worker",rel:"nofollow",target:"_blank",children:"queue worker"})," for each queue that Laravel Mail Platform uses."]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Laravel Mail Platform-message-dispatch"}),": dispatches messages to the email service"]}),`
`,n(e.li,{children:[n(e.code,{children:"Laravel Mail Platform-webhook-process"}),": processes incoming webhooks"]}),`
`]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"php artisan queue:work --queue=Laravel Mail Platform-message-dispatch"})}),`
`,n(e.span,{class:"line",children:n(e.span,{children:"php artisan queue:work --queue=Laravel Mail Platform-webhook-process"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`,n(e.h3,{id:"running-redis-queues-with-laravel-horizon",children:"Running Redis Queues With Laravel Horizon"}),`
`,n(e.p,{children:["Laravel Mail Platform bundles ",n(e.a,{href:"https://laravel.com/docs/horizon",rel:"nofollow",target:"_blank",children:"Laravel Horizon"})," as an easy way to run and manage redis queues."]}),`
`,n(e.p,{children:"Configuration for the queues necessary to run Laravel Mail Platform is already included. In order to use Horizon as your queue manager, you should first publish the Horizon assets:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"php artisan horizon:publish"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`,n(e.p,{children:"To start processing your queue items with Horizon, you simply need to run the following command:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"php artisan horizon"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`,n(e.p,{children:["When using Horizon in production, you should consider using a service to ensure the queue runner restarts if it fails for any reason. The Horizon documentation has a ",n(e.a,{href:"https://laravel.com/docs/horizon#deploying-horizon",rel:"nofollow",target:"_blank",children:"guide"})," on how to use Supervisor to do this."]}),`
`,n(e.h4,{id:"autoscaling",children:"Autoscaling"}),`
`,n(e.p,{children:["The configuration for Horizon included with Laravel Mail Platform allows autoscaling of queue workers. By default, webhooks received and messages sent via the queue each have a minimum of 2 processes running, and a maximum of 10 or 20. If these values do not suit your requirements, they can be adjusted in the ",n(e.code,{children:"config/horizon.php"})," file—in particular ",n(e.code,{children:"supervisor-2"})," and ",n(e.code,{children:"supervisor-3"}),"—using the ",n(e.code,{children:"minProcesses"})," and ",n(e.code,{children:"maxProcesses"})," values."]}),`
`,n(e.h3,{id:"user-management-email",children:"User Management Email"}),`
`,n(e.p,{children:"In order to use user management functionality (for example, inviting new users or password resets) in Laravel Mail Platform, it is necessary to set up an email service that Laravel Mail Platform can use to send the messages."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"If you are not going to be inviting any other users or team members to your Laravel Mail Platform installation, then this section can be ignored."}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"There is no relationship between Laravel Mail Platform’s internal mail configuration and any email services that are configured for a workspace."}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["You will need to set ",n(e.code,{children:"Laravel Mail Platform_REGISTER=true"})," in the ",n(e.code,{children:".env"})," file in order to use the registration and user invitation functionality."]}),`
`]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["By default, users are granted the ability to reset their passwords. If you wish to disable password resets, you must set ",n(e.code,{children:"Laravel Mail Platform_PASSWORD_RESET=false"})," in the ",n(e.code,{children:".env"})," file."]}),`
`]}),`
`,n(e.p,{children:["You first need to set ",n(e.code,{children:"MAIL_MAILER"})," to your chosen service. The options here are ",n(e.code,{children:"smtp"}),", ",n(e.code,{children:"sendmail"}),", ",n(e.code,{children:"ses"}),", ",n(e.code,{children:"mailgun"})," and ",n(e.code,{children:"postmark"}),"."]}),`
`,n(e.h4,{id:"smtp--sendmail",children:"SMTP & Sendmail"}),`
`,n(e.p,{children:"When using a regular SMTP provider, or sendmail, you should set the following configuration values:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"MAIL_HOST"})," – This is the host for the SMTP server"]}),`
`,n(e.li,{children:[n(e.code,{children:"MAIL_PORT"})," – This is the port that will be used to connect to the SMTP server"]}),`
`,n(e.li,{children:[n(e.code,{children:"MAIL_USERNAME"})," – The username used to authenticate with the SMTP server"]}),`
`,n(e.li,{children:[n(e.code,{children:"MAIL_PASSWORD"})," – The password used to authenticate with the SMTP server"]}),`
`,n(e.li,{children:[n(e.code,{children:"MAIL_FROM_ADDRESS"})," – The address that mail will appear to come from"]}),`
`,n(e.li,{children:[n(e.code,{children:"MAIL_FROM_NAME"})," – The name that mail will appear to come from"]}),`
`]}),`
`,n(e.h4,{id:"ses",children:"SES"}),`
`,n(e.p,{children:["When using SES as your mail service, you should set the following configuration values, adding them to the ",n(e.code,{children:".env"})," file if they are not already present:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"AWS_ACCESS_KEY_ID"})," – Your AWS ID key"]}),`
`,n(e.li,{children:[n(e.code,{children:"AWS_SECRET_ACCESS_KEY"})," – Your AWS secret key"]}),`
`,n(e.li,{children:[n(e.code,{children:"AWS_DEFAULT_REGION"})," – Your AWS region (defaults to ",n(e.code,{children:"us-east-1"})," if not included in the configuration file)"]}),`
`]}),`
`,n(e.h4,{id:"mailgun",children:"Mailgun"}),`
`,n(e.p,{children:["When using Mailgun as your mail service, you should set the following configuration values, adding them to the ",n(e.code,{children:".env"})," file if they are not already present:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"MAILGUN_DOMAIN"})}),`
`,n(e.li,{children:n(e.code,{children:"MAILGUN_SECRET"})}),`
`,n(e.li,{children:[n(e.code,{children:"MAILGUN_ENDPOINT"})," – (defaults to ",n(e.code,{children:"api.mailgun.net"})," if not included in the configuration file)"]}),`
`]}),`
`,n(e.h4,{id:"postmark",children:"Postmark"}),`
`,n(e.p,{children:["When using Postmark as your mail service, you should set the following configuration values, adding them to the ",n(e.code,{children:".env"})," file if they are not already present:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"POSTMARK_TOKEN"})}),`
`]})]})}function s(a={}){const{wrapper:e}=a.components||{};return e?n(e,{...a,children:n(o,{...a})}):o(a)}const f="src/content/docs/configuration.mdx",m="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/configuration.mdx",i=(a={})=>s({...a,components:{Fragment:r,...a.components,"astro-image":a.components?.img??t}});i[Symbol.for("mdx-component")]=!0;i[Symbol.for("astro.needsHeadRendering")]=!l.layout;i.moduleId="/home/saturn/Projects/laravel.apps/laravelmail.com/frontend/src/content/docs/configuration.mdx";export{i as Content,g as __usesAstroImage,i as default,m as file,l as frontmatter,p as getHeadings,f as url};
