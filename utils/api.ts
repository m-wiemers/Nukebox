// export an type APITracks for better formatting in index
export type APISong = {
  id: string;
  image: string;
  title: string;
  artist: string;
  path: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const responce = await fetch(url);
  return await responce.json();
}

export async function getSongs(): Promise<APISong[]> {
  return await fetchURL<APISong[]>("/api/songs");
}

export async function getSong(id: string): Promise<APISong> {
  return await fetchURL<APISong>(`/api/songs/${id}`);
}

export async function deleteSong(id: string) {
  const responce = await fetch(`/api/songs/${id}`, {
    method: "DELETE",
  });
  return responce;
}
