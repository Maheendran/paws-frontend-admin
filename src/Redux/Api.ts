export const url = "https://www.furnica.shop/admin";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("admin-token"),
    },
  };

  return headers;
};
