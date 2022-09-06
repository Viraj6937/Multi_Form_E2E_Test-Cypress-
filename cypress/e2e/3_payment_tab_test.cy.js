//const { defineConfig } = require("cypress");

import Common_Page_Object from '../support/Page_Object/Common_Page_Object';
import Payment_Page_Object from '../support/Page_Object/Payment_Page_Object';

const user = require('../fixtures/user.json');

describe('validate payment section',()=>{
    const common = new Common_Page_Object();
    const payment = new Payment_Page_Object();

    it('navigate to site url',()=>{
       common.navigateUrl();       
    })

    it('verify payment tab is selected',()=>{
        common.get_multi_tabs().each(($element)=>{
            let paymentTabVal = $element.text().replace("\n").trim();
             if(paymentTabVal.includes(user.common_data.payment)){
                common.get_multi_tabs().eq(2).click({force:true});
             }
        })
        common.get_multi_tabs().eq(2).invoke('attr','class').should('eq','active');
    })

    it('verify payment feedback displays thankyou for your money',()=>{
        payment.get_payment_feedback().then(($val)=>{
           let paymentFeedbackVal = $val.text().replace("\n").trim();
            if(paymentFeedbackVal.includes(user.payment_data.thankyou_payment_label)){
                expect(true).to.be.true;
            }
        })
        payment.get_payment_submit().click({force:true});
    })
})