import express from 'express';
import cors from 'cors';
import path from 'path';
import sysAPI from './routes/api/sys.js';


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// init body parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// enabled all CORS request
app.use(cors());

// create API route
app.use('/api/sys', sysAPI);

// set static folder
app.use(express.static(path.join(__dirname, 'server/public')));

// point all routes to client front end (built version)
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'server/public/index.html')));

// run server
app.listen(PORT, () => console.log(`Simple System Monitor running! localhost:${PORT}`));