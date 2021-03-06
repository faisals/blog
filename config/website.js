module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Faisal Sajjad - Data Technologist based in San Francisco', // Navigation and Site Title
  titleAlt: 'Faisal Sajjad - Data Technologist based in San Francisco', // Title for JSONLD
  description: 'A blog about my journey working with various technologies.',
  headline: 'Writing and publishing content for www.faisals.net', // Headline for schema.org JSONLD
  url: 'https://www.faisals.net', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Faisals', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Faisal Sajjad', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@safarnamay', // Twitter Username
  facebook: 'faisals', // Facebook Site Name
  googleAnalyticsID: 'UA-134508503-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
