# Data Flows with Apache OpenWhisk and Composer

This project contains samples how to write applications with [Composer](https://github.com/ibm-functions/composer) and [Apache OpenWhisk](https://openwhisk.apache.org/). 

While the functions in applications are stateless, the applications manage the state and are responsible how the data flows between the functions. This project contains a pattern how to handle data flows and how to convert data. For details check out my blog [Data Flows in Serverless Cloud-Native Applications](http://heidloff.net/article/serverless-data-flows).


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
$ fsh app update composer-demo-nh/in-app-conversions apps/in-app-conversions.js
```

To run the application invoke this command:

```sh
$ fsh app invoke composer-demo-nh/in-app-conversions -p input-param1 input-param1-value
```