import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Sale = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();
	return (
		<Box
			sx={{
				background: theme.palette.primary.main,
				backgroundRepeat: "no-repeat",
				padding: "15px 30px",
				borderTop: "3px solid",
				borderBottom: "3px solid",
				borderColor: theme.palette.secondary.main,
			}}
		>
			<Typography variant={matches ? "h4" : "h5"}>{t("sale.title")}</Typography>
			<Typography variant="body">{t("sale.description")}</Typography>
		</Box>
	);
};

export default Sale;
