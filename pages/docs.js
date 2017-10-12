
import React, { Component } from  'react'
import styled, { injectGlobal, hydrate } from 'react-emotion'
import Head from 'next/head'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import MainNavigation from '../components/navigation'
import Navigation from '../components/docs/navigation'
import Footer from '../components/footer'
import Code from '../components/code'
import withPageView from '../components/analytics'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const withDocs = withPostsFilterBy(inCategory('docs', { includeSubCategories: true }))

const Doc = withPost(withDocs( ( { post: current, posts } ) => {
  const post = current || posts[0]
  
  posts.sort((a, b) => a.data.order - b.data.order )

  injectGlobal`
    html, body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
      font-weight: 100;
    }

    a { 
      color: #666; 
      font-weight: 200;
      text-decoration-color: #ddd;
    }
  `

  return (
    <Main>
      <Head>
        <title>NextEPC | Docs | {post.data.title}</title>
      </Head>

      <MainNavigation showHome title="documentation" styles={{ width: `100vw` }}/>

      <Section>
        <Side>
          <Navigation docs={posts} post={post} />
        </Side>
        <Article>
          <Category>{post.data.category}</Category>
          <Title>{post.data.title}</Title>
          <Content
            {...post}
            renderers={{
              h2: MethodName,
              code: Code,
              p: Paragraph,
              pre: CodeBlock,
              ul: List
            }}
          />
        </Article>
      </Section>
      <Footer />
    </Main>
  )
}))

export default withPageView(Doc)

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  color: #666;
`

const Section = styled('section')`
  background: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

const Side = styled('side')`
  flex: 1;
  border-right: 1px solid #eee;
`

const Article = styled('article')`
  flex: 4;
  width: 1px; // freaking width to get the Article to not expand  
  padding: 60px 0 0 60px;
`

const Title = styled('h1')`
  font-size: 4em;
  font-weight: 100;
  margin-top: -15px;
  padding-bottom: 15px;
  border-bottom: 3px solid #f63;
`

const Category = styled('h2')`
  font-size: .8em;
  font-weight: 100;
  letter-spacing: .2em;
  color: #666;
  text-transform: uppercase;
`

const Paragraph = styled('p')`
  font-size: 1.3em;
  font-weight: 300;
  color: #444;
  letter-spacing: -0.05px;
  line-height: 1.5em;
  max-width: 750px;
  margin: 0;

  strong, b {
    font-weight: 600;
  }

  & code {
    font-size: 1em;
    display: inline-block;
    padding: 0 5px;
    background-color: #eee;
    vertical-align: bottom;
  }
`

const CodeBlock = styled('pre')`
  margin: 50px 0;
  font-size: 1.2em;
  padding: 5px 20px;
  background: #f2f2f2;
  & .hljs {
    background: #f2f2f2;
  }
`

const MethodName = styled('div')`
  font-size: 1.8em;
  line-height: 2em;
  font-weight: 600;
  color: #000;
  margin: 60px 0 0 -2px;

  > em {
    font-weight: 200;
    letter-spacing: -0.8px;
    padding: 0 4px;    
  }
`

const List = styled('ul')`  
  &, & li > p {
    font-size: 1.1em;
    line-height: 1.5em;
  }

  & code, & p code {
    font-size: 1em;
    display: inline-block;
    padding: 0 5px;
    background-color: #eee;
  }
  
`
