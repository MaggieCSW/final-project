// where all the daos meet

const daoCommon = require('./common/daoCommon')

const brandDao = {
    ...daoCommon,
    ...require('./api/brandDao')
}

const productDao = {...daoCommon, ...require('./api/productDao')}



module.exports = {
    brandDao,
    productDao
}