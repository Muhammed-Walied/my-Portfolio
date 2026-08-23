import { TextField, Button, Box, Alert, Container, useTheme, CircularProgress, IconButton, Tooltip, Snackbar } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import done from '../../assets/done.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import SectionsHeader from '../SectionsHeader';
import CustomTypography from '../typography/CustomTypography';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn, MdContentCopy, MdCheck } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa6';

export const ContactMe = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [state, handleSubmit] = useForm('manwygna');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('muhammedmahrous48@gmail.com');
    setCopied(true);
    setToastOpen(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setErrorMessage(null);
    handleSubmit(e);
  };

  return (
    <Box
      id="Contact"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, sm: 10, md: 14 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionsHeader
          header="Get In Touch"
          subtitle="Have a project in mind, a mobile opportunity, or just want to connect? Let's talk!"
        />

        {/* Master Unified Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              maxWidth: '1050px',
              mx: 'auto',
              borderRadius: { xs: '20px', md: '28px' },
              overflow: 'hidden',
              backgroundColor: isDark ? 'rgba(30, 41, 59, 0.45)' : 'rgba(255, 255, 255, 0.95)',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
              boxShadow: isDark
                ? '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.08)'
                : '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 25px rgba(16, 185, 129, 0.05)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            }}
          >
            {/* Left Side: Contact Information & Social Channels */}
            <Box
              sx={{
                p: { xs: 3.5, sm: 4.5, md: 5 },
                backgroundColor: isDark
                  ? 'rgba(15, 23, 42, 0.5)'
                  : 'rgba(241, 245, 249, 0.6)',
                borderRight: { md: '1px solid' },
                borderBottom: { xs: '1px solid', md: 'none' },
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                {/* Status Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.8,
                    py: 0.6,
                    borderRadius: '20px',
                    backgroundColor: isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.25)',
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 8px #10B981',
                    }}
                  />
                  <CustomTypography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'primary.main' }}>
                    Available for Work
                  </CustomTypography>
                </Box>

                <CustomTypography
                  component="h3"
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                    fontWeight: 700,
                    color: 'text.primary',
                    lineHeight: 1.3,
                    mb: 1.5,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Let's talk about your next project
                </CustomTypography>

                <CustomTypography
                  sx={{
                    fontSize: '0.925rem',
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  I'm always excited to hear about new mobile applications, engineering challenges, or freelance collaborations.
                </CustomTypography>

                {/* Direct Contact Blocks */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {/* Email with copy button */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.6)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8, overflow: 'hidden' }}>
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: '12px',
                          backgroundColor: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <MdEmail size={20} />
                      </Box>
                      <Box sx={{ overflow: 'hidden' }}>
                        <CustomTypography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600 }}>
                          EMAIL
                        </CustomTypography>
                        <Box
                          component="a"
                          href="mailto:muhammedmahrous48@gmail.com"
                          sx={{
                            fontSize: { xs: '0.85rem', sm: '0.925rem' },
                            fontWeight: 600,
                            color: 'text.primary',
                            textDecoration: 'none',
                            wordBreak: 'break-all',
                            display: 'block',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          muhammedmahrous48@gmail.com
                        </Box>
                      </Box>
                    </Box>

                    <Tooltip title={copied ? 'Copied!' : 'Copy Email'}>
                      <IconButton
                        onClick={handleCopyEmail}
                        size="small"
                        sx={{
                          color: copied ? 'primary.main' : 'text.secondary',
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {copied ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
                      </IconButton>
                    </Tooltip>
                  </Box>

                  {/* Location */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.8,
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.6)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: '12px',
                        backgroundColor: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.1)',
                        color: '#06B6D4',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MdLocationOn size={20} />
                    </Box>
                    <Box>
                      <CustomTypography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600 }}>
                        LOCATION
                      </CustomTypography>
                      <CustomTypography sx={{ fontSize: '0.925rem', fontWeight: 600, color: 'text.primary' }}>
                        Cairo, Egypt • Remote Worldwide
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Social Channels Footer */}
              <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CustomTypography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 500, mr: 1 }}>
                  Find me on:
                </CustomTypography>

                <Tooltip title="GitHub Profile">
                  <IconButton
                    component="a"
                    href="https://github.com/Muhammed-Walied"
                    target="_blank"
                    sx={{
                      color: 'text.primary',
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                      '&:hover': { color: '#10B981', borderColor: '#10B981' },
                    }}
                  >
                    <FaGithub size={18} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="LinkedIn Profile">
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/muhammed-walied-281213277"
                    target="_blank"
                    sx={{
                      color: 'text.primary',
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                      '&:hover': { color: '#06B6D4', borderColor: '#06B6D4' },
                    }}
                  >
                    <FaLinkedin size={18} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Right Side: Contact Form */}
            <Box
              component="form"
              onSubmit={handleFormSubmit}
              noValidate
              sx={{
                p: { xs: 3.5, sm: 4.5, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <CustomTypography
                component="h3"
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: '1.3rem', sm: '1.45rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Send a Message
              </CustomTypography>
              <CustomTypography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: 3.5 }}>
                Fill out this quick form and I will get back to you promptly.
              </CustomTypography>

              {errorMessage && (
                <Alert severity="error" sx={{ mb: 2.5, borderRadius: '12px' }}>
                  {errorMessage}
                </Alert>
              )}

              {state.succeeded ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 6,
                    textAlign: 'center',
                  }}
                >
                  <Lottie loop={false} style={{ height: 90, width: 90 }} animationData={done} />
                  <CustomTypography
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'primary.main',
                      mt: 2,
                    }}
                  >
                    Message Sent Successfully!
                  </CustomTypography>
                  <CustomTypography sx={{ color: 'text.secondary', mt: 1, maxWidth: '380px', fontSize: '0.95rem' }}>
                    Thank you for getting in touch. I'll review your message and reply as soon as possible.
                  </CustomTypography>
                </Box>
              ) : (
                <>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="e.g. Alex Smith"
                    sx={{
                      mb: 2.5,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(248, 250, 252, 0.8)',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="e.g. alex@company.com"
                    sx={{
                      mb: 2.5,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(248, 250, 252, 0.8)',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  <TextField
                    required
                    fullWidth
                    label="Message"
                    id="message"
                    name="message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, or inquiry..."
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(248, 250, 252, 0.8)',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <Button
                    fullWidth
                    size="large"
                    type="submit"
                    disabled={state.submitting}
                    variant="contained"
                    color="primary"
                    startIcon={state.submitting ? <CircularProgress size={18} color="inherit" /> : <FaPaperPlane />}
                    sx={{
                      py: 1.4,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      boxShadow: '0 4px 18px 0 rgba(16, 185, 129, 0.35)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                        boxShadow: '0 6px 24px 0 rgba(16, 185, 129, 0.5)',
                      },
                    }}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Copy notification toast */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
        message="Email copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};
