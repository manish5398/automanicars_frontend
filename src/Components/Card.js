// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);

  const navigateToSingleCar = (c) => {
    // console.log("hhuhihih");
    // console.log(c._id);
    navigate("/Newsingle",{state:{id:c._id}});
  };
  // setData(props.data);

  //   console.log(props.data);
  return (
    <>
      {props.data.map((c) => (
        <div className="col-lg-4 col-md-6">
          <div className="impl_fea_car_box">
            <div className="impl_fea_car_img">
              <img
                src={c.image1}
                alt=""
                className="img-fluid impl_frst_car_img"
              />
              <img
                src={c.image2}
                alt=""
                className="img-fluid impl_hover_car_img"
              />
              <span className="impl_img_tag" title="compare">
                <a href="/compare">
                  <i className={c.icon} aria-hidden="true"></i>
                </a>
              </span>
            </div>
            <div className="impl_fea_car_data">
              <h2>
                <a href="/Newsingle">{c.name}</a>
              </h2>
              <ul>
                <li>
                  <span className="impl_fea_title">Model </span>
                  <span className="impl_fea_name">
                    {c.company} {c._id}
                  </span>
                </li>
                <li>
                  <span className="impl_fea_title">Year</span>
                  <span className="impl_fea_name">{c.year}</span>
                </li>
                <li>
                  <span className="impl_fea_title">Date</span>
                  <span className="impl_fea_name">{c.date}</span>
                </li>
              </ul>
              <div className="impl_fea_btn">
                <button
                  className="impl_btn"
                  onClick={() => navigateToSingleCar(c)}
                >
                  <span className="impl_doller">Buy Now </span>
                  <span className="impl_bnw">View Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
