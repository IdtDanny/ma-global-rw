const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ServiceCard;