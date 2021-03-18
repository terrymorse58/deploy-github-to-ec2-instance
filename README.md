# Deploy to server from GitHub repository
Automatically update a dedicated server on every push to GitHub repository
---

## Introduction

The method described here configures a GitHub repository to deploy updates to a dedicated server (an AWS EC2 instance, or any dedicated server that accepts ssh login) upon a repository push.

The example code is a NodeJS Express app that simply prints "Hello World". The example server is an AWS EC2 instance configured to run NodeJS, and it may be accessed from a browser at this URL:

[http://ec2-54-187-135-188.us-west-2.compute.amazonaws.com:3000](http://ec2-54-187-135-188.us-west-2.compute.amazonaws.com:3000)

### Auto-restart option with PM2

Some servers (including EC2) do not restart apps when a change is made. Therefore, this example includes [PM2](https://pm2.keymetrics.io), which may be used as an option to restart the app on the server when an update is detected, or whenever the server is rebooted.

## Prerequisites

To enable file transfer from GitHub to the server, the following items are needed:

* EC2_HOST - server's public dns name (ex. ec2-54-187-135-188.us-west-2.compute.amazonaws.com)
* EC2_USER - server's login username (ex. ec2-user)
* EC2_SSH_KEY - server's private key (PEM format)
* EC2_TARGET_DIR - server's target directory (ex. /home/ec2-user)
