const express = require('express');
const router = express.Router();
const livrosController = require('./../controllers/livrosControler');


router.get('/', livrosController.getLivros);
router.get('/:id', livrosController.getLivro);
router.post('/', livrosController.createLivro);
router.put('/:id', livrosController.updateLivro);
router.delete('/:id', livrosController.removeLivro);

module.exports = router;