import Link from "next/link";

const WHATSAPP_NUMBER = "17868613745";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola, quiero información de Café Curbelo (precios y disponibilidad). Entrega en Miami. ¿Tienes en grano y molido?"
);
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-[#D4AF37]/40 bg-white/5" />
            <div>
              <p className="text-sm font-semibold tracking-wide">
                CAFÉ <span className="text-[#D4AF37]">CURBELO</span>
              </p>
              <p className="text-xs text-white/60">
                Tueste fresco • Entrega en Miami
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#productos">
              Productos
            </a>
            <a className="hover:text-white" href="#beneficios">
              Beneficios
            </a>
            <a className="hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>

          <Link
            href={waLink}
            target="_blank"
            className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/20"
          >
            Pedir por WhatsApp
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              Enero 2026: comenzamos fuerte
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Café premium con{" "}
              <span className="text-[#D4AF37]">sabor real</span> y tueste fresco.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Café Curbelo nace para la gente que quiere un café que se sienta:
              aroma intenso, sabor balanceado y consistencia. Pedidos rápidos por
              WhatsApp y entregas en Miami.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={waLink}
                target="_blank"
                className="rounded-xl bg-[#D4AF37] px-6 py-3 text-center text-sm font-bold text-black hover:opacity-90"
              >
                Ordenar ahora
              </Link>
              <a
                href="#productos"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver precios
              </a>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-center text-xs text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-lg font-extrabold text-white">Aroma</p>
                <p className="mt-1">Intenso</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-lg font-extrabold text-white">Tueste</p>
                <p className="mt-1">Fresco</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-lg font-extrabold text-white">Entrega</p>
                <p className="mt-1">Miami</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
              <div className="aspect-[4/5] w-full rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#0b0b0b] to-[#111] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs tracking-[0.25em] text-white/60">
                      CAFÉ CURBELO
                    </p>
                    <p className="mt-2 text-2xl font-extrabold">
                      Signature Blend
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      Balanceado • Cuerpo medio • Final dulce
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs text-white/60">Disponible en</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                        Grano
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                        Molido
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                        Mayorista
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-[#D4AF37]">
                      Negro mate + letras doradas (estilo premium)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm text-white/70">Pedidos por WhatsApp</p>
                <Link
                  href={waLink}
                  target="_blank"
                  className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/20"
                >
                  Escribir
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          </div>
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-extrabold">
          Productos <span className="text-[#D4AF37]">Curbelo</span>
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Disponible desde el inicio en <b>grano</b> y <b>molido</b>. También opción
          <b> mayorista</b> para negocios en Miami.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <PriceCard
            title="Café en Grano"
            size="12 oz"
            price="$15"
            desc="Ideal para espresso y métodos tradicionales. Aroma y frescura máxima."
            badge="Retail"
          />
          <PriceCard
            title="Café Molido"
            size="12 oz"
            price="$15"
            desc="Listo para cafetera. Mismo sabor premium, máxima comodidad."
            badge="Retail"
          />
          <PriceCard
            title="Mayorista"
            size="1 lb"
            price="$11"
            desc="Para cafeterías, oficinas y tiendas. Precio por volumen."
            badge="B2B"
          />
        </div>
      </section>

      <section id="beneficios" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold">¿Por qué Café Curbelo?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Feature title="Tueste fresco" desc="Lotes pequeños para mantener aroma y sabor." />
            <Feature title="Calidad constante" desc="Perfil estable para que siempre sepa igual de bien." />
            <Feature title="Atención rápida" desc="Ordenas por WhatsApp y coordinamos entrega en Miami." />
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Contacto</h2>
            <p className="mt-3 text-white/70">
              Escríbeme y te paso disponibilidad, cómo pagar y coordinar entrega.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">WhatsApp</p>
                <Link
                  href={waLink}
                  target="_blank"
                  className="mt-2 inline-flex rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black hover:opacity-90"
                >
                  Abrir WhatsApp
                </Link>
                <p className="mt-2 text-xs text-white/60">
                  Número configurado: <code>+1 786 861 3745</code>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">Entrega</p>
                <p className="mt-2 text-sm text-white/70">Miami, Florida</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">Mensaje rápido</p>
            <p className="mt-2 text-sm text-white/70">
              Presiona el botón y se abre el chat con el mensaje listo.
            </p>

            <Link
              href={waLink}
              target="_blank"
              className="mt-6 block rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-4 text-center font-bold text-[#D4AF37] hover:bg-[#D4AF37]/20"
            >
              Escribir ahora
            </Link>

            <p className="mt-6 text-xs text-white/55">
              Próximo paso: agregar fotos reales del café y un catálogo simple.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Café Curbelo. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <a className="hover:text-white" href="#productos">Productos</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
      <p className="text-lg font-extrabold">{title}</p>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function PriceCard({
  title,
  size,
  price,
  desc,
  badge,
}: {
  title: string;
  size: string;
  price: string;
  desc: string;
  badge: string;
}) {
  const orderText = encodeURIComponent(
    `Hola, quiero ordenar Café Curbelo. Producto: ${title} (${size}) - ${price}. Entrega en Miami.`
  );
  const orderLink = `https://wa.me/17868613745?text=${orderText}`;

  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-extrabold">{title}</h3>
        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
          {badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-white/60">{size}</p>
      <p className="mt-3 text-3xl font-extrabold text-[#D4AF37]">{price}</p>

      <p className="mt-3 text-sm text-white/70">{desc}</p>

      <a
        href={orderLink}
        target="_blank"
        className="mt-5 inline-flex w-full justify-center rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-bold text-black hover:opacity-90"
      >
        Ordenar por WhatsApp
      </a>
    </div>
  );
}
