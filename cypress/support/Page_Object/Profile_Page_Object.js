
const user = require('../../fixtures/user.json');

export default class Profile_Page_Object{
    get_verify_meta_tag(){
        return cy.get('meta',{timeout:10000});
    }

    get_profile_name_field(){
        return cy.get(user.profile_element.profile_name_field,{timeout:10000});
    }

    get_profile_email_field(){
        return cy.get(user.profile_element.profile_email_field,{timeout:10000});
    }

    get_profile_next_section_button(){
        return cy.get(user.profile_element.profile_next_section_button,{timeout:10000});
    }

}