import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import Routes from './Routes/web';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes)
app.listen(5000, () => {
    console.log('server start')
})