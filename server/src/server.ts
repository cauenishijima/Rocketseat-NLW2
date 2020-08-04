import express from 'express';
const app = express();

app.get('/users', (request, response) => {
    return response.json({
        name: 'Cauê Nishijma',
        age: 33
    })
})

app.listen(3001, () => {
    console.log('Server running in port 3001')
})