import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap/gsap-core";

const Footer = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                    scrollTrigger:{
                    trigger:containerRef.current,
                    start:"top bottom",
                    end : "bottom bottom",
                }
            })
            tl.from("#footer .top .left div:first-child", {
                opacity:0,
                x : -50
            })
            tl.from("#footer .top .left div:nth-child(2)", {
                opacity:0,
                x : -50
            })
            tl.from("#footer .top .left div:last-child", {
                opacity:0,
                x : -50
            })
            tl.from("#footer .bottom", {
                opacity:0,
                y : 50
            })

        })
        return () => ctx.revert();
    }, [])
    return(
        <footer ref={containerRef}>
            <div id="footer">
                <div className="top">
                    <div className="left">
                        <div>LET'S BUILD </div>
                        <div>YOUR NEXT WEB</div>
                        <div>TOGETHER</div>
                    </div>
                    <div className="right" onClick={() => {window.scrollTo(0, 0)}}> 
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="info">
                        <ul>
                            <li><span>MAIL</span>erroop0@gmail.com</li>
                            <li><span>EXPERIENCE</span>Web Agency Projects</li>
                            <li><span>POSITION</span>Frontend Developer</li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/publishing">Publishing</Link></li>
                            <li><Link to="/seo">SEO</Link></li>
                            <li><Link to="/php">PHP</Link></li>
                            <li><Link to="/react">React</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;