export type APIWaste = {
  id: number;
  description: string;
  typeof: "rest" | "recycle" | "paper" | "bio";
  image: string;
  score: number;
  credits: string;
};
