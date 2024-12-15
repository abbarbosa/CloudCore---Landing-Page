export const TitleSections = (props) => {
    return (
        <div className={`${props.styles} text-primary-blue text-[45px] text-center font-semibold`}>
            <h1>{props.children}</h1>
        </div>
    )
}