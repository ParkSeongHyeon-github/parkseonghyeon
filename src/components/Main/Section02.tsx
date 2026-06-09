import { useLayoutEffect, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap/gsap-core";

const Section02 = () => {
    const containerRef = useRef<HTMLElement>(null);
    const NumberRef = useRef<HTMLDivElement>(null);
    const CateNumberRef = useRef<HTMLDivElement>(null);
    const ExperienceNumberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateNumber = (
            element: HTMLDivElement | null,
            target: number,
            duration: number = 2000
        ) => {
            if (!element) return;
            let startTime: number | null = null;
            const update = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const current = Math.floor(progress * target);
                element.textContent = current.toString();
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = target.toString();
                }
            };
            requestAnimationFrame(update);
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                animateNumber(NumberRef.current, 118, 2000);
                animateNumber(CateNumberRef.current, 14, 1500);
                animateNumber(ExperienceNumberRef.current, 2, 1000);
                observer.disconnect();
            },
            {
                threshold: 0.3
            }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const gsapRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({scrollTrigger:{trigger:gsapRef.current,start:"top bottom",end : "bottom bottom",}})
            tl.from(".right ul li:nth-child(1)", {opacity:0,x : -50,})
            tl.from(".right ul li:nth-child(2)", {opacity:0,x : 50,}, "<")
            tl.from(".right ul li:nth-child(3)", {opacity:0,x : -50,})
            tl.from(".right ul li:nth-child(4)", {opacity:0,x : 50,}, "<")
            tl.from(".right ul li:nth-child(5)", {opacity:0,y : 50,})
        })
        return () => ctx.revert();
    }, [])

    return (
        <section id="section02" ref={containerRef}>
            <div className="left">
                <div className="top">
                    <div>
                        <span></span>
                        Responsive
                    </div>
                    <ul className="count">
                        <li>
                            <div className="number">
                                <div ref={NumberRef}>0</div>
                                <span>+</span>
                            </div>
                            <div className="tit">
                                다양한 업종의 반응형
                                <br />
                                웹 구축 경험
                            </div>
                        </li>
                        <li>
                            <div className="number">
                                <div ref={CateNumberRef}>0</div>
                                <span>+</span>
                            </div>
                            <div className="tit">업종</div>
                        </li>
                        <li>
                            <div className="number">
                                <div ref={ExperienceNumberRef}>0</div>
                                <span>년</span>
                            </div>
                            <div className="tit">실무경험</div>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <Link to="/publishing">View Portfolio</Link>
                </div>
            </div>
            <div className="right" ref={gsapRef}>
                <ul>
                    <li>
                        <span>01</span>
                        <h3>Responsive</h3>
                        <p>
                            모든 화면 크기에 최적화된 <br />
                            사용자 경험 제공
                        </p>
                    </li>
                    <li>
                        <span>02</span>
                        <h3>Mobile First</h3>
                        <p>
                            모바일 중심 설계로 <br />
                            높은 접근성 확보
                        </p>
                    </li>
                    <li>
                        <span>03</span>
                        <h3>Cross Browser</h3>
                        <p>
                            다양한 브라우저에서 <br />
                            일관된 화면 구현
                        </p>
                    </li>
                    <li>
                        <span>04</span>
                        <h3>Pixel Perfect</h3>
                        <p>
                            디자인 시안을 기준으로 <br />
                            정확한 퍼블리싱 작업
                        </p>
                    </li>
                    <li>
                        <span>since</span>
                        <h3>2024</h3>
                        <p>
                            사용자의 경험을 중심으로 <br />
                            반응형 웹을 구축합니다.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Section02;