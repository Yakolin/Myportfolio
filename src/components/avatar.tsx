
export default function Avatar({userName}: {userName: string}) {
    const imgSrc = `https://unavatar.io/github/${userName}`
    const formatUserName = `@${userName}`;
    return (
        <img src={imgSrc} alt={formatUserName} className="avatar-image"/>
    );
}
export {Avatar};

