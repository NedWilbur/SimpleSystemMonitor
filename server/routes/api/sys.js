import express from 'express';
import os from 'os';

const router = express.Router();

function GetData() {
    let systemData = {};

    systemData.hostname = os.hostname();
    systemData.uptime = os.uptime();
    systemData.arch = os.arch();
    systemData.cpus = os.cpus();
    systemData.platform = os.platform();
    systemData.freemem = os.freemem();
    systemData.totalmem = os.totalmem();
    systemData.osVersion = os.version();
    systemData.networkInterfaces = os.networkInterfaces();

    return systemData;
}

// GET Routes

// Return ALL
router.get('/', (req, res) => {
    return res.json(GetData());
});

// router.get('/platform', (req, res) => {
//     res.json(os.platform());
// });

// router.get('/arch', (req, res) => {
//     res.json(os.arch());
// });

// router.get('/uptime', (req, res) => {
//     const seconds = os.uptime();
//     const minutes = (seconds / 60).toFixed(2);
//     const hours = (minutes / 60).toFixed(2);
//     const days = (hours / 24).toFixed(2);

//     const uptime = {
//         seconds,
//         minutes,
//         hours,
//         days,
//     }

//     res.json(uptime);
// });

// router.get('/cpu', (req, res) => {
//     res.json(os.cpus());
// });

// router.get('/memory', (req, res) => {
//     const totalMem = os.totalmem();
//     const freeMem = os.freemem();
//     const usedMem = totalMem - freeMem;

//     const memory = {
//         totalMem,
//         freeMem,
//         usedMem
//     }

//     res.json(memory);
// });

export default router;