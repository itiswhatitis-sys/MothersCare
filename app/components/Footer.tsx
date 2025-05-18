import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/#features" },
    { title: "Gallery", href: "/#gallery" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold">Mother<span className="text-blue-600">Care</span></h2>
            <p className="max-w-md text-blue-200">
              Providing loving and nurturing care for your little ones every day.
            </p>
            <div className="flex space-x-12 text-blue-300 text-sm">
              <div className="flex flex-col space-y-1">
                <span>123 Nursery Lane</span>
                <span>Chennai, India</span>
                <span>Pin: 600001</span>
              </div>
              <div className="flex flex-col space-y-1">
                <Link href="/" className="hover:text-white">Terms of Service</Link>
                <Link href="/" className="hover:text-white">Privacy Policy</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3 text-blue-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-white text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
