const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const loadDataFromMongoDB = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };
  
  const response = await fetch(`${BACKEND_URL}/cities`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();

  return data;
};


export default loadDataFromMongoDB;