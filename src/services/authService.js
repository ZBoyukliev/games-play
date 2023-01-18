import * as request from "./requester";
const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
  return request.post(`${baseUrl}/login`, { email, password })
};

export const logout = async (accsessToken) => {
  try {
   const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        'X-Authorization': accsessToken
      }
    });
    return response
  } catch(error) {
    console.log(error);
  }
};