import type { Config } from 'tailwindcss'

export default <Config>{
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#0F172A',
                accent: '#F59E0B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
