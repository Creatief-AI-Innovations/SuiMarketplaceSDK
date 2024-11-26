import { APIClient } from '../utils/apiClient';
import { TransactionResult } from '../types';

export class TransactionsAPI {
  constructor(private client: APIClient) {}

  async buyProduct(productId: string): Promise<TransactionResult> {
    return this.client.post<TransactionResult>('/v1/market/product/buy', { pid: productId });
  }

  async unlistProduct(productId: string): Promise<TransactionResult> {
    return this.client.post<TransactionResult>('/v1/market/product/unlist', { pid: productId });
  }

  async listProduct(productId: string, price: number): Promise<TransactionResult> {
    return this.client.post<TransactionResult>('/v1/market/product/sell', { pid: productId, price });
  }
}