import express from 'express';
import sysAPI from './routes/api/sys.js';

const app = express();
const PORT = process.env.PORT || 5000;

// init body parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// create members API route
app.use('/api/sys', sysAPI);

app.listen(PORT, () => console.log(`Simple System Monitor running on port ${PORT}`));