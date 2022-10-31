import React from 'react'

import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

/**
 * @description Loader for stepper form component
 */
function StepperLoader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}>
      <Typography sx={{ mr: 1 }} variant="h6">
        Exporting...
      </Typography>
      <Box>
        <CircularProgress sx={{ mr: 1 }} size={25} />
      </Box>
    </Box>
  );
}

export default StepperLoader;
