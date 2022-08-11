import React from "react";
import "../Style/dashboard.css";
import logo from "../Logo/appicon.png";
import pencil from "../Logo/pencil.png";

const Dashboard = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a className="navbar-brand" href="#">
          <img src={logo} width={30} height={30} alt="logo" />
          <span>
            <h4>Todolist</h4>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-4"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-list-4">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  id="profileimg"
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                Kartikey
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Dashboard
                </a>
                <a className="dropdown-item" href="#">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To-do list</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"></form>
                  <table className="table mb-4">
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Buy groceries </td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Take labrador to groomer</td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          Collect car feom autobahn on monday morning 10:30 am
                        </td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">Completed tasks</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div className="form-outline"></div>
                    </div>
                  </form>
                  <table className="table mb-4">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <s>Deliver package to Mr.jeet</s>
                        </td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <s>Deliver package to Mr.jeet</s>
                        </td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <s>Deliver package to Mr.jeet</s>
                        </td>

                        <td>
                          <button type="submit" className="btn ">
                            <img src={pencil} alt="" />
                            <span>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-mdb-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Status
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Pending
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Ongoing
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Completed
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
