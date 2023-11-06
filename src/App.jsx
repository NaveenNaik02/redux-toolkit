import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading, isError } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="loading">
        <h1>Oops..! Somthing went wrong.</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
