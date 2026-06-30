import { ApiGateway } from './apiGateway';

/**
 * Repository pattern implementation for Authentication.
 * This abstracts the data access layer, so components don't know WHERE the data comes from (API, localStorage, mock).
 */
export class AuthRepository {
  /**
   * Authenticates a user with the provided credentials.
   * @param {Object} credentials - The login credentials.
   * @returns {Promise<Object>} The authenticated user data.
   */
  static async login(credentials) {
    // Single Responsibility: Only handles login logic
    const response = await ApiGateway.post('/auth/login', credentials);
    
    // Simulate successful login response
    if (response.success) {
      return {
        user: { id: 1, role: credentials.portalId || 'learner', name: 'Test User' },
        token: 'mock-jwt-token'
      };
    }
    throw new Error('Invalid credentials');
  }

  static logout() {
    console.log('[AuthRepository] Logging out user');
    // Implement token removal
  }
}
