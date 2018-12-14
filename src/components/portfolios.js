import React from 'react'
import styled from 'styled-components'
import FolioItem from '../components/folio-item'

const PortfolioContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 20px;
   @media(max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
   @media(max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const Portfolios = ({items}) =>  (
 <PortfolioContainer>
   {items.data.map(item => (
    <FolioItem 
        img={item.image}
        title={item.title}
        description={item.description}
        url={item.url}
    />
   ))}
   
 </PortfolioContainer>
)

export default Portfolios