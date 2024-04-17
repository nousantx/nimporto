import styler from "../utils/styler";

const Badge = [
  "Work on time",
  "Modern design",
  "Good services",
  "Responsive design",
];

const Badges = () => {
  styler();
  return (
    <>
      {Badge.map((tag, index) => (
        <p
          className="p-6px bs-solid bw-1px bc-[neutral-800] center rounded-full fs-12px gap-4px"
          key={index}
        >
          <span className="mi-round fs-14px tc-[primary-500]">
            check_circle
          </span>
          {tag}
        </p>
      ))}
    </>
  );
};

export default Badges;
