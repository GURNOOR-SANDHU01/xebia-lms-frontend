/**
 * API Gateway pattern implementation.
 * Acts as the single entry point for all external HTTP requests.
 * Applies the Dependency Inversion Principle by abstracting away the concrete HTTP client (e.g., fetch/axios).
 */
export class ApiGateway {
  static async request(endpoint, options = {}) {
    // In the future, this will point to the Spring Boot backend
    const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      // Currently simulating network calls. In production, uncomment the fetch:
      // const response = await fetch(`${BASE_URL}${endpoint}`, config);
      // if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      // return await response.json();
      
      console.log(`[Mock API Gateway] ${options.method || 'GET'} ${BASE_URL}${endpoint}`);
      return { success: true, data: {} };
    } catch (error) {
      console.error('API Gateway Error:', error);
      throw error;
    }
  }

  static get(endpoint, headers = {}) {
    return this.request(endpoint, { method: 'GET', headers });
  }

  static post(endpoint, body, headers = {}) {
    return this.request(endpoint, { method: 'POST', body: JSON.stringify(body), headers });
  }
}
