import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import styled from "styled-components";
import { excursions } from "../utils/consts";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ paddingTop: 3 }}>{children}</Box>}
		</div>
	);
};

const Excursion = () => {
	const [value, setValue] = React.useState(0);
	const { excursionId } = useParams();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("lg"));
	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
	const [expanded, setExpanded] = useState(false);

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		objectFit: "cover",
	});

	const Circle = styled("div")({
		width: "8px",
		display: "inline-flex",
		marginRight: "8px",
		height: "8px",
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
	});

	const { t } = useTranslation();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const info = excursions.find((exc) => exc.id == excursionId);

	const displayText = expanded
		? t(info.desc)
		: t(info.desc).length > 150
		? `${t(info.desc).substring(0, 150)}...`
		: t(info.desc);

	return (
		<Grid container spacing={2} marginBottom={"30px"}>
			<Grid
				item
				size={{ xs: 12, md: 7 }}
				sx={{
					padding: matches ? "30px 50px" : "0"
				}}
			>
				<Image src={info.img} />
			</Grid>
			<Grid
				item
				container
				size={{ xs: 12, md: 5 }}
				spacing={2}
				sx={{ padding: matches ? "20px 30px" : "10px 25px" }}
			>
				<Grid item size={{ xs: 12 }}>
					<Typography
						marginBottom={"4px"}
						variant={matches ? "h4" : "h6"}
						color={theme.palette.text.thirdry}
					>
						{t(info.name)}
					</Typography>
					<Typography
						sx={{ fontWeight: "300", fontSize: "14px" }}
						color={theme.palette.text.thirdry}
					>
						{t("excursions.age_rating")} {t(info.age)}
					</Typography>
					<Typography
						sx={{ fontWeight: "300", fontSize: "14px" }}
						color={theme.palette.text.thirdry}
					>
						{t("excursions.duration")} {t(info.time)}
					</Typography>
					<Typography
						sx={{ fontWeight: "300", fontSize: "14px" }}
						color={theme.palette.text.thirdry}
					>
						{t("excursions.route")} {t(info.route)}
					</Typography>
					<Typography
						sx={{ fontWeight: "300", fontSize: "14px", lineHeight: 1.3 }}
						color={theme.palette.text.thirdry}
						dangerouslySetInnerHTML={{
							__html: `${t("excursions.price")} ${t(info.price)}`,
						}}
					/>

					<Typography
						variant="body2"
						sx={{ color: "text.thirdry", fontSize: matches ? "16px" : "14px" }}
						align="justify"
						marginTop={matchesMd ? 2 : 1}
					>
						{matchesMd ? t(info.desc) : displayText}{" "}
					</Typography>
					{!matchesMd && t(info.desc).length > 150 && (
						<Button
							onClick={toggleExpand}
							sx={{
								color: theme.palette.primary.main,
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
				<Grid container item size={{ xs: 12 }} alignItems={"end"}>
					<Button
						type="a"
						target="_blank"
						href={info.url}
						variant="contained"
						disableElevation
						color="primary"
						sx={{ width: "100%", height: "fit-content" }}
					>
						{t("excursions.book")}
					</Button>
				</Grid>
			</Grid>

			<Grid item size={{ xs: 12 }}>
				<Tabs
					value={value}
					onChange={handleChange}
					{...(!matches ? { centered: true } : {})}
					variant="fullWidth"
				>
					<Tab
						label={t("excursions.tab1")}
						sx={{
							color: "text.thirdry",
							fontSize: matchesMd ? "14px" : "12px",
						}}
					/>
					<Tab
						label={t("excursions.tab2")}
						sx={{
							color: "text.thirdry",
							fontSize: matchesMd ? "15px" : "12px",
						}}
					/>
					<Tab
						label={t("excursions.tab3")}
						sx={{
							color: "text.thirdry",
							fontSize: matchesMd ? "15px" : "12px",
						}}
					/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<Box sx={{ padding: matches ? "0 30px" : "0 20px" }}>
						{info.what_you_learn?.map((item, index) => (
							<Typography
								sx={{
									color: "text.thirdry",
									fontSize: matches ? "16px" : "14px",
								}}
							>
								<Circle />
								{t(item.text)}
							</Typography>
						))}
					</Box>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Box sx={{ padding: matches ? "0 30px" : "0 20px" }}>
						{info.what_to_expect?.map((item, index) => (
							<Typography
								sx={{
									color: "text.thirdry",
									fontSize: matches ? "16px" : "14px",
								}}
							>
								<Circle />
								{t(item.text)}
							</Typography>
						))}
					</Box>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Box sx={{ padding: matches ? "0 30px" : "0 20px" }}>
						{info.details?.map((item, index) => (
							<Typography
								sx={{
									color: "text.thirdry",
									fontSize: matches ? "16px" : "14px",
								}}
							>
								<Circle />
								{t(item.text)}
							</Typography>
						))}
					</Box>
				</TabPanel>
			</Grid>
		</Grid>
	);
};

export default Excursion;
