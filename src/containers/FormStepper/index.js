// Core
import React, { useCallback, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
// UI Libs
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// user components
import StepperLoader from "@components/StepperLoader";
// user libs
import { useAuth0Metadata } from "@contexts/auth0-metadata.context";
import { StepperFormContextProvider } from "@contexts/stepper-form.context";
// api
import * as api from "api";
// Styles
import "./styles.css";

function FormStepper({ steps }) {
  // authentication
  const { metadata, updateMetadata } = useAuth0Metadata();
  // Stepper form
  const formMethods = useForm({ mode: "onBlur" });
  // Form validity
  const isFormValid = useMemo(
    () => formMethods.formState.isValid,
    [formMethods.formState]
  );
  const formErrors = useMemo(
    () => formMethods.formState.errors,
    [formMethods.formState]
  );
  // Stepper step state
  const [wizardStep, setWizardStep] = useState(0);
  // Stepper controls
  const handleNext = useCallback(() => setWizardStep((step) => step + 1), []);
  const handlePrevious = useCallback(
    () => setWizardStep((step) => step - 1),
    []
  );
  const MAX_STEP = steps.length;
  // loading states
  const [isLoading, setLoading] = useState(false);

  // TODO: Fix, profile picture title doesn't reset
  const resetForm = () => {
    setWizardStep(0);
    formMethods.reset();
  };

  /**
   * @description Handle export functionality on form submit
   * @type {(values: ExportData) => Promise<void>}
   */
  const handleExport = async ({ settings, links }) => { // settings and links are coming from the form present in each step of the stepper
    try {
      setLoading(true);
      const { cid, filename: exportedFileName } = await api.exportLinks({
        title: settings.profileTitle,
        links: links,
        theme: settings.theme,
        profilePicture: metadata?.profilePicture,
      });
      await updateMetadata({ cid, filename: exportedFileName });
      // Replace below with whatever you want to tell to the user. I think replacing this with a toaster message will look much better to the user :)
      alert("Added file to Web3.Storage! and updated metadata\nHash: " + cid);
      resetForm();
    } catch (error) {
      console.trace(error);
    }
    setLoading(false);
  };

  if (!Array.isArray) {
    throw new Error("Form Stepper: Steps must be an array!");
  }

  if (!steps.every((step) => React.isValidElement(step.content))) {
    throw new Error("Form Stepper: Step content(s) must be a react element!");
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleExport)}>
        <StepperFormContextProvider
          value={{
            isLoading,
            setLoading,
          }}
        >
          <Stepper orientation="vertical" activeStep={wizardStep}>
            {steps.map((step) => (
              <Step className="stepper-label" key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                {/* Stop components from unmounting on step change to persist component's state */}
                <StepContent TransitionProps={{ unmountOnExit: false }}>
                  {step.content}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Button
                      disabled={
                        isLoading ||
                        formErrors[step.formKey] != null ||
                        formErrors["custom"] != null
                      }
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Next
                    </Button>
                    <Button
                      disabled={isLoading || wizardStep === 0}
                      onClick={handlePrevious}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                    {isLoading && (
                      <div>
                        <CircularProgress size={20} sx={{ mt: 1, mr: 1 }} />
                      </div>
                    )}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </StepperFormContextProvider>
        {wizardStep === MAX_STEP && (
          <Box sx={{ mt: 1 }}>
            {isLoading ? (
              <StepperLoader />
            ) : (
              <React.Fragment>
                {/* Show appropriate message if form's state is invalid */}
                {isFormValid ? (
                  <Typography>
                    Are you sure you want to generate bio links with that
                    information?
                  </Typography>
                ) : (
                  <Typography>
                    Please complete the steps above to proceed
                  </Typography>
                )}
                {/* Actions available upon steps completion */}
                <Box>
                  <Button
                    sx={{ mt: 1, mr: 1 }}
                    variant="contained"
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Export Page
                  </Button>
                  <Button
                    onClick={handlePrevious}
                    sx={{ mt: 1 }}
                    variant="text"
                  >
                    Go Back
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        )}
      </form>
    </FormProvider>
  );
}

export default FormStepper;
