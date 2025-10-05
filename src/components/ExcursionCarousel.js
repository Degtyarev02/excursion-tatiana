import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import ExcursionItem from "./ExcursionItem";

const ExcursionCarousel = ({ list }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const responsive = {
		lgDesktop: {
			breakpoint: { max: 3000, min: 2048 },
			items: 2,
		},
		desktop: {
			breakpoint: { max: 2048, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 700 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 700, min: 0 },
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
				{list.map((info, index) => (
					<ExcursionItem info={info} />
				))}
			</Carousel>
		</Box>
	);
};

export default ExcursionCarousel;
