import React from "react";
import "../../assets/admin/jquery/jquery.js";
import "../../assets/admin/bootstrap/js/bootstrap.bundle.min.js";
import "../../assets/admin/js/sb-admin-2.js";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar">
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/admin">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Hello! Admin</div>
        </a>

        <hr className="sidebar-divider my-0"></hr>

        <li className="nav-item active">
          <a className="nav-link" href="/admin/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <div className="sidebar-heading">Interface</div>
        {/* categories */}
        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseCategories"
            aria-expanded="true"
            aria-controls="collapseCategories">
            <i className="fas fa-fw fa-th"></i>
            <span>Categories</span>
          </a>
          <div
            id="collapseCategories"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">manage category</h6>
              <a className="collapse-item" href="/admin-dashboard/add-category">
                Add category
              </a>
            </div>
          </div>
        </li>

        {/* products */}
        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseProducts"
            aria-expanded="true"
            aria-controls="collapseProducts">
            <i className="fas fa-fw fa-shopping-bag"></i>
            <span>Products</span>
          </a>
          <div
            id="collapseProducts"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">manage product</h6>
              <a className="collapse-item" href="/admin-dashboard/add-products">
                Add products
              </a>
            </div>
          </div>
        </li>

        {/* orders */}
        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseOrders"
            aria-expanded="true"
            aria-controls="collapseOrders">
            <i className="fas fa-fw fa-shopping-cart"></i>
            <span>Orders</span>
          </a>
          <div
            id="collapseOrders"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">manage orders</h6>
              <a className="collapse-item" href="/admin-dashboard/order-list">
                orders list
              </a>
              <a
                className="collapse-item"
                href="/admin-dashboard/canceled-orders">
                canceled orders
              </a>
            </div>
          </div>
        </li>

        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
