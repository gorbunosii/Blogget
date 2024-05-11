import {useState, useEffect} from 'react';

export const useAuth = (url, token) => fetch(`${url}/api/v1/me`, {
  headers: {
    Authorization: `bearer ${token}`
  },
});
