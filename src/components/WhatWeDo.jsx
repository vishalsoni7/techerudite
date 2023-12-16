import { whatWeDoData } from "../data";
import { TimeLine } from "./Timeline";

export const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h1>WHAT WE DO</h1>
      <h2> What do we do to remembered for? </h2>
      <p>
        To connect smart actions and execute it with laser-like focus is our
        success mantra. Exploring client’s business for online exposure is an
        ultimately worthy goal for us. We want to be a voice of client’s
        success.
      </p>
      <button>GET IN TOUCH</button>

      <div className="what-we-do-child-div">
        {whatWeDoData?.map(({ name, Img, quantity }) => (
          <div className="what-we-do-card" key={name}>
            {Img}
            <h1> {quantity} </h1> <span> {name} </span>
          </div>
        ))}
      </div>
    </div>
  );
};
