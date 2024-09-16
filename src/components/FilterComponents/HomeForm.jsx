import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Field, Form } from "react-final-form";
import SelectDestination from "./SelectDestination/SelectDestination";
import ButtonFilter from "./ButtonFilter/ButtonFilter";
import BasicDateCalendar from "./BasicDateCalendar/BasicDateCalendar";
import InputPerson from "./InputPerson/InputPerson";
import styles from "./styles.module.css";

const HomeForm = ({ onFilter }) => {
  const onSubmit = (values) => {
    console.log("Submitted values:", values);
    if (values.destination) {
      onFilter(values.destination);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <FormControl fullWidth className={styles.selectFilter}>
              <SelectDestination />
            </FormControl>

            <FormControl className={styles.calendarContainer}>
              <BasicDateCalendar />
            </FormControl>

            <FormControl className={styles.personContainer}>
              <Field name="adults">
                {({ input }) => <InputPerson label="adults" {...input} />}
              </Field>
            </FormControl>

            <FormControl className={styles.personContainer}>
              <Field name="children">
                {({ input }) => <InputPerson label="children" {...input} />}
              </Field>
            </FormControl>

            <FormControl className={styles.submitButton}>
              <ButtonFilter />
            </FormControl>
          </form>
        )}
      />
    </Box>
  );
};

export default HomeForm;
