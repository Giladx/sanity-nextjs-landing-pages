export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61cd85c5c5975ed2a9717fa2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rd9kbovp',
                  apiId: '8bc8257f-e3b0-4928-8564-a7b2e53d03ef'
                },
                {
                  buildHookId: '61cd85c574273b69f79a7fb5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o8skmaxv',
                  apiId: 'e7f40559-9e19-4419-acb9-55ca3c18cdb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Giladx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o8skmaxv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
