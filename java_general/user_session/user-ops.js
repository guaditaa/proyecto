import config from "./config.js";

Parse.initialize(config.PARSE_APP_ID, config.PARSE_JS_KEY)
Parse.serverURL = config.PARSE_SERVER_URL;


export function signUp({ username, password, email }) {
  var user = new Parse.User({ 
    username, 
    password, 
    email 
  });

  user.signUp().then(function (createdUser) {
    console.log(
      `User created with name: ${createdUser.get("username")} and email: ${createdUser.get("email")}`
    )
  }).catch(function (error) {
    console.error(error)
  })
}

export function logIn({ username, password }){
  Parse.User.logIn(username, password).then(function (user) {
    window.location.assign("/")
  }).catch(function (error) {
    console.error(error)
  })
}

export function resetPassword({ email }) {
  Parse.user.requestPasswordReset(email).then(function () {
    console.log("Se ha enviado una petición para restablecer contraseña")
  }).catch(function (error) {
    console.error(error)
  })
}

export function getUserData() {
  const user = Parse.User.current()?.toJSON();
  return user;
}

export function logout() {
  Parse.User.logOut().then(function () {
    window.location.assign("/welcome/");
  }).catch(function (error) {
    console.error(error)
  });
}