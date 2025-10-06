import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("es");

  const translations = {
    es: {
      welcome: "Bienvenida a Luna Turquesa",
      intro: "Soy Angie Fino, especialista en estética facial y corporal...",
      aboutMeTitle: "Sobre mí",
      aboutMe: "Soy Angie Fino, enfermera profesional de Colombia...",
      servicesTitle: "Nuestros Servicios",
      reviewsTitle: "Reseñas",
      contactTitle: "Contáctame",
      contact: "En mi suite en Wellington, Florida, priorizo tu bienestar.",
      services: [
        {
          title: "Tratamientos Faciales Personalizados",
          desc: "Cuidado profesional adaptado a las necesidades de tu piel...",
        },
        {
          title: "Masajes Corporales Personalizados",
          desc: "Protocolos seguros y efectivos adaptados a tu bienestar.",
        },
      ],
    },
    en: {
      welcome: "Welcome to Luna Turquesa",
      intro: "I’m Angie Fino, a specialist in facial and body aesthetics...",
      aboutMeTitle: "About Me",
      aboutMe: "I’m Angie Fino, a professional nurse from Colombia...",
      servicesTitle: "Our Services",
      reviewsTitle: "Reviews",
      contactTitle: "Contact Me",
      contact: "In my suite in Wellington, Florida, I prioritize your wellness.",
      services: [
        {
          title: "Personalized Facial Treatments",
          desc: "Professional care tailored to your skin’s needs...",
        },
        {
          title: "Personalized Body Massages",
          desc: "Safe, effective protocols tailored to your wellness.",
        },
      ],
    },
  };

  const t = translations[lang];

  return (
    <div
      className="min-h-screen text-gray-800"
      style={{
        background: "radial-gradient(circle at center, #ffffff 0%, #a7ede7 100%)",
      }}
    >
      <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white/70 backdrop-blur-md z-50">
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Luna Turquesa" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-[#d4af37]">Luna Turquesa</h1>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setLang("es")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${lang === "es"
                ? "bg-[#20b2aa] text-white shadow-md"
                : "border border-[#20b2aa] text-[#20b2aa]"
              }`}
          >
            ES
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${lang === "en"
                ? "bg-[#20b2aa] text-white shadow-md"
                : "border border-[#20b2aa] text-[#20b2aa]"
              }`}
          >
            EN
          </button>
        </div>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-4xl font-bold text-[#d4af37] mb-4">{t.welcome}</h2>
        <p className="text-lg max-w-2xl mx-auto">{t.intro}</p>
      </section>

      <section className="p-10 bg-white/70 rounded-2xl shadow-lg mx-6 my-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="/images/angie.png"
          alt="Angie Fino"
          className="w-48 h-48 rounded-full border-4 border-[#d4af37] object-cover"
        />
        <div>
          <h3 className="text-3xl font-bold text-[#d4af37] mb-4">{t.aboutMeTitle}</h3>
          <p className="text-lg">{t.aboutMe}</p>
        </div>
      </section>

      <section className="p-10">
        <h3 className="text-3xl font-bold text-[#d4af37] mb-6">{t.servicesTitle}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {t.services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-[#20b2aa] mb-2">
                {service.title}
              </h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-10 bg-white/70 rounded-2xl shadow-lg mx-6 my-6">
        <h3 className="text-3xl font-bold text-[#d4af37] mb-6">{t.reviewsTitle}</h3>
        <div className="space-y-4 text-lg italic">
          <p>“Since I started treatments with Angie, my skin has never looked better.” – Emily S.</p>
          <p>“The personalized protocols made me feel safe and well cared for.” – Sarah M.</p>
          <p>“Angie’s expertise and high-quality products gave me visible results.” – Jessica T.</p>
        </div>
      </section>

      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold text-[#d4af37] mb-6">{t.contactTitle}</h3>
        <p className="text-lg mb-6">{t.contact}</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://wa.me/15613709889" target="_blank">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="mailto:lunaturquesaestetica@gmail.com">
            <img src="/images/email.png" alt="Email" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/luna.turquesa9" target="_blank">
            <img src="/images/instagram.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://www.tiktok.com/@lunaturquesaestet" target="_blank">
            <img src="/images/tiktok.png" alt="TikTok" className="w-10 h-10 hover:scale-110 transition" />
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <img src="/images/logo.png" alt="Luna Turquesa" className="w-16 h-16" />
        </div>
      </section>
    </div>
  );
}
