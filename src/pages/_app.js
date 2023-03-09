import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			paper: "#0a1929",
		},
		text: {
			primary: "#ffffff",
			secondary: "#46505A",
		},
		action: {
			active: "#3399ff",
		},
		success: {
			main: "#66bb6a",
			dark: "#009688",
		},
	},
});

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
