import authHeader from '../services/data_service'

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const login = (serverUrl, userData) =>
    fetch(`${serverUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      ...headers
    }).then(response => {
      if (!response.ok) {
        throw new Error('Login fehlgeschlagen')
      }
      return response.json()
    })
    .then(json => {

      if (json.token) {
        localStorage.setItem("user", JSON.stringify(json))
      }
      return json
    })
    .catch(e => console.error(e));

const logout = () => {
  localStorage.removeItem("user");
};

const register = async ({serverUrl, newUserData}) => {
  const response = await fetch(`${serverUrl}/signin`, {
    method: 'POST',
    body: JSON.stringify(newUserData), ...headers
  });
  if (response.ok) {
    console.info("Continuar codigo aqui!!")
  }
};

const getCurrentUser = (serverUrl) => {
  return fetch(`${serverUrl}/login`, {
    method: 'GET',
    ...authHeader()
  })
  .then(response => {
        if (!response.ok) {
          return null;
        }
        return response.json()
      }
  ).then(json => {
    if (json.token) {
      localStorage.setItem('user', JSON.stringify(json))
    }
    return json
  }).catch(e => console.error("error desde auth-service getcurrentUser"));
};

const authService = {
  login,
  logout,
  register,
  getCurrentUser
};

export default authService;