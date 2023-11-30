import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Form,
  FormInput,
  FormTitle,
  FormTextarea,
  ContactFormContainer,
} from "./ContactForm.elements";
import { Button } from "../../globalStyles";
import toast from "react-hot-toast";
import { SpinnerDotted } from "spinners-react";
import emailjs from "@emailjs/browser";

// Define the interface for your form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_USER_ID);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions while waiting for the response
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_PUBLIC_SERVICE_ID;
    const templateID = import.meta.env.VITE_PUBLIC_TEMPLATE_ID;
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((status) => {
        console.log(status);
        toast.success("Message sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    // Send the form data to your backend server
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success, e.g., display a success message
        console.log("Message sent successfully");
        toast.success("Message sent successfully");
      } else {
        // Handle error, e.g., display an error message
        console.error("Message sending failed");
        toast.error("Message sending failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Message sending failed");
    } finally {
      // Reset the form and button text after form submission (3 seconds delay)
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <ContactFormContainer>
      <FormTitle>Contact Us</FormTitle>

      <Form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormTextarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button fontBig type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <SpinnerDotted size="20" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
