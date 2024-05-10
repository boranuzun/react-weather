const currentYear = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <>
      <footer>
        <hr className="border-weather-primary border-opacity-10" />
        <section className="mx-auto max-w-7xl lg:py-2 text-weather-primary flex flex-row justify-between bg-transparent py-3 self-center px-2">
          <div className="my-3 text-white">
            <p>
              &copy;<b className="ml-1">{currentYear}</b> — Boran UZUN
            </p>
          </div>
          {/* <div className="my-3 text-white">
            <p>
              Background image by{" "}
              <a
                href="https://www.freepik.com/free-photo/clouded-blue-sky-with-copy-space-background_5445622.htm#query=weather%20app%20background&position=10&from_view=keyword&track=ais&uuid=7570b4db-691e-4a6f-a2c6-a2a84d27f477"
                className="underline"
              >
                Freepik
              </a>
            </p>
          </div> */}
        </section>
      </footer>
    </>
  );
};

export default SiteFooter;
