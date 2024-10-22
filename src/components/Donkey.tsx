import Image from "next/image";

export default function Donkey() {
  return (
    <div className="flex flex-col items-center bg-green-300 min-h-full">
      <div className="w-48 h-48 rounded-full overflow-hidden mt-8 transition-transform duration-300 hover:rotate-12">
        <Image
          src="/images/donkey.jpg"
          alt="Donkey"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
