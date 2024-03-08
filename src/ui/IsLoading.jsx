function IsLoading({ type }) {
  return (
    <div
      className={
        type === "homepage"
          ? "absolute inset-0 -z-10 flex h-full w-full items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat object-cover backdrop-blur-sm"
          : "absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm"
      }
    >
      <div className={type === "homepage" ? "" : "loader"}></div>
    </div>
  );
}

export default IsLoading;
