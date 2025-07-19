import { useState } from 'react';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');
  const apiKey = '4d507bef141cf821e38f1f93c895e2ff';

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!response.ok) throw new Error('Ciudad no encontrada');
      const data = await response.json();
      const { name, main, weather } = data;
      setWeatherInfo(`${name}: ${main.temp} °C, ${weather[0].description}`);
    } catch (err) {
      setWeatherInfo(err.message);
    }
  };

  return (
    <>
      
    <form onSubmit={fetchWeather} className="flex items-center gap-2 text-cyan-600 ml-6">
      <input
        type="text"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoComplete="off"
        className="px-1 py-0.5 w-20 border border-cyan-500 rounded text-xs outline-none"
      />
      <button
        type="submit"
        className="text-xs px-2 py-0.5 bg-gray-800 text-white rounded hover:bg-cyan-600 transition-colors"
      >
        Ir
      </button>
      {weatherInfo && (
        <p
          onClick={() => setWeatherInfo('')}
          className="text-gray-500 text-[10px] truncate max-w-[150px] cursor-pointer hover:text-gray-700 transition"
          title="Haz clic para borrar"
        >
          {weatherInfo}
        </p>
      )}
    </form>
    </>
  );
};

export default Weather;
