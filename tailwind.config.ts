import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: {
				// depends on the primary color of your project
				50: "#F5F9FF",
				100: "#D7E3FF",
				200: "#A9C4FE",
				300: "#81A8FE",
				400: "#588DFD",
				500: "#2D70FD",
				600: "#024DED",
				700: "#0239B1",
				800: "#012674",
				900: "#01143D",
				950: "#000A1E"
			},
			secondary: {
				// depends on the secondary color of your project
				50: "#DEE7F7",
				100: "#BECFEF",
				200: "#789CDD",
				300: "#376CCD",
				400: "#23478B",
				500: "#122548",
				600: "#0E1D39",
				700: "#0B172D",
				800: "#070F1D",
				900: "#040810",
				950: "#020408"
			},
			default: {
				// grey color
				50: "#F7F7F8",
				100: "#EBECED",
				200: "#DDDDDF",
				300: "#CBCBCD",
				400: "#BBBCBE",
				500: "#A9AAAD",
				600: "#87888D",
				700: "#646568",
				800: "#51555D",
				900: "#202122",
				950: "#111212"
			},	
			warning: {
				50: "#FDF9E7",
				100: "#FCF3D4",
				200: "#F9E7A4",
				300: "#F6DB79",
				400: "#EFCE53",
				500: "#F0C31E",
				600: "#C9A00D",
				700: "#997A0A",
				800: "#645007",
				900: "#352A04",
				950: "#181302"
			},
			info: {
				50: "#EBF4FE",
				100: "#D2E5FE",
				200: "#ABCEFD",
				300: "#7EB4FB",
				400: "#5EA4FA",
				500: "#2984F9",
				600: "#0667E4",
				700: "#054CA9",
				800: "#033372",
				900: "#021937",
				950: "#010D1E"
			},
			success: {
				50: "#EFFAF1",
				100: "#E0F5E3",
				200: "#BDEBC4",
				300: "#9DE1A8",
				400: "#83D911",
				500: "#59CC6B",
				600: "#37B34A",
				700: "#2A8938",
				800: "#1C5A25",
				900: "#0E2F13",
				950: "#07170A"
			},
			error: {
				50: "#FDEDED",
				100: "#F9D7D7",
				200: "#F4AEAE",
				300: "#EF8A8A",
				400: "#EB6B6A",
				500: "#E43A3A",
				600: "#CA1C1C",
				700: "#991515",
				800: "#630E0E",
				900: "#310707",
				950: "#1B0404"
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
