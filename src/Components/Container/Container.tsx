import { lazy, useState } from "react"
import "./styles.scss"
import { ReactComponent as SortIcon } from '../../assets/Icons/sort-icon.svg'
import { ReactComponent as CheckIcon } from '../../assets/Icons/check-icon.svg'
import { ISportsbook } from "../../types/sportsbook"
import React from "react"
const ListHeader = lazy(() => import("./ListHeader/ListHeader"));
const ListItem = lazy(() => import("./ListItem/ListItem"));

interface IProps {
    data: ISportsbook[]
}

const Container: React.FC<IProps> = ({ data }) => {
    const [sortType, setSortType] = useState('all')

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    let visibleArray = data;

    if (sortType === "all") {
        visibleArray = (
            [...data]
        )
    } else if (sortType === "rating") {
        visibleArray = (
            [...data].sort((a, b) => b.rating - a.rating)
        )
    } else if (sortType === "payout") {
        visibleArray = (
            [...data].sort((a, b) => a.payout_min - b.payout_min)
        )
    }

    return (
        <div className="container mt-3">
            <div className="dropdown-outer-container">
                <div className="dropdown-inner-container">
                    <div className="dropdown-label">
                        Sort by
                    </div>
                    <div className={`dropdown ${isOpen ? ' show' : ''}`}>
                        <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            onClick={toggleOpen}
                            aria-expanded={isOpen}
                        >
                            {sortType === "all" ? "All Sportsbooks" : sortType === "rating" ? "Rating" : "Payout speed"}
                            <SortIcon />
                        </button>
                        <ul className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <li>
                                <a
                                    className={`dropdown-item ${sortType === "all" ? "selected" : ""}`}
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setSortType("all");
                                        toggleOpen();
                                    }}
                                >
                                    All Sportsbooks
                                    <CheckIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`dropdown-item ${sortType === "rating" ? "selected" : ""}`}
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setSortType("rating");
                                        toggleOpen()
                                    }}
                                >
                                    Rating
                                    <CheckIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`dropdown-item ${sortType === "payout" ? "selected" : ""}`}
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setSortType("payout");
                                        toggleOpen()
                                    }}
                                >
                                    Payout speed
                                    <CheckIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <ListHeader />

            <div className="sportsbook-list">
                {visibleArray.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <ListItem item={item} rank={index} />
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}

export default Container