
const {booksList} = Cypress.env('endpoint')
const id = '1'
function randomNumInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

describe('Books',()=>{

        it('TC1|books List',()=>{
            
            cy.api({
                method:'GET',
                url:`/${booksList}`
            }).then(response =>{
                //const body = response.json
                const body_type = response.body[0].type
                expect(response.status).to.eql(200)
                console.log(body_type)
                const rang1=response.body.length
                Cypress.env('rang',rang1)
                expect(body_type).to.eql('fiction')
            })
        })
        it('TC2|books id',()=>{
            const rang = Cypress.env('rang')
            const booksRan=randomNumInt(1,rang)
            cy.api({
                method:'GET',
                url:`/${booksList}/`+`${booksRan}`
                //no se puede poner dos const Variable en un mismo conjunto de comillas, se puede usar
                //el simbolo "+" para unirlos
                
            }
            ).then(response =>{
                console.log(response)
                const name = response.body.name
                console.log(name)
                expect(name).to.be.an('string')
            })
        })
})