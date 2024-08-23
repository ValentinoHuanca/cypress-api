describe('TS|Status',()=>{
    it('test Api Status',()=>{
        cy.api({
            method:'GET',
            url:'/',
            qs:{}
        }).then(response =>{
            const body = response.body
            expect(response).to.be.an('object')
            expect(response.status).to.eql(200)
            expect(body.message).to.include("Welcome to the Simple Books API.")
        })
    })
})