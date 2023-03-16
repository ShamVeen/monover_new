import React from 'react';
import product from '../images/big-product.png';
import clientLogo from '../images/client-logo.svg';

function SingleProduct() {
  return (
    <div>
      <div className="main-section col-sm min-vh-100 pe-0">
        {/* <!-- content --> */}
        <div className="content d-flex justify-content-between">
          <div className="main-content w-100 p-4 mt-2">
            <div className="content-header d-flex justify-content-between">
              <div className="content-header d-flex justify-content-between align-items-center">
                <svg
                  className="me-2"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.125 0L20.25 5.84567V17.537L10.125 23.3827L0 17.537V5.84567L10.125 0ZM6.74995 10.9117L6.75 18.8361L9 20.1353V12.2108L6.74995 10.9117ZM2.25 8.31375V16.238L4.49998 17.5371V9.61274L2.25 8.31375ZM14.5542 5.15526L7.93194 8.99622L10.125 10.2624L16.7625 6.43024L14.5542 5.15526ZM10.125 2.59808L3.4875 6.43024L5.6845 7.69864L12.3068 3.85773L10.125 2.59808Z"
                    fill="#1353D1"
                  />
                </svg>

                <p className="main-content-header mb-0">Catalogue</p>
              </div>
              <div className="content-header-action">
                <a href="" className="btn btn-primary me-2">
                  <svg
                    className="me-3"
                    width="13"
                    height="14"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                      fill="white"
                    />
                  </svg>
                  Add Product
                </a>
              </div>
            </div>

            <div className="content-wrapper mt-4">
              <div className="catalogue-wrapper">
                <div className="catalogue-single mb-4">
                  <div className="catalog-item-content d-flex justify-content-between">
                    <div className="catalog-item-preview d-flex justify-content-between">
                      <div className="catalog-image me-3">
                        <img className="img-fluid" src={product} alt="" />
                        <a href="">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.3172 2.3431L16.9212 0.947764C16.0747 0.100907 14.7018 0.101235 13.855 0.947764L12.5488 2.25391L17.0108 6.71584L18.3172 5.40969C19.1637 4.56284 19.1637 3.19025 18.3172 2.3431Z"
                              fill="#C3CAD9"
                            />
                            <path
                              d="M0.312988 14.4902V18.9521H4.77521L15.7942 7.93282L11.3325 3.47089L0.312988 14.4902Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="catalogue-pricing">
                      <p className="catalogue-title">
                        Product 1
                        <a className="ps-1" href="">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.4893 1.63396L13.3659 0.51104C12.6847 -0.170479 11.5798 -0.170215 10.8983 0.51104L9.84717 1.56218L13.438 5.15297L14.4893 4.10183C15.1706 3.42031 15.1706 2.31571 14.4893 1.63396Z"
                              fill="#C3CAD9"
                            />
                            <path
                              d="M0 11.4094V15.0002H3.59103L12.4587 6.13235L8.8681 2.54155L0 11.4094Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </p>
                      <p className="product-description">Description here</p>
                      <table className="w-100 mt-4">
                        <tbody>
                          <tr>
                            <tr>
                              <td className="ps-5">
                                <small>Price</small>
                              </td>
                              <td></td>
                            </tr>
                          </tr>
                          <tr>
                            <td className="price-name ps-5">Pricing1</td>
                            <td className="price ps-5">$900</td>
                          </tr>
                          <tr>
                            <td className="price-name ps-5">Pricing2</td>
                            <td className="price ps-5">$990</td>
                          </tr>
                          <tr>
                            <td className="price-name ps-5">Pricing3</td>
                            <td className="price ps-5">$1900</td>
                          </tr>
                          <tr>
                            <td className="price-name ps-5">Pricing4</td>
                            <td className="price ps-5">$19900</td>
                          </tr>
                          <tr>
                            <td className="price-name ps-5">Pricing1</td>
                            <td className="price ps-5">$900</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="catalogue-info ps-5">
                      <div className="catalog-info-wrapper ps-4">
                        <p>
                          Resturant Inventory: <span>500</span>
                        </p>
                        <p>
                          Sold: <span>2500</span>
                        </p>
                        <p>
                          Earnings: <span>1500</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-box mt-5">
                  <div className="order-content">
                    <table className="order-table w-100">
                      <tbody>
                        <tr>
                          <td className="fs-16 fw-bold">Order 11234</td>
                          <td className="fw-medium">20/01/2023</td>
                          <td className="order-step-status">
                            <span className="dot status-progress-bg me-1"></span>
                            <span className="status-inprogress">
                              In Progress
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src={clientLogo} className="me-2" alt="" />
                              <span className="fs-14 fw-semi-bold">Sigma</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-16 fw-bold">Order 11234</td>
                          <td className="fw-medium">20/01/2023</td>
                          <td className="order-step-status">
                            <span className="dot status-hold-bg me-1"></span>
                            <span className="status-hold">Processed</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src={clientLogo} className="me-2" alt="" />
                              <span className="fs-14 fw-semi-bold">Sigma</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-16 fw-bold">Order 11234</td>
                          <td className="fw-medium">20/01/2023</td>
                          <td className="order-step-status">
                            <span className="dot status-hold-bg me-1"></span>
                            <span className="status-hold">Processed</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src={clientLogo} className="me-2" alt="" />
                              <span className="fs-14 fw-semi-bold">Sigma</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
