import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

import data from '../data/index.js';
import controllers from '../controllers/index.js';
import routers from '../routers/index.js';

module.exports = (app, config) => {

    app.set("views", path.join(config.rootPath, "src/views/"));
    app.set('view engine', 'pug')
    app.use("/public", express.static(path.join(config.rootPath, "public")));
    app.set("view options", { layout: false });


    const allDataObjects = data({});
    const controllersObjects = controllers(allDataObjects);
    const routersObjects = routers(app, controllersObjects);

}