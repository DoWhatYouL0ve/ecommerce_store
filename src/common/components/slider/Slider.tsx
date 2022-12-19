import { useEffect, useState } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { StyledButton } from '../../styles/StyledButton'

import { sliderData } from './sliderData/sliderData'
import { StyledSlider } from './styles/StyledSlider'

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const sliderLength = sliderData.length

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)

    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <>
      <StyledSlider>
        <AiOutlineArrowLeft className={'arrow prev'} onClick={prevSlide} />
        <AiOutlineArrowRight className={'arrow next'} onClick={nextSlide} />

        {sliderData.map((slide, index) => {
          const { image, heading, desc } = slide

          return (
            <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
              {index === currentSlide && (
                <>
                  <img src={image} alt="picture" />
                  <div className={'content'}>
                    <h2>{heading}</h2>
                    <p>{desc}</p>
                    <hr />
                    <StyledButton className={'primary'} style={{ width: '200px' }}>
                      <a href="#products">Shop now</a>
                    </StyledButton>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </StyledSlider>
    </>
  )
}
