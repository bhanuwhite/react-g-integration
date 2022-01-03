import React,{useEffect} from 'react'
import { TrendTweet } from './api'


const TrendingTweets = () =>{

useEffect(() => {
    TrendTweet()
}, [])
    
    return(
        <>
       <div>
          my trending tweets
       </div>
        </>
    )
}

export default TrendingTweets;