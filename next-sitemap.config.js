require('dotenv').config()

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

if (!SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not defined. Please set it in your .env file.')
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
}