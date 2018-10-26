const block = document.getElementById('deviceready');
const companyId = 'staxter';
const transactionToken = 'TST-SWHBH';
const apiHost = 'https://gateway.test.idnow.de';
const showVideoOverviewCheck = false;
const showErrorSuccessScreen = true;
block.addEventListener('click', () => {
  if (cordova && cordova.plugins && cordova.plugins.IDnowPlugin) {
    console.log('can start IDnow');
    cordova.plugins.IDnowPlugin.startVideoIdent(
        companyId,
        transactionToken,
        apiHost,
        showVideoOverviewCheck,
        showErrorSuccessScreen,
        (message) => console.log('success', message),
        (message) => console.log('failure', message));
  }
});