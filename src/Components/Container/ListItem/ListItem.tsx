import { ISportsbook } from "../../../types/sportsbook";
import './styles.scss'
import { ReactComponent as StarIcon } from '../../../assets/Icons/star_icon.svg'
import CurrencyIcon from '../../../assets/Icons/currency-outlined-icon.png'
import StarRatings from 'react-star-ratings';
import { ReactComponent as CheckIcon } from '../../../assets/Icons/check-icon.svg'
import { useState } from "react";

interface IProps {
    item: ISportsbook;
    rank: number
}

const ListItem: React.FC<IProps> = ({ item, rank }) => {
    const [isCopied, setIsCopied] = useState(false)

    return (
        <div className="sportsbook-row">
            <div className={rank === 0 ? "number-plate number-plate--first" : "number-plate number-plate--other"}>
                {rank === 0 ? (
                    <div>
                        Top-rated sportsbook
                    </div>
                ) : (
                    <div>
                        #{rank + 1}
                    </div>
                )}
            </div>
            <div className="logo-cell">
                <img
                    alt={`${item.title} Logo`}
                    loading="lazy"
                    src={item.logo}
                />
            </div>
            <div className="bonus-cell">
                <div className="bonus-cell-plate">
                    Sign up bonus
                </div>
                <div className="bonus-cell-title">
                    {item.headline}
                </div>
                <div className="bonus-cell-about">
                    {item.about}
                </div>
            </div>
            <div className="divider" />
            <div className="rating-cell">
                <div className="rating-cell-container">

                    <div className="rating-cell-desktopstars">
                        <StarRatings
                            rating={item.rating}
                            starRatedColor="#fd5000"
                            starDimension="24px"
                            starSpacing="0"
                            numberOfStars={5}
                            name='rating'

                        />
                    </div>

                    <div className="rating-cell-title">
                        Customer support
                    </div>
                    <div className="rating-cell-value">
                        <StarIcon className="rating-cell-icon" />
                        {item.rating}/5
                    </div>

                    <a
                        className="rating-cell-link"
                        href={item.link}
                    >
                        {item.title} Review
                    </a>
                </div>

                <div className="rating-cell-container rating-cell-container--second">
                    <div className="rating-cell-title">
                        Payout speed:
                    </div>
                    <div className="rating-cell-value">
                        <img
                            alt="Currency icon"
                            loading="lazy"
                            src={CurrencyIcon}
                            className="rating-cell-icon rating-cell-icon--second"
                        />
                        {item.payout_min} - {item.payout_max} days
                    </div>
                </div>
            </div>
            <div className="payout-cell">
                <img
                    alt="Currency icon"
                    className="payout-cell-icon"
                    src={CurrencyIcon}
                />
                <div className="payout-cell-value">
                    {item.payout_min}-{item.payout_max} days
                </div>
            </div>
            <div className="benefits-cell">
                <ul className="benefits-cell-list">
                    {item.benefits.map(benefit => (
                        <li className="benefits-cell-item" key={benefit}>
                            <CheckIcon className="benefits-list-icon" />
                            <div>{benefit}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bet-button-cell">
                {item.code.length > 0 && (
                    <button
                        className="bet-button-cell-promo"
                        onClick={() => {
                            navigator.clipboard.writeText(item.code);
                            setIsCopied(true);
                            alert("Code sucsessfully coppied")
                        }}
                        style={{
                            background: isCopied ? "#fd5000" : "transparent",
                            color: isCopied ? "#fff" : "#15202b"
                        }}
                    >
                        <div
                            className="bet-button-cell-promo-title"
                        >
                            Tap to copy code
                        </div>
                        <div className="bet-button-cell-promo-code">
                            {item.code}
                        </div>
                    </button>
                )}
                <a
                    href={item.link}
                    className="bet-button-cell-link"
                    >
                        Bet Now
                    </a>
            </div>
        </div>
    )
}

export default ListItem