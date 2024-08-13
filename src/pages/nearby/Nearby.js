import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Select, { components } from "react-select";
import { Link } from "react-router-dom";
import facebook_logo from "../../assets/images/company/facebook-logo.png";
import google_logo from "../../assets/images/company/google-logo.png";
import android from "../../assets/images/company/android.png";
import bg6 from "../../assets/images/hero/bg6.png";
import Bg5 from "../../assets/images/hero/bg5.jpg";
import Navbar from "../../components/Navbar";
import PopularCategories from "../../components/Popular-Categories";
import PopularJobsfour from "../../components/Popular-Jobs-four";
import BestCompanies from "../../components/Best-companies";
import Feature from "../../components/Feature";
import Card from "../../components/card";
import News from "../../components/News";
import Footer from "../../components/Footer";
import JobCounter from "../../components/Job-counter";
import { BiBriefcaseAlt2, BiCheckCircle } from "react-icons/bi";
import { PiMapPin } from "react-icons/pi";
const optionsOne = [
  { value: "AF", label: "All Over Punjab" },
  { value: "AZ", label: " Amritsar" },
  { value: "BS", label: "Bathinda" },
  { value: "BH", label: "Hoshiarpur" },
  { value: "CA", label: "Gurdaspur" },
  { value: "CV", label: "Barnala" },
  { value: "DK", label: "Fridkot" },
  { value: "DJ", label: "Jalandhar" },
  { value: "ER", label: "Ludhiana" },
  { value: "EE", label: "Mansa" },
  { value: "GM", label: "Pathankot" },
];
const optionsTwo = [
  { value: "1", label: "Goverment" },
  { value: "2", label: "private" },
];
const optionThree = [
  { value: "1", label: "No Schooling" },
  { value: "2", label: "5th" },
  { value: "3", label: "8th" },
  { value: "4", label: "10th" },
  { value: "5", label: "12th" },
  { value: "6", label: "Diploma After 10th" },
  { value: "7", label: "Diploma After 12th" },
  { value: "8", label: "ITI" },
  { value: "9", label: "Graduate" },
  { value: "10", label: "PHD" },
];
const optionFour = [
  { value: "1", label: "No Experience" },
  { value: "2", label: "1 Experience" },
  { value: "3", label: "2 Experience" },
  { value: "4", label: "3 Experience" },
  { value: "5", label: "4 Experience" },
  { value: "6", label: "5 Experience" },
  { value: "7", label: "6 Experience" },
  { value: "8", label: "7 Experience" },
  { value: "9", label: "8 Experience" },
  { value: "10", label: "9 Experience" },
  { value: "11", label: "10 Experience" },
  { value: "12", label: "11 Experience" },
  { value: "13", label: "12 Experience" },
];
const optionFive = [
  { value: "1", label: "Back officer Executive" },
  { value: "2", label: "PHP Devloper" },
  { value: "3", label: "Sales Executive" },
  { value: "4", label: "Computer Operator" },
  { value: "5", label: "Assintant Manager" },
];

const Nearby = () => {
  return (
    <div>
      <section className="relative w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Candidates</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobs</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Candidates</li>
                    </ul>
                </div>
            </section>
            <div className="d-flex" id="reserve-form">
              <div className="md:w-5/6 mx-auto">
                <div className="lg:col-span-10 mt-8">
                  <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                    <form action="#">
                      <div className="registration-form text-dark text-start">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                          <div className="filter-search-form relative filter-border">
                            <BiBriefcaseAlt2 className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Job Type"
                              options={optionsTwo}
                            />
                          </div>

                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Location"
                              options={optionsOne}
                            />
                          </div>

                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Qualification"
                              options={optionThree}
                            />
                           </div>
                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Experience"
                              options={optionFour}
                            />
                          </div>
                        </div>
                        <p
                          style={{
                            textAlign: "center",
                            width: "100%",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          Or
                        </p>
                        <div className="filter-search-form relative filter-border">
                          <PiMapPin className="icons" />
                          <Select
                            className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                            placeholder="Enter Job Title or Description"
                            options={optionFive}
                          />
                        </div>
                      </div>

                      <input
                        type="submit"
                        id="search"
                        name="search"
                        style={{ marginTop: 10 }}
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                        value="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Nearby
