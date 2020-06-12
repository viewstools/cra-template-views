let { override } = require('customize-cra')
let { addReactRefresh } = require('customize-cra-react-refresh')

module.exports = override(addReactRefresh())
