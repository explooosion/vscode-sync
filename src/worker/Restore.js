import fs from 'fs'
import path from 'path'
import copyFileSync from 'fs-copy-file-sync'

import Base from './Base'

class RestoreWorker extends Base {

  constructor() {
    super();
    this.datas = []
  }

  getExtensions() {
    this.datas = String(fs.readFileSync(path.resolve(this.prefixFolder, this.extensionFile))).split('\n')

    this.datas.forEach((data, index) => {
      if (data) console.log(`${index}-${data}`)
    })
  }

}

export default RestoreWorker
