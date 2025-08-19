import React from 'react';
import { Link } from 'react-router-dom';

/** Truncate helper */
function truncate(text, len = 100) {
  if (!text) return '';
  return text.length > len ? `${text.slice(0, len - 1)}…` : text;
}

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe }) {
  /** Displays a recipe summary in a card. */
  const cover = recipe.images?.[0];
  return (
    <article className="card">
      <div className="card-image" aria-hidden="true">
        {cover ? (
          <img src={cover} alt="" />
        ) : (
          <div style={{ background: '#eef2f7', width: '100%', height: '100%' }} />
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <p className="card-desc">{truncate(recipe.description, 120)}</p>
        {recipe.tags?.length ? (
          <div className="chips">
            {recipe.tags.slice(0, 3).map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="card-actions">
        <Link className="link-btn" to={`/recipe/${recipe.id}`} aria-label={`View ${recipe.name}`}>
          View
        </Link>
      </div>
    </article>
  );
}
