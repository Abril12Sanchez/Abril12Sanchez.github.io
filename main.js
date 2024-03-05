let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
 cursor: "<span style='color: #fb4993;'>| </span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #cc7793;">Estudiante de Ingeniería en Sistemas, apasionada por los códigos y el testeo. </span>')
  .pauseFor(5000)
  .deleteChars(10)
  .start();
