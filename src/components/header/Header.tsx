import { useFavorites } from '../../hooks/useFavorites'
import styles from './header.module.css'
import { FaHeartCirclePlus } from "react-icons/fa6"

export default function Header() {
  const {favorites}:any = useFavorites()
  return(
      <header className={styles.header}>
      <FaHeartCirclePlus fontSize={20}/>
      <span>
        {favorites.length}
      </span>
      </header>
  )
}