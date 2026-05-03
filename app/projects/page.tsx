import Section from "@/components/Section";

const projects = [
  {
    title: "Enterprise Network Modernization",
    client: "Government Institution",
    description:
      "Design and deployment of secure, scalable campus network infrastructure aligned with international best practices.",
    technologies: ["Routing & Switching", "Enterprise Wireless", "Security"],
  },
  {
    title: "Data Center Refresh",
    client: "Financial Institution",
    description:
      "Implementation of resilient server, storage, and virtualization infrastructure supporting mission‑critical workloads.",
    technologies: ["Servers", "Storage", "Virtualization"],
  },
  {
    title: "Secure Infrastructure Deployment",
    client: "Large Enterprise",
    description:
      "End‑to‑end systems integration including network segmentation, access control, and monitoring.",
    technologies: ["Cybersecurity", "Network Segmentation"],
  },
];

export default function Projects() {
  return (
    <Section title="Projects & Engagements">
      <p className="mb-10 max-w-3xl">
        We have delivered and supported enterprise‑grade technology solutions
        across multiple sectors. Below are examples of typical engagements
        handled by our engineering team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="
              bg-white dark:bg-darkSurface
              border border-gray-200 dark:border-gray-700
              rounded-xl p-6
            "
          >
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500 mb-3">
              Client Type: {p.client}
            </p>
            <p className="mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {p.technologies.map((t) => (
                <span
                  key={t}
                  className="
                    px-2 py-1 rounded
                    bg-gray-100 dark:bg-gray-800
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}