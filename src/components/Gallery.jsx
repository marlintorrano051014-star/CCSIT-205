import "./Gallery.css";
import animeData from "../../data.json";

export default function Gallery() {
  return (
    <div className="anime-gallery py-5">
      <div className="container">

        {/* Gallery Header */}
        <div className="text-center mb-5">
          <p className="gallery-subtitle">
            ✨ WELCOME TO MY ✨
          </p>

          <h1 className="gallery-title">
            Anime <span>Gallery</span>
          </h1>

          <p className="gallery-description">
            Explore a collection of beautiful anime characters,
            worlds, and adventures.
          </p>
        </div>

        {/* Anime Cards */}
        <div className="row g-4">
          {animeData.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div className="anime-card">

                {/* Image */}
                <div className="anime-image-container">
                  <img
                    src={`/images/${item.img}.jpg`}
                    alt={item.title}
                    className="anime-image"
                  />

                  <div className="anime-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Card Content */}
                <div className="anime-content">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anime-button"
                  >
                    View Character ✨
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}