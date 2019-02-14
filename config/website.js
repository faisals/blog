module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Faisal Sajjad - abc', // Navigation and Site Title
  titleAlt: 'Faisal Sajjad - abc', // Title for JSONLD
  description: 'A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS Prismic.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://prismic.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LekoArts', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@safarnamay', // Twitter Username
  facebook: 'faisals', // Facebook Site Name
  googleAnalyticsID: 'UA-1231231212-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
