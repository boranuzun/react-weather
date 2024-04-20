const currentYear = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <>
      <footer>
        <hr className="border-weather-primary border-opacity-10" />
        <section className="mx-auto max-w-7xl lg:py-2 text-weather-primary flex flex-row bg-transparent py-3 self-center px-2">
          <p className="flex-1 my-3">
            <span>
              &copy;<b className="ml-1">{currentYear}</b> —
            </span>
            <span> Boran UZUN</span>
          </p>
        </section>
      </footer>
    </>
  );
};

export default SiteFooter;
