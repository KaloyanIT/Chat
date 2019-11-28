import 'dotenv/config';
import express from 'express';
import config from './src/config/config.js'
import expressConfig from './src/config/express.js';

let env = process.env.NODE_ENV || 'development';

let app = express();
let configuration = config[env];

expressConfig(app, configuration);

app.listen(configuration.port);

console.log(`Server running on http://localhost:${configuration.port}`);



