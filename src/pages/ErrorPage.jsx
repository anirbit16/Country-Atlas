import { NavLink, useRouteError } from "react-router-dom"
 

export default function ErrorPage() {
    const error = useRouteError();
  return (
    <>
      <h1>Oops an error occured</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
      
      Go back to home
      <button>
        Go Home
      </button>
      </NavLink>
    </>
  )
}
