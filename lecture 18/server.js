const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


app.listen(port, () => console.log(`Server is running on ${port}`));