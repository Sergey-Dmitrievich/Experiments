
import styles from './recipeItem.module.css'

import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
export default function ResipeItem({ recipe }:any) {

  const {favorites}:any = useFavorites()

  const {toggleFavorites} = useActions()

  const isExists = favorites.some
  (r  => r.id === recipe.id)

  return(
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() =>
        toggleFavorites(recipe)}>
          {isExists? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  )
}
