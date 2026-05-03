const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 m-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ServiceCard;