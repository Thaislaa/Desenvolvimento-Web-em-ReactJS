import type { ReactNode } from 'react'

export interface IPost {
  id: number
  title: string
  image: string
  category: string
  avatar: string
  author: string
  createdAt: string
  description: string
  children?: ReactNode
}
