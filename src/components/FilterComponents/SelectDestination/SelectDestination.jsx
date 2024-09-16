import styles from "../styles.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinationsRequest } from "../../../sagas/reducers/destinationsReducer";
import { useEffect } from "react";

const SelectDestination = () => {
  const destinations = useSelector((state) => state.destinations.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, [dispatch]);

  return (
    <FormControl fullWidth sx={{ mb: 0 }} className={styles.block}>
      <InputLabel className={styles.fontStyle}>Destination</InputLabel>
      <Field name="destination">
        {({ input, meta }) => (
          <>
            <Select
              className={styles.fieldForm}
              {...input}
              label="Destination"
              onChange={(event) => {
                input.onChange(event.target.value);
                input.onBlur();
              }}
              value={input.value || ""}
            >
              {destinations.map((dest) => (
                <MenuItem key={dest.id} value={dest.label}>
                  {dest.label}
                </MenuItem>
              ))}
            </Select>
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </>
        )}
      </Field>
    </FormControl>
  );
};

export default SelectDestination;
