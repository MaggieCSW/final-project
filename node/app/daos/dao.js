const daoCommon = require('./common/daoCommon')

const brandDao = {
    ...daoCommon,
    ...require('./api/brandDao')
}

const productDao = {...daoCommon, ...require('./api/productDao')}

const userDao = {...daoCommon, ...require('./api/userDao')}



module.exports = {
    brandDao,
    productDao,
    userDao
}