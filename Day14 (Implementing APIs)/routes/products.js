const express = require('express');
const products = require('../models/products');
const { Op } = require('sequelize');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = req.query;
        const count = parseInt(query.count) || 10;
        const page = parseInt(query.page) || 1;
        const after = parseInt(query.after);
        let sql = {};
        if (after) {
            sql = {
                where : {
                    id : {
                        [Op.gt] : after
                    }
                }
            }
        } else {
            sql = {
                offset: count * [page-1]
            }
        }
        const productsFromdb = await products.findAll({
            ...sql,
            attributes: ["id", "title", "price", "description", "image"],
            limit: count
        });
        console.log("")
        console.log(productsFromdb)
        console.log("")
        res.status(200).send({
            count: productsFromdb.length,
            items: productsFromdb 
        })
    } catch(err) {
        console.error(err);
        res.status(500).send({
            error: err,
            message: "could not process your request" 
        })
    }
})

module.exports = router;
