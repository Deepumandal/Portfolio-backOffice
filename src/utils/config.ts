
export const configuration = () => {
  console.log(process.env)
  if (process.env.NODE_ENV === "production") {
    return {
      baseUrl: process.env.BASE_URL,
      port: process.env.PORT || 7001,
    };
  } else
    return {
      baseUrl: process.env.LOCAL_BASE_URL,
      port: process.env.PORT || 7001,
    };
};
