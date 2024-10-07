const TodoModel = require('../models/models');

// Get all ToDos
module.exports.getToDos = async (req, res) => {
    try {
        const toDos = await TodoModel.find();
        res.status(200).send(toDos);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch ToDos' });
        console.log(err);
    }
};

// Save a new ToDo
module.exports.saveTodo = (req, res) => {
    const { toDos } = req.body; // Ensure to use `toDos` as defined in the schema

    if (!toDos) {
        return res.status(400).send({ error: 'toDos field is required' });
    }

    TodoModel.create({ toDos })
        .then(data => {
            console.log('Saved successfully');
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ error: 'Failed to save ToDo' });
            console.log(err);
        });
};
// Update
module.exports.updateTodo = (req, res) => {
    const { id } = req.params; // Get the ID from the URL
    const { toDos } = req.body; // Ensure to use `toDos` to match schema

    if (!toDos) {
        return res.status(400).send({ error: 'toDos field is required' });
    }

    TodoModel.findByIdAndUpdate(id, { toDos }, { new: true, runValidators: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({ error: 'ToDo not found' });
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ error: 'Failed to update ToDo' });
            console.log(err);
        });
};
