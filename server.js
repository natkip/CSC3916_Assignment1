const express = require('express');
const app = express();
const PORT = 3220


app.use(express.json());
app.post('/echo', (req, res) => {
    const rd = req.body.message;
    if (!rd) {
        return res.status(400).json({ error: 'No message provided'});
    }
    res.json({ echoedMessage: rd});
});

app.listen(PORT, () => {
    console.log('Echo server is running on http://localhost:${PORT}');
});
