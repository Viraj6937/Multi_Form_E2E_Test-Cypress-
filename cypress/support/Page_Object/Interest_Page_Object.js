
const user = require('../../fixtures/user.json');

export default class Interest_Page_Object{
    get_radio_options(){
        return cy.get(user.interest_element.i_like_radio_options,{timeout:10000});
    }

    get_profile_next_button(){
        return cy.get(user.interest_element.profile_next_section_button,{timeout:10000});
    }

}