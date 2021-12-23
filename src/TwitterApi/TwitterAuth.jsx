/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getRecentTweets } from "../api";
import _ from "lodash";
import moment from "moment";
import "./TwitterAuth.css";

function TwitterApi() {
  const [tweets, setTweets] = useState({
    data: [],
    error: false,
    loading: false,
  });
  const formatedDate = moment(new Date()).subtract(1, "day").toDate();

  useEffect(() => {
    setTweets({ ...tweets, loading: true });
    getRecentTweets({ query: "football", start_date: formatedDate })
      .then((res) => {
        if (res.status === 200) {
          setTweets({
            ...tweets,
            data: _.get(res, "data.data"),
            includes: _.get(res, "data.includes"),
            loading: false,
            error: false,
          });
        }
      })
      .catch((err) => {
        setTweets({ ...tweets, data: [], loading: false, error: true });
      });
  }, []);

  // console.log(tweets,'tweets...')

  const getImageUrl = (eachTweet) => {
    if (eachTweet.hasOwnProperty("attachments")) {
      const mediaKeys = _.get(eachTweet, "attachments.media_keys"); //array of strings
      const includes = _.get(tweets, "includes.media");

      const getImageArray = _.map(mediaKeys, (each) => {
        return includes.map((eachIncludes) =>
          _.get(eachIncludes, "media_key") === each
            ? {
                type: _.get(eachIncludes, "type", ""),
                url: _.get(eachIncludes, "url"),
              }
            : null
        );
      });

      return getImageArray.flat();
    } else {
      return null;
    }
  };

  const { loading, data, error } = tweets;
  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : data.length ? (
        <>
          {_.map(data, (each) => {
            console.log(getImageUrl(each), "imageurl>>>>>>");
            return (
              <div>
                <h2 key={_.get(each, "id", "")}>{_.get(each, "text", "")}</h2>
                {_.size(getImageUrl(each))
                  ? _.map(getImageUrl(each), (eachImageUrl) => {
                      return (
                        <div className="Twitter_body">
                          {eachImageUrl ? (
                            eachImageUrl.type === "photo" ? (
                              <img
                                className="twitter-auth"
                                src={eachImageUrl.url}
                                alt="tweetimg"
                              />
                            ) : null
                          ) : null}
                        </div>
                      );
                    })
                  : null}
              </div>
            );
          })}
        </>
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export default TwitterApi;
