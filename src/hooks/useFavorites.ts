import { useSelector } from "react-redux"

export const useFavorites = () => {
  const {favorites}:any = useSelector(state => state)
  return {favorites}
}