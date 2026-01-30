/*
|-----------------------------------------------------
| Template Name: Matin - Digital Agency & Business HTML Template
| Developer: Themesfamily
| Version: 1.0.2
|-----------------------------------------------------
*/
/***************************************************
==================== JS ======================
****************************************************
00. Configuration Check
01. GSAP Plugin Registration
02.	LENIS SMOOTH SCROLLING
03. TEAM Social Icon Toggle
04. GSAP Custom Cursor Implementation
05. GSAP Text Split Animation
06. GSAP Image Spread / Reveal Animation
07. GSAP 3D Scale and Fade Animation
08. GSAP Dynamic Fade-In Animations (General)
09. GSAP Parallax Zoom Animation
10. MAIN INITIALIZATION FUNCTION
****************************************************/

(function ($) {
    "use strict";

    // 00. Configuration Check
    if (typeof gsap === 'undefined' || typeof jQuery === 'undefined' || typeof Lenis === 'undefined') {
        console.error("Required libraries (GSAP, jQuery, or Lenis) are not loaded. Skipping all animations.");
        return; 
    }
	
    // 01. GSAP Plugin Registration
    if (typeof SplitText !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText); 
    } else {
        console.warn("GSAP plugins (SplitText or ScrollTrigger) are not loaded. Some animations may be skipped.");
    }
    
    // ----------------------------------------------------------------------------------
    // 02. LENIS SMOOTH SCROLLING
    // ----------------------------------------------------------------------------------
	new Lenis({
		autoRaf: true
	});
    // ----------------------------------------------------------------------------------
    // 04. GSAP Custom Cursor Implementation
    // ----------------------------------------------------------------------------------
    function initCustomCursor() {
        const cIn = document.querySelector('.cursor-in');
        const cOut = document.querySelector('.cursor-out');

        if (cIn && cOut) {
            document.addEventListener('mousemove', e => {
                gsap.to([cIn, cOut], {
                    x: e.clientX,
                    y: e.clientY,
                    stagger: { each: 0.03 },
                    duration: 0.25,
                    ease: "power2.out"
                });
            });

            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cOut, { scale: 1.5, opacity: 0, duration: 0.4, ease: "power2.out" });
                    gsap.to(cIn, { scale: 0.6, duration: 0.2, ease: "power1.out" });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(cOut, { scale: 1, opacity: 0.5, duration: 0.3, ease: "power2.inOut" });
                    gsap.to(cIn, { scale: 1, duration: 0.3, ease: "power1.inOut" });
                });
            });
        } else {
            console.info("Cursor elements not found. Skipping GSAP cursor animation.");
        }
    }

    // ----------------------------------------------------------------------------------
    // 05. GSAP Text Split Animation
    // ----------------------------------------------------------------------------------
    function initSplitTextAnimations() {
        const st = $(".split-content");
        if (st.length > 0 && typeof SplitText !== 'undefined') {
            st.each(function (index, el) {
                el.split = new SplitText(el, {
                    type: "lines,words,chars",
                    linesClass: "atf-split-line",
                });
                
                // Set initial position based on class (end, start, up, down)
                let initialProps = { opacity: 0 };
                if ($(el).hasClass("end")) initialProps.x = "50";
                else if ($(el).hasClass("start")) initialProps.x = "-50";
                else if ($(el).hasClass("up")) initialProps.y = "80";
                else if ($(el).hasClass("down")) initialProps.y = "-80";

                gsap.set(el.split.chars, initialProps);
                gsap.set(el, { perspective: 400 });
                
                // Create ScrollTrigger animation timeline
                gsap.to(el.split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        end: "bottom 65%",
                        scrub: 1,
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    autoAlpha: 1,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.03,
                });
            });
        }
    }

    // ----------------------------------------------------------------------------------
    // 06. GSAP Image Spread / Reveal Animation
    // ----------------------------------------------------------------------------------
    function initImageSpreadAnimations() {
        document.querySelectorAll(".spread").forEach((container) => {
            let image = container.querySelector("img");
            if (!image) return;

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
					toggleActions: "play none none none",
                },
            });

            tl.set(container, { autoAlpha: 1 });

            if (container.classList.contains("zoom-out")) {
                tl.from(image, { duration: 1.5, scale: 1.4, ease: "power2.out" });
            } else if (container.classList.contains("start") || container.classList.contains("end")) {
                let xPercent = container.classList.contains("start") ? -100 : 100;

               tl.from(container, {
					duration: 1.5,
					xPercent,
					ease: Power2.out,
				});
				tl.from(image, {
					duration: 1.5,
					xPercent: -xPercent,
					scale: 1,
					delay: -1.5,
					ease: Power2.out,
				});
            }
			else if (container.classList.contains("up") || container.classList.contains("down")) {
                let yPercent = container.classList.contains("up") ? 100 : -100;

                tl.from(container, {
					duration: 1.5,
					yPercent,
					ease: Power2.out,
				});
				tl.from(image, {
					duration: 1.5,
					yPercent: -yPercent,
					scale: 1,
					delay: -1.5,
					ease: Power2.out,
				});
            }
			
        });
    }


    // ----------------------------------------------------------------------------------
    // 07. GSAP 3D Scale and Fade Animation
    // ----------------------------------------------------------------------------------
    function initScale3DAnimations() {
        gsap.utils.toArray(".item-3d").forEach((el) => {
            // Initial 3D transform set
            gsap.set(el, {
                opacity: 0.7,
                transform: "perspective(2500px) translate3d(0,0,0) rotateX(90deg) scale(0.5)",
            });

            // ScrollTrigger timeline to reveal 3D item
            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom+=50",
                    end: "bottom center",
                    scrub: 2,
                },
            }).to(el, {
                scale: 1,
                rotateX: 0,
                opacity: 1,
                duration: 1.3,
                ease: "power2.out",
            });
        });
    }

    // ----------------------------------------------------------------------------------
    // 08. GSAP Dynamic Fade-In Animations (General)
    // ----------------------------------------------------------------------------------
    function initDynamicFadeAnimations() {
        [
            ".fadeInUp", ".fadeInLeft", ".fadeInRight", ".zoomIn", ".zoomOut", ".bounceIn"
        ].forEach((selector) => {
            gsap.utils.toArray(selector).forEach((el) => {
                let offset = el.getAttribute("data-fade-offset") || 40;
                let duration = el.getAttribute("data-duration") || 0.8;
                let from = el.getAttribute("data-fade-from") || (
                    selector === ".fadeInLeft" ? "left" :
                    selector === ".fadeInRight" ? "right" :
                    selector.includes("zoom") || selector === ".bounceIn" ? "center" :
                    "bottom"
                );
                let onScroll = el.getAttribute("data-on-scroll") || 1;
                let delay = el.getAttribute("data-delay") || 0.15;

                let props = {
                    opacity: 0,
                    duration,
                    delay,
                    ease: el.getAttribute("data-ease") || (
                        selector === ".bounceIn" ? "bounce.out" : "power2.out"
                    ),
                    x: from === "left" ? -offset : from === "right" ? offset : 0,
                    y: from === "top" ? -offset : from === "bottom" ? offset : 0,
                    scale: selector === ".zoomIn" ? 0.5 : selector === ".zoomOut" ? 1.5 : 1,
                };

                // Add ScrollTrigger if onScroll is enabled
                if (onScroll == 1) {
                    props.scrollTrigger = { trigger: el, start: "top 85%" };
                }

                gsap.from(el, props);
            });
        });
    }

    // ----------------------------------------------------------------------------------
    // 09. GSAP Parallax Zoom Animation
    // ----------------------------------------------------------------------------------
    function initParallaxZoom() {
        document.querySelectorAll(".item-up-image").forEach((wrap) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: wrap,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            }).to(wrap.querySelector(".item-up"), {
                scale: 1.10,
                duration: 1,
            });
        });
    }
	
    // ----------------------------------------------------------------------------------
    // 10. MAIN INITIALIZATION FUNCTION
    // ----------------------------------------------------------------------------------
    function initAllScripts() {
        // Initialize all DOM-dependent functions
        initCustomCursor();
        initSplitTextAnimations();
        initImageSpreadAnimations();
        initScale3DAnimations();
        initDynamicFadeAnimations();
        initParallaxZoom();

        console.log("All Matin animations initialized successfully.");
    }
    
    // Execute the main function (assuming script is placed before </body>)
    initAllScripts();
	
	
	

})(jQuery);