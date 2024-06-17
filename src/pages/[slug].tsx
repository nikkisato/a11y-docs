/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'

import CodeContainer from '~/components/CodeContainer/CodeContainer'
import { MenuContext } from '~/context/ContextMenu'
import Container from '~/layouts/Container/Container'

export default function CodePage() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <MenuContext.Consumer>
      {(context) => {
        const { codes } = context || {}

        const code = codes.filter((code) => {
          if (code.slug.current === slug) {
            return code
          } else {
            const newSlug = code.slug.current.replace(/-/g, ' ')
            if (newSlug === slug) {
              return code
            }
          }
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
