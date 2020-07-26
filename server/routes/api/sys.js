import express from 'express';
import os from 'os';
import si from 'systeminformation';
import osu from 'os-utils';

const router = express.Router();

// OS (https://nodejs.org/api/os.html)
router.get('/hostname', async (req, res) => {
    res.json(os.hostname());
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

router.get('/cpus', (req, res) => {
    res.json(os.cpus())
});

router.get('/mem', (req, res) => {
    si.mem()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/dynamicfast', async (req, res) => {
    res.json({
        "mem": await si.mem().catch(err => console.error(err)),
        "cpu": await si.currentLoad().catch(err => console.error(err)),
        // "processes": await si.processes().catch(err => console.error(err)), // Slow...
        // "services": await si.services().catch(err => console.error(err)), // Slow...
        "io": await si.diskLayout().catch(err => console.error(err)),
    });
});

router.get('/diskinfo', async (req, res) => {
    si.fsSize()
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