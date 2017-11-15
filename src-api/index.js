const Router = require('express').Router
const router = Router()

router.use('/hello-world', require('./hello-world'))
router.use('/highcharts-data', require('./highcharts-data'))
router.use('/vuetrend-data', require('./vuetrend-data'))

module.exports = router
