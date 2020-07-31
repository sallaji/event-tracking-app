export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    // for Node.js Express back-end
    return {headers:{
      'Authorization': user.token,
      'Content-type': 'application/json'
    }};
  } else {
    return {};
  }
}