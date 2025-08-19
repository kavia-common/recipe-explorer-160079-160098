 // PUBLIC_INTERFACE
export function filterRecipes(recipes, term) {
  /** Filters recipes by name or ingredients.
   * - recipes: Array of recipe objects
   * - term: Search string
   * Returns a filtered array.
   */
  const q = (term || '').toLowerCase().trim();
  if (!q) return recipes;
  return recipes.filter((r) => {
    const nameHit = r.name?.toLowerCase().includes(q);
    const ingHit = (r.ingredients || []).some((i) => String(i).toLowerCase().includes(q));
    const tagHit = (r.tags || []).some((t) => String(t).toLowerCase().includes(q));
    return nameHit || ingHit || tagHit;
  });
}
