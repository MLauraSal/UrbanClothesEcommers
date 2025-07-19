import React from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tu carrito</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="mb-4">Tu carrito está vacío.</p>
          <Link to="/">
            <Button variant="outlined" color="primary">
              Seguir comprando
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border p-4 rounded shadow-sm"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 h-24 object-contain border rounded"
                  crossOrigin="anonymous"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-600">Precio: ${item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <Button size="small" onClick={() => decreaseQuantity(item.id)}>
                      −
                    </Button>
                    <span>{item.quantity}</span>
                    <Button size="small" onClick={() => increaseQuantity(item.id)}>
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Typography variant="body1" className="text-gray-800 font-medium">
                    ${item.price * item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => removeFromCart(item.id)}
                    color="error"
                    size="small"
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>

          <Divider />

          <div className="flex justify-between items-center mt-6">
            <Typography variant="h6">Total: ${cartTotal.toFixed(2)}</Typography>
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="outlined" color="secondary">
                  Seguir comprando
                </Button>
              </Link>
              <Link to="/checkout">
                <Button variant="contained" color="primary">
                  Finalizar compra
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
