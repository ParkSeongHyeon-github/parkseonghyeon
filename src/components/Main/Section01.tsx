import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Section01 = () => {
    const ImgArr : string[] = ['co1148', 'co1149', 'co1150', 'co1151', 'co1153', 'co1154', 'hos1036', 'it1033', 'lei1017'];
    const AllImgArr : string[] = [...ImgArr, "transport1004", "co1145", "co1143", "co1134", "co1133"];
    const containerRef = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const firstItem = scrollRef.current?.querySelector(".item") as HTMLElement;
            gsap.set(scrollRef.current,{x:-(firstItem.offsetWidth / 2)});
            const tl = gsap.timeline({scrollTrigger:{trigger:containerRef.current,start:"top top",end:"+=8000",pin:true,scrub:1}});
            tl.from(".top_txt",{y:50,opacity:0})
            .from(".bottom_txt",{y:50,opacity:0})
            .to(".imgContainer",{rotation:0})
            .to(".imgContainer img",{filter:"brightness(1)"},"<")
            .to(".txtContainer",{opacity:0})
            .to(".img0",{opacity:0})
            .to(".img5",{opacity:0},"<")
            .to(".img1",{opacity:0})
            .to(".img3",{opacity:0},"<")
            .to(".img2",{opacity:0})
            .to(".img7",{opacity:0},"<")
            .to(".img6",{opacity:0})
            .to(".img8",{opacity:0},"<")
            .to(".img4",{opacity:0})
            .to(".txtContainer",{zIndex:-1},"<")
            .to(".scrollImgContainer",{opacity:1})
            .to(".scrollImgContainer",{x:() => -(scrollRef.current!.scrollWidth - window.innerWidth / 2),ease:"none",duration:8});
        },containerRef);

        return () => ctx.revert();
    },[]);
    return(
        <section id="section01" ref={containerRef}>
            <div className="txtContainer">
                <h2>
                    <div className="top_txt">WEB PUBLISHING </div>
                    <div className="bottom_txt">EXPERIENCES </div>
                </h2>
                <Link to="/publishing">
                    <span></span>
                    view full portfolio
                </Link>
            </div>
            <div className="imgContainer">
                {ImgArr.map((val, index) => {
                    return(
                    <div className={`item img${index}`} key={val}>
                        <img src={`/img/main/${val}_thumbnail.png`} alt={`${val} 템플릿`} />
                    </div>
                    )
                })}
            </div>
            <div className="scrollImgContainer" ref={scrollRef}>
                {AllImgArr.map((val) => {
                    let category = "";

                    if(val.includes("co")){category = "비즈니스"}
                    else if(val.includes("hos")){category = "병원"}
                    else if(val.includes("it")){category = "인테리어"}
                    else if(val.includes("lei")){category = "스포츠"}
                    else if(val.includes("transport")){category = "운송"}

                    return(
                    <div key={val} className="item">
                        <Link to={`https://${val}.shiningcorp.com`} className="Link" target="_blank">
                            <div className="txtInfo">
                                <h3>{category} 템플릿</h3>
                                <p>{val}</p>
                            </div>
                            <img src={`/img/main/${val}_thumbnail.png`} alt={`${val} 템플릿`} />
                        </Link>
                    </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Section01;