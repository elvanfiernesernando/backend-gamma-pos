const { request, response } = require("express");
const db = require("../../../prisma/db");


// create order
const order_create = async (req = request, res = response) => {
    try {

        // get request body
        const orderDetails = req.body.order_details;
        const total = req.body.total;

        // get current total order in db
        const ordersCount = await db.orders.count();

        // set invoice number from current total order
        const invoice_no = ordersCount ? ordersCount + 1 : 1;

        // store to db
        const createOrder = await db.orders.create({
            data: {
                invoice_no: `INV/GAMMA/${invoice_no}`,
                order_details: {
                    create: orderDetails
                },
                total: total
            },
            include: {
                order_details: true
            }
        });

        // return response
        return res.status(201).json({
            status: 201,
            message: "Created",
            data: createOrder
        })

    } catch (error) {
        console.error(error)
    }
}



module.exports = { order_create };