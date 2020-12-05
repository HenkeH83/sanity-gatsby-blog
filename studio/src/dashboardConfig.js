export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcb251543cd178cf92cd3df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cxy5ikna',
                  apiId: '447d41b3-db2c-44f3-b2fe-b2b37f8a484b'
                },
                {
                  buildHookId: '5fcb251607edee932c4e88f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yxmd3tox',
                  apiId: '2e50add9-0843-4b1c-8f03-f3570423802a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HenkeH83/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yxmd3tox.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
