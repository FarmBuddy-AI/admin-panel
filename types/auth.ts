// types/auth.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin' | 'moderator'; // Add/remove roles as needed
    createdAt?: Date;
    updatedAt?: Date;
    // Add any additional user properties you need
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  // Optional: Add these types if needed
  export interface AuthResponse {
    user: User;
    token: string;
  }
  
  export interface RegisterCredentials extends LoginCredentials {
    name: string;
    confirmPassword: string;
  }
  
  export interface UpdateProfileDto {
    name?: string;
    email?: string;
    avatar?: string;
  }