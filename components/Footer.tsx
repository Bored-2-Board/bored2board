import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer
      data-theme="light"
      className="footer p-10 bg-base-300 text-base-content"
    >
      <div>
        <span className="footer-title">Team</span>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/abe-henderson-367638139//"
          target="_blank"
        >
          Abe Henderson
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/franki-biswas/"
          target="_blank"
        >
          Franki Biswas
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/jordanzolman/"
          target="_blank"
        >
          Jordan Zolman
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/niteshsunku/"
          target="_blank"
        >
          Nitesh Sunku
        </a>
        <a
          className="link link-hover"
          href="https://www.linkedin.com/in/alecjessen/"
          target="_blank"
        >
          Alec Jessen
        </a>
      </div>
      <div>
        <span className="footer-title">Directory</span>
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/search">
          Search
        </a>
        <a className="link link-hover" href="/profile">
          Profile
        </a>
        <a
          className="link link-hover"
          href="https://github.com/Pikachu-58/bored2board"
          target="_blank"
        >
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Pikachu-58/bored2board" target="_blank">
            <Image
              src="/github-mark.svg"
              alt="github-logo"
              width={30}
              height={30}
              className="ml-3"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
