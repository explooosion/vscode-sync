import fs from 'fs'
import path from 'path'
import copyFileSync from 'fs-copy-file-sync'
import { spawn } from 'child_process'

import Base from './Base'

class BackupWorker extends Base {

  constructor() {
    super();
    this.datas = ''
  }

  /**
   * Run with command
   * @param {spawn} spawn
   */
  run() {

    this.spawn = spawn('cmd', ['/s', '/c', 'code', '--list-extensions'])

    if (!this.spawn) return

    this.spawn.stdout.on('data', data => {
      this.datas += String(data)
    })

    this.spawn.stderr.on('data', (data) => {
      console.log(`err: ${data}`)
    });

    this.spawn.on('close', () => this.backup())
  }

  /**
   * Run for backup
   */
  backup() {

    // Save Settings
    copyFileSync(`${path.resolve(process.env.APPDATA, this.settingsSource)}`, `${path.resolve(this.prefixFolder, this.settingsFile)}`)
    console.log('Settings were saved!')

    // Save extensions
    fs.writeFileSync(`${path.resolve(this.prefixFolder, this.extensionFile)}`, this.datas)
    console.log('Extensions were saved!')
  }

}

export default BackupWorker
