import React from "react";
import { IoMdSearch } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

const MenuButton = ({ label }) => <button>{label}</button>;

const SelectOption = ({ label }) => <option>{label}</option>;

export const About = () => {
  return (
    <div className="about">
      <img src="Rectangle 80.svg" className="rectangle-img" />
      <div className="about-input-div">
        <img src="logo.svg" alt="logo.svg" />

        <div className="about-input">
          <MenuButton label="HOME" />
          <select>
            <SelectOption label="WHAT WE DO" />
          </select>
          <select>
            <SelectOption label="HIRE EXPERTS" />
          </select>
          <MenuButton label="COMPANY" />
          <MenuButton label="SAY HELLO!" />
          <IoMdSearch />
          <CgMenuRight />
        </div>
      </div>

      <img src="round.svg" alt="" className="round-one" />

      <div className="about-container-about-content">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the <br />
          1500s,
        </p>
      </div>

      <img src="Ellipse 163.svg" alt="" className="round-two" />

      <img src="Team-cuate 1.svg" alt="team" className="team-img" />
    </div>
  );
};
