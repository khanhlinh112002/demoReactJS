import React,{Component} from 'react';
export default class Navigation extends Component {
    render() {
    return (
       
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active nav-header">
              <a className="nav-link " aria-current="page" href="#">Chính trị</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Xã hội</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Thế giới</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Kinh tế</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Thể thao</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Văn hóa</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Giải trí</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Pháp luật</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Du lịch</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Quân sự - Quốc Phòng</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link" href="#">Sức Khỏe</a>
            </li>
            <li className="nav-item  nav-header">
              <a className="nav-link" href="#">Đời sống</a>
            </li>
            <li className="nav-item nav-header">
              <a className="nav-link " href="#"><i className="fas fa-bars" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
    }
}