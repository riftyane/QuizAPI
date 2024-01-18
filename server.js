const express = require('express');
const cors = require('cors');
const app = express();
const port = 5050;
const quizRoute = require('./router/quiz')
const authRoute = require('./router/auth')
const jobsheetRoute = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req,res) => {
    res.send('Quiz ExpressJS API by Ersi');
});

app.use(authRoute)
app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));