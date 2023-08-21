import fs from 'fs'
import path from 'path'

/**
 * Path to the directory with the posts.
 * @constant {string}
 */
export const POSTS_PATH = path.join(process.cwd(), 'content')

/**
 * Retrieves a list of file paths for Markdown files within the POSTS_PATH directory.
 *
 * @constant {Array.<string>}
 */
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  /**
   * Filters out files that don't have a .md or .markdown extension.
   *
   * @param {string} path - A file path.
   * @returns {boolean} Whether the path has a .md or .markdown extension.
   */
  .filter(path => /\.md?$/.test(path))
