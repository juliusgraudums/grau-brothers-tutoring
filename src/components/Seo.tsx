import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

const setMeta = (name: string, content: string, isProperty = false) => {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    if (isProperty) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description]);

  return null;
};

export default Seo;
