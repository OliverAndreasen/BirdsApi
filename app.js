const express = require("express");
const app = express();

app.use(express.json());

const birds = [
    { id: 1, name: "Pigeon" },
    { id: 2, name: "Dove" },
    { id: 3, name: "Eagle" },
    { id: 4, name: "Owl" },
    { id: 5, name: "Parrot" },
    { id: 6, name: "Peacock" },
    { id: 7, name: "Kiwi" }
];

app.get("/", (req, res) => {
    res.send({message: "Welcome" });
});

app.get("/birds", (req, res) => {
    res.send({birds});
});

app.get("/birds/:Id", (req, res) => {
    const id = req.params.Id;
    const bird = birds.find(bird => bird.id === (id));
    res.send({bird});
});

app.get("/birds/name/:Name", (req, res) => {
    const name = req.params.Name;
    const bird = birds.find(bird => bird.name === (name));
    res.send({bird});
});


app.listen(8080);