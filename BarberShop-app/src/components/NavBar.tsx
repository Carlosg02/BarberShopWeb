interface Props {
    children: string
}

const NavBar = ({children} : Props) => {
    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {children}
          </a>
        </div>
      </nav>
    )
}

export default NavBar;