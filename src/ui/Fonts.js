const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Roboto");

  roboto.load().then(() => {
    document.documentElement.classList.add("roboto");
  });

  const pacifico = new FontFaceObserver("Pacifico");

  pacifico.load().then(() => {
    document.documentElement.classList.add("pacifico");
  });

  const raleway = new FontFaceObserver("Raleway");

  raleway.load().then(() => {
    document.documentElement.classList.add("raleway");
  });
};

export default Fonts;
