import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonStyle from "../../../Styles/ButtonStyle/ButtonStyle";
import { useForm } from "react-final-form";
import styles from "../styles.module.css";

export default function ButtonFilter() {
  const { handleSubmit } = useForm();
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ minWidth: 100 }}
      className={styles.heightBotton}
    >
      <Button
        type="submit"
        variant="contained"
        sx={ButtonStyle}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
}
