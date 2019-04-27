// import axios from 'axios'

// const api = axios.create({
//     baseURL: "https://api.twitter.com/1.1/search/tweets.json"
// })

// export default api

import Twitter from 'twitter'

const client = new Twitter({
    consumer_key: 'l7Ke4ZdWQC7W08LoLpgBnH6Nv',
    consumer_secret: 'foTabKhiaupLdBHr1EmGhNXazbkcJtgELkk0STG1zI4JE4U264',
    access_token_key: '201760097-5M3uTZBDfMuFOWhYm5TK1hK22yhKou1GKp0RTYKH',
    access_token_secret: 'PI5ALlbe9sO0pEETCwitsQ3cUwj9Dox0HPTdDVaYKsU5Z'
})

export default client

