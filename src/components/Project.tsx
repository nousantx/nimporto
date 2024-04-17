import { makeTenoxUI } from "tenoxui";
import styler from "../utils/styler";
import { useLayoutEffect, useRef } from "react";

interface ProjectProps {
  title: string;
  desc?: string;
  live?: string;
  github?: string;
  design?: string;
  thumb?: string;
  tags?: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  desc,
  thumb,
  tags,
  live,
  github,
  design,
}) => {
  styler();
  const thumbRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = thumbRef.current;
    if (element) {
      const styleMake = new makeTenoxUI(element);
      if (thumb) {
        styleMake.applyStyle("bg-image", thumb, "");
      }
    }
  }, [thumb]);

  return (
    <div className="fx-250px bs-solid bw-1px bc-[neutral-400] bg-none br-0.5rem over-hidden flex col">
      {thumb ? (
        <div
          ref={thumbRef}
          className="w-full back-c-[neutral-900] bg-size-cover bg-loc-center ratio-video thumb"
        ></div>
      ) : (
        <div className="w-full back-c-[neutral-900] center ratio-video tc-[primary-500] gap-4px">
          <span className="ms-round fs-16px">hide_image</span>
          <p className="tc-inherit fs-14px">Image not available</p>
        </div>
      )}
      <header className="p-1rem">
        {tags && (
          <div className="flex flex-wrap gap-8px mb-8px">
            {tags.map((tag, index) => (
              <p
                className="tc-[neutral-900] fs-12px br-3px ph-6px pv-2px back-c-[primary-500]"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        )}
        <h3 className="fs-1.2rem">{title}</h3>
        <p className="ta-justify fs-12px mt-6px">{desc}</p>
      </header>
      <div className="center flex-wrap gap-1rem jc-end ph-1rem pv-1rem mt-auto">
        {live ? (
          <a
            target="_blank"
            href={live}
            className="project-link fs-14px center tc-[neutral-900] gap-4px"
          >
            <i className="txi ti-web"></i>
            Live Demo
          </a>
        ) : (
          <></>
        )}
        {github ? (
          <a
            target="_blank"
            href={github}
            className="project-link fs-14px center tc-[neutral-900] gap-4px"
          >
            <i className="txi ti-github_square"></i>
            GitHub
          </a>
        ) : (
          <></>
        )}
        {design ? (
          <a
            target="_blank"
            href={design}
            className="project-link fs-14px center tc-[neutral-900] gap-4px"
          >
            <i className="ms-round fs-18px">draw</i>
            Design
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Project;
