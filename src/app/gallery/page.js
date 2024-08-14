import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-vc-blue overflow-x-clip">
      <div className="carousel rounded-box gap-4 m-4">
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={350}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-2xl"
            src="/images/girls_bball1.png"
            alt="Terrier"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
