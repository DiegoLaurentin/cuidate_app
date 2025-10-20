import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} min-h-screen bg-[#4B23DB] text-white flex flex-col justify-between`}
    >
      <section className="flex flex-col items-center justify-center flex-grow text-center gap-10 md:gap-20">
        <div className="w-[min(40%,500px)] flex justify-center">
          <Image
            src="/cuidate_white_logo.svg"
            alt="Cuidate logo"
            width={500}
            height={100}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="bg-[#E9E7FE] w-auto h-auto flex flex-row items-center gap-4 px-4 py-2 md:px-6 md:py-4 rounded-2xl">
            <Image
              src="/check.svg"
              alt="check"
              width={24} // Tamaño fijo
              height={24} // Tamaño fijo
              priority
              className="w-[clamp(16px,4vw,24px)] h-[clamp(16px,4vw,24px)]" // Responsivo con Tailwind
            />
            <p className="text-[#4B23DB] text-sm md:text-base font-medium">
              Cotiza
            </p>
          </div>
          <div className="bg-[#E9E7FE] w-auto h-auto flex flex-row items-center gap-4 px-4 py-2 md:px-6 md:py-4 rounded-2xl">
            <Image
              src="/check.svg"
              alt="check"
              width={24} // Tamaño fijo
              height={24} // Tamaño fijo
              priority
              className="w-[clamp(16px,4vw,24px)] h-[clamp(16px,4vw,24px)]" // Responsivo con Tailwind
            />
            <p className="text-[#4B23DB] text-sm md:text-base font-medium">
              Compara
            </p>
          </div>
          <div className="bg-[#E9E7FE] w-auto h-auto flex flex-row items-center gap-4 px-4 py-2 md:px-6 md:py-4 rounded-2xl">
            <Image
              src="/check.svg"
              alt="check"
              width={24} // Tamaño fijo
              height={24} // Tamaño fijo
              priority
              className="w-[clamp(16px,4vw,24px)] h-[clamp(16px,4vw,24px)]" // Responsivo con Tailwind
            />
            <p className="text-[#4B23DB] text-sm md:text-base font-medium">
              Contrata
            </p>
          </div>
          <div className="bg-[#E9E7FE] w-auto h-auto flex flex-row items-center gap-4 px-4 py-2 md:px-6 md:py-4 rounded-2xl">
            <Image
              src="/check.svg"
              alt="check"
              width={24} // Tamaño fijo
              height={24} // Tamaño fijo
              priority
              className="w-[clamp(16px,4vw,24px)] h-[clamp(16px,4vw,24px)]" // Responsivo con Tailwind
            />
            <p className="text-[#4B23DB] text-sm md:text-base font-medium">
              Reclama
            </p>
          </div>
        </div>
      </section>

      <footer className="text-white text-center text-[0.85rem] md:text-sm opacity-95 mb-4">
        © 2025 Cuidate. Simplificando el acceso a seguros en Venezuela.
      </footer>
    </main>
  );
}