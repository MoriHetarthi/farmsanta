import "../App.css";
// import Head from './components/Sidebar/Head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom/client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Territories() {
  return (
    <>
      <div
        className="containers"
        style={{ backgroundColor: "rgb(239,239,239)" }}
      >
        <div className="head-territory">
          <p style={{ marginLeft: '1rem' }}>Territory</p>
        </div>
        <div className="all-territory mx-1">
          <div className="d-flex flex-row all-head" style={{ alignItems: 'center' }}>
            <div className="search d-flex flex-row" style={{ alignItems: 'center' }}>
              <p style={{ marginTop: "13px" }}>All Territory(s)</p>
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div
                class="btn-group search-button"
                role="group"
                aria-label="Third group"
              >
                <button type="button" class="btn btn-sm">
                  <FontAwesomeIcon icon={faRotate} />
                </button>
              </div>
            </div>

            <div className="">
              <div
                class="btn-group edit-button"
                role="group"
                aria-label="Third group"
              >
                <button type="button" class="btn btn-sm d-flex flex-row" style={{ justifyContent: 'center', marginTop: '1.5px' }}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <p style={{ fontSize: '12px' }}>Edit</p>
                </button>


              </div>

              <button type="button" class="btn btn-success btn-md add-new">
                + Add new
              </button>
            </div>
          </div>

          <div className="territory-content">
            <table className="table align-middle">
              <thead className="thead-light" style={{ backgroundColor: "#f0f8f7" }}>
                <tr>
                  <th className="col-1" scope="col"></th>
                  <th className="col-2" scope="col">
                    Territory name
                  </th>
                  <th className="col-2" scope="col">
                    Country
                  </th>
                  <th className="col-2" scope="col">
                    Language
                  </th>
                  <th className="col-3" scope="col">
                    Description
                  </th>
                  <th className="col-2" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr style={{ color: "#495058" }}>
                  <th scope="row">
                    <input className="checkbox"
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>Cameroon</td>
                  <td>Cameroon</td>
                  <td>English,French</td>
                  <td>
                    Officially the Republic of Cameroon, is a
                    country in west-central Africa. It is bordered by Nigeria to
                    the west and north, Chad to the northeast; the Central
                    African Republic to the east.
                  </td>
                  <td>
                    <span class="badge badge-pill  active-badge badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "#495058" }}>
                  <th scope="row">
                    <input className="checkbox"
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>Kenya</td>
                  <td>Kenya</td>
                  <td>English,Swahili</td>
                  <td>
                    Kenya, officially the Republic of Kenya, is a country in
                    Eastern Africa.
                  </td>
                  <td>
                    <span class="badge badge-pill active-badge badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "#495058" }}>
                  <th scope="row">
                    <input className="checkbox"
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>Uganda</td>
                  <td>Uganda</td>
                  <td>English,Swahili</td>
                  <td>
                    Uganda, officially the Republic of Uganda, is a landlocked
                    country in East Africa. The country is bordered to the east
                    by Kenya, to the north by South Sudan, to the west by the
                    Democratic Republic of the Congo, to the south-west by
                    Rwanda, and to the south by Tanzania.
                  </td>
                  <td>
                    <span class="badge badge-pill  active-badge badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "#495058" }}>
                  <th scope="row">
                    <input className="checkbox"
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>Togo</td>
                  <td>Togo</td>
                  <td>French</td>
                  <td>
                    Togo, a West African nation on the Gulf of Guinea.
                  </td>
                  <td>
                    <span class="badge badge-pill  active-badge badge-success">active</span>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>

          <div className="footer-main">
            <div className="footer-territory d-flex flex-row">
              <p style={{ marginLeft: '1rem' }}> Showing 1 to 8 of 8 results</p>
              <div className="footer-element">
                <p style={{ marginTop: '3px' }}>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Territories;
