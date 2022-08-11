exports.middlewareGlobal = (req, res, next) => {
    res.locals.user = req.session.user;
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };
  
  exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
    }
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

  exports.loginRequired = (req, res, next) =>{
    if(!req.session.user){
      res.send('Precisa fazer sessão');
      req.session.save();
      return;
    }
  }