const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const showRouter = require('./routes/showRouter');

app.use(express.json());


app.use("/users", userRouter);
app.use("/shows", showRouter);

app.use('/', (req, res) => {
    res.send('Movie Theather API');
});

module.exports = app; 