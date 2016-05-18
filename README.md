### Polymer Starter Kit PhoneGap Template

A PhoneGap template with the Polymer Starter Kit.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`

#### Install

    $ npm install -g phonegap
    $ npm install -g bower

#### Setup

Create a new phonegap application using the [phonegap-cli][phonegap-cli-url].

    $ phonegap create my-app    # create a PhoneGap project
    
Copy the www folder from this repository into the newly create phonegap app folder overwriting whats there. Then run bower to install the polymer dependencies.

    $ cd my-app/www             # change to newly copied www  directory
    $ bower install             # run bower to install the polymer dependencies

Run app from project directory

    $ cd my-app                 # change to project directory
    $ phonegap run android      # build and install the app to android

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli    
