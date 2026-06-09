import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";
import { gsap } from "gsap/gsap-core";

const Section03 = () => {
    const ImgArr : string[] = ['php01', 'php02', 'php03', 'php04', 'php05', 'php06'];
    const H3Arr : string[] = ['매물 랜덤 노출', '부동산 매물 등록 및 관리', '호실 등록 및 관리', '연습실 예약하기 및 관리자 기능', '권익 침해 제보 기능', '순서형 폼 제작'];
    const PArr : string[] = ['사용자들이 여러 매물을 확인 할 수 있도록, 랜덤으로 노출됩니다.', '관리자가 부동산 매물을 등록 하며 현재 부동산 정보를 관리자들끼리 확인 할 수 있습니다.', '관리자 페이지에서 관리자가 호실에 대한 정보를 입력하면 사용자들이 상세페이지에서 호실 검색 또는 위치를 파악 할 수 있습니다.', '사용자들은 예약을 할 수 있으며, 관리자는 입금 확인정보 예약 막기 예약 확인 환불 등등 관리자 기능을 관리자 페이지에서 수정이 가능합니다.', '권익 침해 제보를 등록하여 선수들의 침해를 보호 할 수 있습니다.', '순서형 폼을 통하여 업체에서 원하는 고객의 정보를 확인 할 수 있습니다.'];
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({scrollTrigger:{trigger:containerRef.current,start:"top bottom",end:"bottom bottom",scrub:1}});

            tl.from(".php_item0",{opacity:0,duration:0.7})
            .from(".php_item0 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item0 p",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item1",{opacity:0,duration:0.7},"<")
            .from(".php_item1 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item1 p",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item2",{opacity:0,duration:0.7})
            .from(".php_item2 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item2 p",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item3",{opacity:0,duration:0.7},"<")
            .from(".php_item3 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item3 p",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item4",{opacity:0,duration:0.7})
            .from(".php_item4 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item4 p",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item5",{opacity:0,duration:0.7},"<")
            .from(".php_item5 div",{opacity:0,x:-50,duration:0.7},"<")
            .from(".php_item5 p",{opacity:0,x:-50,duration:0.7},"<");
        },containerRef);

        return () => ctx.revert();
    },[]);
    
    return(
        <section id="section03">
            <div className="sideTxt">php Project</div>
            <h2>PHP 기반 웹 프로젝트를 설계하고 개발하며,<br /> 
            기능 구현부터 유지보수까지 안정적인 서비스를 구축했습니다.</h2>
            <div className="project">
                <ul ref={containerRef}>
                    {ImgArr.map((val, index) => {
                        return(
                            <li key={val} className={`php_item${index}`}>
                                <Link to="/php">
                                    <img src={`/img/main/${val}.png`} alt={`${val} 작업물`}/>
                                    <div>
                                        <h3>{H3Arr[index]}</h3>
                                        <Plus size={19} />
                                    </div>
                                    <p>{PArr[index]}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/php" className="moreLink">More php Project</Link>
            </div>

        </section>
    )
}

export default Section03;