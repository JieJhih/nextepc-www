
import React from 'react'
import styled, { css } from 'react-emotion'
import { inCategory } from 'nextein/posts'

export default ({ docs, post }) => {
  const nextepc = docs.filter(inCategory('docs/nextepc'))
  const build = docs.filter(inCategory('docs/build'))
  const tutorial = docs.filter(inCategory('docs/tutorial'))
  return (
    <Nav>
      {nextepc.length && <Separator>NextEPC</Separator>}
      {
        nextepc.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
          )
        })
      }
      {build.length && <Separator>Build</Separator>}
      {
        build.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
          )
        })
      }      
      {tutorial.length && <Separator>Tutorial</Separator>}
      {
        tutorial.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
          )
        })
      }      
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  align-install: center;
  align-items: stretch;
`

const Separator = styled('div')`
  padding: 7px 15px;
  border-left: 5px solid transparent;
  flex: 1;
  font-size: .8em;
  font-weight: 600;
  color: #212121;
  background: #eee;
  text-transform: uppercase;
`

const Item = styled('a')`
  padding: 10px 20px;
  text-decoration: none;
  color: #999;
  border-left: 5px solid transparent;
  flex: 1;
  
  &:hover {
    color: #212121;
    background-color: #f4f4f4;
    border-left: 5px solid #ccc;
  }

  &.active,
  &.active:hover {
    color: #212121;
    background-color: #e4e4e4;
    border-left: 5px solid #f63;    
  }
  
`
