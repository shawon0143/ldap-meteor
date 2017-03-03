import { Template } from 'meteor/templating';

import './body.html';



Template.body.events({

'submit #login-form': function (e) {
    e.preventDefault();
    var form = $(e.target);
    var username = $("#login-form-username").val();
    console.log(username);
    var password = $("#login-form-password").val();

    Meteor.loginWithLDAP(username, password,
        //{ dn: "uid=" + username + ",dc=Uni-Koblenz-Landau,dc=de" },
        { dn: "uid=" + username + ",ou=people,ou=koblenz,dc=Uni-Koblenz-landau,dc=de"},
        //uid=<Rechnerkennung>,ou=people,ou=koblenz,dc=Uni-Koblenz-landau,dc=de
        function (error, success) {
        if (error) {
            console.log(error.reason);
            console.log(error);
            $('#loginMsg').html('login error :'+error.reason);

        } else {
            //FlowRouter.redirect('/');
            console.log("miaww")
            console.log(success);
            $('#loginMsg').html('Welcome! Login successful');
        };
    });
    }

});
