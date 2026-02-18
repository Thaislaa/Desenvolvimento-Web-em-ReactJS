import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { posts } from '../../posts'
import { PostsList } from '../../components/PostsList'
import { Button, Description, Form, Input, Subtitle } from './styles'

export function Home() {
  const [filterText, setFilterText] = useState('')

  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterText(event.target.value.toLowerCase())
    console.log(`Texto do filtro: ${event.target.value}`)
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(filterText),
    )

    console.log('Posts filtrados:', filteredPosts)
  }

  return (
    <>
      <Header />

      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Filtrar posts por título"
          onChange={handleFilterChange}
        ></Input>
        <Button>Filtrar</Button>
      </Form>

      <main>
        <Subtitle>Posts Recentes</Subtitle>
        <Description>Escolhemos a dedo nossos artigos favoritos</Description>
        <PostsList posts={posts} />
      </main>

      <Footer />
    </>
  )
}
