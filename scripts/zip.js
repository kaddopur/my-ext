const AdmZip = require('adm-zip');

const zip = new AdmZip();
zip.addLocalFolder(`${process.cwd()}/build`);
zip.writeZip(`${process.cwd()}/bundle.zip`);
