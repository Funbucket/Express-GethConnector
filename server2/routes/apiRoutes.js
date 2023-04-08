const express = require('express');
const router = express.Router();
const web3Controller = require('../controllers/web3Controller');

// 각각의 엔드포인트에 컨트롤러 연결
router.get('/accounts', web3Controller.getAccounts);
router.get('/gasprice', web3Controller.getGasPrice);
router.get('/getblock', web3Controller.getBlock);

// 라우터 모듈 내보내기
module.exports = router;
