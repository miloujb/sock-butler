import Prismic from "prismic-javascript"

export const apiEndpoint = "https://sock-butler.cdn.prismic.io/api/v2"

export const accessToken = "";

//create client

export const client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
