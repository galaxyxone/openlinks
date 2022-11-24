import { useFormContext, useWatch } from "react-hook-form";

const useFormValues = () => {
  const { getValues } = useFormContext();

  return {
    ...useWatch(), // subscribe to form value updates
    ...getValues(), // always merge with latest form values
  };
};

export default useFormValues;
