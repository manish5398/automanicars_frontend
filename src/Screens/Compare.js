import React from "react";
import SelectCars from "../Components/SelectCars";

function Compare() {
  // const [car, setCar] = useState();

  const selectCar1 = [
    {
      h2: "select car 1",
      dataDisplay: "Select Brand",
      o1: "Select Brand",
      b1: "Brand 1",
      b2: "Brand 2",
      b3: "Brand 3",
      b4: "Brand 4",
    },
    {
      dataDisplay: "Select Model",
      o1: "Select Model",
      b1: "Model 1",
      b2: "Model 2",
      b3: "Model 3",
      b4: "Model 4",
    },
    {
      dataDisplay: "Select Version",
      o1: "Select Version",
      b1: "Version 1",
      b2: "Version 2",
      b3: "Version 3",
      b4: "Version 4",
    },
  ];
  const selectCar2 = [
    {
      h2: "select car 2",
      dataDisplay: "Select Brand",
      o1: "Select Brand",
      b1: "Brand 1",
      b2: "Brand 2",
      b3: "Brand 3",
      b4: "Brand 4",
    },
    {
      dataDisplay: "Select Model",
      o1: "Select Model",
      b1: "Model 1",
      b2: "Model 2",
      b3: "Model 3",
      b4: "Model 4",
    },
    {
      dataDisplay: "Select Version",
      o1: "Select Version",
      b1: "Version 1",
      b2: "Version 2",
      b3: "Version 3",
      b4: "Version 4",
    },
  ];
 // setCar(selectCar2)
  const selectCar3 = [
    {
      h2: "select car 3",
      dataDisplay: "Select Brand",
      o1: "Select Brand",
      b1: "Brand 1",
      b2: "Brand 1",
      b3: "Brand 1",
      b4: "Brand 1",
    },
    {
      dataDisplay: "Select Model",
      o1: "Select Model",
      b1: "Model 1",
      b2: "Model 1",
      b3: "Model 1",
      b4: "Model 1",
    },
    {
      dataDisplay: "Select Version",
      o1: "Select Version",
      b1: "Version 1",
      b2: "Version 1",
      b3: "Version 1",
      b4: "Version 1",
    },
  ];
  const selectCar4 = [
    {
      h2: "select car 4",
      dataDisplay: "Select Brand",
      o1: "Select Brand",
      b1: "Brand 2",
      b2: "Brand 2",
      b3: "Brand 2",
      b4: "Brand 2",
    },
    {
      dataDisplay: "Select Model",
      o1: "Select Model",
      b1: "Model 2",
      b2: "Model 2",
      b3: "Model 2",
      b4: "Model 2",
    },
    {
      dataDisplay: "Select Version",
      o1: "Select Version",
      b1: "Version 2",
      b2: "Version 2",
      b3: "Version 2",
      b4: "Version 2",
    },
  ];
  return(
    <>
      <div className="impl_bread_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>compare</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_compare_wrapper">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-3 col-md-6">      
            <SelectCars data={selectCar1} />  
            </div>
            <div className="col-lg-3 col-md-6">      
            <SelectCars data={selectCar2} />  
            </div>
            <div className="col-lg-3 col-md-6">                    
            <SelectCars data={selectCar3}/>         
            </div>
            <div className="col-lg-3 col-md-6">     
            <SelectCars data={selectCar4}/> 
            </div>                     
            <div className="col-lg-12 col-md-12">
              <div className="compare_btn">
                <button className="impl_btn">compare</button>
                <button className="impl_btn">reset all</button>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="compare_table_wrapper">
                <div className="compare_list_option">
                  <label className="compare_check_label">
                    Hide Common Features
                    <input type="checkbox" name="check"></input>
                    <span className="label-text"></span>
                  </label>
                  <label className="compare_check_label">
                    Highlight Differences
                    <input type="checkbox" name="check"></input>
                    <span className="label-text"></span>
                  </label>
                </div>
                <div className="compare_table">
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                        <th>Overview</th>
                        <th>Car 1</th>
                        <th>Car 2</th>
                        <th>Car 3</th>
                        <th>Car 4</th>
                      </tr>
                    </thead>
                    <tr className="bg_color">
                      <td>Length (mm)</td>
                      <td>4907</td>
                      <td>4462</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Width (mm)</td>
                      <td>1993</td>
                      <td>1998</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Height (mm)</td>
                      <td>1379</td>
                      <td>1204</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Seating Capacity (Person)</td>
                      <td>4</td>
                      <td>4</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Displacement (cc)</td>
                      <td>6262</td>
                      <td>7993</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Fuel Type</td>
                      <td>petrol</td>
                      <td>petrol</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Max Power (bhp@rpm)</td>
                      <td>652 @ 8000</td>
                      <td>987 @ 6000</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Max Torque (Nm@rpm)</td>
                      <td>683 @ 6000</td>
                      <td>1250 @ 2200</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Mileage (ARAI) (kmpl)</td>
                      <td>8</td>
                      <td>4</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Alternate Fuel</td>
                      <td>Not Applicable</td>
                      <td>Not Applicable</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Transmission Type</td>
                      <td>Automatic</td>
                      <td>Automatic</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>No of Gears</td>
                      <td>7</td>
                      <td>7</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Air Conditioner</td>
                      <td>Automatic Climate Control</td>
                      <td>Automatic Climate Control</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Power Windows</td>
                      <td>Front & Rear</td>
                      <td>Front & Rear</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Central Locking</td>
                      <td>Remote</td>
                      <td>Remote With Boot Opener</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Anti-Lock Braking System </td>
                      <td>
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </td>
                      <td>
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg_color">
                      <td>Airbags</td>
                      <td>
                        4 (Driver, Co-Driver & <br /> Rear Passengers)
                      </td>
                      <td>8 Airbags</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>Seat Upholstery</td>
                      <td>Leather</td>
                      <td>Leather</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
