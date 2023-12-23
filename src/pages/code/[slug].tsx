/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'

import CodeContainer from '~/components/CodeContainer/CodeContainer'
import Container from '~/components/Container/Container'
import { MenuContext } from '~/context/ContextMenu'

export default function CodePage() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <MenuContext.Consumer>
      {(context) => {
        const { codes } = context || {}

        const code = codes.filter((code) => {
          return code.slug.current === slug
        })

        return (
          <Container>
            <CodeContainer code={code} />
          </Container>
        )
      }}
    </MenuContext.Consumer>
  )
}
