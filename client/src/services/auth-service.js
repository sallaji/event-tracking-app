const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const login = async ({serverUrl, userData}) => {

  try {

    const response = await fetch(`${serverUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(userData), ...headers
    });
    if (response.ok) {
      console.log(response);

      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data;

    }
  } catch (e) {
    console.error("Kein User gefunden", serverUrl, userData)
  }
};

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

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  login,
  logout,
  register,
  getCurrentUser
};

export default authService;