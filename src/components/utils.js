import { Switch, TextField } from "@material-ui/core";
import Select from "react-select";

const SelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
);

const ToggleAdapter = ({ input: { onChange, value }, label, ...rest }) => (
    <Switch
        label={label}
        value={!!value}
        onChange={(e, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
);

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

export { SelectAdapter, ToggleAdapter, TextFieldAdapter };
