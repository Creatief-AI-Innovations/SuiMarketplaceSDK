import { APIClient } from '../utils/apiClient';
import { TokenStorage } from '../utils/tokenStorage';
import { LoginCredentials, AuthResponse } from '../types';

export class AuthAPI {
  constructor(private client: APIClient) {}

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    console.log('login credentials', credentials);
    const response = await this.client.post<AuthResponse>('/v1/login', credentials);
    console.log('login response', response);
    this.client.setToken(response.token);
    TokenStorage.saveToken(response.token);
    return response;
  }

  logout(): void {
    this.client.clearToken();
    TokenStorage.removeToken();
  }
}