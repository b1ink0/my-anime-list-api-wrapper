import { anime } from "./lib/anime.js";
import { user_animelist } from "./lib/user-animelist.js";
import { forum } from "./lib/forum.js";
import { manga } from "./lib/manga.js";
import { user_mangalist } from "./lib/user-mangalist.js";
import { user } from "./lib/user.js";

export default () => {
  return {
    anime: anime,
    user_animelist: user_animelist,
    forum: forum,
    manga: manga,
    user_mangalist: user_mangalist,
    user: user,
  };
};
