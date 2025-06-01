import { useState, useEffect } from 'react';
import type { User, CreateUserData } from './types/User';
import { UserService } from './services/UserService';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Alert from './components/Alert';
import './App.css';

interface AlertState {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load users on component mount
  useEffect(() => {
    setIsLoading(true);
    UserService.initializeData();
    setUsers(UserService.getAllUsers());
    setIsLoading(false);
  }, []);

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const showAlert = (type: AlertState['type'], message: string) => {
    setAlert({ type, message });
  };

  const handleCreateUser = (userData: CreateUserData) => {
    try {
      const newUser = UserService.createUser(userData);
      setUsers(UserService.getAllUsers());
      setShowForm(false);
      showAlert('success', `User "${newUser.name}" created successfully!`);
    } catch {
      showAlert('error', 'Failed to create user. Please try again.');
    }
  };

  const handleUpdateUser = (userData: CreateUserData) => {
    if (!editingUser) return;

    try {
      const updatedUser = UserService.updateUser({
        id: editingUser.id,
        ...userData
      });

      if (updatedUser) {
        setUsers(UserService.getAllUsers());
        setEditingUser(null);
        setShowForm(false);
        showAlert('success', `User "${updatedUser.name}" updated successfully!`);
      } else {
        showAlert('error', 'User not found.');
      }
    } catch {
      showAlert('error', 'Failed to update user. Please try again.');
    }
  };

  const handleDeleteUser = (id: number) => {
    try {
      const user = UserService.getUserById(id);
      const success = UserService.deleteUser(id);
      
      if (success) {
        setUsers(UserService.getAllUsers());
        showAlert('success', `User "${user?.name}" deleted successfully!`);
      } else {
        showAlert('error', 'User not found.');
      }
    } catch {
      showAlert('error', 'Failed to delete user. Please try again.');
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setEditingUser(null);
    setShowForm(false);
  };

  const handleAddNewUser = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  if (isLoading) {
    return (
      <div className="container-fluid py-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">CRUD</span>
      </div>
    </nav>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className='mr-2'>
              <h1 className="h2 mb-1">User Management System</h1>
              <p className="text-muted mb-0">Create, Read, Update, and Delete users</p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddNewUser}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Add New User
            </button>
          </div>

          {/* Alert */}
          {alert && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          )}

          {/* Form Modal */}
          {showForm && (
            <UserForm
              user={editingUser || undefined}
              onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
              onCancel={handleCancelForm}
            />
          )}

          {/* User List */}
          <UserList
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />

          {/* Stats */}
          <div className="mt-4">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{users.length}</h5>
                    <p className="card-text">Total Users</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      {new Set(users.map(u => u.department)).size}
                    </h5>
                    <p className="card-text">Departments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
