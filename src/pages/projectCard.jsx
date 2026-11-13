import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  imageUrl,
  description,
  link,
  header,
  shortDescription,
  imageArray,
  videoUrl,
  textColor,
  bgColor,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const hasMoreDescription = Boolean(
    shortDescription && description && shortDescription !== description,
  );

  return (
    <article
      className="project-card group w-1/2 m-1 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-indigo-950/30"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {imageUrl && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="block overflow-hidden bg-slate-800"
        >
          <img
            src={imageUrl}
            alt={`${title} preview`}
            loading="lazy"
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {header && (
          <div className="mb-3 text-sm font-medium text-indigo-300">
            {header}
          </div>
        )}

        <div className="project-details  ">
          <h3 className="text-xl w-full font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 h-max  break-words text-sm leading-6 text-slate-300 sm:text-base">
            {showFullDescription ? description : shortDescription || description}
          </p>
          {hasMoreDescription && (
            <button
              type="button"
              onClick={() => setShowFullDescription((isExpanded) => !isExpanded)}
              aria-expanded={showFullDescription}
              className="mt-2 text-sm font-semibold text-indigo-300 underline decoration-indigo-300/50 underline-offset-4 transition hover:text-indigo-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              {showFullDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        {videoUrl && (
          <div className="mt-5 overflow-hidden rounded-xl bg-black">
            <iframe
              src={videoUrl}
              title={`${title} video`}
              className="project-video aspect-video w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}

        {imageArray?.length > 0 && (
          <div className="project-images mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {imageArray.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg border border-white/10 object-cover"
              />
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        >
          View project
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.node,
  shortDescription: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageArray: PropTypes.arrayOf(PropTypes.string),
  videoUrl: PropTypes.string,
  link: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ProjectCard;
