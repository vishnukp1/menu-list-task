import { Box, Typography, useMediaQuery } from "@mui/material";
import { LOGO, SOCIAL_MEDIA } from "../../assets";
import InfoCard from '../../components/InfoCard';


const AppFooter = () => {
    const isSmallDevice = useMediaQuery('(max-width: 800px)');

    const connectContent = (
        <>
            <Typography variant="subtitle1" component="h3">
                <p>+1470-788-8255</p>
                <p>email@42harandgrill.com</p>
            </Typography>
        </>
    );

    const findUsContent = (
        <>
            <Typography variant="caption" display="block" sx={{ mt: "16px" }}>
                327 Memorial Dr SE, Atlanta,
            </Typography>
            <Typography variant="caption" display="block">
                GA 30312, USA
            </Typography>
        </>
    );

    return (
        <div className="h-full w-full pt-20" style={{ background: "black" }}>
            <Box sx={{ mb: "80px" }}>
                <Box className="flex justify-center" sx={{ flexDirection: isSmallDevice ? "column" : "row", gap: 2, alignItems: "center", mx: "12px" }}>
                    {isSmallDevice?
                    <>
                  
                     <InfoCard
                     title=""
                     content={null}
                     logo={LOGO}
                     socialMedia={SOCIAL_MEDIA}
                     zIndex={isSmallDevice ? 2 : 0}
                 />
                     <InfoCard
                     title="CONNECT WITH US"
                     content={connectContent}
                     zIndex={isSmallDevice ? 1 : 0}
                 />
                
                 <InfoCard
                     title="FIND US"
                     content={findUsContent}
                     zIndex={isSmallDevice ? 1 : 0}
                 />
                   </>
                    :
                    <>
                    <InfoCard
                        title="CONNECT WITH US"
                        content={connectContent}
                        zIndex={isSmallDevice ? 1 : 0}
                    />
                    <InfoCard
                        title=""
                        content={null}
                        logo={LOGO}
                        socialMedia={SOCIAL_MEDIA}
                        zIndex={isSmallDevice ? 2 : 0}
                    />
                    <InfoCard
                        title="FIND US"
                        content={findUsContent}
                        zIndex={isSmallDevice ? 1 : 0}
                    />
                    </>

}
                </Box>
            </Box>
            <Box
                sx={{
                    color: "#857878",
                    display: "flex",
                    backgroundColor: "#161616",
                    height: "47px",
                    justifyContent: "space-around"
                }}
            >
                <Typography>
                    © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
                </Typography>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Typography>Terms & Conditions</Typography>
                    <Typography>Privacy Policy</Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AppFooter;
