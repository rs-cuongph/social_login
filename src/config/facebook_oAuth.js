/* eslint-disable no-undef */
export const initFbsdk = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '407848664339386',
        xfbml: true,
        version: 'v12.0'
      })
      // FB.AppEvents.logPageView()
    };

    (function (d, s, id) {
      var js; var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  })
}
