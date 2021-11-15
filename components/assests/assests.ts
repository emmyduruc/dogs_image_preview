import { atom, selector } from "recoil";
import axios from "axios";

export const countAtom = atom<number[]>({
  key: "count-preview",
  default: new Array(50).fill(0),
});

export const imageAtom = atom<string[]>({
  key: "image-atoms",
  default: [],
});

export const imageQuery = selector({
  key: "imageQueries",
  get: async () => {
    const images = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    return images.data.message;
  },
});
export const selectedItems = atom<string[]>({
  key: "selectedItems",
  default: [],
});
export const cartCount = selector({
  key: "cartCount",
  get: ({ get }) => {
    return get(selectedItems).length;
  },
});