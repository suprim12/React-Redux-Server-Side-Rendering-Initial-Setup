import React, { useState } from 'react'
import MainLayout from '../../components/hoc/MainLayout'
import Timer from '../../components/Timer'


const ReadingTests = () => {
    const [step, setSetp] = useState(1);
    let maxsteps = 3;
    const nextstep = () => {
        if (step <= maxsteps - 1) {
            setSetp(step + 1);
        }
    }
    const prevstep = () => {
        if (step !== 1) {
            setSetp(step - 1);
        }
    }

    const handlesteps = () => {
        switch (step) {
            case 1:
                return (<div className="passage-item">
                    <div className='two-grid'>
                        <div className="two-grid--item">
                            <div className="passage">
                                <h1>READING PASSAGE 1</h1>
                                <p>
                                    You should spend about 20 minutes on Questions 1-13, which are
                                    based on Reading Passage 1 below.
                                </p>
                                <h2 className="passage-title">How to Spot a Liar</h2>
                                <p>
                                    However much we may abhor it, deception comes naturally to all
                                    living things. Birds do it by feigning injury to lead hungry
                                    predators away from nesting young. Spider crabs do it by
                                    disguise: adorning themselves with strips of kelp and other
                                    debris, they pretend to be something they are not – and so
                                    escape their enemies. Nature amply rewards successful deceivers
                                    by allowing them to survive long enough to mate and reproduce.
                                    So it may come as no surprise to learn that human beings- who,
                                    according to psychologist Gerald Johnson of the University of
                                    South California, or lied to about 200 times a day, roughly one
                                    untruth every 5 minutes- often deceive for exactly the same
                                    reasons: to save their own skins or to get something they can’t
                                    get by other means.
                 </p>
                                <p>
                                    But knowing how to catch deceit can be just as important a
                                    survival skill as knowing how to tell a lie and get away with
                                    it. A person able to spot falsehood quickly is unlikely to be
                                    swindled by an unscrupulous business associate or hoodwinked by
                                    a devious spouse. Luckily, nature provides more than enough
                                    clues to trap dissemblers in their own tangled webs- if you know
                                    where to look. By closely observing facial expressions, body
                                    language and tone of voice, practically anyone can recognise the
                                    tell-tale signs of lying. Researchers are even programming
                                    computers – like those used on Lie Detector -to get at the truth
                                    by analysing the same physical cues available to the naked eye
                                    and ear. “With the proper training, many people can learn to
                                    reliably detect lies,” says Paul Ekman, professor of psychology
                                    at the University of California, San Francisco, who has spent
                                    the past 15 years studying the secret art of deception.
                </p>
                                <p>
                                    In order to know what kind of Lies work best, successful liars
                                    need to accurately assess other people’s emotional states.
                                    Ackman’s research shows that this same emotional intelligence is
                                    essential for good lie detectors, too. The emotional state to
                                    watch out for is stress, the conflict most liars feel between
                                    the truth and what they actually say and do.
    </p>
                                <p>
                                    Even high-tech lie detectors don’t detect lies as such; they
                                    merely detect the physical cues of emotions, which may or may
                                    not correspond to what the person being tested is saying.
                                    Polygraphs, for instance, measure respiration, heart rate and
                                    skin conductivity, which tend to increase when people are
                                    nervous – as they usually are when lying. Nervous people
                                    typically perspire, and the salts contained in perspiration
                                    conducts electricity. That’s why sudden leap in skin
                                    conductivity indicates nervousness -about getting caught,
                                    perhaps -which makes, in turn, suggest that someone is being
                                    economical with the truth. On the other hand, it might also mean
                                    that the lights in the television Studio are too hot- which is
                                    one reason polygraph tests are inadmissible in court. “Good lie
                                    detectors don’t rely on a single thing” says Ekma ,but interpret
                                    clusters of verbal and non-verbal clues that suggest someone
                                    might be lying.”
    </p>
                                <p>
                                    The clues are written all over the face. Because the musculature
                                    of the face is directly connected to the areas of the brain that
                                    processes emotion, the countenance can be a window to the soul.
                                    Neurological studies even suggest that genuine emotions travel
                                    different pathways through the brain than insincere ones. If a
                                    patient paralyzed by stroke on one side of the face, for
                                    example, is asked to smile deliberately, only the mobile side of
                                    the mouth is raised. But tell that same person a funny joke, and
                                    the patient breaks into a full and spontaneous smile. Very few
                                    people -most notably, actors and politicians- are able to
                                    consciously control all of their facial expressions. Lies can
                                    often be caught when the liars true feelings briefly leak
                                    through the mask of deception. We don’t think before we feel,
                                    Ekman says. “Expressions tend to show up on the face before
                                    we’re even conscious of experiencing an emotion.”
    </p>
                                <p>
                                    One of the most difficult facial expressions to fake- or
                                    conceal, if it’s genuinely felt - is sadness. When someone is
                                    truly sad, the forehead wrinkles with grief and the inner
                                    corners of the eyebrows are pulled up. Fewer than 15% of the
                                    people Ekman tested were able to produce this eyebrow movement
                                    voluntarily. By contrast, the lowering of the eyebrows
                                    associated with an angry scowl can be replicated at will but
                                    almost everybody. “ If someone claims they are sad and the inner
                                    corners of their eyebrows don’t go up, Ekmam says, the sadness
                                    is probably false.”
    </p>
                                <p>
                                    The smile, on the other hand, is one of the easiest facial
                                    expressions to counterfeit. It takes just two muscles -the
                                    zygomaticus major muscles that extend from the cheekbones to the
                                    corners of the lips- to produce a grin. But there’s a catch. A
                                    genuine smile affects not only the corners of the lips but also
                                    the orbicularis oculi, the muscle around the eye that produces
                                    the distinctive “crow’s feet” associated with people who laugh a
                                    lot. A counterfeit grin can be unmasked if the corners of the
                                    lips go up, the eyes crinkle, but the inner corners of the
                                    eyebrows are not lowered, a movement controlled by the
                                    orbicularis oculi that is difficult to fake. The absence of
                                    lowered eyebrows is one reason why the smile looks so strained
                                    and stiff.
                                </p>
                            </div>
                        </div>
                        <div className="two-grid--item"></div>
                    </div>
                </div>);
            case 2:
                return (<div className="passage-item">
                    <div className='two-grid'>
                        <div className="two-grid--item">
                            <div className="passage">
                                <h1>READING PASSAGE 2</h1>
                                <p>
                                    You should spend about 20 minutes on Questions 13-27, which are
                                    based on Reading Passage 1 below.
                                                </p>
                                <h2 className="passage-title">How to Spot a Liar</h2>
                                <p>
                                    However much we may abhor it, deception comes naturally to all
                                    living things. Birds do it by feigning injury to lead hungry
                                    predators away from nesting young. Spider crabs do it by
                                    disguise: adorning themselves with strips of kelp and other
                                    debris, they pretend to be something they are not – and so
                                    escape their enemies. Nature amply rewards successful deceivers
                                    by allowing them to survive long enough to mate and reproduce.
                                    So it may come as no surprise to learn that human beings- who,
                                    according to psychologist Gerald Johnson of the University of
                                    South California, or lied to about 200 times a day, roughly one
                                    untruth every 5 minutes- often deceive for exactly the same
                                    reasons: to save their own skins or to get something they can’t
                                    get by other means.
                                 </p>
                                <p>
                                    But knowing how to catch deceit can be just as important a
                                    survival skill as knowing how to tell a lie and get away with
                                    it. A person able to spot falsehood quickly is unlikely to be
                                    swindled by an unscrupulous business associate or hoodwinked by
                                    a devious spouse. Luckily, nature provides more than enough
                                    clues to trap dissemblers in their own tangled webs- if you know
                                    where to look. By closely observing facial expressions, body
                                    language and tone of voice, practically anyone can recognise the
                                    tell-tale signs of lying. Researchers are even programming
                                    computers – like those used on Lie Detector -to get at the truth
                                    by analysing the same physical cues available to the naked eye
                                    and ear. “With the proper training, many people can learn to
                                    reliably detect lies,” says Paul Ekman, professor of psychology
                                    at the University of California, San Francisco, who has spent
                                    the past 15 years studying the secret art of deception.
                                </p>
                                <p>
                                    In order to know what kind of Lies work best, successful liars
                                    need to accurately assess other people’s emotional states.
                                    Ackman’s research shows that this same emotional intelligence is
                                    essential for good lie detectors, too. The emotional state to
                                    watch out for is stress, the conflict most liars feel between
                                    the truth and what they actually say and do.
                    </p>
                                <p>
                                    Even high-tech lie detectors don’t detect lies as such; they
                                    merely detect the physical cues of emotions, which may or may
                                    not correspond to what the person being tested is saying.
                                    Polygraphs, for instance, measure respiration, heart rate and
                                    skin conductivity, which tend to increase when people are
                                    nervous – as they usually are when lying. Nervous people
                                    typically perspire, and the salts contained in perspiration
                                    conducts electricity. That’s why sudden leap in skin
                                    conductivity indicates nervousness -about getting caught,
                                    perhaps -which makes, in turn, suggest that someone is being
                                    economical with the truth. On the other hand, it might also mean
                                    that the lights in the television Studio are too hot- which is
                                    one reason polygraph tests are inadmissible in court. “Good lie
                                    detectors don’t rely on a single thing” says Ekma ,but interpret
                                    clusters of verbal and non-verbal clues that suggest someone
                                    might be lying.”
                    </p>
                                <p>
                                    The clues are written all over the face. Because the musculature
                                    of the face is directly connected to the areas of the brain that
                                    processes emotion, the countenance can be a window to the soul.
                                    Neurological studies even suggest that genuine emotions travel
                                    different pathways through the brain than insincere ones. If a
                                    patient paralyzed by stroke on one side of the face, for
                                    example, is asked to smile deliberately, only the mobile side of
                                    the mouth is raised. But tell that same person a funny joke, and
                                    the patient breaks into a full and spontaneous smile. Very few
                                    people -most notably, actors and politicians- are able to
                                    consciously control all of their facial expressions. Lies can
                                    often be caught when the liars true feelings briefly leak
                                    through the mask of deception. We don’t think before we feel,
                                    Ekman says. “Expressions tend to show up on the face before
                                    we’re even conscious of experiencing an emotion.”
                    </p>
                                <p>
                                    One of the most difficult facial expressions to fake- or
                                    conceal, if it’s genuinely felt - is sadness. When someone is
                                    truly sad, the forehead wrinkles with grief and the inner
                                    corners of the eyebrows are pulled up. Fewer than 15% of the
                                    people Ekman tested were able to produce this eyebrow movement
                                    voluntarily. By contrast, the lowering of the eyebrows
                                    associated with an angry scowl can be replicated at will but
                                    almost everybody. “ If someone claims they are sad and the inner
                                    corners of their eyebrows don’t go up, Ekmam says, the sadness
                                    is probably false.”
                    </p>
                                <p>
                                    The smile, on the other hand, is one of the easiest facial
                                    expressions to counterfeit. It takes just two muscles -the
                                    zygomaticus major muscles that extend from the cheekbones to the
                                    corners of the lips- to produce a grin. But there’s a catch. A
                                    genuine smile affects not only the corners of the lips but also
                                    the orbicularis oculi, the muscle around the eye that produces
                                    the distinctive “crow’s feet” associated with people who laugh a
                                    lot. A counterfeit grin can be unmasked if the corners of the
                                    lips go up, the eyes crinkle, but the inner corners of the
                                    eyebrows are not lowered, a movement controlled by the
                                    orbicularis oculi that is difficult to fake. The absence of
                                    lowered eyebrows is one reason why the smile looks so strained
                                    and stiff.
                                                </p>
                            </div>
                        </div>
                        <div className="two-grid--item"></div>
                    </div>
                </div>);
            case 3:
                return (<div className="passage-item">
                    <div className='two-grid'>
                        <div className="two-grid--item">
                            <div className="passage">
                                <h1>READING PASSAGE 3</h1>
                                <p>
                                    You should spend about 20 minutes on Questions 27-40, which are
                                    based on Reading Passage 1 below.
                                                                </p>
                                <h2 className="passage-title">How to Spot a Liar</h2>
                                <p>
                                    However much we may abhor it, deception comes naturally to all
                                    living things. Birds do it by feigning injury to lead hungry
                                    predators away from nesting young. Spider crabs do it by
                                    disguise: adorning themselves with strips of kelp and other
                                    debris, they pretend to be something they are not – and so
                                    escape their enemies. Nature amply rewards successful deceivers
                                    by allowing them to survive long enough to mate and reproduce.
                                    So it may come as no surprise to learn that human beings- who,
                                    according to psychologist Gerald Johnson of the University of
                                    South California, or lied to about 200 times a day, roughly one
                                    untruth every 5 minutes- often deceive for exactly the same
                                    reasons: to save their own skins or to get something they can’t
                                    get by other means.
                                                 </p>
                                <p>
                                    But knowing how to catch deceit can be just as important a
                                    survival skill as knowing how to tell a lie and get away with
                                    it. A person able to spot falsehood quickly is unlikely to be
                                    swindled by an unscrupulous business associate or hoodwinked by
                                    a devious spouse. Luckily, nature provides more than enough
                                    clues to trap dissemblers in their own tangled webs- if you know
                                    where to look. By closely observing facial expressions, body
                                    language and tone of voice, practically anyone can recognise the
                                    tell-tale signs of lying. Researchers are even programming
                                    computers – like those used on Lie Detector -to get at the truth
                                    by analysing the same physical cues available to the naked eye
                                    and ear. “With the proper training, many people can learn to
                                    reliably detect lies,” says Paul Ekman, professor of psychology
                                    at the University of California, San Francisco, who has spent
                                    the past 15 years studying the secret art of deception.
                                                </p>
                                <p>
                                    In order to know what kind of Lies work best, successful liars
                                    need to accurately assess other people’s emotional states.
                                    Ackman’s research shows that this same emotional intelligence is
                                    essential for good lie detectors, too. The emotional state to
                                    watch out for is stress, the conflict most liars feel between
                                    the truth and what they actually say and do.
                                    </p>
                                <p>
                                    Even high-tech lie detectors don’t detect lies as such; they
                                    merely detect the physical cues of emotions, which may or may
                                    not correspond to what the person being tested is saying.
                                    Polygraphs, for instance, measure respiration, heart rate and
                                    skin conductivity, which tend to increase when people are
                                    nervous – as they usually are when lying. Nervous people
                                    typically perspire, and the salts contained in perspiration
                                    conducts electricity. That’s why sudden leap in skin
                                    conductivity indicates nervousness -about getting caught,
                                    perhaps -which makes, in turn, suggest that someone is being
                                    economical with the truth. On the other hand, it might also mean
                                    that the lights in the television Studio are too hot- which is
                                    one reason polygraph tests are inadmissible in court. “Good lie
                                    detectors don’t rely on a single thing” says Ekma ,but interpret
                                    clusters of verbal and non-verbal clues that suggest someone
                                    might be lying.”
                                    </p>
                                <p>
                                    The clues are written all over the face. Because the musculature
                                    of the face is directly connected to the areas of the brain that
                                    processes emotion, the countenance can be a window to the soul.
                                    Neurological studies even suggest that genuine emotions travel
                                    different pathways through the brain than insincere ones. If a
                                    patient paralyzed by stroke on one side of the face, for
                                    example, is asked to smile deliberately, only the mobile side of
                                    the mouth is raised. But tell that same person a funny joke, and
                                    the patient breaks into a full and spontaneous smile. Very few
                                    people -most notably, actors and politicians- are able to
                                    consciously control all of their facial expressions. Lies can
                                    often be caught when the liars true feelings briefly leak
                                    through the mask of deception. We don’t think before we feel,
                                    Ekman says. “Expressions tend to show up on the face before
                                    we’re even conscious of experiencing an emotion.”
                                    </p>
                                <p>
                                    One of the most difficult facial expressions to fake- or
                                    conceal, if it’s genuinely felt - is sadness. When someone is
                                    truly sad, the forehead wrinkles with grief and the inner
                                    corners of the eyebrows are pulled up. Fewer than 15% of the
                                    people Ekman tested were able to produce this eyebrow movement
                                    voluntarily. By contrast, the lowering of the eyebrows
                                    associated with an angry scowl can be replicated at will but
                                    almost everybody. “ If someone claims they are sad and the inner
                                    corners of their eyebrows don’t go up, Ekmam says, the sadness
                                    is probably false.”
                                    </p>
                                <p>
                                    The smile, on the other hand, is one of the easiest facial
                                    expressions to counterfeit. It takes just two muscles -the
                                    zygomaticus major muscles that extend from the cheekbones to the
                                    corners of the lips- to produce a grin. But there’s a catch. A
                                    genuine smile affects not only the corners of the lips but also
                                    the orbicularis oculi, the muscle around the eye that produces
                                    the distinctive “crow’s feet” associated with people who laugh a
                                    lot. A counterfeit grin can be unmasked if the corners of the
                                    lips go up, the eyes crinkle, but the inner corners of the
                                    eyebrows are not lowered, a movement controlled by the
                                    orbicularis oculi that is difficult to fake. The absence of
                                    lowered eyebrows is one reason why the smile looks so strained
                                    and stiff.
                                                                </p>
                            </div>
                        </div>
                        <div className="two-grid--item"></div>
                    </div>
                </div>);
            default:
                return null;
        }
    }

    return (
        <MainLayout>
            <section className="reading-test">
                <form>
                    {handlesteps()}
                </form>
                <aside className="test-bottom-actions">
                    {step > 1 &&
                        <div className="test-bottom-actions--prev">
                            <button className="start-btn" type="button" id="prevbtn" onClick={prevstep}>
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
						Previous Passage
					</button>
                        </div>
                    }
                    <div className="test-bottom-actions--timer">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Timer timer="60" text="60 : 00" start="true"></Timer>
                    </div>
                    <div className="test-bottom-actions--next">
                        {step !== maxsteps &&
                            <button className="start-btn" type="button" id="nextbtn" onClick={nextstep}>
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
						Next Passage
					</button>
                        }
                        <button className="start-btn" type="button" id="submitbutton">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
						Submit
					</button>
                    </div>
                </aside>
            </section>
        </MainLayout>
    )
}

export default ReadingTests
