import fetch from "cross-fetch";

export const anime_mal_user_list = (config) => {
  return () => {
    if (config.user_name == undefined) {
      throw new ReferenceError("user_name perameter is needed.");
    }
    const fn = () =>
      fetch(
        `${config.url}/users/${config.user_name}/animelist?fields=${config.fields}&limit=${config.limit}`,
        {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID": config.client_id,
          },
        }
      )
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error(
              `MAL error occurred. ${res.status}: ${await res.text()}`
            );
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };
};
