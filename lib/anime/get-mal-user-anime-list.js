import fetch from "cross-fetch";

export const anime_mal_user_list = (config) => {
  return () => {
    if (config.user_name == undefined) {
      throw new ReferenceError("user_name perameter is needed.");
    }
    const fn = () =>
      fetch(
        `https://api.myanimelist.net/v2/users/${config.user_name}/animelist?${config.status === undefined ? "" : `status=${config.status}&`}limit=${config.limit}&offset=${config.offset}${config.sort === undefined ? "" : `&sort=${config.sort}`}`,
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
