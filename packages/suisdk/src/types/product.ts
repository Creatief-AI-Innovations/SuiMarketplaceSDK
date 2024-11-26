
export interface Listing {
    id : string;
    price : number;
}

export interface Product {
    id: string;
    name: string;
    media_url: string;
    price: number;
    price_str: string;
    owned: boolean;
    attributes: Map<string, any>;
    listings: Listing[];
}

export interface ProductsResponse {
    success: boolean;
    data: Product[];
}

export interface TransactionResult {
    success: boolean;
    transactionId: string;
    message: string;
}