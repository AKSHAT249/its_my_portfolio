import React, { useState } from "react";

/** Colored brand mark via Simple Icons CDN, with graceful letter fallback */
const SkillMark = ({ name, slug, color = "ffffff", className = "size-8" }) => {
  const [failed, setFailed] = useState(false);
  const src = `https://cdn.simpleicons.org/${slug}/${color}`;

  if (failed || !slug) {
    return (
      <span
        className={`${className} flex items-center justify-center rounded-lg bg-black-50 text-xs font-semibold text-white-50`}
        aria-hidden
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={`${className} object-contain`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default SkillMark;
