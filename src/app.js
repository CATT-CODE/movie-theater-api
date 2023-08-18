const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const showRouter = require('./routes/showRouter');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Movie Theather API');
});

app.use("/users", userRouter);
app.use("/shows", showRouter);

app.use('*', (req, res) => {
    res.status(404).send('Route not found');
 });

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ error: err });
});

module.exports = app; 