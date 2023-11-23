const handler = async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=-34.66667&lon=-58.66667&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&&lang=es`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
