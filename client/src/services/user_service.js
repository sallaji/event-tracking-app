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
const userService = {
  getNavigationLinks
};

export default userService