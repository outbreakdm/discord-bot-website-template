import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join the Scraplands Today!</h3>
        </div>
        <div className="joinUs-para p-color">
          Explore, build, and dominate the wasteland. Invite The Scraplands bot
          to your Discord server now!
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1024207621810565150&permissions=8&scope=bot%20applications.commands">
            Invite Now!
          </Link>
        </button>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.gg/BC9su7Sm9Z">
            Support Server
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
