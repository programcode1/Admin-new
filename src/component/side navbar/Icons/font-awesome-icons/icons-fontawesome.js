import React from "react";
import "../../../../font-awesome-4.7.0/css/font-awesome.min.css";
import fontawesome from "./fontawesome.json";
import "./font-awesome-icon.css";
function Fontawesome_icons() {
  //version 4.6
  var mydata = fontawesome[0].name;

  const iconslist = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //version 4.5
  var mydata = fontawesome[0].name_20;

  const iconslist2 = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //version 4.5
  var mydata = fontawesome[0].name_78;

  const iconslist3 = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //version 4.4
  var mydata = fontawesome[0].name_41;

  const iconslist4 = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //version 4.3
  var mydata = fontawesome[0].name_43;

  const iconslist5 = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //version 4.2
  var mydata = fontawesome[0].name_310;

  const iconslist6 = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //spinner icon
  var mydata = fontawesome[0].name_spinner;

  const spinner_icon = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`animation-spin ${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //form control icon
  var mydata = fontawesome[0].name_form_control;

  const form_control_icon = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //currancy_icons
  var mydata = fontawesome[0].currancy_icons;

  const currancy_icons = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //text_editor_icons
  var mydata = fontawesome[0].text_editor_icons;

  const text_editor_icons = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //dirctional_icons
  var mydata = fontawesome[0].dirctional_icons;

  const dirctional_icons = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //brand_icons
  var mydata = fontawesome[0].brand_icons;

  const brand_icons = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  //medical_icons
  var mydata = fontawesome[0].medical_icons;

  const medical_icons = mydata.map((obj) => {
    return (
      <div className="col-md-3 mb-3">
        <span className={`${obj}`}></span>
        <p className="text-muted">{obj}</p>
      </div>
    );
  });

  return (
    <div className="bg-color-body">
      <div className="container text-white">
        <h4 className="py-4 font-22">Font Awesome</h4>
        <div className="bg-color mdi-icons">
          <h4 className="pt-4 mx-1 pb-1 px-3  mb-4">Examples</h4>
          <div className="row p-2 text-center">{iconslist}</div>
          <div className="row p-2 text-center">{iconslist2}</div>
          <div className="row p-2 text-center">{iconslist3}</div>
          <div className="row p-2 text-center">{iconslist4}</div>
          <div className="row p-2 text-center">{iconslist5}</div>
          <div className="row p-2 text-center">{iconslist6}</div>
          <div className="mx-4 spinner-div">
            <p>
              These icons work great with the <code>fa-spin</code> class. Check
              out the spinning icons example.
            </p>
          </div>
          <div className="row p-2 text-center">{spinner_icon}</div>
          <div className="row p-2 text-center">{form_control_icon}</div>
          <div className="row p-2 text-center">{currancy_icons}</div>
          <div className="row p-2 text-center">{text_editor_icons}</div>
          <div className="row p-2 text-center">{dirctional_icons}</div>
          <div className="mx-4 mb-3 spinner-div">
            <div>
              <ul>
                <li>
                  All brand icons are trademarks of their respective owners.
                </li>
                <li>
                  The use of these trademarks does not indicate endorsement of
                  the trademark holder by Font Awesome, nor vice versa.
                </li>
              </ul>
            </div>
          </div>
          <div className="row p-2 text-center">{brand_icons}</div>
          <div className="row p-2 text-center">{medical_icons}</div>
        </div>
      </div>
    </div>
  );
}

export default Fontawesome_icons;
