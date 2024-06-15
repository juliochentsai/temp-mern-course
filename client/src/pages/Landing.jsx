import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
// import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I am baby whatever locavore distillery lumbersexual, neutral milk
            hotel succulents vexillologist health goth butcher la croix. Wolf
            lyft listicle hammock salvia everyday carry vape. 8-bit tousled vice
            vegan. Salvia hoodie mukbang intelligentsia, irony narwhal
            typewriter.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
