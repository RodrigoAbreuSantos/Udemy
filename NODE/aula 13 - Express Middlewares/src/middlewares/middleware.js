exports.middlewareGlobal = (req, resp, next) => {
    if (req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Miranda', 'Não use Miranda')
        console.log();
        console.log(`Vi que vc postou ${req.body.cliente}`)
        console.log();
    }
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware')
    next()
}