import express from 'express';
import os from 'os';
import si from 'systeminformation';
import osu from 'os-utils';

const router = express.Router();

// OS (https://nodejs.org/api/os.html)
router.get('/uptime', async (req, res) => {
    res.json(os.uptime());
});

// SYSTEMINFORMATION (https://www.npmjs.com/package/systeminformation)
router.get('/all', (req, res) => {
    si.getAllData()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/dynamic', (req, res) => {
    si.getDynamicData()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/mem', (req, res) => {
    si.mem()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/diskinfo', async (req, res) => {
    si.fsSize()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/os', async (req, res) => {
    si.osInfo()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/processes', async (req, res) => {
    si.processes()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

// OS-UTILS (https://github.com/oscmejia/os-utils)
router.get('/cpuusage', async (req, res) => {
    osu.cpuUsage(function (usage) {
        res.json(usage);
    });
});

export default router;