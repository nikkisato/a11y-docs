import { IconButton } from '../IconButton'
import Input from '../Input/Input'
import styles from './SearchInput.module.css'

interface Props {
  icon?: React.ReactNode
}

export default function SearchInput({ icon = false }: Props) {
  return (
    <form className={styles.container}>
      <Input
        label="Search"
        id="search"
        type="text"
        placeholder="Search"
        name="Search"
        className={styles.searchInput}
      />
      <IconButton
        type="button"
        icon={icon}
        iconRight={true}
        className={styles.searchButton}
      />
    </form>
  )
}
