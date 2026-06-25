export interface Inquiry {
  id: string
  name: string
  email: string
  service: string
  description: string
  start_date: string
  budget: string
  status: 'pending' | 'in_progress' | 'completed'
  created_at: string
}

export interface Message {
  id: string
  name: string
  email: string
  message: string
  read: boolean
  created_at: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'web_app' | 'landing_page' | 'design'
  tech_stack: string[]
  github_url: string
  live_url: string
  thumbnail_color: string
  thumbnail_url?: string
  featured: boolean
  created_at: string
}

export interface Service {
  title: string
  description: string
  price: string
  delivery: string
  tag: string
  gradient: string
}

export interface NavLink {
  label: string
  href: string
}
