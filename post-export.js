const fs = require('fs')

fs.openSync('./out/.nojekyll', 'w')
fs.writeFileSync('./out/CNAME', 'rodrigo.waldow')
