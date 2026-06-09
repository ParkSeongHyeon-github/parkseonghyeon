import { Link } from "react-router-dom";

const React = () => {
    const ImgArr : string [] = ['portfolio01','portfolio02','portfolio03','portfolio04'];
    return(
        <div className="page react">
            <div className="Toptxt">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                    CRAFTING INTERACTIVE <br />
                    REACT EXPERIENCES
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">React 기반의 컴포넌트 설계와 다양한 인터랙션을 통해
                사용자에게 몰입감 있는 웹 경험을 제공합니다.</p>
            </div>
            <ul className="portfolio">
                {ImgArr.map((val) => {
                    let link = "";
                    let gitLink = "";
                    let content01 = "";
                    let content02 = "";
                    let content03 = "";
                    let content04 = "";

                    if(val === 'portfolio01'){link = "https://portfolio01-zuj0.onrender.com/", gitLink = "https://github.com/ParkSeongHyeon-github/portfolio01", content01 = "렌트 신청", content02 = "옵션 선택", content03 = "견적 신청"}
                    else if(val === 'portfolio02'){link = "https://portfolio02-yaj2.onrender.com/", gitLink = "https://github.com/ParkSeongHyeon-github/portfolio02", content01 = "매물 관리", content02 = "매물 검색", content03 = "상담 신청"}
                    else if(val === 'portfolio03'){link = "https://portfolio03-lj0x.onrender.com/", gitLink = "https://github.com/ParkSeongHyeon-github/portfolio03", content01 = "객실 관리", content02 = "옵션 선택", content03 = "객실 예약", content04 = "결제 기능"}
                    else if(val === 'portfolio04'){link = "https://portfolio04-q412.onrender.com/", gitLink = "https://github.com/ParkSeongHyeon-github/portfolio04", content01 = "상품 관리", content02 = "옵션 선택", content03 = "상품 검색", content04 = "결제 기능"}

                    return(
                        <li key={val}>
                            <div className="Link" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">  
                                <img src={`/img/main/${val}.png`} alt={val} />
                                <Link to={link} target="_blank">view portfolio</Link>
                            </div>
                            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                                {val}
                                <Link to={gitLink} target="_blank">Go GitHub</Link>
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                                깃허브에서 ReadMe를 확인하여 관리자 계정을 확인하여 주시길 바랍니다.
                            </p>
                            <ul data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                                <li>{content01}</li>
                                <li>{content02}</li>
                                <li>{content03}</li>
                                {content04 && (
                                    <li>{content04}</li>
                                )}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default React;