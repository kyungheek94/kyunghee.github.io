import Typography from "typography"
import funston from "typography-theme-funston"

const heading = 1.8
const typography = new Typography({
    baseLineHeight: 1.25,
    scaleRatio: 2.25,
    paragraphSpaceing: 1.25,
    bodyGray: 11,
    boldWeight: 600,
    headerFontFamily: ['Youth', 'sans-serif'],
    bodyFontFamily: ['SeoulNamsanM', 'sans-serif'],
    overrideThemeStyles: () => ({
        'h1,h2,h3,h4,h5,h6': {
            margin: '1.25rem 0 1rem 0'
        },
        'h1': {
            fontSize: `${heading}rem`
        },
        'h2': {
            fontSize: `${heading-0.3}rem`
        },
        'h3': {
            fontSize: `${heading-0.6}rem`
        },
        'h4': {
            fontSize: `${heading-0.9}rem`
        },
        a: {
            color: 'var(--textNormal)',
            textDecoration: 'none',
            boxShadow: 'inset 0 -3px 0 var(--linkNormal)',
            transition: 'box-shadow .5s, color .2s'
        },
        'a:hover': {
            boxShadow: 'inset 0 -50px 0 var(--linkHighlight)',
            color: 'var(--textRevert)'
        },
        hr: {
            background: 'var(--hr)',
        },
        table: {
            maxWidth: '500px'
        },
        'td,th': {
            borderBottom: '1px solid var(--tableBorder)'
        },
        li: {
            marginBottom: 0
        }
    })
}, funston)

export const { scale, rhythm, options } = typography
export default typography