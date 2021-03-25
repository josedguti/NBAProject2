var passport = require('passport');

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user.id);
})

passport.use(new GoogleStrategy({
    clientID:     '506274952442-ko3875bg008klu1k1i36ljpeohvjhigu.apps.googleusercontent.com',
    clientSecret: 'deBoz43G8zW3i0Jf5DLmrPO2',
    callbackURL: "https://nba-project-app.herokuapp.com/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // register user here.
    console.log(profile);
    done(null, profile)
  }
));