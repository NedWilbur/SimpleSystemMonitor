import express from 'express';
import cors from 'cors';
import sysAPI from './routes/api/sys.js';

const app = express();
const PORT = process.env.PORT || 5000;

// init body parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// enabled all CORS request
app.use(cors());

// create members API route
app.use('/api/sys', sysAPI);

// handle production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('./public/'));

    // point all routes to client front end
    app.get(/.*/, (req, res) => res.sendFile('/public/index.html'));
}

app.listen(PORT, () => console.log(`Simple System Monitor running on port ${PORT}`));