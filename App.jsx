// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import UploadImage from "./components/UploadImage";

// function App() {

//   return (
//     <div id="root">
//       <Header />
//       <div className="main-content mt-4">
//         <UploadImage />
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div id="root">
      <Header />

      {/* Background Video YouTube */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video"
        ></iframe>
      </div>

      {/* Nội dung chính */}
      <div className="content-overlay">
        <UploadImage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
