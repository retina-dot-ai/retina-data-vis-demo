const Router = require('express').Router
const router = Router()

router.get('/', function (req, res, next) {
  res.json({
    'sparkline_data': [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
  })
})

module.exports = router
