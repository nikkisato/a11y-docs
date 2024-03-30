import SearchIcon from '@mui/icons-material/Search'

import { useMenu } from '~/context/ContextMenu'

import { useScreenSize } from '../../context/ContextScreenSize'
import Bar from '../Bar/Bar'
import Item from '../Item/Item'
import SearchInput from '../SearchInput/SearchInput'
import styles from './Menu.module.css'

export default function Menu() {
  const { codes } = useMenu()

  const { isMobile } = useScreenSize()

  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      {isMobile == true && <SearchInput icon={<SearchIcon />} />}

      <Bar aria-label="Primary Navigation">
        {codes?.map((code) => {
          return (
            <Item key={code._id}>
              <a href={`/${code.slug.current}`}>{code.title}</a>
            </Item>
          )
        })}
      </Bar>
    </nav>
  )
}
