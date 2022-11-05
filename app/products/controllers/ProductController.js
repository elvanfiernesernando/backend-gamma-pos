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

// get all products
const product_all = async (req = request, res = response) => {
    try {
        const productsData = await db.products.findMany({
            include: {
                categories: true
            }, orderBy: {
                created_at: "desc"
            }
        })

        return res.status(200).json({
            status: 200,
            message: "OK",
            data: productsData
        })
    } catch (error) {
        console.error(error);
    }
}

// get product by id
const product_by_id = async (req = request, res = response) => {
    const id = req.params.id;

    const productData = await db.products.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    res.status(200).json({
        status: 200,
        message: "OK",
        data: productData
    })
}

// search products
const product_search = async (req = request, res = response) => {
    try {
        const query = req.query.q;

        const productsData = await db.products.findMany({
            where: {
                name: {
                    contains: query
                }
            }
        })

        return res.status(200).json({
            status: 200,
            message: "OK",
            data: productsData
        })

    } catch (error) {
        console.error(error)
    }
}

// update product
const product_update = async (req = request, res = response) => {

    try {
        const id = req.params.id;

        const name = req.body.name;
        const price = req.body.price;
        const categories_id = req.body.categories_id;

        const updateProduct = await db.products.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: name,
                price: price,
                categories_id: categories_id
            }
        })

        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        console.info(error)
    }

}

// delete product
const product_delete = async (req = request, res = response) => {
    try {
        const id = req.params.id;

        const deleteProduct = await db.products.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).json({
            status: 200,
            message: "OK",
        })
    } catch (error) {
        console.error(error);
    }

}

module.exports = { product_create, product_all, product_by_id, product_search, product_update, product_delete };