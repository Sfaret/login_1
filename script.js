function register(event) {
  event.preventDefault();
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user.updateProfile({
        displayName: fullName,
      }).then(() => {
        document.getElementById('message').innerHTML = "Account created successfully!";
        setTimeout(() => {
          window.location.href = 'main.html';
        }, 2000); // Redirect after 2 seconds
      }).catch((error) => {
        document.getElementById('message').innerHTML = "Error updating profile: " + error.message;
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('message').innerHTML = "Error: " + errorMessage;
    });
}

function login(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('User logged in:', user); // Debugging line

      // Redirect to main.html after successful login
      window.location.href = 'main.html';
    })
    .catch((error) => {
      console.error('Error logging in:', error); // Debugging line
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('message').innerHTML = "Error: " + errorMessage;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Particle.js configuration
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
 });
 