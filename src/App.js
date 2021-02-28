import React from 'react';
import './App.css';
import NavBar from './UI/Components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import DialogsContainer from './UI/Components/Dialogs/DialogsContainer';
import UsersContainer from './UI/Components/Users/UsersContainer';
import ProfileContainer from './UI/Components/Profile/ProfileContainer';
import HeaderContainer from './UI/Components/Header/HeaderContainer';
import LoginPage from './UI/Components/Login/Login';

const App = (props) => {
   return (
      <div className="app-wrapper">
         <HeaderContainer />
         <NavBar />
         <div className={'app-wrapper-content'}>
            {/*<Route exact path={'/'} component={Profile}/>*/}
            <Route exact path={'/'} render={() => <ProfileContainer />} />
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
            <Route path={'/dialogs'} render={() => <DialogsContainer />} />
            <Route path={'/users'} render={() => <UsersContainer />} />
            <Route path={'/login'} render={() => <LoginPage />} />
         </div>
      </div>
   );
};

export default App;
