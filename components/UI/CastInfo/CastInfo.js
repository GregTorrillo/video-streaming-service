

const CastInfo = (props) => {
    return(
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast & Crew
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>
                        James Deen
                    </li>
                    <li>
                        Lawrence Olivier
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        John Wayne
                    </li>
                    <li>
                        Steve McQueen
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Robert Deniro
                    </li>
                    <li>
                        Al Paciono
                    </li>
                </ul>
                <ul className="cast-info__crew">
                    <li>
                        Orson Welles
                    </li>
                    <li>
                        George Lucas
                    </li>
                </ul>
            </div>
            <div className="cast-info__group-title">
                Director
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>
                        Martin Scorsese
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CastInfo; 