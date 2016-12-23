export interface GithubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface GithubRepository {
  id: number
  name: string
  full_name: string
  owner: GithubUser
}

export interface GithubIssue {
  url: string
  repository_url: string
  id: number
  number: number
  title: string
  user: GithubUser
}
