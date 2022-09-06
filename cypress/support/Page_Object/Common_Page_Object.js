
const user = require('../../fixtures/user.json');
export default class Common_Page_Object{

    navigateUrl(){
        cy.visit(user.url.site_url_1);        
    }

    get_multi_tabs(){
        return cy.get(user.common_element.tabs,{timeout:10000});
    }
}