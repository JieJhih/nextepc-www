import React from 'react'
import styled, { css } from 'react-emotion'

import Github from './icons/github'

export default () => {
  return (
    <Footer>
      <Brand>NextEPC</Brand>
      <Notice>&copy; 2017, 2018  - Sukchan Lee, Jinyoung Park, and Jihoon Brandon Lee</Notice>
      <Notice><a href="mailto:brandon.jihoon@gmail.com">Contact Us</a></Notice>
      <BuiltWithLove />
    </Footer>
  )
}

const BuiltWithLove = () => (
  <Built>
    Built with <span>♥︎</span> and nextepc by <a href="https://github.com/acetcom">/<span>acetcom</span></a>, <a href="https://github.com/jyounggo">/<span>jyounggo</span></a>, and <a href="https://github.com/brandonjlee">/<span>brandonjlee</span></a>
  </Built>
)

const Footer = styled('footer')`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #272121;
  height: 120px;
  padding-top: 20px;
  > * {
    padding-left: 20px;    
  }
`

const Brand = styled('div')`
  color: #f63;
  font-size: 1.8em
`

const Notice = styled('div')`
  font-size: .8em;
  color: #564949;
  padding-bottom: 20px;
`

const Social = styled('div')`
  flex: 3;
  font-size: .8em;
  background-color: #131010;
  padding-top: 10px;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  
  a:hover svg {
    fill: #9a8888;
  }
`

const Built = styled('div')`
background-color: #131010;

padding: 10px 0;
align-self: stretch;
text-align: center;
font-size: .75em;

&, a, a:visited, a:hover {
  color: #564949;
  text-decoration: none;
}

span {
  font-weight: 600;
  color: #f63;    
}
`
