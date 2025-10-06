import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { excursions, portfolio, reviews } from "../utils/consts";
import ExcursionCarousel from "./ExcursionCarousel";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import ProfileInfo from "./ProfileInfo";
import ReviewCarousel from "./ReviewCarousel";

const ProfileSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const { t } = useTranslation();

	const Headers = (textKey) => (
		<Typography
			variant={matches ? "h3" : "h4"}
			sx={{
				textAlign: "center",
			}}
			color="text.secondary"
		>
			{textKey.textKey}
		</Typography>
	);

	return (
		<Grid
			container
			spacing={matches ? 4 : 2}
			sx={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid size={{ xs: 12 }}>
				<Portfolio list={portfolio} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={t("headers.about")} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ProfileInfo />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={t("headers.excursions")} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ExcursionCarousel list={excursions} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<Headers textKey={t("headers.reviews")} />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ReviewCarousel list={reviews} />
			</Grid>
		</Grid>
	);
};

export default ProfileSection;
