import './styles.scss'

const ListHeader: React.FC = () => {
    return (
        <div className="list-header">
            <div className="sportsbook">
                Sportsbook
            </div>
            <div className="bonus">
                Bonus
            </div>
            <div className="rating">
                Overall Rating
            </div>
            <div className="payout">
                Payout Speed
            </div>
            <div className="benefits">
                Benefits
            </div>
            <div className="bet-button" />
        </div>
    )
}

export default ListHeader