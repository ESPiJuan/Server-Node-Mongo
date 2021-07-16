import Buy from "../models/Buy";


export const createBuy = async (req, res) => {
    const { user_id, comment, products } = req.body;
    const newBuy = new Buy({ user_id, comment, products });
    const BuySaved = await newBuy.save();
    res.status(201).json(BuySaved)
}
export const getBuys = async (req, res) => {
    const listBuys = await Buy.find({})
    res.status(200).json(listBuys)
}
export const getBuyByUserId = async (req, res) => {
    const BuyFinded = await Buy.find({"user_id": req.params.userId })

    res.status(200).json(BuyFinded)
}
export const updateBuyById = async (req, res) => {
    const updateBuy = await Buy.findOneAndUpdate(req.params.buyId, req.body,
        {
            new: true,
            useFindAndModify: false
        })

    res.status(204).json(updateBuy)
}
export const deleteBuyById = async (req, res) => {
    const deleteBuy = await Buy.findOneAndDelete(req.params.buyId)
    res.status(204).json(deleteBuy)
}