import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return (
        <Box
            id="contact"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5%',
                background: 'linear-gradient(120deg, #1b1e26 0%, #3a1c71 50%, #23272e 100%)',
                color: 'white',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                Contact with Me
            </Typography>
            <Grid container spacing={3} sx={{ width: '100%', maxWidth: '750px' }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{
                        background: 'linear-gradient(120deg, #7851a9 0%, #6e3b97 50%, #5e2a85 100%)',
                        color: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                        },
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ fontSize: 40, color: 'error.main', mr: 1 }} />
                                <Typography variant="h6" component="h5" sx={{ color: '#d0d0d0', fontSize: '1rem',fontWeight:'bolder' }}>
                                    Email
                                </Typography>
                            </Box>
                            <Typography sx={{ mt: 1, fontSize: '0.875rem',pl:5 }}>samir9876pm@gmail.com</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{
                        background: 'linear-gradient(120deg, #5e2a85 0%, #6e3b97 50%, #7851a9 100%)',
                        color: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                        },
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <WhatsAppIcon sx={{ fontSize: 40, color: 'success.main', mr: 1 }} />
                                <Typography variant="h6" component="h3" sx={{ color: '#d0d0d0', fontSize: '1rem',fontWeight:'bolder' }}>
                                    WhatsApp
                                </Typography>
                            </Box>
                            <Typography sx={{ mt: 1, fontSize: '0.875rem',pl:5}}>+91 9567097020</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%', maxWidth: '750px', mt: 4 }}>
                <form noValidate autoComplete="off">
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{
                            my: 2,
                            backgroundColor: '#333',
                            color: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#4B0082',
                                    borderRadius: '8px',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#4B0082',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#4B0082',
                                },
                            },
                        }}
                        InputLabelProps={{ style: { color: '#b0b3b8' } }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            my: 2,
                            backgroundColor: '#333',
                            color: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#4B0082',
                                    borderRadius: '8px',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#4B0082',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#4B0082',
                                },
                            },
                        }}
                        InputLabelProps={{ style: { color: '#b0b3b8' } }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{
                            my: 2,
                            backgroundColor: '#333',
                            color: 'white',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#4B0082',
                                    borderRadius: '8px',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#4B0082',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#4B0082',
                                },
                            },
                        }}
                        InputLabelProps={{ style: { color: '#b0b3b8' } }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2,
                            borderRadius: '8px',
                            border: '2px solid #4B0082',
                            color: 'white',
                            background: 'linear-gradient(120deg, #7851a9 0%, #6e3b97 50%, #5e2a85 100%)',
                            '&:hover': {
                                background: 'linear-gradient(120deg, #7851a9 0%, #6e3b97 50%, #5e2a85 100%)',
                            },
                        }}
                    >
                        Send
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Contact;
