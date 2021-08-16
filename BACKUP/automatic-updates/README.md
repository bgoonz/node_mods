# automatic-updates
Tools to automatically update nodejs programs installed as modules from npm/github. 

[![Build Status](https://travis-ci.com/csymapp/automatic-updates.svg?branch=master)](https://travis-ci.com/csymapp/automatic-updates)


## npm

Check the version of the installed module and compares with the lastest module in npm to check whether to install new module using `npm install -g`

Only public npm packages are supported. If you'd like your application to be private, you can consider using [github](#github)

## github

Runs `git pull` and gets github cli handle the rest.

This allows the program to freely reside in private github repos and still be able to auto-update. This requires an ssh key to be supplied.

For using github, you will create a file in `~/etc/${yourprojectname}/system.yaml` with the contents:

```yaml
sshKey: path to ssh key

```

Project name is the name in `package.json`. The active branch is master. So ensure you use that as your default branch instead of main.

## usage

```javascript
const automaticUpdates = require('automatic-updates');
automaticUpdates.on('updated', ()=>{
    process.exit() // what to do restart the service in case of an update
});
automaticUpdates.init()
```

## api

<a name="automaticUpdates"></a>

## automaticUpdates
Automatic Updates

**Kind**: global class  

* [automaticUpdates](#automaticUpdates)
    * [.interval](#automaticUpdates+interval)
    * [.source](#automaticUpdates+source)
    * [.init(options)](#automaticUpdates+init)
    * [.updateFromGithub()](#automaticUpdates+updateFromGithub)
    * [.updateFromnpm()](#automaticUpdates+updateFromnpm)
    * [.updateModules()](#automaticUpdates+updateModules)

<a name="automaticUpdates+interval"></a>

### automaticUpdates.interval
Update Interval

**Kind**: instance property of [<code>automaticUpdates</code>](#automaticUpdates)  
<a name="automaticUpdates+source"></a>

### automaticUpdates.source
Source from which to update

**Kind**: instance property of [<code>automaticUpdates</code>](#automaticUpdates)  
<a name="automaticUpdates+init"></a>

### automaticUpdates.init(options)
Initialize automatic updates

**Kind**: instance method of [<code>automaticUpdates</code>](#automaticUpdates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Options |
| [options.interval] | <code>number</code> | <code>3600</code> | Interval over which to check for updates. |
| [options.source] | <code>string</code> | <code>&quot;npm&quot;</code> | The source from which to check for updates. |

<a name="automaticUpdates+updateFromGithub"></a>

### automaticUpdates.updateFromGithub()
Update using git pull from github repo

**Kind**: instance method of [<code>automaticUpdates</code>](#automaticUpdates)  
<a name="automaticUpdates+updateFromnpm"></a>

### automaticUpdates.updateFromnpm()
update from npm

**Kind**: instance method of [<code>automaticUpdates</code>](#automaticUpdates)  
<a name="automaticUpdates+updateModules"></a>

### automaticUpdates.updateModules()
update node modules for current project

**Kind**: instance method of [<code>automaticUpdates</code>](#automaticUpdates)  

