import React from 'react'
import {useState} from 'react';
import Cases from '../videos_case/case_vid'
import './vid_container.css'
import ArrowD from './arrowDown.png'
import Thumbnail from './Thumnail.jpg'
import Thumbnail1 from './Thumnail1.jpg'
function Video_container() {
    const [readMore,setReadMore]=useState(false);

    const obj1 = { logo: Thumbnail1,title: 'Case of Migraine managed with Homeopathy...  Dr Rahul Joshi cases..' ,details: 'Intensity of pain is 9 out of 10, duration of pain is whole day, irregular diet then homeopathy treatment helps to get rid of the severity...', src:'https://www.youtube.com/watch?v=thlxbUAErsY&feature=youtu.be' };
    const obj2 = { logo: Thumbnail,title: 'Epilepsy and Migraine treated with Homeopathy.Experience shared by patient - Isheeta SawantIsheeta Sawant' ,details: 'Severe pain with the magnitude that see bright oranges purples, always there will be a cold sweat and dizziness then after taking treatment from homeopathy in 10 to 12 months she get better results....',src:'https://www.youtube.com/watch?v=RU33TGq5jrI' };
    const array = [obj1, obj2,obj1,obj2,obj1]
    const linkName=readMore?'Read Less':'Read More'
    const size=readMore?true:false

        return (
        <>
            <div className='testimonialCaseCont'>
            
                    {(size?array:array.slice(0,4)).map((_, index) => {
                        if(!size && index>5){
                            
                        }
                        if (index % 2 === 0) {

                            return (
                                <>
                                    <Cases {...array[index]} alter="false" key={index} />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Cases  {...array[index]} alter="true" key={index}/>
                                </>
                            )
                        }
                    }
                    )}

                <a onClick={()=>{setReadMore(!readMore)}} className='readMoreDiv'>
                    <div className='arrowDiv'>
                        <img className={linkName} src={ArrowD} alt='arrow' />
                    </div>
                    <a className='readMore' href='#'>{linkName}</a>
                </a>
            </div>
        </>
    )
}

export default Video_container