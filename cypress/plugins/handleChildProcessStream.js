module.exports.handleChildProcessStream = (stream, taskName, resolve, reject) => {
  stream.stdout.on('data', (data) => {
    console.log(`Stdout for task ${taskName}: ${data}`)
  })
  stream.stderr.on('data', (data) => {
    console.error(`Task ${taskName}: ${data}`)
  })
  stream.on('close', (code) => {
    if (code === 0) {
      resolve(true)
    } else {
      reject(`Task ${taskName} exited with code ${code}`)
    }
  })
}
