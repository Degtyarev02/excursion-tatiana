import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import { ReactComponent as PhoneIcon } from "..//icons/phone.svg";
import { ReactComponent as TgIcon } from "..//icons/tg.svg";
import { ReactComponent as TripsterIcon } from "..//icons/tripster.svg";
import { ReactComponent as WAIcon } from "..//icons/whatsapp.svg";

const ContactItems = styled("div")({
	display: "flex",
	alignItems: "center",
	flexWrap: "wrap",
	marginTop: "10px",
	gap: "5px",
});

const ContactItem = styled("div")({
	display: "flex",
	alignItems: "center",
	marginBottom: "8px",
});

const ContactText = styled("a")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.primary.light,
	borderRadius: "20px",
	marginRight: "-40px",
	padding: "11px 40px 11px 16px",
	transition: "all 0.3s ease",
}));

const ContactIcons = () => {
	const [expanded, setExpanded] = useState({
		email: false,
		tg: false,
		tripster: false,
		phone: false,
		wa: false,
	});

	const handleExpandClick = (key) => {
		setExpanded((prevExpanded) => ({
			...prevExpanded,
			[key]: !prevExpanded[key],
		}));
	};

	return (
		<ContactItems>
			<ContactItem>
				<Collapse
					orientation="horizontal"
					in={expanded.tg}
					timeout="auto"
					unmountOnExit
				>
					<ContactText
						href="https://t.me/Tatiana_Prokazova"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							textDecoration: "none",
							"&:hover": { textDecoration: "underline" },
						}}
					>
						@Tatiana_Prokazova
					</ContactText>
				</Collapse>
				<IconButton
					aria-label="tg"
					onClick={() => handleExpandClick("tg")}
					sx={{ backgroundColor: "secondary.main" }}
				>
					<TgIcon style={{ width: 24, height: 24 }} />
				</IconButton>
			</ContactItem>

			<ContactItem>
				<Collapse
					orientation="horizontal"
					in={expanded.tripster}
					timeout="auto"
					unmountOnExit
				>
					<ContactText
						href="https://experience.tripster.ru/guide/379242/"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							textDecoration: "none",
							"&:hover": { textDecoration: "underline" },
						}}
					>
						Tripster
					</ContactText>
				</Collapse>
				<IconButton
					aria-label="tripster"
					onClick={() => handleExpandClick("tripster")}
					sx={{ backgroundColor: "secondary.main" }}
				>
					<TripsterIcon style={{ width: 24, height: 24 }} />
				</IconButton>
			</ContactItem>

			<ContactItem>
				<Collapse
					orientation="horizontal"
					in={expanded.phone}
					timeout="auto"
					unmountOnExit
				>
					<ContactText
						href="tel:+7 926 836-28-58"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							textDecoration: "none",
							"&:hover": { textDecoration: "underline" },
						}}
					>
						8(926)836-28-58
					</ContactText>
				</Collapse>
				<IconButton
					aria-label="phone"
					onClick={() => handleExpandClick("phone")}
					sx={{ backgroundColor: "secondary.main" }}
				>
					<PhoneIcon style={{ width: 24, height: 24 }} />
				</IconButton>
			</ContactItem>

			<ContactItem>
				<Collapse
					orientation="horizontal"
					in={expanded.wa}
					timeout="auto"
					unmountOnExit
				>
					<ContactText
						href="https://wa.me/79268362858"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							textDecoration: "none",
							"&:hover": { textDecoration: "underline" },
						}}
					>
						WhatsApp
					</ContactText>
				</Collapse>
				<IconButton
					aria-label="wa"
					onClick={() => handleExpandClick("wa")}
					sx={{ backgroundColor: "secondary.main" }}
				>
					<WAIcon style={{ width: 24, height: 24 }} />
				</IconButton>
			</ContactItem>
		</ContactItems>
	);
};

export default ContactIcons;
