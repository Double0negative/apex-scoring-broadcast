
const express = require('express')
const router = require("./routes/router");
const cors = require("cors");
const history = require('connect-history-api-fallback');
const app = express()
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

router(app);

process.on('uncaughtException', function (err) {
    console.log(err);
})

const staticFileMiddleware = express.static('dist');

app.use(staticFileMiddleware);

app.use(history({
    index: 'index.html'
}));

app.use(staticFileMiddleware);

app.listen(port, () => {
    console.log(`Your app is running at http://localhost:${port}`)
})
