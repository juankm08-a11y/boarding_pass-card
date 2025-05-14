import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-orange-400 p-4">
      <div className="relative w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="absolute left-1/2 top-0 h-4 w-8 translate-x-1/2 rounded-b-full bg-orange-400">
          <div className="flex">
            <div className="flex w-1/3 flex-col items-center justify-center border-r border-dashed border-gray-300 p-6">
              <div className="h-32 w-32">Boarding Pass card</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
