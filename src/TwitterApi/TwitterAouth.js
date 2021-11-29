import React, { useEffect, useState } from "react";
import { getRecentTweets, getTweets } from "../api";
import _ from "lodash";
import moment from 'moment'

function TwitterApi() {
  const [tweets, setTweets] = useState({
    data: [],
    error: false,
    loading: false,
  });

  // const [tweets, setTweets] = useState({
  //   data: [],
  //   error: false,
  //   loading: false,
  // });
  const formatedDate = moment(new Date()).subtract(1,'day').toDate()


  useEffect(() => {
    setTweets({ ...tweets, loading: true });
    getRecentTweets({query:"KCR",start_date:formatedDate})
      .then((res) => {
        console.log(res,"res");
        if (res.status === 200) {
          setTweets({
            ...tweets,
            data: _.get(res, "data.data"),
            loading: false,
            error: false,
          });
        }
      })
      .catch((err) => {
        setTweets({ ...tweets, data: [], loading: false, error: true });
      });

     
  }, []);


  
  
  const { loading, data, error } = tweets;
  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Something went wrong</h4>
      ) : data.length ? (
        <>
        {
        _.map(data, (each) => (
          <h2 key={_.get(each,'id','')}>
            {_.get(each, "text", "")
            }</h2>
        ))
       }
        </>
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
 
export default TwitterApi;

//https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei