import { useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	useMediaQuery,
	Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const ReviewItem = ({ info }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const { t } = useTranslation();

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const displayText = expanded
		? t(info.text)
		: t(info.text).length > 120
		? `${t(info.text).substring(0, 120)}...`
		: t(info.text);

	const ImageContainer = styled("div")(({ theme }) => ({
		width: "80px",
		height: "80px",
		border: "2px solid",
		borderRadius: "0",
		borderColor: theme.palette.secondary.main,
		overflow: "hidden",
		marginRight: "10px",
	}));

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
	});

	const Star = styled("img")({
		width: "20px",
		height: "20px",
		objectFit: "cover",
	});

	const InfoContainer = styled("div")(({ theme }) => ({
		flex: 1,
		backgroundColor: theme.palette.accent.main,
		borderRadius: "10px",
		padding: "25px 20px",
	}));

	return (
		<Grid
			container
			sx={{
				margin: "20px",
			}}
		>
			<Grid item container size={{ xs: 3, md: 2 }} alignItems={"center"}>
				<ImageContainer>
					<Image src={info.img} />
				</ImageContainer>
			</Grid>
			<Grid item container size={{ xs: 9, md: 10 }} flexDirection={"column"}>
				<Typography variant="h6">{t(info.name)}</Typography>
				<Typography
					variant="body"
					sx={{ fontSize: matches ? "15px" : "13px", display: "block" }}
				>
					{t(info.excursion)}
				</Typography>
			</Grid>
			<Box
				sx={{
					display: "flex",
					margin: "10px 0",
					gap: "3px",
				}}
			>
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
				<Star src="star.svg" />
			</Box>
			<Typography variant="body" sx={{ fontSize: matches ? "15px" : "13px" }}>
				{displayText}{" "}
			</Typography>
			{t(info.text).length > 120 && (
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
		</Grid>
	);
};

export default ReviewItem;
