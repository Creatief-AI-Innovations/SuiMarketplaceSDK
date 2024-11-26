To run the project locally, follow these steps:

1. Install dependencies:
```
pnpm install
```

2. Run the client:
```
pnpm run client 
```


SuiMarketplaceSDK Documentation

This documentation provides an overview of how to use the SuiMarketplaceSDK instance created using the MarketplaceSDK from the @interverse/suisdk package.

Initialization
The marketplaceApi is initialized with the following configuration:

```
import MarketplaceSDK from '@interverse/suisdk';

export const marketplaceApi = new MarketplaceSDK({
  baseURL: 'https://e129-117-219-40-241.ngrok-free.app/api',
  apiKey: 'akesp8i-jk34lk-demo-823wry'
});
```
Usage
The marketplaceApi provides various methods to interact with the marketplace, including authentication, product management, and transactions.

Authentication

1. Login
```
const credentials = { username: 'user', password: 'pass' };
const authResponse = await marketplaceApi.auth.login(credentials);
console.log(authResponse.token);
```

2. Logout
```
marketplaceApi.auth.logout();
```

Product Management

1. Get All Products

```
const collectionId = 'your-collection-id';
const products = await marketplaceApi.products.getAllProducts(collectionId);
console.log(products);
```
2. Get Products Owned

```
const ownedProducts = await marketplaceApi.products.getOwned();
console.log(ownedProducts);
```
Transactions

1. Buy Product

```
const productId = 'product-id';
const transactionResult = await marketplaceApi.transactions.buyProduct(productId);
console.log(transactionResult);
```

2. Unlist Product

```
const productId = 'product-id';
const transactionResult = await marketplaceApi.transactions.unlistProduct(productId);
console.log(transactionResult);
```

3. List Product

```
const productId = 'product-id';
const price = 200;
const transactionResult = await marketplaceApi.transactions.listProduct(productId, price);
console.log(transactionResult);
```
Types

The suisdk package provides various types to ensure type safety:

Auth Types

```
import { LoginCredentials, AuthResponse } from '@interverse/suisdk';
```

Product Types
```
import { Product, ProductsResponse, TransactionResult } from '@interverse/suisdk';
```

Example
Here is a complete example of using the marketplaceApi:

```
import { marketplaceApi } from './path/to/marketplaceApi';

async function main() {
  // Login
  const credentials = { username: 'user', password: 'pass' };
  const authResponse = await marketplaceApi.auth.login(credentials);
  console.log('Logged in:', authResponse.token);

  // Get all products
  const collectionId = 'your-collection-id';
  const products = await marketplaceApi.products.getAllProducts(collectionId);
  console.log('All products:', products);

  // Buy a product
  const productId = 'product-id';
  const transactionResult = await marketplaceApi.transactions.buyProduct(productId);
  console.log('Transaction result:', transactionResult);

  // Logout
  marketplaceApi.auth.logout();
  console.log('Logged out');
}

main().catch(console.error);
```








