import { expertiesData } from "../data";

export const Experties = () => (
  <div className="experties">
    <h1>Our Expertise</h1>
    <div className="experties-child">
      {expertiesData?.map(({ name, CardImg }) => (
        <div className="card" key={name}>
          {CardImg}
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  </div>
);
