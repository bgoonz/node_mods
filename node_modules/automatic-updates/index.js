/*
 * Automatically update nodejs program from npm/github
 */
const shell = require('shelljs')
const conf = require('node-etc');
const events = require('events');
// const eventEmitter = new events.EventEmitter();

/**
 * Automatic Updates
 */

class automaticUpdates extends events{
    /**
     * Update Interval
     */
    interval = 3600;

    /**
     * Source from which to update
     */
    source = 'npm'

    /**
     * update intervals
     */
    intervals = null

    constructor() { 
        super()
    }

    /**
     * clear update intervals
     */
    clearIntervals() {
        clearInterval(this.intervals)
    }

    /**
     * Initialize automatic updates
     * @param {object} options - Options
     * @param {number} [options.interval = 3600] - Interval over which to check for updates.
     * @param {string} [options.source = npm] - The source from which to check for updates.
     * @param {string} [options.test = false] - If running tests so as not to run actual updates
     */
    init(options) {
        this.clearIntervals();
        options = Object.assign({ interval: 3600, source: 'npm', test: false }, options);
        this.interval = options.interval
        this.source = options.source

        if (typeof this.interval !== 'number') throw Error(`Invalid interval type for ${this.interval}`)
        if (this.interval <= 0) throw Error(`Interval should be greater than 0`)
        if (!['github', 'npm'].includes(this.source)) {
            throw Error(`Invalid source ${this.source}`)
        }
        switch (this.source) {
            case 'npm':
                if (!options.test){
                    this.updateFromnpm();
                }
                break;
            case 'github':
                if (!options.test){
                    this.updateFromGithub();
                }
                break;
            default:
                throw Error(`Unrecognized source ${this.source}`)
        }
        return this;
    }

    /** 
     * Update using git pull from github repo
     */
    async updateFromGithub() {
        return new Promise((resolve, reject) => {
            resolve(true)
            let packageJsonDir = conf.packageJsonDir();
            let remoteExists = shell.exec(`cd ${packageJsonDir} && git remote -v`, { silent: true })
            if (remoteExists.stdout.length === 0 && remoteExists.stderr.length === 0) {
                remoteExists = false
            }
            if (!remoteExists) {
                throw Error(`${packageJsonDir} is not a github repo`)
            }

            const updateFromGithub = async () => {
                let key = await conf.parseYAML('system');
                key = key.sshKey
                if (!key) {
                    throw Error(`ssh key is missing`)
                }
                let update = shell.exec(`cd ${packageJsonDir}  && GIT_SSH_COMMAND='ssh -i ${key} -o IdentitiesOnly=yes' git pull origin master`)
                // update = update.stdout + update.stderr;
                if (!update.includes('Already up-to-date')) {
                    // shell.exec(`cd ${packageJsonDir}  && yarn install`);
                    this.emit('updated', new Date().getTime())
                }
            }


            updateFromGithub();
            this.updateModules()
            this.intervals = setInterval(() => {
                updateFromGithub();
                this.updateModules()
            }, this.interval * 1000)
        })
    }

    /**
     * update from npm
     */
    async updateFromnpm() {
        return new Promise((resolve, reject) => {
            resolve(true)
            const updateFromnpm = async () => {
                let packageJson = conf.packageJson();
                let installedVersion = conf.packageJson().version
                let installedVersionDotted = installedVersion

                installedVersion = installedVersion.replace(/\./g, '')

                try {
                    let latestVersion = await shell.exec(`npm show ${packageJson.name} version`, { silent: true }).stdout.replace(/\n/, '')
                    let latestVersionDotted = latestVersion
                    latestVersion = latestVersion.replace(/\./g, '');

                    while (installedVersion.length < latestVersion.length) {
                        installedVersion = `${installedVersion}0`
                    }
                    while (latestVersion.length < installedVersion.length) {
                        latestVersion = `${latestVersion}0`
                    }
                    if (parseInt(latestVersion) > parseInt(installedVersion)) {
                        console.log(`Updating from install v${installedVersionDotted} to latest v${latestVersionDotted}`)
                        // shell.exec(`npm install -g ${packageJson.name}`)
                        this.emit('updated', new Date().getTime())
                    } else {
                        console.log(`Installed v${installedVersionDotted} is the latest.`)
                    }

                } catch (error) {
                    console.log(error)
                }
            }

            updateFromnpm();
            this.updateModules()
            this.intervals = setInterval(() => {
                updateFromnpm();
                this.updateModules()
            }, this.interval * 1000)
        })
    }

    /**
     * update node modules for current project
     */
    updateModules() {
        let packageJsonDir = conf.packageJsonDir();
        let update = shell.exec(`cd ${packageJsonDir} && yarn install || npm install`, { silent: true })
        
        if (!update.includes('Already up-to-date')) {
            // shell.exec(`cd ${packageJsonDir}  && yarn install`);
            this.emit('updated', new Date().getTime())
        }else{
            this.emit('notUpdated', new Date().getTime())
        }
    }
}

new automaticUpdates();
module.exports = new automaticUpdates();