import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const MainBanner = () => {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width:1025px)", () => {
            const tl = gsap.timeline();
            gsap.set(".middle",{opacity:0});
            tl.from(".bgTop",{height:0,opacity:0,duration:1})
            .from(".bgBottom",{height:0,opacity:0,duration:1},"<")
            .from(".top",{y:100,opacity:0,duration:1})
            .from(".bottom",{y:-100,opacity:0,duration:1},"<")
            .to(".bgTop",{y:-250,opacity:0,duration:.7})
            .to(".bgBottom",{y:250,opacity:0,duration:.7},"<")
            .to(".top",{y:-130,duration:.7})
            .to(".bottom",{y:130,duration:.7},"<")
            .to(".middle",{opacity:1,duration:.7},"<");
        });

    },containerRef);

    return () => ctx.revert();
},[]);

    return (
        <div id="MainBanner" ref={containerRef}>
            <div className="gsapContainer">
                <div className="bg">
                    <span className="bgTop"></span>
                    <span className="bgBottom"></span>
                </div>
                <div className="top center">WEB PUBLISHING</div>
                <div className="middle center">PARK SEONG HYEON</div>
                <div className="bottom center">SEO & REACT</div>
            </div>
        </div>
    );
};

export default MainBanner;