"use client"

import Section from "./section";
import { Container } from "./container";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Hero() {

  return (
    <Section id="hero">
      <Container>
        <div
          id="home-hero-layout"
          className="flex flex-col py-10 md:py-16 gap-10 items-center justify-center"
        >
          <div
            className="flex flex-col items-center gap-6 text-center"
          >
            <h1 className="font-bold text-6xl">
              Focus on your business.<br/>We&apos;ll handle the website.
            </h1>
            <p className="text-lg max-w-lg">
              We build and maintain useful, usable, and whimsical websites so business owners can focus more on what they&apos;re good at.
            </p>
          </div>
          <div
            id="home-hero-buttons"
            className="w-full md:w-auto flex flex-col-reverse items-stretch md:flex-row gap-3 text-center"
          >
            <Button
              color="primary"
              variant="light"
              size="lg"
              radius="full"
            >
              Log In as Test User
            </Button>
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              radius="full"
            >
              Log In as Alchemist
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}