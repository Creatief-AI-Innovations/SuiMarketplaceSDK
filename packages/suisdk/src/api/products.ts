import {APIClient} from '../utils/apiClient';
import { Product, ProductsResponse } from '../types';
import {TokenStorage} from "../utils/tokenStorage";

export class ProductsAPI {
    constructor(private client: APIClient) {
    }

    async getAllProducts(collectionId: string): Promise<Product[]> {
        console.log('TokenStorage', TokenStorage.getToken())
        try {
            const productsResponse = await this.client.get<ProductsResponse>(`/v1/market/products?cid=${collectionId}`);
            console.log('productsResponse', productsResponse)
            return productsResponse.data;
        } catch (error: any) {
            console.error(`Error fetching token holders: ${error.message}`);
            return [];
        }
    }

    async getProductsByOwner(ownerId: string): Promise<Product[]> {
        return this.client.get<Product[]>(`/products/owner/${ownerId}`);
    }

    async getOwned(collectionId: string): Promise<Product[]> {
        const nftResponse = await this.client.get<ProductsResponse>(`/v1/user/product/owned?cid=${collectionId}`);
        console.log('nftResponse', nftResponse)
        return nftResponse.data;
    }

}