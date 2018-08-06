import BackupWorker from './worker/Backup'
import RestoreWorker from './worker/Restore'

// console.log('Backup Files...')
const bkWorker = new BackupWorker()
// bkWorker.run()

const rtWorker = new RestoreWorker()
rtWorker.run()
