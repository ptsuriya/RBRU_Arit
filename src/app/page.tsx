
import Image from "next/image";
import NewsPages from "../component/NewsFirstPage";
import GalleryPages from "../component/GalleryFirstPage";


export default function Home() {
  return (
    <>
      <NewsPages />
      <GalleryPages />
    </>
  );
}
