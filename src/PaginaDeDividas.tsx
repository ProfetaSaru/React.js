import dividaCorpo from "./components/DividaCorpo";
import NavigationBar from "./components/NavigationBar";

function PaginaDividas() {
    const logo = './icons/3135715.png'
    return (
        <div className="container text-center">
            {NavigationBar(logo, false)}
            {dividaCorpo('Fernando', false)}
        </div>
    )
}

export default PaginaDividas