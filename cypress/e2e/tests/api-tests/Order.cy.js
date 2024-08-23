const {SubmitOrder} = Cypress.env('endpoint')
function randomNumInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
describe('',()=>{
    let bookId1 = randomNumInt(1,6)
    let nameCustomer = "johnSalchichon32"
    let orderIdCreate
    it('Submit and Order',()=>{
        cy.api({
            method:'POST',
            url:`/${SubmitOrder}`,
            headers:{
                authorization:Cypress.env('token')
            },
            //auth:{},
            body:{
                bookId:bookId1,
                customerName:nameCustomer
            },
            qs:{}
        }).then(response =>{
            console.log(response)
            const body = response.body
            expect(response.status).to.eql(201)
            expect(body.created).to.eql(true)
            expect(body.orderId).to.be.an('string')
            orderIdCreate=body.orderId
            console.log(orderIdCreate)
        })
        console.log(orderIdCreate)
    })
    it('Get all orders',()=>{
        cy.api({
            method:'GET',
            url:`/${SubmitOrder}`,
            headers:{
                authorization: Cypress.env('token')
            }
        }).then(response=>{
            //console.log(response)
            const body=response.body
            const rang=body.length
            //console.log(rang)
            const nunAle=randomNumInt(1,rang)
            const idOrder=response.body[nunAle].id
            Cypress.env('idOrder1',idOrder)
            expect(response.status).to.eql(200)
            expect(response).to.be.an('object')
        })
    })
    it('Get an order',()=>{
        const idOrder1 = Cypress.env('idOrder1')
        //cy.step(`${idOrder1}`)
        cy.api({
            method:'GET',
            url:`/${SubmitOrder}/`+`${idOrder1}`,
            headers:{
                authorization: Cypress.env('token')
            }
        }).then(response=>{
            //console.log(response)
            const body=response.body
            expect(body.bookId).to.be.an('number')
            const nameCus=body.customerName
            expect(nameCus).to.be.an('string')
        })
    })
    it('Update an order',()=>{
        const idOrder1 = Cypress.env('idOrder1')
        cy.api({
            method:'PATCH',
            url:`/${SubmitOrder}/`+`${idOrder1}`,
            headers:{
                authorization: Cypress.env('token')
            },
            body:{
                customerName:`${nameCustomer} Original no fake`
            }
        }).then(response=>{
            console.log(response)
            expect(response.status).to.eql(204)
        })
    })
    it('Delete an order',()=>{
        const idOrder1 = Cypress.env('idOrder1')
        cy.api({
            method:'DELETE',
            url:`/${SubmitOrder}/`+`${idOrder1}`,
            headers:{
                authorization: Cypress.env('token')
            }
        }).then(response=>{
            console.log(response)
            expect(response.status).to.eql(204)
        })
    })
})