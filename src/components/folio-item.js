import React from 'react'
import styled from 'styled-components'

//const img = require('../images/project-sunnahway.png')

const FolioContainer=styled.div`
  width: 270px;
  display: grid;
  grid-template-rows: 1fr 1fr 50px;
  position: relative;

  @media(max-width: 800px) {
      width: 300px;
  }
   @media(max-width: 640px) {
    grid-template-rows: 2fr 1fr 50px;
    width: 90%
  }

`
const FolioHeader=styled.div`
  width: 100%;
  border: 1px solid #ccc;
`
const FolioBody=styled.div`
  padding: 5px;
`

const FolioFooter=styled.div`
  padding: 5px;
`


const FolioItem = ({img,title,description,url}) => (
    <FolioContainer>
        <FolioHeader><a target="_blank" href={url}><img src={img} width="100%" /></a></FolioHeader>
        <FolioBody>
          <h4>{title}</h4>
          {description}
        </FolioBody>
        <FolioFooter><a class="btn btn-primary" target="_blank" href={url}>View Project</a></FolioFooter>
    </FolioContainer>
)

export default FolioItem