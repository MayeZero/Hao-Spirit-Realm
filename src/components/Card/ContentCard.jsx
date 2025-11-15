import "./ContentCard.css";

export default function ContentCard({ title, mainTitle, description, img, mediaType }) {
  const renderMedia = () => {
    if (!img) return null;

    if (mediaType === "video") {
      return (
        <video
          className="mockup-image"
          src={img}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    // 默认渲染图片
    return (
      <img
        className="mockup-image"
        src={img}
        alt={mainTitle}
      />
    );
  };

  return (
    <div className="content-card">
      <div className="text-content">
        {title && <h4 className="section-title">{title}</h4>}
        {mainTitle && <h2 className="main-title">{mainTitle}</h2>}
        {description && <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />}
      </div>

      {img && (
        <div className="image-content">
          {renderMedia()}
        </div>
      )}
    </div>
  );
}
