// stores/userStore.ts
import { makeAutoObservable, runInAction } from 'mobx';
import { User, LoginCredentials } from '../types/auth'; // Define your types

class UserStore {
  user: User | null = null;
  isAuthenticated = false;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Action to login
  async login(credentials: LoginCredentials) {
    this.isLoading = true;
    this.error = null;
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        runInAction(() => {
          this.user = data.user;
          this.isAuthenticated = true;
        });
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Login failed';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  // Action to logout
  logout() {
    this.user = null;
    this.isAuthenticated = false;
    // Add API call to invalidate token if needed
  }

  // Load user profile
  async loadProfile() {
    try {
      const response = await fetch('/api/auth/profile');
      const data = await response.json();
      
      if (response.ok) {
        runInAction(() => {
          this.user = data.user;
          this.isAuthenticated = true;
        });
      }
    } catch (error) {
      this.logout();
    }
  }

  // Computed property for user role
  get userRole() {
    return this.user?.role || 'guest';
  }
}

export default UserStore;