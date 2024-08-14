const Checkout = require("../controller/checkout.controller");

const getAllCheckoutHandler = async (req, res) => {
    const bookCheckout = req.query.genre 
        try {
            let checkouts
            if (bookCheckout) {
                checkouts = await Checkout.find({ checkoutDate: bookCheckout });
            } else {
                checkouts = await Checkout.find({});
            }
            checkouts ? res.json(checkouts) : res.status(404).json({ message: 'No data found' });
        } catch (error) {
            console.log(error);
        }
    }


    module.exports = getAllCheckoutHandler;
