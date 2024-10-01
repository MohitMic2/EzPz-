var fs = require('fs-extra');
var path = require('path');

async function copyFiles() {
    try {
        await fs.copy(path.join(__dirname, 'views'), path.join(__dirname, 'dist/views'));
        await fs.copy(path.join(__dirname, 'package.json'), path.join(__dirname, 'dist/package.json'));
        console.log('Templates and package.json copied successfully!');
    } catch (err) {
        console.error('Error copying files:', err);
    }
}

copyFiles();