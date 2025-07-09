import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ name }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">SWIFT</div>
      <div className="profile-info">
        <div className="profile-avatar-navbar">{name?.split(' ').map((n) => n[0]).join('').toUpperCase()}</div>
        <span>{name}</span>
        <button onClick={() => navigate('/profile')} className="profile-button">
          View Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
