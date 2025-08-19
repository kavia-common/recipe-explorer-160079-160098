import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

// PUBLIC_INTERFACE
export default function App() {
  /** Root component for the Recipe Explorer app.
   * Renders the header and route-based pages.
   * Routes:
   * - "/" -> Home (recipe grid + search)
   * - "/recipe/:id" -> Recipe detail (ingredients, steps, gallery)
   */
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h2>Page Not Found</h2>
                <p>We couldn't find what you were looking for.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Recipe Explorer</p>
      </footer>
    </div>
  );
}
