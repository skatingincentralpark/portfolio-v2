import { getPhotos } from "@/utils/getPhotos";
import Photos from "./Photos";

export default async function PhotographyPage() {
  const allPhotos = await getPhotos();
  const landscapePhotos = allPhotos.filter((x) => x.width > x.height);
  const portraitPhotos = allPhotos.filter((x) => x.height > x.width);
  const photos = [...landscapePhotos, ...portraitPhotos];

  return <Photos photos={photos} />;
}
