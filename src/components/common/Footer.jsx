import { Paper, Stack, Button, Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import Container from './Container';
import Logo from './Logo';
import menuConfigs from "../../configs/menu.configs";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />

          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>

        {/* Additional Information Section */}
        <Box mt={2} sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Made by Anshika Tiwari
          </Typography>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} All rights reserved.
          </Typography>

          {/* Shree Krishna Sada Sahayeta text */}
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main', mt: 1 }}>
            ।। श्री कृष्ण सदा सहायते ।।
          </Typography>

          {/* Social Media Links */}
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            
            
            <IconButton
              component="a"
              href="https://www.instagram.com/anshikaa._.t/"
              target="_blank"
              sx={{ color: "inherit" }}
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/anshikaat"
              target="_blank"
              sx={{ color: "inherit" }}
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/anxhika"
              target="_blank"
              sx={{ color: "inherit" }}
              aria-label="GitHub"
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Footer;
