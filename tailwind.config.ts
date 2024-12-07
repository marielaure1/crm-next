import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		width: {
			"btn-icon": "32px",
			"btn-icon-mobile": "32px"
		},
		height: {
			"btn-icon": "32px",
			"btn-icon-mobile": "32px"
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
  		colors: {
  			background: 'var(--background)',
			btn: {
				"yellow-light": "var(--amber-light)",
				"blue-light": "var(--sky-light)",
				"gray-light": "var(--gray-light)",
			},
			"btn-theme": {
				background: {
					"light": "var(--btn-theme-background-light)",
					"dark": "var(--btn-theme-background-dark)",
					"system": "var(--btn-theme-background-system)",
				},
				foreground: {
					"light": "var(--btn-theme-foreground-light)",
					"dark": "var(--btn-theme-foreground-dark)",
					"dark-desactived": "var(--btn-theme-foreground-dark-desactived)",
					"system": "var(--btn-theme-foreground-system)",
				}
			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			"primary-light": {
				DEFAULT: 'hsl(var(--primary-light))',
				foreground: 'hsl(var(--primary-foreground))'
			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			white: "var(--white)",
			blue: "var(--blue)",
			red: "var(--red)",
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
			"yellow-light": "var(--amber-light)",
			"blue-light": "var(--sky-light)",
			"gray-light": "var(--gray-light)",
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
				"menu-item": 'var(--background-menu-link)',
				"menu-item-active": 'var(--background-menu-link-active)',
  			},
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
