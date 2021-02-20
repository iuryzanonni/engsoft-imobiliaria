import Select from "react-select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

export const SelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
);

export const ToggleAdapter = ({
    input: { onChange, value },
    label,
    ...rest
}) => (
    <Switch
        label={label}
        value={!!value}
        onChange={(e, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
);

export const mustBeNumber = (value) =>
    isNaN(value) ? "Insira um número" : undefined;
