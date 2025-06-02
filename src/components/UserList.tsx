import React from 'react';
import type { User } from '../types/User';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  const handleDelete = (user: User) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar a ${user.name}?`)) {
      onDelete(user.id);
    }
  };

  if (users.length === 0) {
    return (
      <div className="card">
        <div className="card-body text-center">
          <p className="text-muted mb-0">No se encontraron usuarios. ¡Agrega tu primer usuario!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Usuarios ({users.length})</h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Departamento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <div className="fw-semibold">{user.name}</div>
                  </td>
                  <td>
                    <a href={`mailto:${user.email}`} className="text-decoration-none">
                      {user.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${user.phone}`} className="text-decoration-none">
                      {user.phone}
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-secondary">{user.department}</span>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => onEdit(user)}
                        title="Editar usuario"
                      >
                        <i className="bi bi-pencil"></i>
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(user)}
                        title="Eliminar usuario"
                      >
                        <i className="bi bi-trash"></i>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
