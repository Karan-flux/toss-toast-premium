import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  Phone,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
  import "./styles.css";

const menu = {
  Coffee: [
    ["Coconut Cloud Espresso", "Espresso, coconut cream"],
    ["Classic Cappuccino", "Rich espresso, silky milk"],
    ["Cold Coffee", "Chilled coffee, creamy finish"],
  ],
  "Pizza & Pasta": [
    ["Margherita Pizza", "Tomato, mozzarella, basil"],
    ["Creamy Pasta", "Rich sauce, herbs, parmesan"],
  ],
  Momos: [
    ["Jhol Momos", "Steamed momos, spiced jhol"],
    ["Classic Momos", "Steamed dumplings, house chutney"],
  ],
  Snacks: [
    ["Korean Garlic Bun", "Soft bread, garlic cream"],
    ["Loaded Fries", "Crispy fries, signature toppings"],
  ],
  Desserts: [
    ["Baked Lotus Biscoff Cheesecake", "Creamy cheesecake, Biscoff"],
    ["Chocolate Brownie", "Warm chocolate brownie"],
  ],
  Drinks: [
    ["T&T Chocolate Shake", "Chocolate, milk, cream"],
    ["Classic Mojito", "Mint, lime, refreshing finish"],
  ],
};

const categories = Object.keys(menu);

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="loader-mark"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              T&T
            </motion.div>
            <motion.div className="loader-line">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="nav">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span>TOSS</span>
          <i>&</i>
          <span>TOAST</span>
        </a>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#story" onClick={closeMenu}>
            Our Story
          </a>
          <a href="#visit" onClick={closeMenu}>
            Visit
          </a>
        </nav>

        <div className="nav-right">
          <a
            href="https://www.zomato.com/jorhat/toss-toast-jorhat-locality-jorhat/order"
            target="_blank"
            rel="noreferrer"
            className="order-mini"
          >
            Order <ArrowUpRight size={14} />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="hero-image"
            style={{ y: heroY, scale: heroScale }}
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <motion.div
              className="eyebrow light"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <span />
              Jorhat · Assam
            </motion.div>

            <div className="hero-title">
              <div className="title-line">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.75,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  GOOD
                </motion.span>
              </div>

              <div className="title-line italic">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  food.
                </motion.span>
              </div>

              <div className="title-line">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.05,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  BETTER
                </motion.span>
              </div>

              <div className="title-line italic">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  company.
                </motion.span>
              </div>
            </div>

            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p>
                A place for coffee, comfort food
                <br />
                and conversations that stay.
              </p>

              <a href="#menu" className="hero-button">
                Explore the menu
                <ArrowDown size={17} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-side-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span>EST.</span>
            <span>JORHAT</span>
          </motion.div>
        </section>

        <section className="intro section">
          <div className="container">
            <div className="intro-grid">
              <Reveal>
                <div className="eyebrow">
                  <span />
                  The experience
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="display-heading">
                  Come for the
                  <em> coffee.</em>
                  <br />
                  Stay for the
                  <em> feeling.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.22}>
                <p className="intro-copy">
                  Toss & Toast is a café made for slow mornings, quick catch-ups,
                  comfort food and the little moments between everything else.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="experience-image-wrap">
            <motion.img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=90"
              alt="Coffee being served"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 1.2 }}
            />
            <div className="image-number">01</div>
          </div>

          <div className="experience-content">
            <Reveal>
              <div className="eyebrow light">
                <span />
                Made for moments
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2>
                Your
                <br />
                <em>usual</em>
                <br />
                table awaits.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                From your first coffee of the day to late conversations with
                friends, every corner is designed to feel easy, warm and
                familiar.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="#visit" className="line-link light-link">
                Find your way here <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="menu" className="menu-section section">
          <div className="container">
            <div className="section-head">
              <Reveal>
                <div className="eyebrow">
                  <span />
                  What we're serving
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="display-heading">
                  Something for
                  <br />
                  <em>every mood.</em>
                </h2>
              </Reveal>
            </div>

            <div className="category-bar">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-layout">
              <div className="menu-photo">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCategory}
                    src={
                      {
                        Coffee:
                          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
                        "Pizza & Pasta":
                          "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=90",
                        Momos:
                          "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=1200&q=90",
                        Snacks:
                          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
                        Desserts:
                          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
                        Drinks:
                          "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=90",
                      }[activeCategory]
                    }
                    alt={activeCategory}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>

                <div className="photo-caption">
                  <span>02</span>
                  <span>{activeCategory}</span>
                </div>
              </div>

              <div className="menu-list">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    {menu[activeCategory as keyof typeof menu].map(
                      ([name, description], index) => (
                        <motion.div
                          className="menu-item"
                          key={name}
                          initial={{ opacity: 0, x: 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.5,
                          }}
                        >
                          <div>
                            <span className="menu-index">
                              0{index + 1}
                            </span>
                            <div>
                              <h3>{name}</h3>
                              <p>{description}</p>
                            </div>
                          </div>

                          <ArrowUpRight size={18} />
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </AnimatePresence>

                <p className="menu-note">
                  Concept menu based on publicly listed Toss & Toast items.
                  Final menu, descriptions and prices should be confirmed with
                  the café.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-bg" />
          <div className="statement-inner">
            <Reveal>
              <div className="eyebrow light centered">
                <span />
                Made with intention
                <span />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h2>
                Not just another
                <br />
                <em>coffee stop.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.22}>
              <p>
                A little slower. A little warmer.
                <br />
                A lot more memorable.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="story" className="story section">
          <div className="container story-grid">
            <div className="story-copy">
              <Reveal>
                <div className="eyebrow">
                  <span />
                  Our story
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="display-heading">
                  Built around
                  <br />
                  <em>good company.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  The best café memories rarely come from the menu alone.
                  They're made around the table — over shared plates, another
                  cup of coffee and conversations that run longer than planned.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  That's the spirit behind Toss & Toast: food that feels
                  familiar, drinks worth lingering over and a space you want
                  to return to.
                </p>
              </Reveal>
            </div>

            <div className="story-images">
              <Reveal>
                <motion.img
                  className="story-large"
                  src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=90"
                  alt="Friends enjoying a café"
                  whileHover={{ scale: 1.03 }}
                />
              </Reveal>

              <Reveal delay={0.15}>
                <motion.img
                  className="story-small"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=90"
                  alt="Café interior"
                  whileHover={{ scale: 1.03 }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="gallery-track">
            <motion.div
              className="gallery-card tall"
              whileHover={{ y: -10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=90"
                alt="Coffee shop"
              />
            </motion.div>

            <motion.div className="gallery-card wide" whileHover={{ y: -10 }}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=90"
                alt="Café atmosphere"
              />
            </motion.div>

            <motion.div
              className="gallery-card portrait"
              whileHover={{ y: -10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=90"
                alt="Coffee and table"
              />
            </motion.div>
          </div>
        </section>

        <section id="visit" className="visit section">
          <div className="container">
            <div className="visit-grid">
              <div>
                <Reveal>
                  <div className="eyebrow">
                    <span />
                    Come say hello
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="display-heading">
                    Your table
                    <br />
                    is <em>waiting.</em>
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="visit-copy">
                    Find us in Jorhat and make yourself comfortable.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <div className="visit-card">
                  <div className="visit-row">
                    <MapPin />
                    <div>
                      <span>Find us</span>
                      <strong>Ward 8, KB Road</strong>
                      <small>Jorhat, Assam</small>
                    </div>
                  </div>

                  <div className="visit-row">
                    <Clock3 />
                    <div>
                      <span>Opening hours</span>
                      <strong>Confirm with Toss & Toast</strong>
                    </div>
                  </div>

                  <div className="visit-row">
                    <Phone />
                    <div>
                      <span>Call</span>
                      <strong>+91 97060 50166</strong>
                    </div>
                  </div>

                  <div className="visit-actions">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Toss+%26+Toast+Jorhat+Assam"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get directions <ArrowUpRight size={16} />
                    </a>

                    <a
                      href="https://www.zomato.com/jorhat/toss-toast-jorhat-locality-jorhat/order"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Order online <ShoppingBag size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              TOSS <i>&</i> TOAST
            </div>
            <p>
              Good food.
              <br />
              Better company.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Explore</span>
              <a href="#experience">Experience</a>
              <a href="#menu">Menu</a>
              <a href="#story">Our Story</a>
            </div>

            <div>
              <span>Visit</span>
              <a href="#visit">Location</a>
              <a
                href="https://www.zomato.com/jorhat/toss-toast-jorhat-locality-jorhat/order"
                target="_blank"
                rel="noreferrer"
              >
                Order online
              </a>
            </div>

            <div>
              <span>Social</span>
              <a href="#top">Instagram</a>
              <a href="#top">Facebook</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Toss & Toast</span>
          <span>Concept website by Novariyan</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);