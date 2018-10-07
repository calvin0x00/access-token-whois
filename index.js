const fetch = require('node-fetch');
var util = require('util');

var wellKnownTokens = [
	{
		issuer: 'facebook', type: 'user',
		re: /^((EAAGBVsxNIksBA)[a-zA-Z0-9]{203})$/,
		profileUrl: 'https://graph.facebook.com/me?access_token=%s',
		profileErrorKey: 'error',
	},
	{
		issuer: 'facebook', type: 'app',
		re: /^[0-9]{15}\|[0-9a-z-A-Z]{27}$/,
		profileUrl: 'https://graph.facebook.com/me?access_token=%s',
		profileErrorKey: 'error',
	},
	{
		issuer: 'google', type: undefined,
		re: /^ya29.Glsv[0-9a-zA-Z_-]{120}$/,
		profileUrl: 'https://www.googleapis.com/oauth2/v2/tokeninfo?access_token=%s',
		profileErrorKey: 'error_description',
	},
]


async function fetchProfileInfo(wellKnownToken, accessToken){
  return new Promise((resolve, reject) => {
  	let issuerUrl = util.format(wellKnownToken['profileUrl'], accessToken);
	  fetch(issuerUrl, { 
	      method: 'GET',
	      headers: { 'Content-Type': 'application/json' },
	  })
	  .then(res => res.text())
	  .then(body => {
	    let json = JSON.parse(body);
	    if(json[wellKnownToken['profileErrorKey']])
	    	return reject(json) 	
	    return resolve(json)
	  })
	  .catch(err => {
	    return reject(err)
	  });
  })
}


async function wellKnowInfo(accessToken){
  return new Promise((resolve, reject) => {
  	if(!accessToken)
  		return reject('Unknow access token')

  	for(i in wellKnownTokens)
  		if(accessToken.match(wellKnownTokens[i]['re']))
  			return resolve(wellKnownTokens[i])

    return reject('Unknow access token')
  })
}


async function profileInfo(accessToken) {
	return new Promise((resolve, reject) => {
		wellKnowInfo(accessToken)
			.then(wellKnownToken => {
				fetchProfileInfo(wellKnownToken, accessToken)
					.then(ret => {
						return resolve(ret)
					})
					.catch(error => {
						return reject(error)
					})
			})
			.catch(error => {
				return reject(error)
			})
	})
}


module.exports = {
	wellKnowInfo, profileInfo
}
