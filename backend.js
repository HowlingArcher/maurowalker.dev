const express = require('express');
const app = express();
const port = 33353;

app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).render(__dirname + '/pages' + '/index.ejs', {
        title: 'Home', 
        iconLoc: '/images/mainIcon.png',
        desc: "The personal website of a 18 year old developer.", 
        url: 'https://maurowalker.dev/'
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));