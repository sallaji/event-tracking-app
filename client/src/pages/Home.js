import React, {useContext} from 'react';
import Layout from '../components/layout'
import {UserContext} from "../contexts/UserContext";

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const renderContent = () => user ? <Layout>
    <div className="page">
      <h1 className="page-title">
        Home
      </h1>

    </div>
  </Layout> : <h1>Not logged in</h1>;
  return (renderContent());
};

export default Home