import { ProductType } from "./types/product.types";
import ProductModel from "./product.schema";

export class ProductService {
    
    async create(data: ProductType) {
        const t = await ProductModel.create(data)
        
        return t
    }

    async listProducts() {
        const productList = await ProductModel.find()

        return productList
    }
}