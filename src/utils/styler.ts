import { useLayoutEffect } from "react";
import tenoxui, { applyHovers, defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";

type Hooks = () => void;

export default function styler(...hooks: Hooks[]) {
  useLayoutEffect(() => {
    // apply types and properties
    defineProps(styles.props);
    // apply styles
    makeStyles(styles.css);
    // hover
    applyHovers(styles.hover);
    // apply tenox style
    tenoxui();
  }, [hooks]);
}
