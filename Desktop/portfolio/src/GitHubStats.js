import { useState, useEffect } from 'react';

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/DootjeB88')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{padding: '20px', color: '#aaa'}}>Loading GitHub stats...</p>;

  return (
    <div className="github-stats">
      <h3>GitHub Stats</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{stats.public_repos}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>
  );
}

export default GitHubStats;