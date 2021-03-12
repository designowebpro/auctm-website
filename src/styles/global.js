import css from '@emotion/css'
import colors from 'styles/colors'
import dimensions from 'styles/dimensions'

const globalStyles = css`
    html,
    body,
    #root {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --space: 2.5rem;
        --space-sm: 1rem;
        --space-lg: 4rem;

        --color-primary: #223165;
        --color-accent: #FF6355;
        --text-dark: #1C1C1C;
        --text-light: #676666;
        --light-blue: #FAFBFF;
        --faded-blue: #EFF3FF;

        --color-primary-10: rgba(34, 49, 101, 0.05);
        --color-primary-20: rgba(34, 49, 101, 0.2);
        --color-accent-20: rgba(255, 99, 85, 0.2);
        --color-accent-10: rgba(255, 99, 85, 0.1);

        font-size: 62.5% !important;
    }

    // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

    html {
        font-family: 'Lato', sans-serif;
    }

    body {
        width: 100%;
        margin: 0 auto;
        line-height: 1.5;
        color: ${colors.grey900};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;

        @media(max-width: ${dimensions.mobile}px) {
            font-size: 8px;
        }

        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 

        * {
            box-sizing: border-box;

            &::selection {
                background: ${colors.orange500};
                color: white;
            }
        }
    }

    /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
    #___gatsby,
    div[role="group"][tabindex] {
        height: 100%;
        min-height: 100% !important;
    }

    .bg--light-blue {
        background-color: var(--light-blue);
    }

    .bg--dark {
        background-color: var(--color-primary);
    }

    .bg--gradient {
        background: linear-gradient(to top right, #223165, #34478B);
        color: white;
    }

    .bg--gradient-dark {
        background: linear-gradient(to top right, #111933, #34478B);
        color: white;
    }

    .position-relative {
        position: relative;
    }

    .carousel.carousel-slider {
        // overflow-x: hidden !important;
        // overflow-y: auto !important;
        overflow: visible !important;

        & .control-dots {
            bottom -15rem;
        }
    }

    .carousel .slider-wrapper {
        border-bottom-right-radius: 3rem;
        border-top-right-radius: 3rem;

        @media(max-width: ${dimensions.tablet}px) {
            border-bottom-right-radius: 2rem;
            border-top-right-radius: 2rem;
        }

        @media(max-width: ${dimensions.mobile}px) {
            border-bottom-right-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
    }

    .carousel .slide {
        background-color: transparent;
    }

    .margin-top-10 {
        margin-top: 10rem;
    }

    .margin-top-15 {
        margin-top: 15rem;
    }

    .margin-top-3 {
        margin-top: 3rem;
    }

    .margin-right-3 {
        margin-right: 3rem;
    }

    .margin-top-5 {
        margin-top: 5rem;
    }

    .margin-bottom-2 {
        margin-bottom: 2rem;
    }

    .margin-bottom-5 {
        margin-bottom: 5rem;
    }

    .height-100 {
        height: 100%;
    }

    .accent__line--left, .accent__line--center {
        position: relative;

        &:after {
            content: '';
            display: inline-block;
            width: 50px;
            border-radius: 3px;
            height: 3px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            bottom: -10px;
            transition: .3s ease-in-out;
        }
    }

    .accent__line--center {

        &:after {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media (max-width: ${dimensions.mobile}px){
        div[data-sal-mobile-disabled="true"]{
            transform: none !important;
            opacity: 1 !important;
        }
    }

    .carousel_dots {
        list-style: none;
        display: block;
        text-align: center;
        padding: 0;
        width: 100%;

        li {
            position: relative;
            display: inline-block;
            padding: 0;
            margin: 0 10px;
            cursor: pointer;
            transform: scale(.8);
            transition: all .2s;
        
            button {
                border: 0;
                font-size: 14px;
                background: var(--color-primary);
                display: block;
                height: 1.4rem;
                width: 1.4rem;
                cursor: pointer;
                position: relative;
                border-radius: 50%;
                color: transparent;
                opacity: 0.25;
            }

            &.slick-active {
                
                & button {
                    opacity: 1;
                    width: 3rem;
                    border-radius: 10px;

                    &::before {
                        background: white;
                    }
                }
            }
        }
    }

    .carousel_dots.accent {
        li {
            button {
                background: var(--color-accent);
            }
        }
    }

    // @media (min-width: 320px){
    //     div[data-sal-desktop-disabled="true"]{
    //         transform: none !important;
    //         opacity: 1 !important;
    //     }
    // }
`

export default globalStyles
