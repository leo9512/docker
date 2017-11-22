const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.use( express.static(__dirname + '/dist' ));

app.listen(app.get('port'), (err) => {
  console.log(`Server running on port ${app.get('port')}`)
})
