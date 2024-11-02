import Image from "next/image";
import logoC from "../../../public/logo-black-256x256.png"

export default function Logo() {
  return (
    <div>

      <Image
        src={logoC}
        // src={"../../../public/logo-black-256x256.png"}
        alt="Logo"
        width={100}
        height={100}
        className="w-8"
      />
    </div>
  )
}
