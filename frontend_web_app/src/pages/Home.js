import React, { useMemo } from 'react';
import recipes from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { useSearch } from '../context/SearchContext';
import { filterRecipes } from '../utils/search';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page: shows a grid of recipe cards filtered by global search term. */
  const { searchTerm } = useSearch();

  const filtered = useMemo(() => {
    return filterRecipes(recipes, searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Browse Recipes</h2>
        <span className="section-subtitle">
          {searchTerm ? `Showing ${filtered.length} results for "${searchTerm}"` : `${filtered.length} recipes`}
        </span>
      </div>
      <div className="grid">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
