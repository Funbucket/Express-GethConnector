const Web3 = require('web3');
const { HTTP_STATUS_CODES } = require('../constants');

// Web3 인스턴스 생성 함수
function getWeb3() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://168.188.129.230:8080'));
    return web3;
}

// 계좌 목록을 가져오는 컨트롤러 함수
exports.getAccounts = async (req, res, next) => {
    try {
        const accounts = await getWeb3().eth.getAccounts();
        res.send(accounts);
    } catch (e) {
        console.log(e);
        e.status = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
        next(e);
    }
};

// 가스 가격을 가져오는 컨트롤러 함수
exports.getGasPrice = async (req, res, next) => {
    try {
        const gasPrice = await getWeb3().eth.getGasPrice();
        res.send(gasPrice);
    } catch (e) {
        console.log(e);
        e.status = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
        next(e);
    }
};

// 최신 블록 정보를 가져오는 컨트롤러 함수
exports.getBlock = async (req, res, next) => {
    try {
        const getBlock = await getWeb3().eth.getBlock("latest");
        res.send(getBlock);
    } catch (e) {
        console.log(e);
        e.status = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
        next(e);
    }
};
