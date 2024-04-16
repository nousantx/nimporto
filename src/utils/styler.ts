import { useLayoutEffect } from "react";
import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";

type Hooks = () => void;

export default function styler(...hooks: Hooks[]) {
  useLayoutEffect(() => {
    // apply types and properties
    defineProps(styles.props);
    // apply styles
    makeStyles(styles.css);
    // apply color
    tenoxui();
  }, [hooks]);
}
