import { createContext} from "react";
import Swal from "sweetalert2";
import useProducts from "../hooks/useProducts";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const {product} = useProducts()

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        Swal.fire({
          icon: 'success',
          title: 'Cantidad actualizada',
          text: `${product.title} ya estaba en el carrito. Se aumentó la cantidad.`,
          timer: 1200,
          showConfirmButton: false,
        });
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: `${product.title} fue agregado al carrito.`,
        timer: 1200,
        showConfirmButton: false,
      });
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: `${product.title} fue eliminado del carrito.`,
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;