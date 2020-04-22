/*This navigation component will help us to expose the navigation function
outside the App.js file as react-navigation by default does not allow to access 
the call and access navigation outside the App.js component */
import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};