import { Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ContactIcons from "./ContactIcons";

const ProfileInfo = () => {
	const theme = useTheme();
	const { t } = useTranslation();

	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
	const ImageContainer = styled("div")(({ theme }) => ({
		width: 270,
		height: 270,
		border: "3px solid",
		borderRadius: "0",
		borderColor: theme.palette.secondary.main,
		overflow: "hidden",
		marginRight: "20px",
	}));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
	});

	return (
		<Grid
			container
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{
				background: theme.palette.primary.main,
				backgroundRepeat: "no-repeat",
				padding: "35px 0",
			}}
		>
			<Grid container width={"80%"} spacing={matchesLg ? 0 : 2}>
				<Grid size={{ xs: 12, lg: 3 }} display="flex" alignItems="center">
					<ImageContainer>
						<Image src={"profile.jpg"} />
					</ImageContainer>
				</Grid>
				<Grid container alignContent={"space-around"} size={{ xs: 12, lg: 9 }} spacing={2}>
					<Grid size={{ xs: 12 }}>
						<Typography variant={matches ? "h4" : "h5"}>
							{t("profile.greeting")}
						</Typography>
					</Grid>
					<Grid size={{ xs: 12 }} sx={{ textAlign: "justify" }}>
						<Typography
							variant="body"
							sx={{ fontSize: matches ? "18px" : "16px" }}
						>
							{t("profile.description1")}
						</Typography>
					</Grid>
					<Grid>
						<Typography variant={"h6"}>
							{t("profile.contact_title")}
						</Typography>
						<ContactIcons />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProfileInfo;
