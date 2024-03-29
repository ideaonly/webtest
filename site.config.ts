import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3f45c26baa5b4c6a8cd79f9405efad73',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '六点一刻钟',
  domain: 'https://www.notion.so/ideaonly/3f45c26baa5b4c6a8cd79f9405efad73',
  author: 'Jarvis',

  // open graph metadata (optional)
  description: '6-15 miaoshu',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'text',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  //navigationLinks: [
   // {
     // title: 'About',
     // pageId: 'd6bf6d082b734a1b9e6ae2755cfd5d94'
    //},
    //{
      //title: 'Contact',
      //pageId: '02c0e98551fd431d949061c81e0bff3d'
    //}
  //]
})
