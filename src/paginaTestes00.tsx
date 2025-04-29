// NextPage.tsx
import { useLocation } from "react-router-dom";

function PaginaTeste00() {
  const location = useLocation();
  const formData = location.state || {}; // Add fallback

  return (
    <div>
      <h1>Next Page</h1>
      <p>Form data: {JSON.stringify(formData)}</p>
    </div>
  );
}

export default PaginaTeste00;
