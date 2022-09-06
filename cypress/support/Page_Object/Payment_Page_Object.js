
const user = require('../../fixtures/user.json');
export default class Payment_Page_Object{

    get_payment_feedback(){
        return cy.get(user.payment_element.payment_feedback,{timeout:10000});
    }

    get_payment_submit(){
        return cy.get(user.payment_element.payment_submit,{timeout:10000});
    }

}