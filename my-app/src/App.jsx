import { useState } from 'react';
import InputForm from './components/InputForm';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserProfile(null);
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found. Please try another username.");
        }
        throw new Error("Something went wrong while fetching the profile.");
      }
      const data = await response.json();
      setUserProfile(data);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub Profile Finder</h1>
        <p>Search for any GitHub user to view their profile and stats</p>
      </header>

      <InputForm userName={userName} setUserName={setUserName} handleSubmit={handleSubmit} />

      {loading && (
        <div className="state-container">
          <div className="spinner"></div>
          <p>Fetching profile...</p>
        </div>
      )}

      {error && (
        <div className="state-container error-banner">
          <p>{errorMessage}</p>
        </div>
      )}

      {userProfile && (
        <div className="profile-card">
          <div className="profile-header">
            <img 
              className="avatar" 
              src={userProfile.avatar_url} 
              alt={`${userProfile.login}'s profile avatar`} 
            />
            <div className="profile-titles">
              <h2 className="full-name">{userProfile.name || userProfile.login}</h2>
              <span className="username">@{userProfile.login}</span>
            </div>
          </div>

          <p className="bio">{userProfile.bio || "No bio available."}</p>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">{userProfile.public_repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userProfile.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userProfile.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>

          <ul className="details-list">
            <li>
              <strong>Location:</strong> {userProfile.location || "Not specified"}
            </li>
            {userProfile.company && (
              <li>
                <strong>Company:</strong> {userProfile.company}
              </li>
            )}
            {userProfile.blog && (
              <li>
                <strong>Website:</strong>{" "}
                <a 
                  href={userProfile.blog.startsWith('http') ? userProfile.blog : `https://${userProfile.blog}`} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {userProfile.blog}
                </a>
              </li>
            )}
          </ul>

          <a 
            className="github-btn" 
            href={userProfile.html_url} 
            target="_blank" 
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;