import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  if (!user) return <div className="container">Loading...</div>;

  return (
    <div>
      <header className="header">
        <span className="logo">SWIFT</span>
        <div className='navbar'>
          <div className="profile-avatar-navbar">
            {user.name?.split(' ').map((n) => n[0]).join('').toUpperCase()}
          </div>
          <span>{user.name}</span>
        </div>
      </header>

      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>← Welcome, {user.name}</button>

        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-avatar-big">
              {user.name?.split(' ').map((n) => n[0]).join('').toUpperCase()}
            </div>
            <div className="profile-name-email">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-row">
              <div className="profile-field">
                <label>User ID</label>
                <input value={user.id} readOnly />
              </div>
              <div className="profile-field">
                <label>Name</label>
                <input value={user.name} readOnly />
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-field">
                <label>Email ID</label>
                <input value={user.email} readOnly />
              </div>
              <div className="profile-field">
                <label>Address</label>
                <input value={`${user.address.street}, ${user.address.city}`} readOnly />
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-field">
                <label>Phone</label>
                <input value={user.phone} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
