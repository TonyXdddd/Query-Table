import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface IPageLayout {
  children: ReactNode
}

export const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  const Page = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return <Page>{children}</Page>
}
