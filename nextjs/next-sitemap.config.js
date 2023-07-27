const SITE_URL = process.env.SITE_URL || 'https://fellipe.com';
 
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
}