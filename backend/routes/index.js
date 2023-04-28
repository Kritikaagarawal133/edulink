
const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
const answerRouter = require('./Answer');

// connection();

// app.use(express.json())
// app.use(cors());

router.get('/', (req, res) => {
    res.send("This api is reserved for Edulink ");
});

// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
router.use('/questions', questionRouter);
router.use('/answers', answerRouter);
// router.use('/auth', authRoutes);

// const port = process.env.PORT||80;
// app.listen(port,() => console.log('Listening on port ${port}...'));
module.exports = router;