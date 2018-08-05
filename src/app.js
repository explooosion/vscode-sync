import { spawn } from 'child_process'
import fs from 'fs'

const ls = spawn('cmd', ['/s', '/c', 'code', '--list-extensions'])

let datas = ''

ls.stdout.on('data', (data) => {
  datas += String(data);
  // console.log(`stdout: ${String(data).split('\n').length}`);
  // console.log(`stdout: ${data}`);

});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
});

ls.on('close', code => {
  console.log(`child process exited with code ${code}`)

  fs.writeFileSync('vscode.bak', datas)
  console.log('The file was saved!')
});
