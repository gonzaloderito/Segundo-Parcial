const handler = async (req, res) => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=-34.66667&lng=-58.66667&formatted=0`
    ).then((res) => res.json());
      
    res.status(200).json(response);
  };
  
  export default handler;
  