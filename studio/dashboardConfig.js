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
                  buildHookId: '61895348a1a41c00b6c71ab4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wmewjmjw',
                  apiId: 'b5632069-a90b-45b9-a169-3f2e77f54b64'
                },
                {
                  buildHookId: '61895349aac44800992c15b7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t1pzeku2',
                  apiId: 'ebbc5dfd-a62e-4ed7-82ca-dd4b68ce7d48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laurapadilla/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t1pzeku2.netlify.app', category: 'apps'}
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
