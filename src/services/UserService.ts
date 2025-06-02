import type { User, CreateUserData, UpdateUserData } from '../types/User';

const STORAGE_KEY = 'crud_users';

export class UserService {
  private static getUsers(): User[] {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  }

  private static saveUsers(users: User[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  private static generateId(): number {
    const users = this.getUsers();
    return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  }

  static getAllUsers(): User[] {
    return this.getUsers();
  }

  static getUserById(id: number): User | undefined {
    return this.getUsers().find(user => user.id === id);
  }

  static createUser(userData: CreateUserData): User {
    const users = this.getUsers();
    const newUser: User = {
      id: this.generateId(),
      ...userData
    };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  static updateUser(userData: UpdateUserData): User | null {
    const users = this.getUsers();
    const index = users.findIndex(user => user.id === userData.id);
    
    if (index === -1) {
      return null;
    }

    users[index] = { ...userData };
    this.saveUsers(users);
    return users[index];
  }

  static deleteUser(id: number): boolean {
    const users = this.getUsers();
    const index = users.findIndex(user => user.id === id);
    
    if (index === -1) {
      return false;
    }

    users.splice(index, 1);
    this.saveUsers(users);
    return true;
  }

  static initializeData(): void {
    const users = this.getUsers();
    if (users.length === 0) {
      const sampleUsers: CreateUserData[] = [
        {
          name: 'Juan Pérez',
          email: 'juan.perez@ejemplo.com',
          phone: '+1-555-0123',
          department: 'Ingeniería'
        },
        {
          name: 'María García',
          email: 'maria.garcia@ejemplo.com',
          phone: '+1-555-0124',
          department: 'Marketing'
        },
        {
          name: 'Carlos López',
          email: 'carlos.lopez@ejemplo.com',
          phone: '+1-555-0125',
          department: 'Ventas'
        },
        {
          name: 'Ana Rodríguez',
          email: 'ana.rodriguez@ejemplo.com',
          phone: '+1-555-0126',
          department: 'Recursos Humanos'
        }
      ];

      sampleUsers.forEach(userData => this.createUser(userData));
    }
  }
}
