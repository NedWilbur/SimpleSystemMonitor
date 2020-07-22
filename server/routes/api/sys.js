import express from 'express';
import si from 'systeminformation';

const router = express.Router();

// Return ALL
router.get('/', (req, res) => {
    si.getAllData()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/cpuspeeds', (req, res) => {
    si.cpuCurrentspeed()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/dynamic', (req, res) => {
    si.getDynamicData()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/cpus', (req, res) => {
    si.cpu()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});

router.get('/mem', (req, res) => {
    si.mem()
        .then(data => res.json(data))
        .catch(error => console.error(error));
});


export default router;