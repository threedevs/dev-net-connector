# dev-net-connector

## goal of this repository (vision)

create a website that tracks the networking within 100devs instead of a googledoc

## contribute

If you have spare time, you can always make an addition to the system! If you have something different in mind, just DM @kwlski or @SirPeanutX on DC. There is a list of issues to pick from.

### how to

- implement one of the possible issues, assign the issue to yourself, if you are a beginner we can help you getting your changes to github
- push your feature to a non protected branch, hereby we name the branch after the task it fulfills, in **small letters with dashes**. For example I make a documentation file for routes, so we are going to name the branch "routes-doc"
- open a pullrequest on github, that can be reviewed/approved and merged into the "master" branch
- done! You have contributed!

### prototype

to contribute, you will need to have an idea what the app should look like, for this please see the prototype:

- **[in work, see the prototype of the project! [Issue #2](https://github.com/threedevs/dev-net-connector/issues/2)]**

## how to use the repository //TODO update

### 1. first you will need to install git, node, and mongodb

```
https://git-scm.com/downloads
https://nodejs.org/en/
https://docs.mongodb.com/manual/administration/install-community/
```

### 2. clone the repository

now you can use git to clone this repository and get it so you have it locally on your machine as physical files
for this go to your desired directory where you want to have your files and run the following command

```
git clone https://github.com/threedevs/dev-net-connector.git
```

you should now see a folder dev-net-connector

### 3. install the dependencies

open the folder dev-net-connector and install the packages that we need with following command from the npm registry

```
npm i
```

### 4. start the database

start the MongoDB database service by running

```
mongod
```

### 5. run the server for development

now you should be able to run the node server with nodemon which keeps track of changes and restarts the server if needed

```
npm run dev
```

### 5. done!
