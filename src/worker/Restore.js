import fs from 'fs'
import path from 'path'
import copyFileSync from 'fs-copy-file-sync'
import { spawn } from 'child_process'

import Base from './Base'

class RestoreWorker extends Base {

  constructor() {
    super();
    this.datas = []

    this.getExtensions()
  }

  /**
   * Get db extensions list
   */
  getExtensions() {
    this.datas = String(fs.readFileSync(path.resolve(this.prefixFolder, this.extensionFile))).split('\n')

  }

  /**
   * Run for restore
   */
  run() {

    // Restore Settings
    copyFileSync(`${path.resolve(this.prefixFolder, this.settingsFile)}`, `${path.resolve(process.env.APPDATA, this.settingsSource)}`)
    console.log('Settings were restored!')

    // Restore extensions
    this.datas.forEach((data, index) => {
      if (String(data).length > 0) {
        console.log(`Installing ${data}...`)
        this.spawn = spawn('cmd', ['/s', '/c', 'code', '--install-extension', data])
        // console.log('Extensions were restored!')
      }
    })

  }

}

export default RestoreWorker
