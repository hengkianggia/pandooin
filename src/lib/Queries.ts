// import { useQuery } from "@tanstack/react-query";
// import { getData } from "./HTTPConnect";

import { getData } from "./HTTPConnect";

// export const getArticle = () => {
//   const quer = useQuery({
//     queryKey: ["makms"],
//     queryFn: getData,
//   });
// };

// export const article = async () => {
//   try {
//     const response = await getData();
//     const data = await response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getDatas = async () => {
  const response = await getData({ url: "itinerary?highlight=true" });

  const data = response.data;
  return data;
};

export const getArticle = async () => {
  const response = await getData({ url: "article" });

  const data = response.data;
  return data;
};
