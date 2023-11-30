import { Link } from "react-router-dom";
import {
  HomeWrapperStyled,
  ButtonHomeStyled,
  HomeTitleStyled,
  HomeTextStyled,
  HomeSubTextStyled,
  HomeTextEmphasizedStyled,
  HomeSubtitleStyled,
  HomeTextListStyled,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeWrapperStyled>
      <HomeTitleStyled>Welcome to Drive Wonders Car Rentals</HomeTitleStyled>
      <HomeSubTextStyled>
        Unleash your journey with Drive Wonders! From stylish sedans to
        family-friendly SUVs, find the perfect ride for every adventure. Easy
        booking, exceptional service, and a commitment to safety—your memorable
        road trip starts here.
      </HomeSubTextStyled>

      <HomeSubtitleStyled>Why Choose DriveWonders?</HomeSubtitleStyled>
      <HomeTextListStyled>
        <HomeTextStyled>
          <HomeTextEmphasizedStyled>Versatile Fleet:</HomeTextEmphasizedStyled>{" "}
          Explore our extensive range of vehicles, from luxury rides to
          budget-friendly options, ensuring there's a perfect match for every
          occasion.
        </HomeTextStyled>
        <HomeTextStyled>
          <HomeTextEmphasizedStyled>Simple Booking:</HomeTextEmphasizedStyled>
          Our user-friendly online booking system makes it easy to reserve your
          chosen car with just a few clicks. No hidden fees, no
          complications—just seamless service.{" "}
        </HomeTextStyled>
        <HomeTextStyled>
          <HomeTextEmphasizedStyled>
            Exceptional Service:
          </HomeTextEmphasizedStyled>
          Experience top-notch customer service from our dedicated team. We are
          here to assist you at every step, making your car rental experience
          hassle-free and enjoyable.
        </HomeTextStyled>
        <HomeTextStyled>
          <HomeTextEmphasizedStyled>Safety First:</HomeTextEmphasizedStyled>{" "}
          Your safety is our priority. Our vehicles undergo rigorous maintenance
          checks, and we implement the highest standards to ensure a secure and
          reliable ride. Discover the joy of the open road with DriveWonders Car
          Rentals. Your adventure begins here!
        </HomeTextStyled>
      </HomeTextListStyled>
      <Link to="/catalog">
        <ButtonHomeStyled>Explore Now</ButtonHomeStyled>
      </Link>
    </HomeWrapperStyled>
  );
};

export default HomePage;
