import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

// Pulling in current user props, from App.js and props are coming from backend via Views/html.erb...
const Home = ({ logged_in, current_user, new_user_route, sign_in_route, sign_out_route }) => {
  console.log("Logged In:", logged_in) 
  console.log("Current User:", current_user) 
  console.log("New User: ",new_user_route) 
  console.log("Sign In", sign_in_route)
  console.log("Sign Out:", sign_out_route);
  return (

    /* - Conditionally render sign in/sign_out button if there is no user.
       - Render a my_listings and a view_listings when there is a current user signed in.*/
    <div className="home-main">
    {logged_in ? <div className='home-card'>
      <h1>Welcome User, to your new Apartment.</h1>
      <p>You can browse for apartments or list your own.</p>
      <div className="home-buttons">

      <NavLink to="/apartmentshow"><Button>My Listings </Button></NavLink>
      <NavLink to="/apartmentindex"><Button>View Listings </Button></NavLink>
      </div>
      </div>:
      <div className="home-card">
      <h1>Welcome.</h1>
      <p>You can browse for apartments or sign up for an account to list an apartment.</p>
       <div className='home-buttons'>

          <a href={sign_in_route}><Button variant='secondary'>Sign In </Button></a>
          <a href={new_user_route}><Button variant='secondary'>Sign Up </Button></a>
       </div>
        
      </div>
    } 
    </div>
  )
}

export default Home
