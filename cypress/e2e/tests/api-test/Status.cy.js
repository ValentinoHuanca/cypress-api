describe('',()=>{
    it('test Api Status',()=>{
        cy.api({
            method:'GET',
            url:'/',
            qs:{}
        }).then(response =>{
            expect(response).to.be.an('object')
            expect(response.status).to.eql(200)
        })
    })
})