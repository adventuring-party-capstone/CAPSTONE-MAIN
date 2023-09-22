const base_url = "http://localhost:8080/api";

export const fetchAllDrinks = async () => {
     try {
          const response = await fetch(`${base_url}/drinks`);
          const result = await response.json();
          console.log("result from fetchAllDrinks ", result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
