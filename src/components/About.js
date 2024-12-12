import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div class="background-container"></div>
        <div className="about-header">
          <h3 className="h-color">What is The Scraplands?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚔️ Engage in Exploration</h4>
              <p className="p-color">
                Discover post-apocalyptic zones, gather resources, and compete
                for control with other factions!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🏠 Build Your Shelter</h4>
              <p className="p-color">
                Upgrade your shelter to unlock bonuses and gain an edge in the
                wasteland.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🔥 Compete for Faction Glory</h4>
              <p className="p-color">
                Join the Scavengers or Wardens, and dominate contested zones for
                your faction.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Learn More About Gameplay &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">17k+</h4>
            <p className="p-color">Active Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">94k+</h4>
            <p className="p-color">Active Players</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">375k+</h4>
            <p className="p-color">Explorations Completed</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
