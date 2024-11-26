import { APIClient } from './utils/apiClient';
import { AuthAPI } from './api/auth';
import { ProductsAPI } from './api/products';
import { TransactionsAPI } from './api/transactions';
import { TokenStorage } from './utils/tokenStorage';

export * from './types';

export interface MarketplaceSDKConfig {
  baseURL: string;
  apiKey: string;
}

export class MarketplaceSDK {
  private client: APIClient;
  public auth: AuthAPI;
  public products: ProductsAPI;
  public transactions: TransactionsAPI;

  constructor(config: MarketplaceSDKConfig) {
    this.client = new APIClient(config.baseURL, config.apiKey);
    
    // Restore token if it exists
    const savedToken = TokenStorage.getToken();
    if (savedToken) {
      this.client.setToken(savedToken);
    }

    this.auth = new AuthAPI(this.client);
    this.products = new ProductsAPI(this.client);
    this.transactions = new TransactionsAPI(this.client);
  }
}

// Default export
export default MarketplaceSDK;