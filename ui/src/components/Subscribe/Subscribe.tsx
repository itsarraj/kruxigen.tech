import { Form, FormInput } from './Subscribe.elements';
import { Button } from '../../globalStyles';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if a submission is already in progress
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');

    // Send the email to your backend server
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        // Handle success, e.g., display a success message
        console.log('Subscription successful');
        toast.success('Message sent successfully');
      } else {
        // Handle error, e.g., display an error message
        console.error('Subscription failed');
        toast.error('Message sending failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Message sending failed');
    } finally {
      // Re-enable the form submission after a timeout (3 seconds)
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000); // 3 seconds in milliseconds
    }
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <FormInput name="email" type="email" placeholder="Your Email" />
        <Button fontBig type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <SpinnerDotted size="20" /> Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
      </Form>
    </>
  );
};

export default Subscribe;
