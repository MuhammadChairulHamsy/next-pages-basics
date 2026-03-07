const SkeletonCard = () => {
  return (
    <div className="w-full max-w-[350px] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
      {/* Skeleton Gambar */}
      <div className="w-full aspect-square bg-slate-200 animate-pulse" />

      <div className="p-4 space-y-4">
        {/* Skeleton Judul */}
        <div className="h-5 bg-slate-200 rounded animate-pulse w-3/4" />
        
        {/* Skeleton Kategori */}
        <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2" />

        <div className="flex justify-between items-center pt-2">
          {/* Skeleton Harga */}
          <div className="h-6 bg-slate-200 rounded animate-pulse w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;