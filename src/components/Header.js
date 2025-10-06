import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Header = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();

	const Image = styled("img")({
		width: "50px",
		objectFit: "cover",
		marginRight: "20px",
		paddingTop: "10px",
	});

	return (
		<AppBar
			position="static"
			sx={{
				background: "accent.main",
				boxShadow: "none",
			}}
		>
			<Toolbar>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Image src={"logo.png"} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography>{t("headers.header1")}</Typography>
						<Typography variant="body" fontSize={"10px"}>
							{t("headers.header2")}
						</Typography>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
