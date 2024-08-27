
const SectionTitleAndText = ({title, text}) => {
    return (
        <div className="py-10 text-center space-y-3">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default SectionTitleAndText;