import axios, {AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders} from 'axios';

export class APIClient {
    private client: AxiosInstance;
    private token: string | null = null;
    private headers: AxiosRequestHeaders = {
        'Content-Type': 'application/json',
    } as AxiosRequestHeaders;

    constructor(baseURL: string, apiKey?: string) {

        if (apiKey) {
            this.headers['x-api-key'] = apiKey;
            this.headers['ngrok-skip-browser-warning'] = '69420';
        }

        this.client = axios.create({
            baseURL,
            headers: this.headers,
        });

        // Add request interceptor for JWT token
        this.client.interceptors.request.use((config) => {
            if (this.token && config.headers) {
                config.headers.Authorization = `Bearer ${this.token}`;
            }
            return config;
        });

    }

    setToken(token: string) {
        this.token = token;
    }

    clearToken() {
        this.token = null;
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        // add header 'ngrok-skip-browser-warning' : ''
        config = config || {};
        config.headers = config.headers || {};
        // @ts-ignore
        config.headers['ngrok-skip-browser-warning'] = '69420';

        // @ts-ignore
        const response = await this.client.get<T>(url, config);
        return response.data;
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        // add header 'ngrok-skip-browser-warning' : ''
        config = config || {};
        config.headers = config.headers || {};
        // @ts-ignore
        config.headers['ngrok-skip-browser-warning'] = '69420';

        // @ts-ignore
        const response = await this.client.post<T>(url, data, config);
        return response.data;
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        // @ts-ignore
        const response = await this.client.put<T>(url, data, config);
        return response.data;
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        // @ts-ignore
        const response = await this.client.delete<T>(url, config);
        return response.data;
    }
}