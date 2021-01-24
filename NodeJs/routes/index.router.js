const express = require('express');
const router = express.Router();

const userRoute = require('../routes/userRoutes');
const adminRoutes=require("../routes/admin");

router.post('/admin/login', adminRoutes.Login);
router.post('/admin/city', adminRoutes.createCity);
router.get('/admin/getOrigin', adminRoutes.getOrigin);
router.get('/admin/getDestination/:id', adminRoutes.getDestinations);
router.post('/admin/addflight', adminRoutes.createFlight);

router.post('/user/register', userRoute.register);
router.post('/user/login', userRoute.login);

module.exports = router;