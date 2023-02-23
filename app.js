const express = require("express");

//instantiate
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
    res.send({ "data": birds});
});

app.get("/birds/:Id", (req, res) => {
    const id = req.params.Id;
    if (isNaN(id)) {
        return res.send(({message: "Id must be a number"}));
    }

    const bird = birds.find(bird => bird.id === parseInt(id));

    if(bird === undefined) {
        return res.send(({message: "Bird not found"}));
    }

    res.send({bird});
});

app.get("/birds/name/:Name", (req, res) => {
    const name = req.params.Name;
    const bird = birds.find(bird => bird.name === (name));
    res.send({ "data": bird});
});

app.post("/birds", (req, res) => {
    const lastId = birds[birds.length - 1].id;

    const newBird = {
        id: lastId + 1,
        name: req.body.name
    };

    birds.push(newBird);
    res.send({
        "message": "Bird added successfully",
        "data": birds});
});

app.patch("/birds/:Id", (req, res) => {
    const id = req.params.Id;

    if (isNaN(id)) {
        return res.send(({message: "Id must be a number"}));
    }

    const bird = birds.find(bird => bird.id === parseInt(id));
    if(bird === undefined) {
        return res.send(({message: "Bird not found"}));
    }

    bird.name = req.body.name;
    res.send({
        "message": "Bird updated successfully",
        "data": birds});
});

app.delete("/birds/:Id", (req, res) => {
    const id = req.params.Id;

    if (isNaN(id)) {
        return res.send(({message: "Id must be a number"}));
    }

    const bird = birds.find(bird => bird.id === parseInt(id));

    if(bird === undefined) {
        return res.send(({message: "Bird not found"}));
    }

    const index = birds.indexOf(bird);
    birds.splice(index, 1);
    res.send({
        "message": "Bird deleted successfully",
        "data": birds});
});


app.listen(8080, () => {
    console.log("Server is runnon on port", 8080);
});