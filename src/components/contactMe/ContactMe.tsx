import { TextField, Button, Box, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import done from '../../assets/done.json';
import Lottie from 'lottie-react';
import { useResponsiveStack } from '../../responsive';
import { useState } from 'react';
import ContactAnimation from '../../assets/contact.json';
import SectionsHeader from '../SectionsHeader';
import { motion } from 'framer-motion';

export const ContactMe = () => {
  const { isSmallDown } = useResponsiveStack();
  const [state, handleSubmit] = useForm('manwygna');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      <Alert severity="error">All fields are required</Alert>;
      return;
    }
    handleSubmit(e);
  };

  return (
    <Box
      id="Contact"
      sx={{
        backgroundColor: 'background.default',
        p: 5,
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SectionsHeader
        header="Get in touch"
        subtitle="What’s next? Feel free to reach out to me if you’re looking for a developer, have a query, or simply want to connect."
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& label.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Message"
              id="message"
              name="message"
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& label.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <Button
              sx={{
                mt: 2,
                borderRadius: '20px',
                width: '200px',
              }}
              disableRipple
              type="submit"
              disabled={state.submitting}
              variant="contained"
              color="primary"
            >
              {state.submitting ? 'Submitting ...' : 'Submit'}
            </Button>

            {state.succeeded && (
              <p className="flex" style={{ fontSize: '18px', marginTop: '1.7rem' }}>
                <Lottie loop={false} style={{ height: 37 }} animationData={done} />
                Your message has been sent successfully 👌
              </p>
            )}
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box display={isSmallDown ? 'none' : 'block'}>
            <Lottie style={{ height: 355 }} animationData={ContactAnimation} />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
