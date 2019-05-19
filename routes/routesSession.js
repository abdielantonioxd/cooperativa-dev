module.exports = (app, passport, LocalStrategy) => {
  /*
#######################################################
                     LOGIN
#######################################################
*/
  app.post("/login", passport.authenticate("local-signin", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true
  }));

  app.get("/", (req, res) => {
    res.render("index", {
      titulo: "SIP-Login",
      message: req.flash("signinMessage")
    });
  });
  /*
#######################################################
                 USER REGISTER
#######################################################
*/
  app.post("/Signup", passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/Signup",
    failureFlash: true
  }));

  app.get("/Signup", (req, res) => {
    res.render("Login", {
      titulo: "SIP-Signup",
      message: req.flash("Signupmessage")
    });
  });
  /*
  #######################################################
                    AUTHORIZED ACCESS
  #######################################################
  */
  app.get('/home', isAuthenticated, (req, res, next) => {
    res.render('home.ejs', {
      titulo: "home",
      name: req.userCode
    });
  });
  app.get('/invoice', isAuthenticated, (req, res) => {
    data = 'invoice'
    res.render("invoice", {
      message: JSON.stringify(data),
      titulo: "SIP-proyect",
      name:"invoice"
    })
  });
  app.get('/proyecto', isAuthenticated, (req, res) => {
    res.render('proyecto.ejs', {
      titulo: "SIP-proyect",
      name:"proyectos"
    });
  });
  app.get('/bitacora', isAuthenticated, (req, res) => {
    res.render('bitacora.ejs', {
      titulo: "SIP-bitacora",
      name:"bitacora"
    });
  });
  app.get('/config', (req, res) => {
    res.render('config.ejs', {
      titulo: "SIP-config",
      name: "config"
    });
  });
  app.get('/contact-manager', isAuthenticated, (req, res) => {
    res.render('contact-manager.ejs', {
      titulo: "SIP-contact-manager",
      name: "contact-manager"
    });
  });
  app.get('/tools', isAuthenticated, (req, res) => {
    res.render('tools.ejs', {
      titulo: "SIP-tools",
      name:"tools"
    });
  });
  /*
#######################################################
                 CLOSE SESSION
#######################################################
*/
  app.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });

  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }
};