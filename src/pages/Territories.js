import "../App.css";
// import Head from './components/Sidebar/Head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom/client";

function Territories() {
  return (
    <>
      <div
        className="containers"
        style={{ backgroundColor: "rgb(239,239,239)" }}
      >
        <div className="head-territory">
          <p>Territory</p>
        </div>
        <div className="all-territory">
          <div className="d-flex flex-row all-head my-3">
            <div className="search d-flex flex-row">
              <p style={{ marginTop: "2px" }}>All Territory(s)</p>
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
              <button type="button" class="btn btn-success btn-md add-new">
                + Add new
              </button>
            </div>
          </div>

          <div className="territory-content my-3 p-3">
            <table class="table align-middle">
              <thead class="thead-light" style={{ backgroundColor: "#f0f8f7" }}>
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
              <tbody>
                <tr style={{ color: "rgb(128, 128, 128)" }}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>Cameroon</td>
                  <td>Cameroon</td>
                  <td>English,French</td>
                  <td>
                    Description Officially the Republic of Cameroon, is a
                    country in west-central Africa. It is bordered by Nigeria to
                    the west and north, Chad to the northeast; the Central
                    African Republic to the east.
                  </td>
                  <td>
                    <span class="badge badge-pill badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "rgb(128, 128, 128)" }}>
                  <th scope="row">
                    <input
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
                    <span class="badge badge-pill badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "rgb(128, 128, 128)" }}>
                  <th scope="row">
                    <input
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
                    <span class="badge badge-pill badge-success">active</span>
                  </td>
                </tr>
                <tr style={{ color: "rgb(128, 128, 128)" }}>
                  <th scope="row">
                    <input
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
                    <span class="badge badge-pill badge-success">active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="footer-territory d-flex flex-row">
            <p> Showing 1 to 8 of 8 results</p>
            <div className="footer-element">
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Territories;
