import ServiceCard from "@/components/ServiceCard";

const services = [
  ["IT Systems Integration", "End‑to‑end integration aligned with OEM architectures."],
  ["Network & Data Centers", "Secure enterprise routing, switching and wireless."],
  ["Cloud & Hybrid Infrastructure", "Hybrid and cloud-ready enterprise platforms."],
  ["Cybersecurity", "Perimeter, access control, and network security."],
  ["Enterprise Servers & Storage", "Mission‑critical computing platforms."],
  ["Managed Services", "Lifecycle support and SLA‑based operations."],
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold mb-10">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">
        {services.map(([title, desc]) => (
            <ServiceCard key={title} title={title} description={desc} />
        ))}
    </div>
    </div>
  );
}
