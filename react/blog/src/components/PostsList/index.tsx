import type { IPost } from '../../types'
import { Post } from '../Post'
import { Posts } from './styles'

interface PostListProps {
  posts: IPost[]
}

export function PostsList({ posts }: PostListProps) {
  return (
    <>
      <Posts>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            category={post.category}
            avatar={post.avatar}
            author={post.author}
            createdAt={post.createdAt}
            description={post.description}
          />
        ))}
      </Posts>
    </>
  )
}
