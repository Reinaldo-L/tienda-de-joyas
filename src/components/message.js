require('colors')

const message = (port) => {
    console.clear()
    console.log('============================'.green)
    console.log(`    SERVER ON PORT ${port}     `.bgWhite.black)
    console.log('============================'.green)
    console.log(`Bienvenido al desafio`.red)
}

module.exports = message