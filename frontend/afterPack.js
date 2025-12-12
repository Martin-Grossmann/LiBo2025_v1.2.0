// afterPack.js
// Ce script est appelé par electron-builder après le packaging
// Il lance le script PowerShell pour copier node_modules

const { execSync } = require('child_process');
const path = require('path');

exports.default = async function(context) {
  const scriptPath = path.join(__dirname, 'postpack.ps1');
  try {
    execSync(`powershell -ExecutionPolicy Bypass -File "${scriptPath}"`, { stdio: 'inherit' });
    console.log('Copie node_modules terminée.');
  } catch (err) {
    console.error('Erreur lors de la copie node_modules:', err);
    throw err;
  }
};
