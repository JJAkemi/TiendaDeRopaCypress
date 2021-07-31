// before(() => {
//     cy.visit('/')
// })
describe('Busqueda de elementos',()=>{

    beforeEach(() => {
        cy.visit('/')
    })
 
    it('Con resultados',()=>{
        cy.fixture('index').then((indexAlias)=>{
            cy.get(indexAlias.searchBox).type('dress');
             cy.get(indexAlias.searchButton).click();
        })
        cy.fixture('search').then((searchResultsAlias)=>{
            cy.get(searchResultsAlias.title).should('contain','dress');
        })
    })

    it('Sin resultados',()=>{
        cy.fixture('index').then((indexAlias)=>{
            cy.get(indexAlias.searchBox).type('qwerty');
             cy.get(indexAlias.searchButton).click();
        })
        cy.fixture('search').then((searchResultsAlias)=>{
            cy.get(searchResultsAlias.alert).should('contain','No results were found for your search');
        })       
    })
})