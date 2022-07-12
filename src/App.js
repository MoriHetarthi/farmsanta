import "./App.css";
// import Head from './components/Sidebar/Head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div>
        {/* <Head /> */}

        <div className="nav-head">
          <ul className="nav_list">
            <p>Dashboard</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>Farmers</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>POP</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>Advisory</p>
          </ul>

          <ul className="nav_list">
            <i></i>
            <p>Scouting</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>Soil Health</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>Market</p>
          </ul>

          <ul className="nav_list">
            <i ></i>
            <p>Master</p>
          </ul>

        </div>
      </div>

      <div className="main-content container">
        <div className="content row">
          <div className="detail-forecast col-8">
            <div className="card">

              <div className="card-header">
                Monday, Jul 11, 2022
                <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '0px' }}>Mbankomo, CM</p>
                <div className="card-header-side">
                  {/* <p>More details &gt;&gt;</p> */}
                </div>
              </div>
              <div className="card-body left-content">
                <div style={{width: '100%'}}>
                  <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon> &nbsp; 20°C Clouds

                  <div className="weather-details row">
                    <div className="col-3 weather-content">Precipitation
                      <p style={{ fontWeight: '600' }}>0 mm/h</p>
                    </div>
                    <div className="col-3 weather-content">Humidity
                      <p style={{ fontWeight: '600' }}>87%</p>
                    </div>
                    <div className="col-3 weather-content">Wind speed
                      <p style={{ fontWeight: '600' }}>1.49 m/s 266°</p>
                    </div>
                    <div className="col-3 weather-content">UV index
                      <p style={{ fontWeight: '600' }}>0.74</p>
                    </div>
                  </div>


                </div>

                <div class="card col-4">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Alerts</li>
                    <li class="list-group-item">No data</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card my-4" style={{ height: '50vh' }}>
              <div className="card-header breakdown-item">
                <p style={{ fontSize: '12px' }}>BREAKDOWN OF CROPS ACROSS FARMERS</p>
                <p>More details &gt;&gt;</p>
              </div>
              <div className="card-body">
                <div className="dropdown col">
                  <button className="btn mx-2 btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select territory
                  </button>
                  <button className="btn mx-2 btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select region
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="farm-talk col-4">
            <div className="card">
              <div className="card-header breakdown-item">
                <p style={{ fontSize: '12px' }}>FARM TALK</p>
                <p>+ Create new post</p>
              </div>
              <div className="farm-talk-head">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control search-farm" placeholder="Search" aria-label="Search" />
                </div>
              </div>
              <div className="card-body" style={{ padding: '0px' }}>
                <div class="card" style={{ width: '100%' }}>
                  <div className="admin-user">
                    <div className="admin-content" style={{marginLeft: '14px'}}>
                    <div className="d-flex flex-row">
                      <FontAwesomeIcon icon={faUserCircle} className="icon"></FontAwesomeIcon>
                      <p style={{ marginBottom: '0px', fontWeight: '600', marginTop: '10px', marginLeft: '4px'}}>Admin User</p>
                      </div>
                      <p style={{ fontSize: '12px', marginLeft:'2rem' }}>2 w</p>
                    </div>
                  </div>
                  <img class="card-img-top" src="..." alt="Image" />
                  <div class="card-body">
                    <p class="card-text" style={{ fontWeight: '600' }}>Root Rot Disease Of Papaya And Its Control</p>
                    <p>Root rot disease of papaya and its control - This disease is caused by Fungus (Phytophthora spp.), Brown color appears near the crown, due to this disease the roots of the plant rot, due to which the plant starts drying up on its own!
                    </p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



    </>
  );
}

export default App;
