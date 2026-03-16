import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/img/notFound.png"
        alt="not-found"
        className="object-cover"
        width={600}
        height={600}
      />
      <h1 className="text-slate-900 font-medium text-4xl">
        Halaman tidak ditemukan
      </h1>
    </div>
  );
};

export default NotFound;
