import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";

const formScript = `
  <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormError(true);
      return;
    }

    // Reset form
    setFormError(false);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Embed Formspree Script */}
      <div dangerouslySetInnerHTML={{ __html: formScript }} />

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginTop: 2 }}
          >
            We are here to help. Reach out to us for any inquiries or support.
          </Typography>
        </Box>

        {/* Success or Error Message */}
        {formSubmitted && !formError && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Your message has been sent successfully!
          </Alert>
        )}
        {formError && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Please fill in all fields before submitting.
          </Alert>
        )}

        {/* Contact Form */}
        <Box
          component="form"
          id="my-form"
          action="https://formspree.io/f/mldervnr"
          method="POST"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grid container spacing={2}>
            {/* Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Subject Field */}
            <Grid item xs={12}>
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: "10px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  "&:hover": { backgroundColor: "#1976d2" },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
