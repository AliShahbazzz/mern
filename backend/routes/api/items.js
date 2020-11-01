const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
})

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(res.json({ created: true }))
})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;