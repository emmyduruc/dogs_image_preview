export type Props = {
  img: string;
  show: boolean;
  onHide: () => void;
};
export type Post = {
  id: string;
  url: string;
  count: number;
};

export type ImageProps = {
  result: Post[];
};
