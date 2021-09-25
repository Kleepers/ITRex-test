import './ProfileInfo.css';

export default function ProfileInfo ({human, isVisible}) {

    return (
        <div className={`profile ${isVisible ? 'profile__active' : ''}`}>
            <p>Profile Info:</p>
            <p>{`Selected profile: ${isVisible ? human.firstName : ''} ${isVisible ? human.lastName : ''}`}</p>
            <p>{`Address: ${isVisible ? human.adress.streetAddress : ''}`}</p>
            <p>{`City: ${isVisible ? human.adress.city : ''}`}</p>
            <p>{`State: ${isVisible ? human.adress.state : ''}`}</p>
            <p>{`Index: ${isVisible ? human.adress.zip : ''}`}</p>
        </div>
    )
}