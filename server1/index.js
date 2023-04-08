const express = require('express');
const app = express();
const port = 1234;

const apiRoutes = require('./routes/apiRoutes');
const errorController = require('./controllers/errorController');

// 라우터를 '/api' 엔드포인트에 연결
app.use('/api', apiRoutes);

// 에러 처리 미들웨어 추가
app.use(errorController);

app.listen(port, () => {
    console.log(`Server 1 is running on port ${port}`);
});