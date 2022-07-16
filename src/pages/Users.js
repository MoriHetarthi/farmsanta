import "../App.css";
// import Head from './components/Sidebar/Head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom/client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {faRectangleList} from "@fortawesome/free-regular-svg-icons"

function Users() {
    let arr = [0, 1, 2, 3, 4, 5]
    return (
        <>
            <div
                className="containers"
                style={{ backgroundColor: "rgb(239,239,239)" }}
            >
                <div className="head-territory">
                    <p style={{ marginLeft: '1rem' }}>User</p>
                </div>
                <div className="all-territory mx-1">
                    <div className="d-flex flex-row all-head" style={{ alignItems: 'center' }}>
                        <div className="search d-flex flex-row" style={{ alignItems: 'center' }}>
                            <p style={{ marginTop: "13px" }}>All Users(s)</p>
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
                                <button type="button" class="btn btn-sm d-flex flex-row" style={{ justifyContent: 'center', backgroundColor: '#485058' }}>
                                    
                                    <p style={{ fontSize: '12px' }}></p>
                                </button>
                                <button type="button" class="btn btn-sm d-flex flex-row" style={{ justifyContent: 'center'}}>
                                
                                    <p style={{ fontSize: '12px' }}></p>
                                </button>


                            </div>

                            <button type="button" class="btn btn-success btn-md add-new">
                                + Add new
                            </button>
                        </div>
                    </div>

                    <div className="users-main">

                        <div className="user-content my-3">
                            {
                                arr.map((x) => {
                                    return <>
                                        <div className="card text-left user-card">
                                            <div className="card-body user-body">
                                                <h5 className="card-title">Ram Jaat</h5>
                                                <p className="card-text">ram.manohar@nutrisourceworld.com</p>
                                                <div className="d-flex flex-row">
                                                    <FontAwesomeIcon className="my-1" icon={faUserGear} />
                                                    <p className="mx-3">Lead farmer</p>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <FontAwesomeIcon className="my-1" icon={faLayerGroup} />
                                                    <p className="mx-3">None</p>
                                                </div>

                                            </div>
                                            <div className="card-footer user-footer">
                                                <p>Edit &nbsp; &nbsp; View</p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Users;
