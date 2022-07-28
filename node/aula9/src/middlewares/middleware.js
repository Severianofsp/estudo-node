module.exports = (req, res, next) => {
    console.log()
    console.log('Passou no middleware global')
    console.log()
    next();
}

