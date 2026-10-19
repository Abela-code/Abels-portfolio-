import type { FC } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_INFO } from "../../config/portfolioData";

export const Footer: FC = () => {
  const name = PORTFOLIO_INFO.personal.name;
  const firstName = name.split(" ")[0];
  const socials = PORTFOLIO_INFO.personal.contact?.socials ?? [];
  const github = socials.find((s) => s.label.toLowerCase() === "github");
  const linkedin = socials.find((s) => s.label.toLowerCase() === "linkedin");

  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div>
          Designed &amp; coded with ☕ + ❤️ by{" "}
          <span className="font-medium text-[var(--text)]">{firstName}</span>
        </div>

        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--text)] transition-colors"
            >
              <SiGithub size={22} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--text)] transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
