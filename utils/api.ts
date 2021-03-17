export type APIWaste = {
  id: number;
  description: string;
  typeof: "residual" | "recycle" | "paper" | "bio";
  imageSrc: string;
  score: number;
  credits: string;
};
