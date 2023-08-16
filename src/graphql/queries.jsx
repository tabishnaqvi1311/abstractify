export const findStory = /* GraphQL */ `
        query GetStory($id: ID!) {
            story(by: { id: $id }) {
                creator {
                    username
                }
                title
                content
                likes
                tags
                cooldown
                comments(first: 10) {
                    edges {
                        node {
                            author {
                                username
                            }
                            content
                        }
                    }
                }
                createdAt
            }
        }
        `

export const updateContent = /* GraphQL */ `
        mutation StoryUpdate($id: ID!, $content: String) {
            storyUpdate(by: { id: $id }, input: { content: $content }) {
                story {
                    content
                }
            }
        }
        `

export const createLike = /* GraphQL */`
        mutation LikeCreate($id: ID!, $count: Int) {
            likeCreate(input: { story: { link: $id }, count: $count}) {
                like {
                    count
                }
            }
        }
`

export const getExploreStories = /* GraphQL */`
        query StoryCollection {
            storyCollection(first: 10) {
                edges {
                    node {
                        id
                        title
                        content
                        slug
                        likes
                        tags
                    }
                }
            }
        }
`