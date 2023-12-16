export const Input = () => {
  return (
    <div className="input">
      <h3>GET IN TOUCH</h3>
      <h1>Contact Us</h1>

      <div className="input-child">
        <div className="input-div">
          <input type="text" placeholder="Name*" className="name-email" />
          <input type="text" placeholder="Email*" className="name-email" />
        </div>
        <input type="text" placeholder="Subject*" className="imput-large" />
        <textarea placeholder="Your Message*" cols="30" rows="10"></textarea>
      </div>

      <button>SUBMIT</button>
    </div>
  );
};
