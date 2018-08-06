import { spawn } from 'child_process'

import BackupWorker from './worker/Backup'
import RestoreWorker from './worker/Restore'

// console.log('Backup Files...')
// const bkWorker = new BackupWorker(spawn('cmd', ['/s', '/c', 'code', '--list-extensions']))

const rtWorker = new RestoreWorker()
rtWorker.getExtensions()
