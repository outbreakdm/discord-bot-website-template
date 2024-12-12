import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <div class="background-container"></div>

      <main className="showcase">
        <h1 className="showcase-header h-color">The Scraplands</h1>
        <h2 className="showcase-header-text h-color">
          Your journey in the wasteland begins here.
        </h2>
        <p className="showcase-para p-color">
          Join thousands of players in this interactive, text-based RPG. Build
          your shelter, conquer zones, and lead your faction to glory!
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Invite Now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join Server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
