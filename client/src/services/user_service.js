const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const getNavigationLinks = (user) => new Promise(resolve => {
  let authentication =
      user ?
          {
            name: `${user.name} (Logout)`,
            path: '/logout'
          } :
          {
            name: 'Login',
            path: '/login'
          };
  let events = {
    name: 'Events',
    path: '/events'
  };

  let users = {
    name: 'Users',
    path: '/users'
  };

  switch (user.type) {
    case 'sparte':
      resolve([events, authentication]);
      break;
    case 'administrator':
      resolve([events, users, authentication]);
      break;
    default:
      resolve([authentication]);
  }
});

const getUsers = ({serverUrl}) =>
    fetch(`${serverUrl}/users}`, {
      method: 'GET',
      ...headers
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Problema cargando usuarios')
      }
      return response.json()
    })
    .catch(e => console.error(e));
const userService = {
  getNavigationLinks
};

export default userService