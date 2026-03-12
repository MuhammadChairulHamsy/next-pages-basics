const FormRegister = ({
  handleSubmit,
  isLoading,
}: {
  handleSubmit: (event: any) => void;
  isLoading: boolean;
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label
            htmlFor="fullname"
            className="text-xs font-medium text-slate-500 uppercase tracking-widest"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-500 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="kamu@email.com"
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-xs font-medium text-slate-500 uppercase tracking-widest"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Min. 8 karakter"
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-slate-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-slate-700 active:scale-[0.98] transition-all mt-2"
        >
          {isLoading ? "Sedang mendaftar" : "Daftar Sekarang"}
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
