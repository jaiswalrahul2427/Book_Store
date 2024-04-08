import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get('/api/jokes', (req, res) => {
    const jokes = [{
            id: 1,
            title: 'Anonymous ',
            content: "Why don't skeletons fight each other? They don't have the guts"
        },
        {
            id: 2,
            title: 'Unknown ',
            content: "I told my computer I needed a break. Now it won't stop sending me vacation ads!"
        },
        {
            id: 3,
            title: 'Adam ',
            content: "Why don't scientists trust atoms? Because they make up everything! "
        },
        {
            id: 4,
            title: ' Isaac Newton ',
            content: "I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
            id: 5,
            title: 'Euclid',
            content: "Parallel lines have so much in common. It's a shame they'll never meet! "
        }

    ]
    res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`);
})