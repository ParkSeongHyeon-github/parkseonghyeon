const Seo = () => {
    const ImgArr : string[] = ["현대이지웹", "디자인키트", "마켓팅센터", "다르미앙", "글램핑", "한국안전관리협회", "삼성스카이"];
    return(
        <div className="page seo">
            <div className="Toptxt">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                    BUILDING WEBSITES FOR <br />
                    SEARCH & PERFORMANCE
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">검색 엔진 친화적인 구조와 최적화된 마크업을 통해
                    더 나은 검색 노출과 사용자 접근성을 제공합니다.</p>
            </div>
            <ul className="portfolio">
                {ImgArr.map((val) => {
                    return(
                        <li key={val}>
                            <img src={`/img/main/${val}.png`} alt={val} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"/>
                            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">{val}</h3>
                            <ul data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                                <li>SEO</li>
                                <li>온페이지 SEO</li>
                                <li>오프페이지 SEO</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Seo