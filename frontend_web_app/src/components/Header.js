import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

// PUBLIC_INTERFACE
export default function Header() {
  /** Top navigation bar with brand and search input. */
  const { searchTerm, setSearchTerm } = useSearch();
  const [input, setInput] = useState(searchTerm || '');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setInput(searchTerm || '');
  }, [searchTerm]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input.trim());
    if (location.pathname !== '/') navigate('/');
  };

  const clear = () => {
    setInput('');
    setSearchTerm('');
    if (location.pathname !== '/') navigate('/');
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Recipe Explorer Home">
          <span className="brand-logo" />
          <span className="brand-title">Recipe Explorer</span>
        </Link>

        <form className="search-form" role="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            aria-label="Search recipes by name or ingredients"
            placeholder="Search recipes by name or ingredients..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="search-button" title="Search">
            Search
          </button>
          {input && (
            <button
              type="button"
              className="search-button"
              style={{ background: 'var(--accent)' }}
              onClick={clear}
              title="Clear"
            >
              Clear
            </button>
          )}
        </form>

        <nav className="nav" aria-label="Main Navigation">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
            style={{ background: 'var(--primary)' }}
          >
            Learn React
          </a>
        </nav>
      </div>
    </header>
  );
}
