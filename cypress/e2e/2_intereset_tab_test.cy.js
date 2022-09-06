
import Common_Page_Object from '../support/Page_Object/Common_Page_Object';
import Interest_Page_Object from '../support/Page_Object/Interest_Page_Object';

const user = require('../fixtures/user.json');

describe('validate interest section',()=>{
     const common = new Common_Page_Object();
     const interest = new Interest_Page_Object();

    it('navigate to site',()=>{
        common.navigateUrl();
    })

    it('verify interest tab is selected',()=>{
       common.get_multi_tabs().each(($element)=>{
        let text = $element.text().replace("\n").trim();
         if(text.includes(user.common_data.interest)){
            common.get_multi_tabs().eq(1).click({force:true});
         }
       }) 
       cy.wait(4000);
       common.get_multi_tabs().eq(1).invoke('attr','class').should('eq','active');
    })

    it('verify i like XBOX options is selected',()=>{
        interest.get_radio_options().each(($element)=>{
            let radioOptionVal =  $element.text().replace("\n").trim();
            if(radioOptionVal.includes("I like XBOX")){
                interest.get_radio_options().eq(0).click({force:true});
            }
        })

        interest.get_profile_next_button().click({force:true});
    })
})