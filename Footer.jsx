
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-dark text-white text-center p-4 mt-4 shadow-lg position-relative"
      style={{
        borderTop: "4px solid #ff9a9e",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="row">
          {/* Cột 1: Thông tin */}
          <div className="col-md-4 mb-3">
            <h5>Flower Predictor</h5>
            <p>Your AI-powered flower identification assistant.</p>
          </div>
          {/* Cột 2: Liên kết nhanh */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <div className="d-flex flex-column">
              <a href="#" className="text-white text-decoration-none fs-6">About</a>
              <a href="#" className="text-white text-decoration-none fs-6">Contact</a>
              <a href="#" className="text-white text-decoration-none fs-6">Privacy</a>
              <a href="#" className="text-white text-decoration-none fs-6">FAQs</a>
              <a href="#" className="text-white text-decoration-none fs-6">Support</a>
            </div>
          </div>
          {/* Cột 3: Liên hệ */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>📧 Email: support@flowerpredictor.com</p>
            <p>📞 Phone: +1 234 567 890</p>
            <p>📍 Address: 123 Flower Street, Botanical City</p>
          </div>
        </div>
        {/* Mạng xã hội */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <i className="fab fa-facebook fs-4 hover-effect"></i>
          <i className="fab fa-twitter fs-4 hover-effect"></i>
          <i className="fab fa-instagram fs-4 hover-effect"></i>
        </div>
        {/* Google Map */}
        <div className="mt-3">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835848847726!2d-122.084249684692!3d37.42199997982586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c5f1c5cbd%3A0x3a0b8e00f08a6a5!2sGoogleplex!5e0!3m2!1sen!2s!4v1607031442321!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Nút Back to Top */}
        <div className="mt-3">
          <motion.button
            className="btn btn-light"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
       
          </motion.button>
        </div>
  
        {/* Hiệu ứng sóng */}
        <div className="footer-wave position-absolute w-100 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", bottom: 0, left: 0 }}
          >
            {/* <path
              fill="#ff9a9e"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,144C672,149,768,139,864,122.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160V320H0Z"
            ></path> */}
          </svg>
        </div>
        <p className="mb-0 mt-3">© 2025 Flower Predictor. All rights reserved.</p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
