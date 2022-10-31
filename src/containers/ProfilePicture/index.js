import React, { useContext, useEffect, useState } from "react";
// import { useFormContext } from "react-hook-form";
// UI lib
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import {
  cleanUsername,
  convertImageToBase64,
  generateImagePreviewURI,
  isSupportedImageFile,
} from "../../utils";
import * as api from "@api";
// user lib
import StepperFormContext from "@contexts/stepper-form.context";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0Metadata } from "@contexts/auth0-metadata.context";

// TODO: Replace alerts with Toasts/Modals.
function ProfilePicture() {
  // auth0 states
  const auth0 = useAuth0();
  const { metadata, updateMetadata } = useAuth0Metadata();
  // stepper state
  const stepperForm = useContext(StepperFormContext);

  // local state
  const [selectedFile, setSelectedFile] = useState();

  const [imgPreviewURI, setImagePreviewURI] = useState(null);

  // TODO: Limit file size according to base64 limit.
  const fileChangeHandler = (ev) => {
    const [file] = ev.target.files;
    if (!isSupportedImageFile(file)) {
      // TODO: Define extension in input as well for better UX
      return alert("This file cannot be used as a profile picture");
    }
    setImagePreviewURI(generateImagePreviewURI(file));
    setSelectedFile(file);
  };

  const deleteImage = async () => {
    return updateMetadata({
      profilePicture: null,
    });
  };

  // Primarily Clears
  const handleDelete = async () => {
    try {
      // Delete image from auth0 metadata, if it exists.
      /**
       * Remove from web3.storage might not be needed for now (unless necessary for not retaining/keeping images on our storage -> be it due to privacy/billing/storage quota)
       * The existing images would be overridden by new ones on web3.storage.
       */
      if (metadata?.profilePicture != null) {
        // TODO: Add a user dialog to confirm deletion of the picture. For better UX.
        stepperForm.setLoading(true);
        await deleteImage();
        alert("File deleted successfully!");
      }
      setImagePreviewURI(null);
      setSelectedFile(null);
    } catch (err) {
      alert("Unable to delete image, please contact an administrator.");
    }
    stepperForm.setLoading(false);
  };

  // Handles profile picture upload for us.
  const handleUpload = async () => {
    const auth0Name = auth0.user?.given_name || auth0.user?.name;
    if (!auth0Name) {
      alert("Unable to upload, user info not available!");
      return;
    }
    const username = cleanUsername(auth0Name);
    console.log({ username }); // Log username for testing purposes!
    try {
      stepperForm.setLoading(true);
      const base64 = await convertImageToBase64(selectedFile); // Image conversion needed for our sweet /upload lambda function.
      const fileURL = await api
        .uploadProfilePicture(base64, username)
        .then((response) => {
          // Actually send base64 image to our lambda function
          if (!response.success) {
            throw new Error(response.message);
          }
          return response.fileUrl;
        });
      await updateMetadata({
        profilePicture: fileURL, // Set our web3.storage fileUrl to auth0 metadata.
      });
      alert("Profile picture uploaded successfully!");
    } catch (err) {
      alert(
        "Unable to upload profile picture, please contact the administrator!"
      );
    }
    stepperForm.setLoading(false);
  };

  // Set ImageURI for display upon loading the profile picture component! :)
  useEffect(() => {
    const imageURI = metadata?.profilePicture;
    if (imageURI != null) {
      setImagePreviewURI(imageURI);
    }
  }, [metadata]);

  return (
    <Box sx={{ mb: 2 }} className="profile-picture-container">
      <Avatar
        alt="Your uploaded profile picture"
        src={imgPreviewURI}
        sx={{ width: 128, height: 128, mb: 1 }}
      />
      <Button sx={{ mr: 1 }} variant="outlined" component="label">
        Pick an image
        <input type="file" hidden onChange={fileChangeHandler} />
      </Button>
      <Button
        sx={{ mr: 1 }}
        variant="contained"
        component="label"
        onClick={handleUpload}
        disabled={stepperForm.isLoading || selectedFile == null}
      >
        Upload
      </Button>
      {imgPreviewURI != null && (
        <IconButton
          disabled={stepperForm.isLoading}
          aria-label="delete profile picture"
          size="small"
          onClick={handleDelete}
        >
          <FaTrash />
        </IconButton>
      )}
    </Box>
  );
}

export default ProfilePicture;
