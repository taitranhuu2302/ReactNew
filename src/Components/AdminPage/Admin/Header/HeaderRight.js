import React, { Component } from "react";

class HeaderRight extends Component {
  render() {
    return (
      <>
        <div className="col-lg-6 col-4 header-right">
          <ul className="nav justify-content-end  align-items-center">
            <li className="nav-item text-center p-1">
              <button className="btn shadow-none fas fa-bell rounded-circle p-0"></button>
            </li>
            <li className="nav-item ms-3">
              <button className="btn shadow-none avatar rounded-circle p-0">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d18257ed-4e57-4286-8a9a-a49a3b93e279/dbyfs5p-7e980a4e-f75e-4dae-baa0-df92fad00a02.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxODI1N2VkLTRlNTctNDI4Ni04YTlhLWE0OWEzYjkzZTI3OVwvZGJ5ZnM1cC03ZTk4MGE0ZS1mNzVlLTRkYWUtYmFhMC1kZjkyZmFkMDBhMDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ntTZhcqRWsVbLzXTyQJtOAWQSPqe_-RW7FRLCDKbHoY"
                  alt=""
                />
              </button>
              <ul className="nav menu-sub ">
                <li className="sub-item">
                  <button className="btn shadow-none">
                    <i className="far fa-user text-dark me-2" />
                    <span>Profile</span>
                  </button>
                </li>
                <li className="sub-item">
                  <button className="btn shadow-none">
                    <i className="far fa-cog text-dark me-2" />
                    <span>Settings</span>
                  </button>
                </li>
                <li className="sub-item">
                  <button className="btn shadow-none">
                    <i className="far fa-sign-out-alt text-dark me-2" />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default HeaderRight;
