import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const servicesList = [
    { title: "IT Systems Integration", description: "Optimizes enterprise resource allocation and system interoperability." },
    { title: "Network & Data Center Infrastructure", description: "Ensures high availability and scalability of network resources." },
    // Add other services similarly...
];

export default function Services() {
    return (
        <div>
            <Navbar />
            <h2 className="text-2xl font-bold my-4">Our Services</h2>
            <div className="flex flex-wrap">
                {servicesList.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} />
                ))}
            </div>
            <Footer />
        </div>
    );
}