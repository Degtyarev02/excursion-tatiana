import {
	Box,
	Button,
	Divider,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ExcursionItem = ({ info }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("lg"));
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const { t } = useTranslation();

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const displayText = expanded
		? t(info.desc)
		: t(info.desc).length > 150
		? `${t(info.desc).substring(0, 150)}...`
		: t(info.desc);

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		maxHeight: "330px",
		maxWidth: matchesMd ? "330px" : "auto",
		objectFit: "cover",
	});

	return (
		<Grid container spacing={1} height={"100%"} padding={"20px"}>
			<Grid item size={{ xs: 12, md: 5 }}>
				<Image src={info.img} />
			</Grid>
			<Grid item container size={{ xs: 12, md: 7 }} spacing={2}>
				<Typography variant={matches ? "h5" : "h6"} sx={{lineHeight: matches ? "30px" :"25px"}}>
					{t(info.name)} {t(info.age)}
				</Typography>
				<Box>
					<Typography variant="body">{displayText} </Typography>
				{t(info.desc).length > 150 && (
					<Button
						onClick={toggleExpand}
						sx={{
							color: theme.palette.secondary.main,
							textTransform: "none",
							padding: 0,
							minWidth: "auto",
							"&:hover": {
								backgroundColor: "transparent",
								textDecoration: "underline",
							},
						}}
					>
						{expanded ? t("excursions.collapse") : t("excursions.expand")}
					</Button>
				)}
				</Box>
				<Button
					href={info.id}
					variant="contained"
					disableElevation
					color="secondary"
					sx={{ width: "100%", height: "fit-content", alignSelf: "self-end" }}
				>
					{t("excursions.moreInfo")}
				</Button>
			</Grid>
		</Grid>
	);
};

export default ExcursionItem;
