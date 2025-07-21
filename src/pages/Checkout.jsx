import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: ""
  });

  const cart = [
    { id: 1, name: "Producto 1", price: 1200, quantity: 1 },
    { id: 2, name: "Producto 2", price: 750, quantity: 2 }
  ];

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra realizada con éxito");
    // Aquí iría la lógica para enviar el pedido
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Datos de envío</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="zip"
            placeholder="Código postal"
            value={form.zip}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700"
        >
          Finalizar compra
        </button>
      </form>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Resumen de compra</h2>
        <ul className="divide-y">
          {cart.map((item) => (
            <li key={item.id} className="py-3 flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}
