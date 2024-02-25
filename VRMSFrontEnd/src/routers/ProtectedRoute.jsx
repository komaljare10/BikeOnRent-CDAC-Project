import { Link,Switch, Route } from "react-router-dom";

function ProtectedRoute(props)
{
    debugger;
    if(true)
    {
        return <Route path={props.path} exact
        component={props.component}/>
    }
    else
    {
      return <Login setUserName={props.setUserName}/>
    }
}

export default ProtectedRoute;
// combination of React Router for route handling and a 
// state management library like Redux or React Context to manage the authentication state.