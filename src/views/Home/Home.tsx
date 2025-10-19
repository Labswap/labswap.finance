import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@labswap/uikit'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`
const Home: React.FC = () => {
  return (
    <>
      <Page>
          <Cards>
            <FarmStakingCard />
            <EarnAPRCard />
          </Cards>
          <CakeStats />
      </Page>
    </>
  )
}

export default Home
