import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../styles.module.css";

export default function InputPerson({ label }) {
  return (
    <Box
      sx={{ "& > :not(style)": { maxWidth: "100px" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={styles.fontStyle}
        id="outlined-basic"
        type="number"
        label={label}
        variant="outlined"
      />
    </Box>
  );
}
