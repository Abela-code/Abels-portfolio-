import type { FC } from "react";
import type { SkillGroup } from "../types/portfolio";

/**
 * Clean chip-style skills section.
 * Groups skills into cards with simple rounded pills — no progress bars.
 */
export const SkillsList: FC<{
  skills?: SkillGroup[];
  isBar?: boolean; // kept for API compatibility, ignored
}> = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((group) => {
        const title = group.title ?? "Other";
        const items = group.skills ?? [];
        return (
          <div
            key={title}
            className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5 flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold text-[var(--muted)]">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsList;
