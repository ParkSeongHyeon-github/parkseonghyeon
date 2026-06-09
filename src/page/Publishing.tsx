import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Publishing = () => {
    const ImgArr : string[] = ['co1148', 'co1149', 'co1150', 'co1151', 'co1153', 'co1154', 'hos1036', 'it1033', 'lei1017', "transport1004", "co1145", "co1143", "co1134", "co1133"];
    const containerRef = useRef(null);
    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width:1025px)", () => {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:"top top",
                    end:"+=2000",
                    pin:true,
                    scrub:1
                }
            });

            tl.from(".gsap h2",{left:"150%"})
            .to(".gsap h2 span:first-child",{x:-600})
            .to(".gsap h2 span:last-child",{x:300},"<")
            .to(".gsap p",{opacity:1},"<");
        });

        mm.add("(max-width:1024px)", () => {
            gsap.set(".gsap h2",{clearProps:"all"});
            gsap.set(".gsap p",{opacity:1});
        });
    },containerRef);

    return () => ctx.revert();
},[]);
    
    return(
        <div className="page publishing">
            <div className="Toptxt">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                    TURNING DESIGNS INTO <br />
                    RESPONSIVE EXPERIENCES
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">디자인을 실제 서비스로 구현하며,
                반응형 웹과 세밀한 인터랙션으로 사용자 경험을 완성합니다.</p>
            </div>
            <div className="gsap" ref={containerRef}>
                <h2>
                    <span>Reson</span>
                    <span>sive</span>
                </h2>
                <p>118개 이상의 반응형 웹 프로젝트 경험보유</p>
            </div>
            <ul className="portfolio">
                {ImgArr.map((val) => {
                    let category = "";
                    let comment = "";
                    if(val.includes("co")){category = "비즈니스", comment = "기업"}
                    else if(val.includes("hos")){category = "병원", comment = "의료"}
                    else if(val.includes("it")){category = "인테리어", comment = "예약"}
                    else if(val.includes("lei")){category = "스포츠", comment = "수강신청"}
                    else if(val.includes("transport")){category = "운송", comment = "상담신청"}
                    return(
                        <li key={val}>
                            <div className="Link" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">  
                                <img src={`/img/main/${val}_thumbnail.png`} alt={val} />
                                <Link to={`https://${val}.shiningcorp.com`} className="Link" target="_blank">view portfolio</Link>
                            </div>
                            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">{val} ({category}템플릿)</h3>
                            <ul data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                                <li>{category}</li>
                                <li>{comment}</li>
                                <li>템플릿</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Publishing;