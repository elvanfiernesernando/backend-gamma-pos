const { request, response } = require("express");
const db = require("../../../prisma/db");

// create product
const product_create = async (req = request, res = response) => {
    try {
        const { name, price, categories_id } = req.body;

        const createProduct = await db.products.create({
            data: {
                name: name,
                price: price,
                categories: {
                    connect: {
                        id: categories_id
                    }
                }
            },
            include: {
                categories: true
            }
        })

        return res.status(201).json({
            status: 201,
            message: "Created",
            data: createProduct
        })

    } catch (error) {
        console.error(error);
    }
}

module.exports = { product_create };