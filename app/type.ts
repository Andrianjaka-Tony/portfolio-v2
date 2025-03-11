export type ProjectAsset = {
  source: string;
  video: boolean;
};

export type Project = {
  id: string;
  name: string;
  image: string;
  descriptions?: string[];
  assets?: ProjectAsset[];
};
