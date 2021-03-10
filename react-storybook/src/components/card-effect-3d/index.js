import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import './card-effect-3d.scss'

const CardEffect3D = (props) => {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [cardTransition, setCardTransition] = useState("none");
    const [mouseEnter, setMouseEnter] = useState(false);

    const containerRef = useRef();

    const onMouseMove = (e) => {
        let container = containerRef.current
        let containerCenterX = ((container.offsetLeft * 2) + container.offsetWidth) / 2;
        let containerCenterY = ((container.offsetTop * 2) + container.offsetHeight) / 2;
        let xAxis = -(containerCenterX - e.pageX) / 25;
        let yAxis = (containerCenterY - e.pageY) / 25;
        setXAxis(xAxis);
        setYAxis(yAxis);
    };

    const onMouseEnter = (_) => {
        setCardTransition("none")
        setMouseEnter(true)
    };

    const onMouseLeave = (_) => {
        setCardTransition("all 0.5s ease")
        setMouseEnter(false)
        setXAxis(0)
        setYAxis(0)
    };

    let cardCss = {
        transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
        transition: cardTransition
    };

    let components = [];
    for (let i = 0; i < props.components.length; i++) {
        components.push({
            'component': props.components[i],
            'css': {
                transform: mouseEnter ? `translateZ(${150 / (i + 2)}px)` : "translateZ(0px)",
                transition: 'all 0.75s ease-out'
            }
        });
    }

    let imageCss = {transform: mouseEnter ? "translateZ(150px) rotateZ(-20deg)" : "translateZ(0px) rotateZ(0deg)"};
    let circleCss = {
        background:
            `linear-gradient(to right, ${props.circleColours.primary}, ${props.circleColours.secondary})`,
    };

    return (
        <div className={"container"}
             onMouseMove={onMouseMove}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             ref={containerRef}>
            <div className={"card"} style={cardCss}>
                <div className={"image"}>
                    <div className={"circle"} style={circleCss}/>
                    <img src={props.image} alt={"adidas"} style={imageCss}/>
                </div>
                <div className={"info"}>
                    {
                        components.map(value => {
                            return <div style={value.css}>
                                {value.component}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

CardEffect3D.propTypes = {
    'circleColours': PropTypes.shape({
        'primary': PropTypes.string.isRequired,
        'secondary': PropTypes.string.isRequired,
    }).isRequired,
    'image': PropTypes.string.isRequired,
    'components': PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default CardEffect3D