// src/components/Footer.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const theme = useTheme();
	const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
	return (
		<Box
			component="footer"
			sx={{
				py: 2,
				px: 1,
				textAlign: "center",
				borderTop: "3px solid",
				borderColor: theme.palette.secondary.main,
				backgroundColor: theme.palette.primary.main,
				width: "100%",
			}}
		>
			<Typography variant="body2">
				{t("footer.copyright", { year: currentYear })}
			</Typography>
			<Typography variant="body" sx={{ mt: 1, fontSize: "13px" }}>
				{t("footer.contact")}
			</Typography>
		</Box>
	);
};

export default Footer;
