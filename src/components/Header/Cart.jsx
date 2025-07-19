import React from 'react'
import { Link } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../hooks/useCart";


const Cart = ({ isOpen, toggleCart }) => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleCart}>
      <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="h6" color="#3f51b5">Shopping Cart</Typography>
          <IconButton onClick={toggleCart}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          {cartItems.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Cart is empty
            </Typography>
          ) : (
            cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 2,
                  p: 1,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                    borderRadius: 8,
                    border: "1px solid #ccc",
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price * item.quantity}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
                    <Button size="small" onClick={() => decreaseQuantity(item.id)}>
                      -
                  </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button size="small" onClick={() => increaseQuantity(item.id)}>
                      +
                    </Button>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  size="small"
                  color="error"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ))
          )}
        </Box>

        {/* Footer */}
        <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
          {cartItems.length > 0 && (
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Total: ${cartTotal.toFixed(2)}
            </Typography>
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" color= "error" onClick={toggleCart}>
              Close
            </Button>
            <Button variant="contained" color="primary">
             <Link to="/checkout" >
              Checkout
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
