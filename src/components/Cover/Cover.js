import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Cover() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: true,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              value: 80
            },
            opacity: {
              value: 0.1
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
              bubble: {
                distance: 100,
                size: 5,
                duration: 2,
                opacity: 1,
                speed: 3,
              },
            },
          detectRetina: true
        }}
    }
      />
      </div>
  );
}
