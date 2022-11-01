const { request, response } = require("express");
const db = require("../../../prisma/db");


// create order
const order_create = async (req = request, res = response) => {
    try {

        // get request body
        const orderDetails = req.body.order_details;
        const total = req.body.total;
        const payment = req.body.payment;
        const changes = req.body.changes;

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
                total: total,
                payment: payment,
                changes: changes
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

// get all orders
const order_all = async (req = request, res = response) => {
    try {
        const ordersData = await db.orders.findMany({
            include: {
                order_details: {
                    select: {
                        price: true,
                        products: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        res.status(200).json({
            status: 200,
            message: "OK",
            data: ordersData
        })
    } catch (error) {
        console.error(error)
    }
}



module.exports = { order_create, order_all };