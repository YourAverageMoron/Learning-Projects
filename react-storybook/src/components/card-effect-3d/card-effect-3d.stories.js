import React from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import CardEffect3D from "./index";
import image from "./adidas.png"

export default {title: 'Card Effect 3D', decorators: [withKnobs]}

export const cardEffect3D = () => {

    const buttonCss = {
        fontFamily: "sans-serif",
        padding: '0.5rem 2rem',
        background: 'none',
        border: 'none',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '30px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#585858',
    }

    return <CardEffect3D circleColours={{primary: "rgba(245, 70, 66, 0.75)", secondary: "rgba(8, 83, 156, 0.75)"}}
                         image={image} components={[
        <h1 style={{
            fontFamily: "sans-serif",
            fontSize: '3rem',
        }}>Adidas ZX</h1>,
        <h3 style={{
            fontFamily: "sans-serif",
            fontSize: '1.3rem',
            padding: '2rem 0',
            color: '#585858',
            fontWeight: "lighter",

        }}>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>,
        <div style={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <button style={buttonCss}>7</button>
            <button style={buttonCss}>8</button>
            <button style={buttonCss}>9</button>
            <button style={buttonCss}>10</button>
        </div>,
        <div style={{
            marginTop: "5rem",
        }}>
            <button style={{
                width: "100%",
                padding: "1rem 0",
                background: "#f54642",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "bolder",
                borderRadius: "30px",
                fontFamily: "sans-serif",
            }}>Purchase</button>
        </div>
    ]}/>
}