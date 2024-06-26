const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005

router.get('/', (req, res)=> {
    res.json({
        'All Products': `http://localhost:${PORT}/api/product`,
        'All Brands': `http://localhost:${PORT}/api/brand`,
        'All Users': `http://localhost:${PORT}/api/user`
    })
})

router.use('/api/product', require('./api/productRoutes'))
router.use('/api/brand', require('./api/brandRoutes'))
router.use('/api/user', require('./api/userRoutes'))


router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 ERROR: Page does not exist</h1>')
    }
})

module.exports = router