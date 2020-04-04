import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    // Entry point return configuration of API
    res.json({
        message: 'Welcome on SharePoint Proxy API Structure',
    })
});

export default router;