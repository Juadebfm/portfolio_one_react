import React from "react";
import "../index.css";
import Button from "./lcomp/Button";
import { GoArrowUpRight } from "react-icons/go";

import ProjectImage from "../assets/webdesign.png";

const Work = () => {
  return (
    <section className="Work_section">
      <div className="Work_section_container container_pd">
        {/* Write Up Section */}
        <div className="Work_section_head dflex_btw">
          <div className="dflex_btw col">
            <div className="Services_line">
              <div className="line"></div>
              <span className="green">Recent Works</span>
            </div>
            <h2>Some of my favorite projects.</h2>
          </div>
          <Button btnText="View All Projects" className="btn_no_bg" />
        </div>
        {/* Work Boxes */}
        <div className="Work_project_boxes">
          <div className="Work_project_box">
            <div className="project_wrapper">
              <img
                src={ProjectImage}
                alt=" Project"
                className="project-image"
              />
              <h3>Alana - Live data App</h3>
            </div>
            <Button
              btnText="See Project"
              className="btn_no_bg_"
              btnIcon={<GoArrowUpRight />}
              space={" "}
            />
          </div>
          <div className="Work_project_box">
            <div className="project_wrapper">
              <img
                src={ProjectImage}
                alt=" Project"
                className="project-image"
              />
              <h3>Wohoo - Weather App</h3>
            </div>
            <Button
              btnText="See Project"
              className="btn_no_bg_"
              btnIcon={<GoArrowUpRight />}
              space={" "}
            />
          </div>
          <div className="Work_project_box">
            <div className="project_wrapper">
              <img
                src={ProjectImage}
                alt=" Project"
                className="project-image"
              />
              <h3>Pagee - Real Estate UI Kit</h3>
            </div>
            <Button
              btnText="See Project"
              className="btn_no_bg_"
              btnIcon={<GoArrowUpRight />}
              space={" "}
            />
          </div>
          <div className="Work_project_box">
            <div className="project_wrapper">
              <img
                src={ProjectImage}
                alt=" Project"
                className="project-image"
              />
              <h3>Keikoko - Agency Web</h3>
            </div>
            <Button
              btnText="See Project"
              className="btn_no_bg_"
              btnIcon={<GoArrowUpRight />}
              space={" "}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
