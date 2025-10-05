import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ReviewItem from "./ReviewItem";
import Carousel from "react-multi-carousel";

const ReviewCarousel = ({ list }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Box
			sx={{
				width: "100%",
				margin: "0 auto",
				background: theme.palette.primary.main,
				backgroundRepeat: "no-repeat"
			}}
		>
			<Carousel
				swipeable={true}
				showDots={false}
				infinite={true}
				responsive={responsive}
				autoPlay={false}
			>
				{list.map((item, index) => (
					<ReviewItem info={item} />
				))}
			</Carousel>
		</Box>
	);
};

export default ReviewCarousel;
