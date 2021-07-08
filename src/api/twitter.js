// const dotenv = require('dotenv');
// dotenv.config();
import needle from 'needle';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.REACT_APP_TWITTER_API_ADDRESS);

const token = process.env.REACT_APP_BEARER_TOKEN;
const endpointURL = process.env.REACT_APP_TWITTER_API_ADDRESS;

export const getUserInfo = async (name) => {
  const params = {
    screen_name: name,
    'user.fields': 'created_at,description',
    expansions: 'pinned_tweet_id',
  };

  const res = await needle('get', endpointURL, params, {
    headers: {
      'User-Agent': 'v2UserLookupJS',
      authorization: `Bearer ${token}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error('Unsuccessful request');
  }
};

// (async () => {
//   try {
//     // Make request
//     const response = await getUserInfo();
//     console.dir(response, {
//       depth: null,
//     });
//   } catch (e) {
//     console.log(e);
//     process.exit?.(-1);
//   }
//   process.exit?.();
// })();
