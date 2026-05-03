import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">MA Global Rw</h3>
          <p>
            Accredited technology & systems integration company delivering
            enterprise IT infrastructure aligned with global OEM standards.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>Email: info@maglobalrw.com</p>
          <p>Phone: +250 788 984 609</p>
          <p>Location: Kigali, Rwanda</p>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-semibold mb-3">Let’s Talk</h3>
          <p className="mb-4">
            Start a conversation with our engineering team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-black px-4 py-2 rounded font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-xs">
        © {new Date().getFullYear()} MA Global Rw. All rights reserved.
      </div>
    </footer>
  );
}