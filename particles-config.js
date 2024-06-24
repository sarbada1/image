particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 10,
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "shape": {
          "type": "image",
          "image": 
          {
            "src": "/images/img.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 30,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 5,
            "size_min": 10,
            "sync": false
          }
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        }
      },
      "retina_detect": true
    }
  );
  