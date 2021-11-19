import { atom, selector } from "recoil";

export type ImageObject = {
id: string,
url: string,
count: number
}
export const imageAtom = atom<ImageObject[]>({
  key: "image-atoms",
  default: [],
});
export const modalAtom = atom({
  key: "modal-atom",
  default: "",
});
export const isCount = selector({
  key: "lengthState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const image = get(imageAtom);
    return image;
  },
});
