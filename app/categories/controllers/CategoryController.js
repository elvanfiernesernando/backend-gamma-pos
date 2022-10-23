const { request, response } = require("express");
const db = require("../../../prisma/db");

// create category
const category_create = async (req = request, res = response) => {
    try {
        const { name } = req.body;

        const createcategory = await db.categories.create({
            data: {
                name: name
            }
        })

        return res.status(201).json({
            status: 201,
            message: "Created",
            data: createcategory
        })
    } catch (error) {
        console.error(error)
    }

}

// get all categories
const category_all = async (req = request, res = response) => {
    try {
        const categoryData = await db.categories.findMany({
            include: {
                products: true
            }
        })

        return res.status(200).json({
            status: 200,
            message: "OK",
            data: categoryData
        })
    } catch (error) {
        console.error(error);
    }

}

// get category by id
const category_by_id = async (req = request, res = response) => {
    try {

        const id = parseInt(req.params.id);

        const categoryData = await db.categories.findUnique({
            where: {
                id: id
            },
            include: {
                products: true
            }
        })

        return res.status(200).json({
            status: 200,
            message: "OK",
            data: categoryData
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = { category_create, category_all, category_by_id };