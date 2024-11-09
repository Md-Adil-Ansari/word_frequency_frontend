import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DarkBackgroundImage from "./components/DarkBackground";

const App = () => {
  return (
    <div>
      <DarkBackgroundImage />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
