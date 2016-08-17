### PhoneGap Template

A repository for PhoneGap templates.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`

#### Install

    $ npm install -g phonegap
    $ npm install -g bower

#### Setup

Create a new phonegap application using the [phonegap-cli][phonegap-cli-url].

    $ phonegap create my-app    # create a PhoneGap project
    
Copy the contents of template you want from this repository into the newly create phonegap app folder overwriting the contents of the www folder. Then run bower to install to retrieve all its dependencies.

    $ cd my-app/www             # change to newly copied www  directory
    $ bower install             # run bower to install the polymer dependencies

Run app from project directory

    $ cd my-app                 # change to project directory
    $ phonegap run android      # build and install the app to android

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli    
