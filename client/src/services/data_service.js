export default function authHeader() {

  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: user.token
      }
    };
  } else {
    return {};
  }
}
