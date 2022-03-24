const express = require("express");
const conexion = require("../config/conexion")
const config = require("../config/general")
const router = express.Router();
const moment = require('moment')

router.post(config.servidor + '/login', function (req, res) {
    const { usuario, clave } = req.body;
    const fe_ult_acceso = moment().format('YYYY-MM-DD HH:mm:ss')
    const sql = "select * from usuarios where txusuario ='" + usuario + "' and pwusuario = '" + clave + "'"
    const resp = conexion.query(sql1, function (err, rows) {
        if (!err) {
            if (rows.length > 0) {
                res.status(200).send(rows)
            } else {
                res.status(201).send("Usuario no encontrado")
            }
        } else {
            res.status(500).send("Error acceso " + err)
        }
    })
});
module.exports = router;
