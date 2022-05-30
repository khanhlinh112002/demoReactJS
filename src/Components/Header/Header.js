import React,{Component} from 'react';
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-between">
          {/* Left elements */}
          <div className="d-flex">
            {/* Brand */}
            <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
              <img src="../image/Logo.jpg" height={50} alt="MDB Logo" loading="lazy" style={{marginTop: '2px'}} />
            </a>
            {/* Search form */}
            <p className="w-auto my-auto d-none d-sm-flex">Thứ Hai, ngày 19 tháng 4 năm 2021</p>
            
          </div>
          {/* Left elements */}
          {/* Center elements */}
          <form className="input-group w-auto my-auto d-none d-sm-flex">
            <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" style={{minWidth: '125px'}} />
            <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search" /></span>
          </form>
       
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span><i className="fa-brands fa-facebook-f" />
                </span>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span><i className="fa-brands fa-twitter" /></span>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span><i className="fa-brands fa-instagram" /></span>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span><i className="fa-brands fa-youtube" /></span>
              </a>
            </li>
          </ul>
          {/* Right elements */}
        </div>
      </nav>
        )
    }
}