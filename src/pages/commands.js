import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | The Scraplands</title>
        <meta
          name="description"
          content="Commands page for The Scraplands bot. Explore how a single command opens a world of modules in this interactive RPG."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <section className="box">
            <div className="box-content p-color">
              <p>
                In "The Scraplands," there is only one command you need to
                remember: <kbd>/wasteland</kbd>. This powerful command serves as
                the gateway to all gameplay features, including exploration,
                shelter upgrades, faction mechanics, and more.
              </p>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Exploration 🌍
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/wasteland explore</kbd> -{" "}
                  <span className="p-color">
                    Begin your journey into the wasteland, gather resources, and
                    face random events.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland streak</kbd> -{" "}
                  <span className="p-color">
                    Check your current exploration streak and its bonus
                    multiplier.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland zones</kbd> -{" "}
                  <span className="p-color">
                    View detailed information about available zones and their
                    level requirements.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Shelter 🏠
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/wasteland shelter</kbd> -{" "}
                  <span className="p-color">
                    Access your shelter to view current upgrades and benefits.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland upgrade [type]</kbd> -{" "}
                  <span className="p-color">
                    Upgrade a specific part of your shelter (e.g., Storage Shed,
                    Fire Pit, Water Collection).
                  </span>
                </li>
                <li>
                  <kbd>/wasteland shelter-stats</kbd> -{" "}
                  <span className="p-color">
                    Get a summary of your shelter bonuses and upgrade levels.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Factions ⚔️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/wasteland faction</kbd> -{" "}
                  <span className="p-color">
                    Learn about factions, join one, and view your faction's
                    current standing.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland faction-battle</kbd> -{" "}
                  <span className="p-color">
                    Participate in faction battles to secure zones and gain
                    rewards.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland faction-leaderboard</kbd> -{" "}
                  <span className="p-color">
                    View the leaderboard to track faction dominance.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Inventory & Equipment 🎒
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/wasteland inventory</kbd> -{" "}
                  <span className="p-color">
                    View your inventory and manage your items.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland equip [item]</kbd> -{" "}
                  <span className="p-color">
                    Equip an item from your inventory to gain its benefits.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland unequip [slot]</kbd> -{" "}
                  <span className="p-color">
                    Remove an equipped item from a specific slot (e.g., helmet,
                    chest).
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Economy & Progression 📈
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/wasteland balance</kbd> -{" "}
                  <span className="p-color">
                    Check your scrap balance and current scrap capacity.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland xp</kbd> -{" "}
                  <span className="p-color">
                    View your current XP and level progress.
                  </span>
                </li>
                <li>
                  <kbd>/wasteland leaderboard</kbd> -{" "}
                  <span className="p-color">
                    Check the leaderboard for the most successful players.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
