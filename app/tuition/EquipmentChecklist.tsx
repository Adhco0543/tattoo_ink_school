"use client";

import { useMemo, useState } from "react";

export default function EquipmentChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const complete = useMemo(
    () => items.reduce((total, item) => total + (checked[item] ? 1 : 0), 0),
    [checked, items]
  );

  const percent = Math.round((complete / items.length) * 100);

  return (
    <div className="equipment-checklist">
      <div className="checklist-progress">
        <div>
          <strong>{complete}/{items.length}</strong>
          <span>items marked</span>
        </div>
        <div className="progress-track" aria-label={`${percent}% of equipment checklist marked`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <em>{percent}%</em>
      </div>

      <div className="checklist-items">
        {items.map((item) => (
          <label className={checked[item] ? "checked" : ""} key={item}>
            <input
              type="checkbox"
              checked={Boolean(checked[item])}
              onChange={(event) =>
                setChecked((current) => ({ ...current, [item]: event.target.checked }))
              }
            />
            <span className="custom-check" aria-hidden="true">✓</span>
            <span>{item}</span>
          </label>
        ))}
      </div>

      {complete > 0 && (
        <button className="checklist-reset" type="button" onClick={() => setChecked({})}>
          Reset checklist
        </button>
      )}
    </div>
  );
}
