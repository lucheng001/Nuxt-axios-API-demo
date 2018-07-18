import axios from 'axios'

const LOGIN_URL = 'http://127.0.0.1:8000/api-token-auth/'

export function login (context, creds) {
  console.log(creds)
  axios({
    method: 'post',
    url: LOGIN_URL,
    data: creds
  }).then(function (response) {
    context.token = response.data
  })
    .catch(function (error) {
      console.log(error)
      context.formError = error
    })
}
