export const styles = {
  props: {
    d: "display",
    bdr: "border",
    bc: "borderColor",
    "back-c": "backgroundColor",
    px: ["paddingLeft", "paddingRight"],
  },
  css: {
    // tag style
    body: "back-c-#0d0d0d tc-[neutral-100]",
    p: "tc-[neutral-200]",
    a: "td-none",
    // reusable className
    ".flex": "d-flex",
    ".center": "d-flex flex-parent-center",
    ".w-full": "w-100%",
    ".h-full": "h-100%",
    ".btn":
      "d-block ph-12px pv-4px bdr-none back-c-transparent bc-transparent tc-[neutral-100] br-0.125rem bw-1px bs-solid fw-500 fs-14px",
    ".fixed": "position-fixed",
    ".relative": "position-relative",
    ".rounded": "br-0.5rem",
    ".rounded-full": "br-9999px",
    ".absolute": "position-absolute",
  },
};
