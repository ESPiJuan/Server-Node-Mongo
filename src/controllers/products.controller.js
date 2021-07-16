import Product from "../models/Product";


export const createProduct = async (req, res) => {
    const { name, category, price, stock, imgURL, prueba } = req.body;
    const newProduct = new Product({ name, category, price, stock, imgURL, prueba });
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved)
}
export const getProducts = async (req, res) => {
    const listProducts = await Product.find({})
    res.status(200).json(listProducts)
}
export const getProductById = async (req, res) => {
    const productFinded = await Product.findById(req.params.productId)

    res.status(200).json(productFinded)
}
export const updateProductById = async (req, res) => {
    const updateProduct = await Product.findOneAndUpdate(req.params.productId, req.body,
        {
            new: true,
            useFindAndModify: false
        })

    res.status(204).json(updateProduct)
}
export const deleteProductById = async (req, res) => {
    const deleteProduct = await Product.findOneAndDelete(req.params.productId)
    res.status(204).json(deleteProduct)
}