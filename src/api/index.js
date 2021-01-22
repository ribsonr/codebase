import {post, get, _del, put} from './networkUtils';

// Endpoints that Doesn't Require Authentication
export const login = async (PAYLOAD) => {
  return {access_token: 'true'};
};
