import React from "react";
import { SiGithub } from "react-icons/si";
import { PORTFOLIO_INFO } from "../../config/portfolioData";

export const Footer: React.FC = () => {
  const name = PORTFOLIO_INFO.personal.name;
  const firstName = name.split(" ")[0];
  const github = PORTFOLIO_INFO.personal.contact?.socials?.find(
    (s) => s.label.toLowerCase() === "github"
  );

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
        </div>
      </div>
    </footer>
  );
};
