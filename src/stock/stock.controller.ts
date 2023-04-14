import {Request, Response} from 'express'
import { StockService } from './stock.service'

class ProductController {
    async stock(req: Request, res: Response) {
        const stock = await new StockService().getStock()

        return res.status(200).json(stock)
    }
}

export default new ProductController()