import { motion } from "motion/react";
import logoRhino from "./imports/logo-rhino.png";
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Settings,
  Award,
  ChevronRight,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={logoRhino}
                alt="Rhino Machinery Parts Logo"
                className="h-20 lg:h-16 w-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
                href="tel:+51967385875"
                className="hidden sm:flex items-center gap-2 text-black hover:text-yellow-500 transition-colors"
              >
                <Phone className="size-5" />
                <span className="font-semibold">
                  967 385 875
                </span>
              </a>
              <a
                href="https://wa.me/51967385875"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Bleed */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769971361854-9e0927a2d8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Mechanical gears"
            className="size-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-zinc-50/90 to-white/95" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <MapPin className="size-6 text-yellow-400" />
                <span className="text-yellow-400 tracking-wider uppercase text-sm font-medium">
                  Cajamarca, Perú
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight leading-tight"
              >
                Repuestos de
                <br />
                <span className="text-yellow-400">
                  Precisión
                </span>{" "}
                para
                <br />
                tu Maquinaria
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-zinc-700 mb-8 max-w-xl"
              >
                Asesoría técnica especializada en repuestos para
                maquinaria. Con el número de serie, garantizamos
                la pieza exacta que su equipo necesita.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:+51967385875"
                  className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 font-semibold transition-all duration-300"
                >
                  <Phone className="size-5" />
                  967 385 875
                  <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/51967385875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 font-semibold transition-all duration-300"
                >
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Servicios Especializados
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Soluciones precisas para mantener su maquinaria
              operando al máximo rendimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Asesoría Técnica",
                description:
                  "Orientación experta basada en el número de serie de su maquinaria para identificar la pieza exacta.",
                image:
                  "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                icon: Settings,
                title: "Repuestos Originales",
                description:
                  "Fabricación y venta de partes de maquinaria con garantía de calidad y compatibilidad total.",
                image:
                  "https://images.unsplash.com/photo-1759148414485-5f624fe9d1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                icon: Award,
                title: "Soluciones Rápidas",
                description:
                  "Diagnóstico eficiente de problemas y recomendaciones inmediatas para minimizar tiempos de parada.",
                image:
                  "https://images.unsplash.com/photo-1764115737858-c8290a4251d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <service.icon className="size-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1767739791246-9f832345f8f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Gears background"
            className="size-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
                Experiencia que{" "}
                <span className="text-yellow-400">
                  garantiza resultados
                </span>
              </h2>
              <p className="text-xl text-zinc-700 mb-12">
                Con el número de serie de su máquina,
                proporcionamos la asesoría más precisa del
                mercado. Cada pieza, cada recomendación,
                respaldada por años de experiencia.
              </p>

              <div className="space-y-6">
                {[
                  "Identificación precisa de repuestos por número de serie",
                  "Atención personalizada y profesional",
                  "Soluciones eficientes que reducen tiempos de inactividad",
                  "Calificación 5.0 estrellas de clientes satisfechos",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="size-6 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="size-4 text-black" />
                    </div>
                    <p className="text-lg text-zinc-700">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1768241723700-791f41d23f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Machinery parts"
                  className="w-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="size-8 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-black text-2xl font-bold ml-4">
                5.0
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Chavez",
                text: "La mejor asesoría con experiencia",
                role: "Cliente",
              },
              {
                name: "GOUTVTOURS",
                text: "Un gran asesoramiento en partes de maquinaria, pude ver como se solucionaba el problema más rápido y mejor",
                role: "Empresa",
              },
              {
                name: "Aventura Extrema Cajamarca",
                text: "Buen servicio en la compra. Una gran atención e información con el número de serie de la máquina",
                role: "Empresa de Turismo",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 border-l-4 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="size-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-black font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Visítanos o contáctanos
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Estamos listos para ayudarte con tus necesidades
              de maquinaria
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-50 p-10 text-center group hover:bg-zinc-100 transition-colors duration-300 border border-zinc-200"
            >
              <div className="inline-flex items-center justify-center size-16 bg-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="size-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Ubicación
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Av. Vía de Evitamiento Sur 1238
                <br />
                Cajamarca 06003, Perú
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-50 p-10 text-center group hover:bg-zinc-100 transition-colors duration-300 border border-zinc-200"
            >
              <div className="inline-flex items-center justify-center size-16 bg-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="size-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Teléfono
              </h3>
              <a
                href="tel:+51967385875"
                className="text-zinc-600 hover:text-yellow-500 transition-colors text-lg"
              >
                967 385 875
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-50 p-10 text-center group hover:bg-zinc-100 transition-colors duration-300 border border-zinc-200"
            >
              <div className="inline-flex items-center justify-center size-16 bg-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="size-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Horario
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Lunes - Sábado
                <br />
                Cierra a la 1:00 p.m.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/51967385875?text=Hola,%20necesito%20información%20sobre%20repuestos%20para%20maquinaria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-5 text-lg font-semibold transition-all duration-300 group"
            >
              Solicitar asesoría ahora
              <ChevronRight className="size-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-100 py-12 border-t border-zinc-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <img
                src={logoRhino}
                alt="Rhino Machinery Parts Logo"
                className="h-20 w-auto mb-3"
              />
              <p className="text-zinc-600 text-sm">
                Fabricante de repuestos para maquinaria
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-zinc-600 text-sm mb-2">
                © 2026 Rhino Machinery Parts. Cajamarca, Perú.
              </p>
              <p className="text-zinc-500 text-xs">
                Av. Vía de Evitamiento Sur 1238 | 967 385 875
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
