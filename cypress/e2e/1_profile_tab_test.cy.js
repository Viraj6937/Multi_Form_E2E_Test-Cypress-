
import Profile_Page_Object from "../support/Page_Object/Profile_Page_Object";
import Common_Page_Object from "../support/Page_Object/Common_Page_Object";


const user = require('../fixtures/user.json');

describe('validate profile section', () => {

  const profile = new Profile_Page_Object();
  const common = new Common_Page_Object();

  it('verify site url is been navigated', () => {
      common.navigateUrl();
  })

  it('verify meta tag attribute charset should be set to utf-8',()=>{
      profile.get_verify_meta_tag().invoke('attr',user.profile_data.meta_charset).should('eq',user.profile_data.meta_utf_8);
  })

  it('verify profile tab is enabled',()=>{
      common.get_multi_tabs().eq(0).invoke('attr','class').should('eq','active');
  })

  it('verify profile form is filled',()=>{
      profile.get_profile_name_field().type(user.profile_data.name);
      profile.get_profile_email_field().type(user.profile_data.email);
      profile.get_profile_next_section_button().click({force:true});
  })

})