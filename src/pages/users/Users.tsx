import { useState, useEffect } from 'react';
import './Users.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        Loading users...
      </div>
    );
  }

  return (
    <div className="users-container">
      <h1 className="users-title">
        Users Directory
      </h1>

      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-header">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>@{user.username}</p>
              </div>
            </div>

            <div className="user-details">
              <div className="user-detail-row">
                <span className="user-detail-label">Email:</span>
                <span className="user-detail-value">{user.email}</span>
              </div>

              <div className="user-detail-row">
                <span className="user-detail-label">City:</span>
                <span className="user-detail-value">{user.address.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;