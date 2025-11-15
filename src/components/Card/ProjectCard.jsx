import './ProjectCard.css';

export default function ProjectCard({title, subtitle, role, team, duration, impacts, src, mediaType}) {
  const renderMedia = () => {
    if (mediaType === "video") {
      return (
        <video
          className="projectcard-image"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    return (
      <img
        className="projectcard-image"
        src={src}
      />
    );
  };

  return (
    <div className="projectcard">

        {/* LEFT COLUMN */}
        <div className="projectcard-left">
            <div className="projectcard-title">
                {title}
            </div>

            <div className="projectcard-subtitle">
                {subtitle}
            </div>

            <div className="empty-space"></div>

            <div className="projectcard-grid">
                {/* LEFT SIDE */}
                <div className="projectcard-col">
                    <div className="horizontal-line-project"></div>
                    <div className="projectcard-block">
                        <strong className="strong-title">ROLE</strong><br />
                        {role}
                    </div>

                    <div className="horizontal-line-project"></div>
                    <div className="projectcard-block">
                        <strong className="strong-title">TEAM</strong><br />
                        {team}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="projectcard-col">
                    <div className="horizontal-line-project"></div>
                    <div className="projectcard-block">
                        <strong className="strong-title">DURATION</strong><br />
                        {duration}
                    </div>

                    <div className="horizontal-line-project"></div>
                    <div className="projectcard-block">
                        <strong className="strong-title">MY IMPACTS</strong><br />
                        {impacts}
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN — IMAGE */}
        <div className="projectcard-right">
            {renderMedia()}
        </div>
    </div>
  );
}
