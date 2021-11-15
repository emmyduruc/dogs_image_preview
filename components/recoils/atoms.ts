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
export const modalAtom = atom({
  key: "modal-atom",
  default: "",
});
