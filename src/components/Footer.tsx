// icons
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#edf3f6]">
      <div className="wrapper grid gap-12 py-14 sm:grid-cols-[1fr_auto] sm:py-16">
        <div>
          <img className="h-8" src="/stable-trust-logo.svg" alt="Stabletrust" />
          <p className="mt-5 max-w-sm leading-6 text-muted">
            Fairblock's flagship app for confidential stablecoin transfers
            across chains.
          </p>
          <div className="mt-6 flex gap-4 text-xl text-[#3f9fce]">
          <a
            href="https://discord.com/invite/fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDiscord />
          </a>
          <a
            href="https://x.com/0xfairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/+Nqmn7HnDz_A5N2M0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="flex min-w-28 flex-col items-start gap-3 text-left">
            <p className="section-label mb-1">Resources</p>
          <a
            href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href="https://github.com/Fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.fairblock.network/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developer Platform
          </a>
          <a
            href="https://www.fairblock.network/articles"
            rel="noopener noreferrer"
            target="_blank"
          >
            News
          </a>
          <a
            href="https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brand Kit
          </a>
          </div>
          <div className="flex min-w-28 flex-col items-start gap-3 text-left">
            <p className="section-label mb-1">Company</p>
          <a
            href="https://www.fairblock.network/careers"
            rel="noopener noreferrer"
            target="_blank"
          >
            Careers
          </a>
          <a
            href="https://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Building Program
          </a>
          </div>
        </div>
        <div className="border-t border-[#cbd6dd] pt-6 text-sm text-muted sm:col-span-2">
          © 2026 Fairblock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
