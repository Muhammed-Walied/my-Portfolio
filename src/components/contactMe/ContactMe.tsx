import { TextField, Button, Box, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import done from '../../assets/done.json';
import Lottie from 'lottie-react';
import { useResponsiveStack } from '../../responsive';
import { grey } from '@mui/material/colors';
import CustomTypography from '../typography/CustomTypography';
import { useResponsiveFont } from '../../responsive/useResponsiveFont';
import { useState } from 'react';
import ContactAnimation from '../../assets/contact.json';
export const ContactMe = () => {
  const { isSmallDown } = useResponsiveStack();
  const getFontStyle = useResponsiveFont();
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
    <Box id="Contact" sx={{ backgroundColor: 'background.default', p: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '95px',
            height: '35px',
            backgroundColor: 'grey.200',
            color: 'grey.600',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': { backgroundColor: 'grey.200' },
          }}
        >
          <CustomTypography
            sx={{
              ...getFontStyle('Body3'),
              fontWeight: '500',
              textTransform: 'capitalize',
              color: 'grey.600',
            }}
          >
            Get in touch
          </CustomTypography>
        </Box>
        <CustomTypography
          sx={{
            ...getFontStyle('Subtitle'),
            fontWeight: '400',
            marginTop: 1,
            color: 'grey.600',
            textAlign: 'center',
            width: isSmallDown ? '100%' : '50%',
          }}
        >
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to
          connect.
        </CustomTypography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          maxWidth="md"
          component="form"
          onSubmit={handleFormSubmit}
          noValidate
          sx={{
            mt: 1,
            mx: 'auto',
            width: isSmallDown ? '100%' : '40%',
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
              ' & .MuiOutlinedInput-root': {
                '  &.Mui-focused fieldset': {
                  borderColor: 'background.default',
                },
              },
              '& label.Mui-focused': {
                color: 'grey.500',
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
              ' & .MuiOutlinedInput-root': {
                '  &.Mui-focused fieldset': {
                  borderColor: 'background.default',
                },
              },
              '& label.Mui-focused': {
                color: 'grey.500',
              },
            }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <Button
            sx={{
              color: grey[50],
              bgcolor: grey[900],
              borderRadius: '20px',
              width: '200px',

              '&:hover': { bgcolor: grey[900] },
            }}
            disableRipple
            type="submit"
            disabled={state.submitting}
            variant="contained"
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
        <Box display={isSmallDown ? 'none' : 'block'}>
          <Lottie className="contact-animation" style={{ height: 355 }} animationData={ContactAnimation} />
        </Box>
      </Box>
    </Box>
  );
};
