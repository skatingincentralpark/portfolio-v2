import charlie from "../../public/charlie.png";
import Image from "next/image";

const CharlieBrownImage = () => {
  return (
    <Image
      className="w-24 mt-4"
      src={charlie}
      alt="bill evans"
      placeholder="empty"
      quality={100}
    />
  );
};

export default CharlieBrownImage;
