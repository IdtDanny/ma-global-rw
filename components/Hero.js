import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primaryLight dark:from-darkBg dark:to-gray-900 text-white py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Enterprise Technology & Systems Integration
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Accredited systems integrator delivering secure, scalable enterprise
          IT infrastructure aligned with Cisco, HPE, Dell, Huawei and global OEM standards.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="bg-cyan-500 px-6 py-3 rounded">
            Request Consultation
          </Link>
          <Link href="/services" className="border border-white px-6 py-3 rounded">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}