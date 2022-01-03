import axios from 'axios'
import React,{useEffect} from 'react'

const {REACT_APP_TWITTER_API_BEARER_TOKEN}= process.env

const TwitterOauth = () => {

const twitterSignin = async() =>{

    await axios ({
        method: "POST",
        url : `https://api.twitter.com/oauth/request_token`,
        header : {
         Authorization:   `Bearer ${REACT_APP_TWITTER_API_BEARER_TOKEN}`
        }
    })
}

useEffect(() => {
    twitterSignin()
   
}, [])
    return (
        <div>
            twitter request token
        </div>
    )
}

export default TwitterOauth
