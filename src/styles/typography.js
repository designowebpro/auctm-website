import css from '@emotion/css'
import dimensions from 'styles/dimensions'

const typeStyles = css`
    h1, h2, h3, h4, h5, h6 {
        color: var(--text-dark);
    }

    h1 {
        font-size: 3.6rem;
        line-height: 1.45;
        font-weight: 800;

        @media(max-width:${dimensions.tablet}px) {
            font-size: 3rem;
        }

        @media(max-width:${dimensions.mobile}px) {
            font-size: 2.5rem;
        }
    }

    h2 {
        font-size: 1.8rem;
        color: var(--text-light);
        line-height: 1.5;
        font-weight: normal;

        @media(max-width:${dimensions.mobile}px) {
            font-size: 1.6rem;
        }
    }

    h3 {
        line-height: 1.2;
        font-size: 2.8rem;

        @media(max-width:${dimensions.mobile}px) {
            font-size: 2rem;
        }
    }

    h4 {
        line-height: 1.2;
        font-size: 2.6rem;

        @media(max-width:${dimensions.mobile}px) {
            font-size: 2.2rem;
        }
    }

    h5 {
        margin-bottom: 2.6;
        font-weight: 500;
        font-size: 2.4rem;
    }

    h6 {
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
    }

    p {
        line-height: 1.9;
        font-size: 1.8rem;
        color: var(--text-light);

        @media(max-width: ${dimensions.tablet}px) {
            font-size: 1.6rem;
        }
    }

    a {
        &:hover {
            cursor: pointer;
        }
    }

    .text-small {
        font-size: 1.8rem;
        color: var(--text-light);

        @media(max-width: ${dimensions.tablet}px) {
            font-size: 1.6rem;
        }
    }

    .special--text {
        color: var(--color-primary);
        font-size: 1.6rem;
        margin: 2rem 0;
    }

    .color--accent {
        color: var(--color-accent);
    }

    .text-center {
        text-align: center;
    }
`

export default typeStyles
