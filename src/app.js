import { argv } from 'yargs'

import BackupWorker from './worker/Backup'
import RestoreWorker from './worker/Restore'

switch (argv.mode) {
  case 'backup':
    console.log('Backup Files...')
    const bkWorker = new BackupWorker()
    bkWorker.run()
    break
  case 'restore':
    console.log('Restore Files...')
    const rtWorker = new RestoreWorker()
    rtWorker.run()
    break
  default:
    break
}

