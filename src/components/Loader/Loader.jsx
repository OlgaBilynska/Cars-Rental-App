import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#3470ff", "#0b44cd", "#121417", "#51E5FF", "#429EA6"]}
    />
  );
};

export default Loader;
