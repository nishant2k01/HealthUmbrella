import React from 'react'
import "./CaseCard.css"
import image1 from "./images/image1.png"

function CaseCard() {
  return (
    <div className='caseCard-div'>
        <h2>Case 1:</h2>
        <div className="caseCard">
            <div className="top">
                <div className="left">
                    <h3>Summary</h3>
                    <p>A leading female artiste was completely distressed by Migraine since a long time. She would get an episode every time she travelled for performances. With regular homeopathic treatment, she could travel stress-free and migraine-free.</p>
                    <h4>Initial case history</h4>
                </div>
                <div className="right">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <p><span>After 6 months:</span>This is an interesting case of migraine in a leading female artiste, who was completely distressed with her complaints.

She reported that her migraine would begin whenever she had to travel for performances, and if her journey lasted for more than one hour, she would get a more intense attack of migraine.

The headache would be accompanied by severe nausea, belching and vomiting that was so pronounced that it continued even 2-3 hours after the journey was complete.

Her symptoms always got worse when she travelled on slopes, ghats (on the hills) or uneven terrain, and she had sleeplessness because of the headache.</p>
                </div>
                <div className="right">
                    <p><span>After 12 months:</span>Her migraine put her in such a dilemma that she always made sure she completed her journey a couple of days before her performance so that she was fit on the day of her act.

Based on her symptoms, we prescribed the remedy Cocculus indicus 30.

She reported a week later saying there was slight improvement in her headache. But the real test came when she had to travel for yet another performance a month later. She reported later that her journey had been comfortable and pleasant, and that she neither suffered from headache nor vomiting.

It has been 3 years since and the patient is absolutely free of migraine.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseCard