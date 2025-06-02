import HelpCategoryDropdown from "../HelpCategoryDropdown/HelpCategoryDropdown";

const HelpSection = ({ helpData }) => {
    return (
        <div className="help-section">
            <h2>Help Center</h2>
            {helpData.map((item, index) => (
                <HelpCategoryDropdown
                    key={index}
                    category={item.category}
                    articles={item.articles}
                />
            ))}
        </div>
    );
};

export default HelpSection;
