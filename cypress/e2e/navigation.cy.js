context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('check navigation', () => {
    cy.contains('blog')
    cy.contains('projects')
    cy.contains('talks')
    cy.contains('about')
    cy.contains('interviews')
  })

  it('verify links have correct URLs with trailing slashes', () => {
    cy.contains('blog').should('have.attr', 'href', '/blog/')
    cy.contains('projects').should('have.attr', 'href', '/projects/')
    cy.contains('talks').should('have.attr', 'href', '/talks/')
    cy.contains('about').should('have.attr', 'href', '/about/')
    cy.contains('interviews').should('have.attr', 'href', '/interviews/')
  })

  it('verify blog article link functionality', () => {
    cy.contains('blog').click()

    cy.contains('Moving WordPress to Jekyll').click()

    cy.title().should('include', 'Moving WordPress to Jekyll')
    cy.location('pathname').should('include', '/blog/moving-wordpress-to-jekyll/')
  })

  it('navigate to homepage from logo', () => {
    cy.get('img[alt="logo - profile picture"]').click()

    cy.title().should('include', 'Davidson Fellipe')
    cy.location('pathname').should('eq', '/')
  })

  it('navigate to blog page and check the content', () => {
    cy.contains('blog').click()

    cy.title().should('include', 'Blog | Davidson Fellipe')
    cy.contains('Blog')
    cy.contains('in english')
    cy.contains('articles in portuguese')
    cy.location('pathname').should('include', 'blog')
  })

  it('navigate to projects page and check the content', () => {
    cy.contains('projects').click()

    cy.title().should('include', 'Projects | Davidson Fellipe')
    cy.contains('Projects')
    cy.location('pathname').should('include', 'projects')
  })

  it('navigate to talks page and check the content', () => {
    cy.contains('talks').click()

    cy.title().should('include', 'Talks | Davidson Fellipe')
    cy.contains('Talks')
    cy.location('pathname').should('include', 'talks')
  })

  it('navigate to interviews page and check the content', () => {
    cy.contains('interviews').click()

    cy.title().should('include', 'Interviews | Davidson Fellipe')
    cy.contains('Interviews')
    cy.location('pathname').should('include', 'interviews')
  })

  it('navigate to about page and check the content', () => {
    cy.contains('about').click()

    cy.title().should('include', 'About | Davidson Fellipe')
    cy.contains('About')
    cy.location('pathname').should('include', 'about')
  })
})
