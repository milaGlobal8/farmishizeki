import { Box } from "../../common";
import styles from "./Sticker.module.scss";

const Sticker = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.sticker}></Box>
    </Box>
  );
};

export default Sticker;
