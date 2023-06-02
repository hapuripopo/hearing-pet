

export default function HospitalCard(props) {

    return(
        <li>
            <div className="Card">
                <div className="Card__name">
                    <p className="Card__name--title">
                        {props.hName}
                    </p>

                    <p>
                        {props.hType}
                    </p>
                </div>

                <div className="Card__address">
                    <p>
                        {props.address}
                    </p>
                </div>
            </div>
        </li>
    );
}
