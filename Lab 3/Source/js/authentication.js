//Google Sign In Methods

var newWindow = null;

$(document).ready(function(){
    var googleUser = sessionStorage.getItem('googleUser');
    var fbUser = sessionStorage.getItem('fbUser');
    if (googleUser)
    {
        updateUIForGoogleLoggedInUser(JSON.parse(googleUser));
    }
    else
    {
        resetGoogleUIForLoggedOutUser();
    }
    if (fbUser)
    {
        updateUIForFbLoggedInUser(JSON.parse(fbUser));
    }
    else
    {
        resetFbUIForLoggedOutUser();
    }
    enableHomeButton();
});

function enableHomeButton() {
    var googleUser = sessionStorage.getItem('googleUser');
    var fbUser = sessionStorage.getItem('fbUser');

    if (googleUser || fbUser) {
        $('#homeBtn').show();
    } else {
        $('#homeBtn').hide();
    }
}

function updateUIForGoogleLoggedInUser (googleUser) {
    $('#googleUserImageTxt').show();
    $('#googleUserNameTxt').show();
    $('#lblGoogleName').show();
    $('#googleUserImage').show();
    $('#googleLogOutBtn').show();
    $('#googleLoginBtn').hide();

    $('#lblGoogleName').text(googleUser.name);
    $('#lblGoogleEmail').text(googleUser.email);
    var googleImageElement = $('#googleUserImage');
    googleImageElement.attr('src', googleUser.imageURL ? googleUser.imageURL : '');
    googleImageElement.width(200);
    googleImageElement.height(200);
}

function resetGoogleUIForLoggedOutUser() {
    $('#googleLoginBtn').show();
    $('#googleUserImageTxt').hide();
    $('#googleUserNameTxt').hide();
    $('#lblGoogleName').hide();
    $('#googleUserImage').hide();
    $('#googleLogOutBtn').hide();
    sessionStorage.removeItem('googleUser');
    enableHomeButton();
}


function googleOnSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var user = {};
    user.id = profile.getId();
    user.email = profile.getEmail();
    user.name = profile.getName();
    user.imageURL = profile.getImageUrl();

    //Save the user identity in sessionStorage.
    sessionStorage.setItem('googleUser',JSON.stringify(user));

    updateUIForGoogleLoggedInUser(user);
    $('#homeBtn').show();
}

function googleSignOut() {

    newWindow = window.open('https://mail.google.com/mail/u/0/?logout&hl=en','Google Logout','height=500,width=450');
    setTimeout(function() { newWindow.close() }, 2000);
    sessionStorage.removeItem('googleUser');
    resetGoogleUIForLoggedOutUser();
}

// FACEBOOK LOGIN

function onFacebookLogin() {
    FB.api('/me/picture?width=200&height=200', function (response) {
        if (!response.error) {
            var url = response ? (response.hasOwnProperty('data') ? (response.data.hasOwnProperty('url') ? response.data.url : '') : '') : '';
            $('#fbUserImage').show();
            $('#fbUserImage').attr('src', url);

            var user = JSON.parse(sessionStorage.getItem('fbUser'));
            if (!user) {
                user = {};
            }
            if (url.length > 0) {
                user.imageURL = url;
                sessionStorage.setItem('fbUser', JSON.stringify(user));
            }
        }
    });
    FB.api('/me?fields=name', function (response) {
        if (!response.error) {
            var name = response ? response.hasOwnProperty('name') ? response.name : '' : '';
            $('#lblFbName').text(name);

            var user = JSON.parse(sessionStorage.getItem('fbUser'));
            if (!user) {
                user = {};
            }
            if (name.length > 0) {
                user.name = name;
                sessionStorage.setItem('fbUser', JSON.stringify(user));
            }
        }
    });
    $('#homeBtn').show();
}

function updateUIForFbLoggedInUser (fbUser) {
    $('#fbUserImageTxt').show();
    $('#fbUserNameTxt').show();
    $('#lblFbName').show();
    $('#fbUserImage').show();

    $('#lblFbName').text(fbUser.name);
    var googleImageElement = $('#fbUserImage');
    googleImageElement.attr('src', fbUser.imageURL ? fbUser.imageURL : '');
    googleImageElement.width(200);
    googleImageElement.height(200);
}

function resetFbUIForLoggedOutUser() {
    $('#fbUserImageTxt').hide();
    $('#fbUserNameTxt').hide();
    $('#lblFbName').hide();
    $('#fbUserImage').hide();
    sessionStorage.removeItem('fbUser');
    enableHomeButton();
}

function auth_status_change_callback(response) {
    console.log("auth_status_change_callback: " + response.status);
    if (response.status == 'unknown') {
        resetFbUIForLoggedOutUser();
    }
    else if (response.status == 'connected') {
        onFacebookLogin();
    }
}

function homeClicked() {
    window.location.href = "home.html";
}