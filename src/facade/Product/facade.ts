import { ProductService } from "../../services";
import { IProductFacade } from "./interface";


/**
 * @export
 * @implements {IProductModelService}
 */
const ProductFacade: IProductFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    async findAll(): Promise<any[]> {

        let Product = await ProductService.findAll();
        return Product;
    },

    async save(data:any): Promise<any[]> {
        let Product = await ProductService.save(data);
        return Product;
    }
}

export default ProductFacade;