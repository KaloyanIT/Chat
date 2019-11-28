/* eslint-disable no-process-env*/
import path from 'path';
let rootPath = path.normalize(path.join(__dirname, "/../../"));

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3001
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 3001
    }
}