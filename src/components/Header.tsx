import { useState } from "react";
// icons
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-md">
      <div className="wrapper flex-row! items-center justify-between py-4">
        {/* APP LOGO */}
        <div className="flex gap-2 items-center">
          <img
            className="h-6 sm:h-8"
            src="/stable-trust-logo.svg"
            alt="Stabletrust"
          />
        </div>

        {/* NAV MENU */}
        <nav aria-label="Primary navigation" className="hidden sm:flex gap-8 items-center">
          <div className="flex items-center gap-6 text-muted">
            <a
              className="header-nav-item"
              href="https://app.stabletrust.io/how-it-works.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              How it works
            </a>
            <a
              className="header-nav-item"
              href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation
            </a>
            <a
              className="header-nav-item"
              href="https://transparency-dashboard.fairblock.network/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Transparency Dashboard
            </a>
          </div>
          <a
            className="primary-button header-nav-item"
            href="https://app.stabletrust.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Launch App
          </a>
        </nav>

        {/* MOBILE NAV MENU BUTTON */}
        <button
          className="cursor-pointer sm:hidden"
          aria-expanded={isMobileNavbarOpen}
          aria-label={isMobileNavbarOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
        >
          {isMobileNavbarOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      <nav
        aria-label="Mobile navigation"
        className={`${
          isMobileNavbarOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        } absolute left-4 right-4 top-[72px] border border-line bg-white duration-200 flex sm:hidden flex-col p-2 rounded-xl shadow-xl text-left`}
      >
        <a
          className="header-nav-item px-3 py-2"
          href="https://app.stabletrust.io/how-it-works.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          How it works
        </a>
        <a
          className="header-nav-item px-3 py-2"
          href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
          rel="noopener noreferrer"
          target="_blank"
        >
          Documentation
        </a>
        <a
          className="header-nav-item px-3 py-2"
          href="https://transparency-dashboard.fairblock.network/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Transparency Dashboard
        </a>
        <a
          className="primary-button header-nav-item mt-2 w-full!"
          href="https://app.stabletrust.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Launch App
        </a>
      </nav>
    </header>
  );
};

export default Header;
