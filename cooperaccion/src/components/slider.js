import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import Inicio from './inicio'
import Objetivo from './objetivo'
import Participantes from './participantes'
import Dinamica from './dinamica'
import ElCandado from './el-candado'
import ElPremio from './el-premio'
import Ayudas from './ayudas'
import '../style2.css'

import "./styles.css"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper" >
        <div ref={sliderRef} className="keen-slider" style={{height:'500px'}} >
          <div className="keen-slider__slide number-slide1"><Objetivo/></div>
          <div className="keen-slider__slide number-slide2"><Participantes/></div>
          <div className="keen-slider__slide number-slide3"><Inicio/></div>
          <div className="keen-slider__slide number-slide4"><Dinamica/></div>
          <div className="keen-slider__slide number-slide5"><Ayudas/></div>
          <div className="keen-slider__slide number-slide6"><ElCandado/></div>
          <div className="keen-slider__slide number-slide7"><ElPremio/></div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
