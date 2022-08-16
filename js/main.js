/* Moralis init code */
const serverUrl = "https://mczld76x1lnp.usemoralis.com:2053/server";
const appId = "tq3TUnN7bIwEaAVKo4T555eQ9AngSOo9DZMn96un";
Moralis.start({ serverUrl, appId });

/* Authentication code for wallet connect button*/
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  //logout button script
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("connect-wallet").onclick = login;
  //TODO: add Logout button on the photo album page
  //document.getElementById("btn-logout").onclick = logOut;