const s2cBlock = document.getElementById('s2ccalls');
// Put your own token
const token = '';

// Put your user id
const userId = '';

// Put your login identifier
const loginIdentifier = '';

// Change for dev/prod mode
const isDebug = true;

s2cBlock.addEventListener('click', () => {
  if (cordova && cordova.plugins && cordova.plugins.S2CPlugin) {
    console.log('can start IDnow');
    cordova.plugins.S2CPlugin.getUserInfo(
        token,
        userId,
        loginIdentifier,
        isDebug,
        (response) => console.log('success', response),
        (message) => console.log('failure', message));
  }
});