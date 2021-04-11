export type APIWaste = {
  id?: string;
  description?: string;
  type?: "residual" | "recycle" | "paper" | "bio";
  imageSrc?: string;
  score?: number;
  credits?: string;
};

// frontend to use db.mongo
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getItems(): Promise<APIWaste[]> {
  return await fetchURL<APIWaste[]>("/api/waste-items");
}
export async function getItem(id: number): Promise<APIWaste> {
  return await fetchURL<APIWaste>(`/api/waste-items/${id}`);
}

// export async function getItem(id: number): Promise<APIWaste[]> {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/${id}`
//   );
//   const result = (await response.json()) as APIWaste;
//   const wasteItem = {
//     id: result.id,
//     description: result.description,
//     typeof: result.typeof,
//     imageSrc: result.imageSrc,
//     score: result.score,
//     credits: result.credits,
//   };
//   return wasteItem();
// }

// getItem(1301);
// console.log(1301);
