import React, {useEffect, useState} from "react";

export const MysticFestivalNews = () => {

    const [newsNumerationAppState, newsNumerationSetAppState] = useState({news1: []})
    const [newsNumeration2AppState, newsNumeration2SetAppState] = useState({news2: []})
    const [newsNumeration3AppState, newsNumeration3SetAppState] = useState({news3: []})
    const [newsNumeration4AppState, newsNumeration4SetAppState] = useState({news4: []})
    const [newsNumeration5AppState, newsNumeration5SetAppState] = useState({news5: []})
    const [newsNumeration6AppState, newsNumeration6SetAppState] = useState({news6: []})
    const [newsNumeration7AppState, newsNumeration7SetAppState] = useState({news7: []})
    const [newsNumeration8AppState, newsNumeration8SetAppState] = useState({news8: []})
    const [newsNumeration9AppState, newsNumeration9SetAppState] = useState({news9: []})
    const [newsNumeration10AppState, newsNumeration10SetAppState] = useState({news10: []})
    const [newsNumeration11AppState, newsNumeration11SetAppState] = useState({news11: []})
    const [newsNumeration12AppState, newsNumeration12SetAppState] = useState({news12: []})
    const [newsNumeration13AppState, newsNumeration13SetAppState] = useState({news13: []})

    useEffect(() => {
        const url = "http://localhost:8080/api/v1/mystic_festival/news";
        fetch(url)
            .then(data => data.json())
            .then(response => {
                newsNumerationSetAppState({news1: response})
                newsNumeration2SetAppState({news2: response})
                newsNumeration3SetAppState({news3: response})
                newsNumeration4SetAppState({news4: response})
                newsNumeration5SetAppState({news5: response})
                newsNumeration6SetAppState({news6: response})
                newsNumeration7SetAppState({news7: response})
                newsNumeration8SetAppState({news8: response})
                newsNumeration9SetAppState({news9: response})
                newsNumeration10SetAppState({news10: response})
                newsNumeration11SetAppState({news11: response})
                newsNumeration12SetAppState({news12: response})
                newsNumeration13SetAppState({news13: response})
            });
    }, []);

    return (

        <div className="body">

            <th>News</th>
            <br></br>

            <ul>
                {newsNumeration13AppState.news13.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news13}</tr>
                    )
                })
                }
                <div className="a:link">
                    <a href="https://www.facebook.com/events/370620786841546/" target="blank"
                       rel="noreferrer">
                        Oficjalna grupa Facebook --> całkiem możliwe, że tutaj znajdziesz Transport na
                        festival:) W grupie zawsze raźniej!
                    </a>
                </div>

                <br></br>
                <br></br>
                {newsNumeration12AppState.news12.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news12}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumeration11AppState.news11.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news11}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumeration10AppState.news10.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news10}</tr>
                    )
                })
                }
                <div className="a:link">
                    <a href="https://www.mysticfestival.pl/pl/czasowka-2022" target="blank"
                       rel="noreferrer">
                        Rozplanuj swoją wizytę na Mystic Festival 2022!</a>
                </div>

                <br></br>
                <br></br>
                {newsNumeration9AppState.news9.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news9}</tr>
                    )
                })
                }
                <div className="a:link">
                    <a href="https://www.mysticfestival.pl/pl/road-to-mystic" target="blank"
                       rel="noreferrer">
                        Pięćdziesiątka półfinalistów - road to mystic!</a>
                </div>

                <br></br>
                <br></br>
                {newsNumeration8AppState.news8.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news8}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumeration7AppState.news7.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news7}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumeration6AppState.news6.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news6}</tr>
                    )
                })
                }
                <div className="a:link">
                    <a href="https://www.mysticfestival.pl/pl/road-to-mystic" target="blank"
                       rel="noreferrer">Odwiedź
                        Mystic Festival - road to mystic!</a>
                </div>

                <br></br>
                <br></br>
                {newsNumeration5AppState.news5.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news5}</tr>
                    )
                })
                }
                <br></br>

                <div className="youtube-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CrpLAWGrpW0" title="WOŚP"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <br></br>
                <br></br>
                {newsNumeration4AppState.news4.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news4}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumeration3AppState.news3.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news3}</tr>
                    )
                })
                }
                <br></br>
                <div className="youtube-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/g_x9evEFlmg" title="Official"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <br></br>
                <br></br>
                {newsNumeration2AppState.news2.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news2}</tr>
                    )
                })
                }

                <br></br>
                <br></br>
                {newsNumerationAppState.news1.map((notices, index) => {
                    return (
                        <tr key={index}>{notices.news1}</tr>
                    )
                })
                }
            </ul>

            <div className={"footer"}>
                <th>
                    <ul>2022 pl.manes</ul>
                </th>
            </div>

        </div>

    )
};

export default MysticFestivalNews;