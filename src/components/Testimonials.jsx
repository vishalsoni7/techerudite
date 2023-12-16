import { companyData } from "../data";
import { ReactComponent as CEO } from "../savgfiles/ceo.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <h2> Few Words From Our Clients </h2>
        <h1>TESTIMONIALS</h1>

        <span>
          Some valuable words from our loving and ever-growing customers.
        </span>

        <p>
          For my react native applications, Tejash and his team has provided me
          very professional and captivative app. They worked dedicatedly and
          keep me updated with project updates. I think that is the best support
          from the team for me. Thank you for the best application.
        </p>

        <div className="ceo-div">
          <MdArrowBackIosNew className="right-left-arrow" />

          <div className="ceo-div-child">
            <CEO />
            <h3> Rashiem Page </h3>
            <p> CEO </p>
          </div>

          <MdArrowForwardIos className="right-left-arrow" />
        </div>
      </div>
      <div className="clients">
        {companyData?.map(({ id, Company }) => (
          <div key={id}>{Company}</div>
        ))}
      </div>
    </>
  );
};
