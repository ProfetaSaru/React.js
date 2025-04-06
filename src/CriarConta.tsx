import { useLocation } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";

function CreateAccountPage() {
  const location = useLocation();
  //const formData = location.state || {}; // Add fallback

  return (
    <div className="container text-center">
      <div className="row p-5 align-items-start">
        <div className="col">{CreateAccount()}</div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
