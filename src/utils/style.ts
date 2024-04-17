export const styles = {
  /**
   * type: property
   */
  props: {
    d: "display",
    bdr: "border",
    bc: "borderColor",
    sca: "scale",
    rta: "rotate",
    "td-c": "textDecorationColor",
    "td-s": "textDecorationStyle",
    "back-c": "backgroundColor",
    px: ["paddingLeft", "paddingRight"],
  },
  css: {
    /**
     * I recommend you to use this layout of styles.
     * First is what's selector that may be override in the -
     * future, like tag and class selector. And for the last -
     * part, you can add your reusable class to ensure it -
     * will applied lastly. Usage :
     * selector: styles
     */
    // tag style
    body: "back-c-[neutral-100] tc-[neutral-900]",
    p: "tc-[neutral-800]",
    ".dark": {
      "": "tc-[neutral-100]",
      p: "tc-[neutral-400]",
    },
    a: "td-none",
    // Components
    ".btn":
      "d-block ph-14px pv-6px bdr-none back-c-transparent bc-transparent tc-[neutral-100] br-0.125rem bw-1px bs-solid fw-500 fs-14px cursor-pointer",
    // reusable className
    ".flex": "d-flex",
    ".flex-wrap": "d-flex fx-wrap-wrap",
    ".fd-col,.col": "fd-column",
    ".center": "d-flex flex-parent-center",
    ".w-full": "w-100%",
    ".h-full": "h-100%",
    ".fixed": "position-fixed",
    ".relative": "position-relative",
    ".rounded": "br-0.5rem",
    ".rounded-full": "br-9999px",
    ".absolute": "position-absolute",
    ".none,[hidden]": "d-none",
    ".ratio-video": "ratio-[tx_video]",
  },
  /**
   * This is hover effect handler.
   * selector: [afterHover, isHover, defaultStyle ]
   */
  hover: {
    ".btn": ["sca-1", "sca-0.98", "tr-prop-all tr-time-0.3s tr-timing-ease"],
    ".project-link": [
      "bc-transparent",
      "bc-[primary-500] bs-solid bw-bottom-1px",
      "bs-solid bw-0 bc-transparent bw-bottom-1px tr-prop-all tr-time-0.3s tr-timing-ease",
    ],
    ".btn.btn-primary": [
      "back-c-transparent bc-[neutral-900] tc-[neutral-900]",
      "back-c-[neutral-900] bc-transparent tc-[primary-500]",
      "tr-prop-all tr-time-0.3s tr-timing-ease bc-[neutral-900] tc-[neutral-900]",
    ],
  },
};
