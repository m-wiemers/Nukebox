// export an type APITracks for better formatting in index
export type APISong = {
  id: string;
  image: string;
  title: string;
  artist: string;
};

// export an asynch Function "getTrack"
export async function getSongs() {
  // Add Const "responce" and wait for an promise from url
  const response = await fetch(`/api/tracks`);
  // Add const from type "APITrack" and wait for promise in json-format
  const songs: APISong[] = await response.json();
  //return the const tracks
  return songs;
}
