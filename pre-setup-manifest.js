const fs = require('fs');
const path = require('path');
const parser = require('xml2json');

const requiredPathToManifest = __dirname.split(path.sep);
const modifiedPathToManifest = path.join(...requiredPathToManifest);
const fullPath = `/${modifiedPathToManifest}/platforms/android/app/src/main/AndroidManifest.xml`;

fs.readFile(fullPath, 'utf-8', function(err, data) {
  const json = parser.toJson(data);
  let xmlObj;
  let backToJson;
  try {
    xmlObj = JSON.parse(json);
    xmlObj.manifest['xmlns:tools'] = 'http://schemas.android.com/tools';
    xmlObj.manifest['application']['tools:replace'] = 'android:icon';
  } catch(e) {console.log(e)}
  try {
    backToJson = JSON.stringify(xmlObj);
  } catch(e) {console.log(e)}

  const xml = parser.toXml(backToJson);
  fs.writeFile(fullPath, xml, function(err, data) {})
});