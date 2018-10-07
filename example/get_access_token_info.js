var lib = require('../index.js');

let accessToken = 'ya29.Glsv...'

lib.wellKnowInfo(accessToken)
  .then(info => {console.log(info)})
  .catch(error => {console.log(error)})

lib.profileInfo(accessToken)
  .then(info => {console.log(info)})
  .catch(error => {console.log(error)})
