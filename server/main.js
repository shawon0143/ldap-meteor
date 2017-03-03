import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  LDAP_DEFAULTS.url = 'ldap://ldap.uni-koblenz.de';
  //LDAP_DEFAULTS.dn = 'ou=<foo>,dc=<bar>,dc=<baz>,dc=<qux>';
  LDAP_DEFAULTS.dn = 'dc=<Uni-Koblenz-Landau>,dc=<de>';

  LDAP_DEFAULTS.port = '389';
  LDAP_DEFAULTS.createNewUser = true;
  Accounts.config({
    forbidClientAccountCreation: false
  });
});
