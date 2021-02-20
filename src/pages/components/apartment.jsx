import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, FormSpy } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import MuiTextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ApartmentForm = () => (
    <Form onSubmit={onSubmit} subscription={{ submitting: true }}>
        {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Field
                            autoFocus
                            component={MuiTextField}
                            autoComplete="fname"
                            fullWidth
                            label="First name"
                            name="firstName"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Field
                            component={MuiTextField}
                            autoComplete="lname"
                            fullWidth
                            label="Last name"
                            name="lastName"
                            required
                        />
                    </Grid>
                </Grid>
                <Field
                    autoComplete="email"
                    component={MuiTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    required
                />
                <Field
                    fullWidth
                    component={MuiTextField}
                    disabled={submitting || sent}
                    required
                    name="password"
                    autoComplete="current-password"
                    label="Password"
                    type="password"
                    margin="normal"
                    meta="blur"
                />
                <FormSpy subscription={{ submitError: true }}>
                    {({ submitError }) =>
                        submitError ? (
                            <Typography>{submitError}</Typography>
                        ) : null
                    }
                </FormSpy>
                <Button
                    disabled={submitting || sent}
                    color="secondary"
                    type="submit"
                    fullWidth
                >
                    {submitting || sent ? "In progress…" : "Sign Up"}
                </Button>
            </form>
        )}
    </Form>
);

export default ApartmentForm;
