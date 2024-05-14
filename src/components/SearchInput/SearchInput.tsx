// src/components/SearchInput.tsx

import { IconButton } from '../IconButton'
import Input from '../Input/Input'
import styles from './SearchInput.module.css'

export interface Props {
  icon?: React.ReactNode
}

export default function SearchInput({ icon }: Props) {
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
      {icon && (
        <IconButton
          type="button"
          icon={icon}
          iconRight={true}
          className={styles.searchButton}
        />
      )}
    </form>
  )
}
