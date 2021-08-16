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
