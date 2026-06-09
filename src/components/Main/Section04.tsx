import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Section04 = () => {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            mm.add("(min-width:1025px)", () => {
                const tl = gsap.timeline({scrollTrigger:{trigger:containerRef.current,start:"top top",end:"+=2500",pin:true,scrub:1}});
                tl.to(".second",{top:"0%"})
                .to(".third",{top:"100%"},"<")
                .to(".fourth",{top:"200%"},"<")
                .to(".third",{top:"0%"})
                .to(".fourth",{top:"100%"},"<")
                .to(".fourth",{top:"0%"});
            });
            mm.add("(max-width:1024px)", () => {
                gsap.set(".container > div",{clearProps:"all"});
            });
        },containerRef);

        return () => ctx.revert();
    },[]);
    return(
        <section id="section04" ref={containerRef}>
            <div className="container">
                <div className="content first">
                    <div className="cate">React Project01</div>
                    <img src={'/img/main/portfolio01.png'} alt="portfolio01" />
                    <div className="txt">
                        <h2>장기렌트 및 리스 견적신청</h2>
                        <p>메인페이지에서 간단 신청을 할 수 있으며, <br />
                        간편 견적신청을 통하여 원하는 제조사의 모델의 구체적인 견적 확인이 가능하다. <br /></p>
                        <Link to="https://portfolio01-zuj0.onrender.com/" target="_blank">view portfolio</Link>
                    </div>
                </div>
                <div className="content second">
                    <div className="cate">React Project02</div>
                    <img src={'/img/main/portfolio02.png'} alt="portfolio02" />
                    <div className="txt">
                        <h2>부동산 매물 관리 기능</h2>
                        <p>관리자가 등록한 부동산 매물을 확인 할 수 있으며, 여러가지 필터 조건으로 매물 검색이 가능하다.</p>
                        <Link to="https://portfolio02-yaj2.onrender.com/" target="_blank">view portfolio</Link>
                    </div>
                </div>
                <div className="content third">
                    <div className="cate">React Project03</div>
                    <img src={'/img/main/portfolio03.png'} alt="portfolio03" />
                    <div className="txt">
                        <h2>숙박 예약 관리 기능</h2>
                        <p>숙박 정보를 확인 할 수 있으며, 실시간 예약이 가능하며 <br />
                            결제시스템은 토스 api를 연동하여, 결제 완료시 DB에 결제완료 값을 남겨 결제 완료를 구분하였다.</p>
                        <Link to="https://portfolio03-lj0x.onrender.com/" target="_blank">view portfolio</Link>
                    </div>
                </div>
                <div className="content fourth">
                    <div className="cate">React Project04</div>
                    <img src={'/img/main/portfolio04.png'} alt="portfolio04" />
                    <div className="txt">
                        <h2>쇼핑몰 관리 기능</h2>
                        <p>관리자페이지에서 상품을 등록 할 수 있으며 여러 옵션또한 등록이 가능하다.<br /> 
                            복잡한 결제기능을 react로 구현했으며, 결제시스템은 토스 api를 연동하여, <br /> 
                            결제 완료시 DB에 결제완료 값을 남겨 결제 완료를 구분하였다.</p>
                        <Link to="https://portfolio04-q412.onrender.com" target="_blank">view portfolio</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section04;