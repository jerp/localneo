# localneo

Run your SAP-WebIDE based applications locally using the neo-app.json as a web server config.  

## install

``` 
$ npm install --global @uniorg/localneo
``` 

## configuration

A `destinations.json` file can be used to map applications and destinations to targets. 

```json
{
  "server": {
    "port": "12345"
  },
  "service": {
    "sapui5": {
      "useSAPUI5": true,
      "version": "1.48.5"
    }
  },
  "applications": { 
    "mylib": {
      "path": "../mylib"
    },
    "images": {
       "path": "/var/www/images"
    }
  },

  "destinations": {
    "SAP_BACKEND": {
      "url": "https://our_secret_sap_system.com" 
    }
  }
}

```

## usage

```
$ cd my/cool/neo/project
$ localneo
``` 

`localneo` will start a webserver on port 4567. 
Open you browser on [localhost:4567](http://localhost:4567) to get started.


### Separate credentials of destinations

To avoid having to commit crendentials to your repository, add a `credentials.json` file that holds username and password. These would override auth settings of `destinations.json`

```json
{
  "SAP_BACKEND": {
    "username": "me_myself_and_i",
    "password": "pwd1234" 
  }
}

```
