export type APIWaste = {
  id: number;
  description: string;
  typeof: "residual" | "recycle" | "paper" | "bio";
  image: string;
  score: number;
  credits: string;
};
