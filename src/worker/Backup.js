import fs from 'fs'
import path from 'path'
import copyFileSync from 'fs-copy-file-sync'

import Base from './Base'

class BackupWorker extends Base {

  constructor(spawn) {
    super();
    this.datas = ''
    this.spawn = spawn

    this.spawn.stdout.on('data', data => {
      this.datas += String(data)
    })

    this.spawn.stderr.on('data', (data) => {
      console.log(`err: ${data}`)
    });

    this.spawn.on('close', () => this.backup())
  }

  backup() {
    // Save extensions
    fs.writeFileSync(`${path.resolve(this.prefixFolder, this.extensionFile)}`, this.datas)
    console.log('Extensions were saved!')

    // Save Settings
    copyFileSync(`${path.resolve(process.env.APPDATA, this.settingsSource)}`, `${path.resolve(this.prefixFolder, this.settingsFile)}`)
    console.log('Settings were saved!')
  }

}

export default BackupWorker
