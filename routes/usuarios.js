const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');


const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPatch);

router.put('/', usuariosPut );

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);



module.exports = router;