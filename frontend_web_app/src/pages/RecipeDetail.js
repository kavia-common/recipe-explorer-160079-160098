import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';

// PUBLIC_INTERFACE
export default function RecipeDetail() {
  /** Recipe detail page: shows gallery, ingredients, and steps for the selected recipe. */
  const { id } = useParams();
  const recipe = useMemo(() => recipes.find((r) => String(r.id) === String(id)), [id]);
  const [current, setCurrent] = useState(recipe?.images?.[0] || '');

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link className="link-btn" to="/" style={{ background: 'var(--primary)' }}>
          Back to list
        </Link>
      </div>
    );
    }

  return (
    <div>
      <div className="detail-header">
        <Link className="link-btn" to="/" style={{ background: 'var(--primary)', width: 'fit-content' }}>
          ← Back
        </Link>
        <h1 className="detail-title">{recipe.name}</h1>
        <div className="detail-meta">
          {recipe.time && <span>⏱ {recipe.time}</span>}
          {recipe.servings && <span>🍽 Serves {recipe.servings}</span>}
          {recipe.tags?.length ? <span>🏷 {recipe.tags.join(', ')}</span> : null}
        </div>
      </div>

      <section className="gallery" aria-label="Recipe image gallery">
        <div className="gallery-main">
          {current ? (
            <img src={current} alt={`${recipe.name} image`} />
          ) : (
            <div style={{ background: '#eef2f7', width: '100%', height: 360 }} />
          )}
        </div>
        <div className="thumbs">
          {(recipe.images || []).map((src) => (
            <button
              key={src}
              className={`thumb ${src === current ? 'active' : ''}`}
              onClick={() => setCurrent(src)}
              aria-label="View image"
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </section>

      <div className="details-grid">
        <section className="panel" aria-labelledby="ingredients-title">
          <h3 id="ingredients-title">Ingredients</h3>
          <ul className="list">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </section>

        <section className="panel" aria-labelledby="steps-title">
          <h3 id="steps-title">Steps</h3>
          <div className="steps">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="step">
                <strong>Step {idx + 1}:</strong> {step}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
