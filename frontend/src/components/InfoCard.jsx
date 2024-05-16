// InfoCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, useMediaQuery } from '@mui/material';

const InfoCard = ({ title, content, logo, socialMedia, zIndex }) => {
    const mdScreen = useMediaQuery('(min-width: 800px) and (max-width: 1100px)');
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid white",
        width: "374px",
        height: "134px",
        borderRadius: "15px",
        textAlign: "center",
        position: "relative",
        overflow: "visible",
        zIndex: zIndex,
      }}
    >
      <CardContent>
        {logo && (
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <img
              src={logo}
              style={{
                position: 'absolute',
                top: "-55px",
                left: mdScreen?"90px":"125px",
                zIndex: 2,
              }}
              alt="Logo"
            />
          </Box>
        )}
        <Typography sx={{ height: "49px", position: 'relative' }}>
          <Box sx={{ top: "35px", left:mdScreen?"80px": "115px", position: "absolute" }}>
            {logo&&(<><span className="text-[#0796EF]">DEEP</span><span> NET </span><span className="text-[#857878]">SOFT</span></>)}
   
            {socialMedia && (
              <img
                src={socialMedia}
                alt="Social Media Icon"
                style={{ zIndex: 0 }}
              />
            )}
          </Box>
        </Typography>
        <Box sx={{ color: "white",position:'absolute',top:"22px",left:mdScreen?"70px":"100px" }}>
          <Typography variant="h6" color={"#0796EF"} component="h2">
            {title}
          </Typography>
          {content}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
