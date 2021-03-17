export type APIWaste = {
  id: number;
  description: string;
  typeof: "residual" | "recycle" | "paper" | "bio";
  imageSrc: string;
  score: number;
  credits: string;
};

// // frontend to use db.mongo
// async function fetchURL<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return await response.json();
// }

// export async function getItems(): Promise<APIWaste[]> {
//   return await fetchURL<APIWaste[]>("/api/waste-items");
// }
