
import React from 'react'
import styled from 'emotion/react'

import Github from './icons/github'

export default ({ title, showHome = false, ...props }) => {
  return (
    <Nav {...props}>
      { title && <Title>NextEPC<Light>/{title}</Light></Title> }
      { showHome && <Item href="/">Home</Item>}
      <Item href="/guides">Guides</Item>
      <Item href="/docs">Docs</Item>
      <GithubLink href="https://github.com/acetcom/nextepc">
        <Github fill="#c0c0c0" width="25"/>
      </GithubLink>
    </Nav>
  )
}

const Nav = styled('nav')`
  min-height: 60px;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;  
  & > a {
    padding: 0 15px;
    color: #999;
    text-decoration: none;
  }
`

const Item = styled('a')`
  text-transform: uppercase;
  font-size: .8em;
  letter-spacing: .2em;
  
  :hover {
    color: #212121;
  }
`

const Title = styled('div')`
  font-size: 1.4em;
  padding-left: 20px;
  margin-right: auto;
  color: #212121;
  font-weight: 400;
`

const Light = styled('span')`
  font-weight: 100;
`

const GithubLink = styled('a')`
  &:hover svg {
    fill: #212121;
  }
`