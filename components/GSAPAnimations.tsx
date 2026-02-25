'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GSAPAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Atelier entry
    gsap.set(".atelier-nav", { opacity: 0, y: -20 });
    gsap.set(".giant-text-container", { opacity: 0, y: 30 });
    gsap.set(".atelier-model", { opacity: 0, scale: 0.98 });
    gsap.set(".floating-card", { opacity: 0, y: 20 });
    gsap.set(".atelier-copy", { opacity: 0, y: 20 });

    const atelierTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    atelierTl
      .to(".atelier-nav", { opacity: 1, y: 0, duration: 0.8 })
      .to(".giant-text-container", { opacity: 1, y: 0, duration: 1 }, "-=0.6")
      .to(".atelier-model", { opacity: 1, scale: 1, duration: 1.2 }, "-=0.8")
      .to(".floating-card", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=0.6")
      .to(".atelier-copy", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

    // Parallax
    gsap.to(".atelier-model", {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-atelier-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".giant-text-container", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-atelier-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Bridge reveal
    gsap.from(".bridge-copy", {
      opacity: 0,
      y: 26,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-bridge",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".bridge-banner", {
      opacity: 0,
      y: 28,
      scale: 0.985,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-bridge",
        start: "top 76%",
        toggleActions: "play none none reverse"
      }
    });

    // Generic reveal (cards/sections)
    const revealItems = gsap.utils.toArray(".reveal");
    revealItems.forEach((el: any) => {
      if (el.closest(".hero-atelier-wrapper")) return; // hero ya animado arriba
      gsap.from(el, {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Staggers específicos
    gsap.from(".product-card", {
      opacity: 0,
      y: 26,
      scale: 0.985,
      duration: 0.55,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".product-grid",
        start: "top 84%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".occasion-card", {
      opacity: 0,
      y: 22,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".occasion-grid",
        start: "top 84%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 18,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 86%",
        toggleActions: "play none none reverse"
      }
    });

    // Newsletter image micro parallax
    gsap.to(".newsletter-bg img", {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: ".newsletter",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
