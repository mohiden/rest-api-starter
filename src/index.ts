import express, { Application } from 'express';
import { routing } from './routing';

const main = async (app: Application) => {

    // connect to db.

    app.listen(3000, () => {
        console.log("Running!");
    })

    routing(app);
}


main(express());