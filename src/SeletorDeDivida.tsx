import dividaCorpo from "./components/DividaCorpo";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

function PaginaDividas() {
  const logo = "./icons/3135715.png";
  return (
    <div className="text-center">
      {NavigationBar(logo, false)}
      <div className="container">
        {dividaCorpo("Fernando", true)}
      </div>
      {Footer()}
    </div>
  );
}

export default PaginaDividas;
