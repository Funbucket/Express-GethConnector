// 에러 처리 미들웨어 함수
module.exports = (err, req, res, next) => {
    console.error(err.stack);

    // HTTP 상태 코드와 에러 메시지를 JSON 형식으로 응답
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
};
