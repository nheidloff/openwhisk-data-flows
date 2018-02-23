# Data Flows with Apache OpenWhisk and Composer

This project contains samples how to write applications with [Composer](https://github.com/ibm-functions/composer) and [Apache OpenWhisk](https://openwhisk.apache.org/). 

While the functions in applications are stateless, the applications manage the state and are responsible how the data flows between the functions. This project contains a pattern how to handle data flows and how to convert data. 

For details check out the two articles on my blog:

* [Data Flows in Serverless Cloud-Native Applications](http://heidloff.net/article/serverless-data-flows)
* [Transforming JSON Data in Serverless Applications](http://heidloff.net/article/transforming-json-serverless)


### Setup

Prerequisites:

* Install the [OpenWhisk CLI](https://github.com/apache/incubator-openwhisk-cli)
* Create an [IBM Cloud](https://ibm.biz/nheidloff) account
* Install the [IBM Cloud CLI](https://clis.ng.bluemix.net/)
* Install the [Composer CLI](https://github.com/ibm-functions/composer/tree/master/docs#installing-the-shell) and Redis

Run these commands to deploy the functions and the apps:

```sh
$ git clone https://github.com/nheidloff/openwhisk-data-flows.git
$ cd openwhisk-data-flows
$ bx login -a api.ng.bluemix.net -o yourBluemixOrg -s yourBluemixSpace
$ wsk package create composer-demo-nh
$ wsk action update composer-demo-nh/simple1 functions/simple1.js
$ wsk action update composer-demo-nh/simple2 functions/simple2.js
$ wsk action update composer-demo-nh/error functions/error.js
$ wsk action update composer-demo-nh/read-person-profile functions/read-person-profile.js
$ wsk action update composer-demo-nh/transform-read-person-profile functions/transform-read-person-profile.js
$ wsk action update composer-demo-nh/send-mail functions/send-mail.js
$ cd functions
$ npm install
$ zip -rq transformsendmail.zip transform-send-mail.js package.json node_modules
$ wsk action update composer-demo-nh/transform-send-mail --kind nodejs:8 transformsendmail.zip
$ cd ..
$ fsh app update composer-demo-nh/in-app-conversions apps/in-app-conversions.js
$ fsh app update composer-demo-nh/send-mail-app apps/send-mail-app.js
```

To run the applications invoke these commands:

```sh
$ fsh app invoke composer-demo-nh/in-app-conversions -p input-param1 input-param1-value
$ fsh app invoke composer-demo-nh/send-mail-app -p id nheidloff -p subject Hello
```