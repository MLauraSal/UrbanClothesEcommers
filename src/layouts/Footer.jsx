import React from "react";

const Footer = () => {
  return (
    <footer className="bg-eerieBlack text-white py-10 text-sm">
      <div className="border-b border-onyx pb-6 mb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-dodgerBlue text-base font-semibold uppercase mb-4">
            Brand directory
          </h2>

          {/* Category Boxes */}
          <div className="flex flex-wrap gap-6 mb-4">
            {[
              {
                title: "Fashion",
                items: [
                  "T-shirt",
                  "Shirts",
                  "shorts & jeans",
                  "jacket",
                  "dress & frock",
                  "innerwear",
                  "hosiery",
                ],
              },
              {
                title: "Footwear",
                items: [
                  "sport",
                  "formal",
                  "Boots",
                  "casual",
                  "cowboy shoes",
                  "safety shoes",
                  "Party wear shoes",
                  "Branded",
                  "Firstcopy",
                  "Long shoes",
                ],
              },
              {
                title: "Jewellery",
                items: [
                  "Necklace",
                  "Earrings",
                  "Couple rings",
                  "Pendants",
                  "Crystal",
                  "Bangles",
                  "bracelets",
                  "nosepin",
                  "chain",
                ],
              },
              {
                title: "Cosmetics",
                items: [
                  "Shampoo",
                  "Bodywash",
                  "Facewash",
                  "makeup kit",
                  "liner",
                  "lipstick",
                  "prefume",
                  "Body soap",
                  "scrub",
                  "hair gel",
                  "hair colors",
                  "hair dye",
                  "sunscreen",
                  "skin loson",
                ],
              },
            ].map((cat, i) => (
              <div key={i} className="min-w-[200px]">
                <h3 className="text-spanishGray text-xs font-semibold uppercase mb-2">
                  {cat.title} :
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {cat.items.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-sonicSilver capitalize hover:text-spanishGray relative after:content-[''] after:absolute after:right-[-10px] after:top-[3px] after:w-[1px] after:h-[15px] after:bg-sonicSilver last:after:hidden"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-b border-onyx pb-6 mb-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Popular Categories",
              items: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"],
            },
            {
              title: "Products",
              items: [
                "Prices drop",
                "New products",
                "Best sales",
                "Contact us",
              ],
            },
            {
              title: "Our Company",
              items: [
                "Delivery",
                "Legal Notice",
                "Terms and conditions",
                "About us",
                "Secure payment",
              ],
            },
            {
              title: "Services",
              items: ["Prices drop", "New products", "Best sales", "Contact us"],
            },
          ].map((section, i) => (
            <ul key={i}>
              <li className="font-semibold uppercase text-sm relative pb-2 mb-3 border-b border-dodgerBlue w-fit">
                {section.title}
              </li>
              {section.items.map((link, idx) => (
                <li key={idx} className="py-1">
                  <a
                    href="#"
                    className="text-sonicSilver capitalize hover:text-dodgerBlue"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          {/* Contact */}
          <ul>
            <li className="font-semibold uppercase text-sm relative pb-2 mb-3 border-b border-dodgerBlue w-fit">
              Contact
            </li>
            <li className="flex items-start gap-2 mb-2">
              <ion-icon name="call-outline" className="text-xl" />
              <a
                href="tel:+607936-8058"
                className="text-sonicSilver hover:text-dodgerBlue"
              >
                (+54) 11-936-8058
              </a>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <ion-icon name="mail-outline" className="text-xl" />
              <a
                href="mailto:example@gmail.com"
                className="text-sonicSilver hover:text-dodgerBlue"
              >
                example@gmail.com
              </a>
            </li>
            <li className="flex flex-col gap-2 mt-2">
              <h6 className="text-sm">Sitemap:</h6>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="200"
                height="200"
                className="rounded"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center">
        <div className="container mx-auto px-4">
          <img
            src="/assets/img/payment.png"
            alt="payment method"
            className="mx-auto max-w-xs mb-4"
          />
          <p className="text-sonicSilver text-xs font-medium uppercase tracking-wider">
            © <a href="#" className="hover:underline">Urban Clothes</a> Salgueiro, Mariana — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
