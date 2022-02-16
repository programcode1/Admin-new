import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
//fontaswsom icon

//compoents

import Sidemenu from "./component/side navbar/sidemenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//dashboard
import Dashboard from "./component/dashboard/dashboard";

//UI-compoents

import Compoent from "./component/side navbar/UI-element/compoent/Compoent";
import TabAccordions from "./component/side navbar/UI-element/tabs&accordions/tabs&accordions";
import Sweet_alert from "./component/side navbar/UI-element/sweet-alert";
import Progressbar from "./component/side navbar/UI-element/progressbar";
import Panels from "./component/side navbar/UI-element/panels/panels";
import Modals from "./component/side navbar/UI-element/modals";
import Grid from "./component/side navbar/UI-element/grid";
import Buttons from "./component/side navbar/UI-element/buttons/buttons";
import Alerts from "./component/side navbar/UI-element/alerts/alerts";

//Forms element
import Generale from "./component/side navbar/Forms element/genralelement";
import Formvalidation from "./component/side navbar/Forms element/fromvalidation";
import Advancedform from "./component/side navbar/Forms element/advancefrom";
import Weditor from "./component/side navbar/Forms element/WYSIWYG_Editor";
import Fileuploader from "./component/side navbar/Forms element/multiplefileupload";

//Typography
import TypoGraphy from "./component/side navbar/Typography/typography";

//Tables element
import Basictable from "./component/side navbar/tables/basic tables/basictable";
import Data_table from "./component/side navbar/tables/data tables/data-table";
import Responsivetable from "./component/side navbar/tables/responsive tables/responsive-table";
import Editable from "./component/side navbar/tables/editable tables/edit-table";

//Pages component
import Login_page from "./component/side navbar/Pages/loginpage/login-page";
import Register_page from "./component/side navbar/Pages/registerpage/register-page";
import Recover_password_page from "./component/side navbar/Pages/recover-password/Recover-password";
import Lock_screen_page from "./component/side navbar/Pages/lock-screen-page/Lock-screen";
import Error_404_page from "./component/side navbar/Pages/error-404-page/Error-404";
import Error_500_page from "./component/side navbar/Pages/error-500-page/Error-500";
import Blank_page from "./component/side navbar/Pages/blank-page/Blank-page";
import Timeline_page from "./component/side navbar/Pages/timeline-page/Timeline-page";
import Invoice_page from "./component/side navbar/Pages/invoice-page/Invoice-page";
import Directory_page from "./component/side navbar/Pages/directory-page/Directory-page";

// //Icons component
// import Mdi_icons from "./component/side navbar/Icons/matrial-design-icons/matrial-design-icon-page";
// import Ion_icons from "./component/side navbar/Icons/ion-icons/icons-ion";
// import Fontawesome_icons from "./component/side navbar/Icons/font-awesome-icons/icons-fontawesome";
// import Themify_icons from "./component/side navbar/Icons/themify-icons/icons-themify";

//charts component
import Chart_js from "./component/side navbar/charts/chartJs/chart-js";
import Morris_js from "./component/side navbar/charts/morris-js";
import Float_chart from "./component/side navbar/charts/float-chart";
import Other_Charts from "./component/side navbar/charts/other-charts";

//Maps component
import Vector_map from "./component/side navbar/maps/vectorMap.js";
import Google_Map from "./component/side navbar/maps/googleMap.js";

//Calander
import Calendar_event from "./component/side navbar/calander";
function App() {
  return (
    <div className="App ">
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/login-page" component={Login_page} exact />
            <Route path="/register-page" component={Register_page} exact />
            <Route
              path="/recover-password-page"
              component={Recover_password_page}
              exact
            />
            <Route
              path="/lock-screen-page"
              component={Lock_screen_page}
              exact
            />
            <Route path="/404-page" component={Error_404_page} exact />
            <Route path="/500-page" component={Error_500_page} exact />

            <div>
              <Sidemenu />

              <div className="right-side">
                {/*UI - Component */}
                <Route path="/" component={Dashboard} exact />
                <Route path="/ui-componets" component={Compoent} exact />
                <Route path="/ui-buttons" component={Buttons} exact />
                <Route path="/ui-panels" component={Panels} exact />
                <Route
                  path="/ui-tabs&accordions"
                  component={TabAccordions}
                  exact
                />
                <Route path="/ui-modals" component={Modals} exact />
                <Route path="/ui-progressbar" component={Progressbar} exact />
                <Route path="/ui-alerts" component={Alerts} exact />
                <Route path="/ui-sweet-alert" component={Sweet_alert} exact />
                <Route path="/ui-grid" component={Grid} exact />

                {/*Forms element*/}
                <Route path="/forms-element" component={Generale} exact />
                <Route
                  path="/forms-validation"
                  component={Formvalidation}
                  exact
                />
                <Route path="/forms-advance" component={Advancedform} exact />
                <Route path="/forms-wysiwyg" component={Weditor} exact />
                <Route path="/forms-uploads" component={Fileuploader} exact />

                {/*Typography*/}
                <Route path="/typography" component={TypoGraphy} exact />

                {/*Table */}
                <Route path="/tables-basic" component={Basictable} exact />
                <Route path="/tables-data" component={Data_table} exact />
                <Route
                  path="/tables-responsive"
                  component={Responsivetable}
                  exact
                />
                <Route path="/tables-editable" component={Editable} exact />

                {/*Pages*/}
                <Route path="/blank-page" component={Blank_page} exact />
                <Route path="/timeline-page" component={Timeline_page} exact />
                <Route path="/invoice-page" component={Invoice_page} exact />
                <Route
                  path="/directory-page"
                  component={Directory_page}
                  exact
                />

                {/* Icons  */}
                {/* <Route path="/icons-matrial" component={Mdi_icons} exact />
                <Route path="/icons-ion" component={Ion_icons} exact /> */}
                {/* <Route
                  path="/icons-fontawesome"
                  component={Fontawesome_icons}
                  exact
                /> */}
                {/*
                <Route path="/icons-themify" component={Themify_icons} exact /> */}

                {/* Charts */}
                <Route path="/charts-chartjs" component={Chart_js} exact />
                <Route path="/charts-morris" component={Morris_js} exact />
                <Route path="/charts-float" component={Float_chart} exact />
                <Route path="/charts-others" component={Other_Charts} exact />

                {/* Maps */}
                <Route path="/maps-vector" component={Vector_map} exact />
                <Route path="/maps-google" component={Google_Map} exact />

                {/* Calnader */}
                <Route path="/calendar" component={Calendar_event} exact />
              </div>
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
