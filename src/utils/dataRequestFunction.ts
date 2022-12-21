import axios from "axios";

export const dataRequestFunction = async (url: string) => {
  return await axios
    .get(url)
    .then((response) => {
      return {
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
    });
};
