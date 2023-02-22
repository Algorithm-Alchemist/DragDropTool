import { FormControlLabel, Switch } from "@mui/material";

export default function GroupZoomFunction(props) {
  return (
    <FormControlLabel
      control={<Switch checked={props.checked} onChange={props.onChange} />}
      label="View Details"
    />
  );
}
