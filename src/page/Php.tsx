import { useLayoutEffect, useRef } from "react";
import "./style.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Php = () => {
    const ImgArr : string[] = ['php01', 'php02', 'php03', 'php04', 'php05', 'php06', 'php07', 'php08', 'php09', 'php10'];
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            mm.add("(min-width:1025px)", () => {
                const tl = gsap.timeline({scrollTrigger:{trigger:containerRef.current,start:"top top",end:"+=2000",pin:true,scrub:1}});

                tl.from(".gsap h2",{left:"150%"})
                .to(".gsap h2 span:first-child",{x:-450})
                .to(".gsap h2 span:last-child",{x:450},"<")
                .to(".gsap p",{opacity:1},"<");
            });
            mm.add("(max-width:1024px)", () => {
                gsap.set(".gsap p",{opacity:1});
            });
        },containerRef);
        return () => ctx.revert();
    },[]);
    return(
        <div className="page php">
            <div className="Toptxt">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                    FROM DATABASE TO <br />
                    USER EXPERIENCE
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">데이터 관리부터 사용자 인터랙션까지,
                    안정적이고 효율적인 웹 서비스를 구축합니다.</p>
            </div>
            <div className="gsap" ref={containerRef}>
                <h2>
                    <span>PHP</span>
                    <span>DEV</span>
                </h2>
                <p>30건 이상의 PHP 개발 경험 보유</p>
            </div>
            <ul className="portfolio">
                {ImgArr.map((val) => {
                    let title = "";
                    let content = ""

                    if(val === "php01"){title = "부동산 매물 노출", content = "매물 랜덤 노출 기능을 추가하였습니다."}
                    else if(val === "php02"){title = "부동산 매물 관리", content = "관리자가 매물을 등록, 수정, 삭제 관리 할 수 있는 기능을 제작하였습니다."}
                    else if(val === "php03"){title = "호실 관리", content = "관리자가 호실을 등록, 수정, 삭제 관리 할 수 있는 기능을 제작하였습니다."}
                    else if(val === "php04"){title = "연습실 관리", content = "관리자가 연습실을 등록, 수정, 삭제, 결제, 공휴일 관리 할 수 있는 기능을 제작하였습니다."}
                    else if(val === "php05"){title = "침해제보", content = "선수들의 권리를 침해 받는 내용을 제보하는 게시판 기능을 추가하였습니다."}
                    else if(val === "php06"){title = "순서형 폼", content = "이용자들이 대출에 필요한 정보를 입력하여 관리자에게 문자로 발송되는 기능을 추가하였습니다."}
                    else if(val === "php07"){title = "참가신청", content = "참가신청 기능과, 참가 신청을 한 사람들에 한하여 자료실에 접근 권한 기능을 추가하였습니다."}
                    else if(val === "php08"){title = "카카오 지도 추가", content = "매물의 대략적인 위치를 이용자들이 확인 할 수 있도록 지도 기능을 추가하였습니다."}
                    else if(val === "php09"){title = "실적 관리", content = "관리자가 기업명을 추가하고, 해당 기업명에 대한 실적을 등록 할 수 있도록 기능을 추가하였습니다."}
                    else if(val === "php10"){title = "교육 신청 관리", content = "교육 과정을 등록 할 수 있으며, 관리자는 신청 정보를 엑셀로 출력 하는 기능을 추가하였습니다."}
                    return(
                        <li key={val}>
                            <img src={`/img/main/${val}.png`} alt={val} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"/>
                            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">{title}</h3>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">{content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Php;