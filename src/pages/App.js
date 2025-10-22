import { Box, useMediaQuery, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfileSection from "../components/ProfileSection";
import Header from "../components/Header";
import Excursion from "./Excursion";
import Footer from "../components/Footer";

// Тема создаётся ВНЕ компонента
const theme = createTheme({
	typography: {
		fontFamily: "Roboto serif, serif",
	},
	palette: {
		primary: {
			main: "#073b00ff", // Теплый коричневый (как старинная бумага)
			darker: "#052900ff", // Более темный оттенок для контраста
		},
		secondary: {
			main: "#FCC992", // Приглушенный зелено-серый (как патина)
		},
		background: {
			default: "#ffe7ceff", // Кремовый фон (имитация состаренной бумаги)
		},
		text: {
			primary: "#e0c2a2ff", // Темно-коричневый (читаемый, но не черный)
			secondary: "#d4a97bff", // Мягкий серо-коричневый
			thirdry: "#333333ff", // Мягкий серо-коричневый
		},
	},
});

function App() {
	return (
		// Теперь ThemeProvider получает корректную тему
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ResponsiveBox />
		</ThemeProvider>
	);
}

// Выносим логику с медиа-запросами в отдельный компонент
function ResponsiveBox() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box
			sx={{
				width: "100%",
				marginTop: "0",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route index element={<ProfileSection />} />
					<Route path="/:excursionId" element={<Excursion />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</Box>
	);
}

export default App;
