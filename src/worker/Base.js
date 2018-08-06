import fs from 'fs'

class Worker {

  spawn = null

  datas = null

  prefixFolder = 'db'

  extensionFile = 'vscode.db'

  settingsFile = 'settings.json'

  settingsSource = 'Code\\User\\settings.json'

  constructor() {
    if (!fs.existsSync(this.prefixFolder)) fs.mkdirSync(this.prefixFolder)
  }

}

export default Worker
