# access-token-whois
Access token identification and user profile requesting.

## Installation
```
npm install access-token-whois
```

## Supported issuers
Facebook (user token), Google

## Example
### Import package
```javascript
var tokenWhois = require('access-token-whois');
```

### Check format of access token
```javascript
let accessToken = 'ya29.Glsv...'

tokenWhois.wellKnowInfo(accessToken)
  .then(info => {console.log(info)})
  .catch(error => {console.log(error)})
```

Result:

```javascript
{
  issuer: 'google',
  type: undefined,
  re: /^ya29.Glsv[0-9a-zA-Z_-]{120}$/,
  profileUrl: 'https://www.googleapis.com/oauth2/v2/tokeninfo?access_token=%s',
  profileErrorKey: 'error_description'
}
```

### Get basic user data by access token
```javascript
let accessToken = 'ya29.Glsv...'

tokenWhois..profileInfo(accessToken)
  .then(info => {console.log(info)})
  .catch(error => {console.log(error)})
```

Result:

```javascript
{
  issued_to: '***.googleusercontent.com',
  audience: '***.googleusercontent.com',
  user_id: '***',
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me ***',
  expires_in: 3089,
  email: '***',
  verified_email: true,
  access_type: 'offline'
}
```