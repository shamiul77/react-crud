import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div  >
        <nav className="navbar bg-secondary px-5 py-3 sticky-top ">
            <div class="container-fluid d-flex">
                <a class="navbar-brand fs-4"><Link to="/" class="text-decoration-none text-white fw-bold">Home</Link></a>
                <a class="navbar-brand fs-4"><Link to="blogs" class="text-decoration-none text-white fw-bold">Blogs</Link></a>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success bg-white text-dark" type="submit">Search</button>
                </form>
                <a class="navbar-brand fs-4"><Link to="info" class="text-decoration-none text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Informations</Link></a>
                <a class="navbar-brand fs-4"><Link to="contact" class="text-decoration-none text-white fw-bold">Contact</Link></a>
                <a class="navbar-brand fs-4"><Link to="addinfo" class="text-decoration-none text-white fw-bold">AddInfo</Link></a>
            </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
