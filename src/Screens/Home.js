import React, { useState } from "react";
import {
  // FeaCar1,
  // FeaCar1_hover,
  // FeaCar2,
  // FeaCar3,
  // FeaCar4,
  // FeaCar5,
  // FeaCar6,
  // logo,
  post1,
  post2,
  slide15,
  slide4,
  welcome_img,
} from "../images/index";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
// import Loader from "../Components/Loader";

function Home() {
  // const carCards = [
  //   {
  //     image1: FeaCar1,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  //   {
  //     image1: FeaCar2,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  //   {
  //     image1: FeaCar3,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  //   {
  //     image1: FeaCar4,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  //   {
  //     image1: FeaCar5,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  //   {
  //     image1: FeaCar6,
  //     image2: FeaCar1_hover,
  //     icon: "fa fa-exchange",
  //     name: "Aurora",
  //     model: "model",
  //     aurora_811: "Aurora 811",
  //     vehicleStatus: "Vehicle Status",
  //     color: "Color",
  //     new: "New",
  //     white: "white",
  //     price: "$ 72000",
  //     buy: "buy now",
  //   },
  // ];

  const selectBoxes = [
    {
      option: "Select Brand",
      o1: "Brand 1",
      o2: "Brand 2",
      o3: "Brand 3",
      o4: "Brand 4",
    },
    {
      option: "Select Status",
      o1: "Status 1",
      o2: "Status 2",
      o3: "Status 3",
      o4: "Status 4",
    },
    {
      option: "Select Model",
      o1: "Model 1",
      o2: "Model 2",
      o3: "Model 3",
      o4: "Model 4",
    },
    {
      option: "Select Year",
      o1: "Year 1",
      o2: "Year 2",
      o3: "Year 3",
      o4: "Year 4",
    },
    {
      option: "Select Color",
      o1: "Color 1",
      o2: "Color 2",
      o3: "Color 3",
      o4: "Color 4",
    },
    {
      option: "Select Type",
      o1: "Type 1",
      o2: "Type 2",
      o3: "Type 3",
      o4: "Type 4",
    },
  ];
  const panelGroup = [
    {
      href: "#collapseOne",
      id: "collapseOne",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      panelbody:
        "Vivamus malesuada orci a sapien rutrum, ut iaculis turpis posuere. Proin mollis sodales aliquet.Suspendisse iaculis, justo ac feugiat accumsan, turpis urna consequat mauris.",
    },
    {
      href: "#collapseTwo",
      id: "collapseTwo",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      panelbody:
        "Vivamus malesuada orci a sapien rutrum, ut iaculis turpis posuere. Proin mollis sodales aliquet.Suspendisse iaculis, justo ac feugiat accumsan, turpis urna consequat mauris.",
    },
  ];

  const [details, fetchDetails] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/cars/recent")
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        fetchDetails(data);
        // console.log(details);
      });
  };
  // console.log("hello")
  // console.log(details)
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Loader/> */}
      <div className="impl_slider_wrapper">
        <div
          id="rev_slider_28_1_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="parallax-zoom-slices"
          data-source="gallery"
          style={{ padding: "0", backgroundColor: "#000000" }}
        >
          <div
            id="rev_slider_28_1"
            className="rev_slider fullscreenbanner"
            style={{ display: "none," }}
            data-version="5.4.1"
          >
            <ul>
              <li
                data-index="rs-66"
                data-transition="slotzoom-horizontal"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="1000"
                data-thumb=""
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-2800-layer-7"
                  data-x="['left','left','left','left']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"speed":5000,"to":"opacity:0;","ease":"Power4.easeInOut"}]'
                  data-textAlign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "5",
                    backgroundColorRgba: "{0, 0, 0, 0.40}",
                    borderColorRgba: "{0, 0, 0, 0}",
                    borderWidth: "0px",
                  }}
                ></div>
                <img
                  src={slide15}
                  alt=""
                  title="homedefault-bg1"
                  width="1920"
                  height="1033"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                  data-no-retina
                />
                <div
                  id="rrzt_6"
                  className="rev_row_zone rev_row_zone_top"
                  style={{ zIndex: "8;" }}
                >
                  <div
                    className="tp-caption  "
                    id="slide-66-layer-4"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','100','100','100']"
                    data-y="['top','top','top','top']"
                    data-voffset="['100','100','100','100']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="row"
                    data-columnbreak="3"
                    data-responsive_offset="on"
                    data-frames='[{"delay":30,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-margintop="[0,0,0,0]"
                    data-marginright="[0,0,0,0]"
                    data-marginbottom="[0,0,0,0]"
                    data-marginleft="[0,0,0,0]"
                    data-textAlign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "8",
                      whiteSpace: "nowrap",
                      fontSize: "20px",
                      lineHeight: "22px",
                      fontWeight: "400",
                      colorRgba: "{255, 255, 255, 1.00}",
                    }}
                  >
                    <div
                      className="tp-caption  "
                      id="slide-6-layer-5"
                      data-x="['left','left','left','left']"
                      data-hoffset="['100','100','100','100']"
                      data-y="['top','top','top','top']"
                      data-voffset="['100','100','100','100']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="column"
                      data-responsive_offset="on"
                      data-frames='[{"delay":"+-20","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                      data-columnwidth="50%"
                      data-margintop="[0,0,0,0]"
                      data-marginright="[0,0,0,0]"
                      data-marginbottom="[0,0,0,0]"
                      data-marginleft="[0,0,0,0]"
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: "9", width: "100%" }}
                    ></div>

                    <div
                      className="tp-caption  "
                      id="slide-6-layer-6"
                      data-x="['left','left','left','left']"
                      data-hoffset="['100','100','100','100']"
                      data-y="['top','top','top','top']"
                      data-voffset="['100','100','100','100']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="column"
                      data-responsive_offset="on"
                      data-frames='[{"delay":"+-20","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                      data-columnwidth="50%"
                      data-margintop="[0,0,0,0]"
                      data-marginright="[0,0,0,0]"
                      data-marginbottom="[0,0,0,0]"
                      data-marginleft="[0,0,0,0]"
                      data-textAlign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: "10", width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="tp-caption   tp-resizeme  text-slider"
                  id="slide-6-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-80','-80','-70','-80']"
                  data-fontsize="['70','70','40','30']"
                  data-lineheight="['100','100','40','30']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":30,"split":"chars","splitdelay":0.1,"speed":3000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1500,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "5",
                    whiteSpace: "nowrap",
                    fontSize: "70px",
                    lineHeight: "100px",
                    fontWeight: "700",
                    colorRgba: "{255, 255, 255, 1.00}",
                    fontFamily: "Raleway sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Accelerate Your Dreams
                </div>

                <div
                  className="tp-caption   tp-resizeme  text-slider"
                  id="slide-6-layer-2"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','-15','-25']"
                  data-fontsize="['24','24','24','20']"
                  data-lineheight="['24','24','24','26']"
                  data-width="['none','none','none','310']"
                  data-height="['none','none','none','54']"
                  data-whitespace="['nowrap','nowrap','nowrap','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":30,"speed":3500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"nothing"}]'
                  data-textAlign="['inherit','inherit','inherit','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "6",
                    whiteSpace: "nowrap",
                    fontSize: "26px",
                    lineHeight: "26px",
                    fontWeight: "400",
                    color: "{255, 255, 255, 1.00}",
                    fontFamily: "Roboto",
                  }}
                >
                  Buy and sell your car on resell car dealer
                </div>

                <a
                  className="tp-caption rev-btn  tp-resizeme"
                  href="/"
                  target="_blank"
                  id="slide-67-layer-7"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['80','80','50','40']"
                  data-width="250"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[50,50,50,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[50,50,50,0]"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    zIndex: "19",
                    lineHeight: "40px",
                  }}
                >
                  <span className="impl_btn">GET STARTED </span>
                </a>
              </li>
              <li
                data-index="rs-67"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="600"
                data-thumb="../../assets/images/woman2-100x50.jpg"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
                data-slicey_shadow="0px 0px 0px 0px transparent"
              >
                <img
                  src={slide4}
                  alt=""
                  data-bgposition="center center"
                  data-kenburns="on"
                  data-duration="5000"
                  data-ease="Power2.easeInOut"
                  data-scalestart="100"
                  data-scaleend="150"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-blurstart="20"
                  data-blurend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  className="rev-slidebg"
                  data-no-retina
                />
                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-10"
                  data-x="['center','center','center','center']"
                  data-hoffset="['151','228','224','117']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-212','-159','71','-222']"
                  data-width="['150','150','100','100']"
                  data-height="['200','150','150','150']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":350,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3650","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: "6", backgroundColorRgba: "{0, 0, 0, 0.5}" }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-29"
                  data-x="['center','center','center','center']"
                  data-hoffset="['339','-442','104','-159']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['2','165','-172','219']"
                  data-width="['250','250','150','150']"
                  data-height="['150','150','100','100']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: "7", backgroundColorRgba: "{0, 0, 0, 0.5}" }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-12"
                  data-x="['center','center','center','center']"
                  data-hoffset="['162','216','-239','193']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['195','245','6','146']"
                  data-width="['250','250','100','100']"
                  data-height="150"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":450,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3550","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: "8", backgroundColorRgba: "{0, 0, 0, 0.5}" }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-34"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-186','-119','273','-223']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['269','217','-121','69']"
                  data-width="['300','300','150','150']"
                  data-height="['200','200','150','150']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3500","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: "9", backgroundColorRgba: "{0, 0, 0, 0.5}" }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-11"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-325','292','162','-34']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['3','55','-275','-174']"
                  data-width="150"
                  data-height="['250','150','50','50']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":550,"speed":1000,"frame":"0","from":"opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3450","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "10",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-27"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-429','523','-190','-306']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-327','173','181','480']"
                  data-width="['250','250','150','150']"
                  data-height="['300','300','150','150']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="300"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":320,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3680","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "11",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-28"
                  data-x="['center','center','center','center']"
                  data-hoffset="['422','-409','208','225']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-245','-72','294','-14']"
                  data-width="['300','300','150','150']"
                  data-height="['250','250','100','100']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="300"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":360,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3640","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "12",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-30"
                  data-x="['center','center','center','center']"
                  data-hoffset="['549','-445','28','58']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['236','400','316','287']"
                  data-width="['300','300','150','200']"
                  data-height="['250','250','150','50']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="300"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":400,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3600","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "13",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-31"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-522','492','-151','262']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['339','-180','330','-141']"
                  data-width="['300','300','150','150']"
                  data-height="['250','250','100','100']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="300"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":440,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3560","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "14",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-32"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-588','-375','-253','-207']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['72','-328','-172','-111']"
                  data-width="['300','300','150','150']"
                  data-height="['200','200','150','150']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="300"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":480,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3520","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "15",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-33"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-37','73','-76','-100']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-401','-340','-293','-246']"
                  data-width="['450','400','250','250']"
                  data-height="['100','100','50','50']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":310,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3690","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "16",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper tp-slicey  tp-resizeme"
                  id="slide-67-layer-35"
                  data-x="['center','center','center','center']"
                  data-hoffset="['186','38','116','17']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['363','402','190','395']"
                  data-width="['350','400','250','250']"
                  data-height="['100','100','50','50']"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-slicey_offset="250"
                  data-slicey_blurstart="0"
                  data-slicey_blurend="20"
                  data-responsive_offset="on"
                  data-frames='[{"delay":340,"speed":1000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"+3660","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "18",
                    backgroundColorRgba: "{0, 0, 0, 0.5}",
                  }}
                ></div>

                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-67-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                ></div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-67-layer-2"
                  data-x="['center','center','center','center']"
                  data-hoffset="['1','1','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-70','-70','-70','-70']"
                  data-fontsize="['70','70','30','26']"
                  data-lineheight="['80','70','40','30']"
                  data-width="['none','none','481','360']"
                  data-height="none"
                  data-whitespace="['nowrap','nowrap','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: "19",
                    whiteSpace: "nowrap",
                    fontSize: "70px",
                    lineHeight: "80px",
                    fontWeight: "700",
                    color: "#ffffff",
                    letterSpacing: "0px",
                    fontFamily: "'Raleway', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  We're Your One Stop <br /> Destination for That !
                </div>

                <a
                  className="tp-caption rev-btn  tp-resizeme"
                  href="/"
                  target="_blank"
                  id="slide-67-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['80','50','20','5']"
                  data-width="250"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:0.9;sY:0.9;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;fb:20px;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[50,50,50,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[50,50,50,0]"
                  style={{
                    cursor: "pointer",
                    textDecoration: "None",
                    zIndex: "19",
                    lineHeight: "45px",
                  }}
                >
                  <span className="impl_btn">GET STARTED </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="impl_searchbox_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_search_box custom_select">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="impl_select_boxes">
                      {selectBoxes.map((sb) => (
                        <select>
                          <option>{sb.option}</option>
                          <option value="1">{sb.o1}</option>
                          <option value="2">{sb.o2}</option>
                          <option value="3">{sb.o3}</option>
                          <option value="4">{sb.o4}</option>
                        </select>
                      ))}
                      <div className="price_range">
                        <label>price range</label>
                        <input
                          type="text"
                          id="range_24"
                          name="ionRangeSlider"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="impl_search_btn">
                      <button className="impl_btn">search vehicle</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_welcome_wrapper impl_bottompadder80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="impl_welcome_img">
                <img
                  src={welcome_img}
                  alt="Welcome"
                  className="img-responsive"
                ></img>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="impl_welcome_text">
                <h1>Welcome to reselling cars</h1>
                <div className="panel-group" id="accordion">
                  {panelGroup.map((pg) => (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle collapsed"
                            data-bs-toggle="collapse"
                            data-parent="#accordion"
                            href={pg.href}
                          >
                            {pg.heading}
                          </a>
                        </h4>
                      </div>
                      <div
                        id={pg.id}
                        className="panel-collapse collapse in show"
                      >
                        <div className="panel-body">{pg.panelbody}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_service_wrapper">
        <div className="impl_service_car">
          <img src="assets/images/service/service_car.png" alt="" />
        </div>
        <div className="impl_service_video">
          <div className="impl_video_inner">
            <div className="impl_servdo_video">
              <span className="impl_play_icon">
                <a className="impl-popup-youtube" href="/">
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="impl_service_left">
                <div className="impl_service_details">
                  <div className="impl_heading">
                    <h1>service</h1>
                  </div>
                  <div className="impl_timeline_wrapper">
                    <ul className="impl_timeline">
                      <li>
                        <div className="impl_tl_item">
                          <h2>Purchase</h2>
                          <p>
                            Vivamus malesuada orci a sapien rutrum, ut iaculis
                            turpis posuere. Proin mollis sodales.
                          </p>
                          <span className="impl_tl_icon">
                            <i
                              className="fa fa-shopping-basket"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="impl_tl_item impl_tl_item_rt">
                          <h2>sell</h2>
                          <p>
                            Vivamus malesuada orci a sapien rutrum, ut iaculis
                            turpis posuere. Proin mollis sodales.
                          </p>
                          <span className="impl_tl_icon">
                            <i className="fa fa-usd" aria-hidden="true"></i>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="impl_tl_item">
                          <h2>repair</h2>
                          <p>
                            Vivamus malesuada orci a sapien rutrum, ut iaculis
                            turpis posuere. Proin mollis sodales.
                          </p>
                          <span className="impl_tl_icon">
                            <i className="fa fa-wrench" aria-hidden="true"></i>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="impl_featured_wrappar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="impl_heading">
                <h1>Featured Cars</h1>
              </div>
            </div>
            <Card data={details} />
          </div>
        </div>
      </div>

      <div className="impl_help_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 offset-lg-1">
              <div className="impl_help_data">
                <h1>Need Help Finding Perfect Car ?</h1>
                <p>Call Us Now</p>
                <div className="impl_help_no">
                  <span>(+1)202-202-012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_blog_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_heading">
                <h1>Latest Blogs</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="impl_blog_box">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="impl_post_img">
                      <img src={post1} alt="" className="img-fluid" />
                      <span className="impl_pst_date">16 sep</span>
                      <div className="impl_pst_img_icon">
                        <Link to="/" className="fa fa-link"></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="impl_post_data">
                      <h2>
                        <a href="blog_left_sidebar.html">
                          Stories Behind Car Brand Names
                        </a>
                      </h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like). There are many
                        variations of passages of Lorem Ipsum available
                      </p>
                      <div className="impl_pst_info">
                        <div className="impl_pst_admin">
                          <span>
                            <Link to="/">admin</Link>
                          </span>
                          <span>
                            <Link to="/">16 September 2017</Link>
                          </span>
                        </div>
                        <ul className="impl_pst_views">
                          <li>
                            <Link to="/">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              413
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                className="fa fa-comments"
                                aria-hidden="true"
                              ></i>{" "}
                              251
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              ></i>{" "}
                              5
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="impl_blog_box impl_blog_right">
                <div className="row">
                  <div className="col-lg-8 col-md-12 pull-lg-4">
                    <div className="impl_post_data">
                      <h2>
                        <a href="blog_left_sidebar.html">
                          Stories Behind Car Brand Names{" "}
                        </a>
                      </h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like). There are many
                        variations of passages of Lorem Ipsum available
                      </p>
                      <div className="impl_pst_info">
                        <div className="impl_pst_admin">
                          <span>
                            <Link to="/">admin</Link>
                          </span>
                          <span>
                            <Link to="/">16 September 2017</Link>
                          </span>
                        </div>
                        <ul className="impl_pst_views">
                          <li>
                            <Link to="/">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              413
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                className="fa fa-comments"
                                aria-hidden="true"
                              ></i>{" "}
                              251
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                className="fa fa-share-alt"
                                aria-hidden="true"
                              ></i>{" "}
                              5
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 push-lg-8">
                    <div className="impl_post_img">
                      <img src={post2} alt="" className="img-fluid" />
                      <span className="impl_pst_date">16 sep</span>
                      <div className="impl_pst_img_icon">
                        <Link to="/">
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
