context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')
  })

  it('check navigation', () => {
    cy.contains('blog')
    cy.contains('projects')
    cy.contains('talks')
    cy.contains('about')
    cy.contains('interviews')
  })

  it('navigate to blog page and check the content', () => {
    cy.contains('blog').click()

    cy.title().should('include', 'Blog | Davidson Fellipe')
    cy.contains('Blog')
    cy.contains('Conference Reports')
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
