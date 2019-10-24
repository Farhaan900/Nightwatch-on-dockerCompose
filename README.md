## Required 

-   brew install docker docker-machine docker-compose
-   npm package 

```sh
cp docker-compose.dev.override.yml docker-compose.override.yml
```


## To execute the tests?

Start the Selenium hub, the SUT, and the Selenium browser nodes:

```sh
$ npm start
```

Execute the tests with Nightwatch:

```sh
$ npm test
```

When you're done, stop and remove the docker containers:

```sh
$ npm stop
```

Alternatively, if you don't want to install Node on your native machine, you may
use the included `bin/` scripts. For example:

```sh
bin/start
bin/test
bin/stop
```

