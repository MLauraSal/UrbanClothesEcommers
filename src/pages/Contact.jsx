// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>

      <form
        action="https://formspree.io/f/movljpdw"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        
        {/* Anti-spam honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
