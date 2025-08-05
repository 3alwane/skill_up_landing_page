import { MenuItem } from "./components/nav-bar";
import { menu } from "./data/nav-bar-data";

export function removeHash(str: string) {
  return str.replace(/#/g, "");
}

export function getHashPlusName(
  navMenu: MenuItem[],
  title: (typeof menu)[number]["title"]
) {
  const findItem = navMenu.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  if (findItem) {
    return findItem.url.toString();
  }

  return "#";
}
