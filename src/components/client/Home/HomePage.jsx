import "./HomePage.css"
import Example_Rasm from "../../assest/images/Rasm.png"
import Main_Photo from "../../assest/images/smiley-boy-with-book-head.png"
import Telegram from "../../assest/icons/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.webp"
import Instagram from "../../assest/icons/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand.png"
import Facebook from "../../assest/icons/e44a55eb-b33a-4334-a756-b75fa05b62a3-removebg-preview.png"
import Uzbek_Ball from "../../assest/icons/png-transparent-uzbekistan-flags-icon-removebg-preview.png"
import Bell_notifications from "../../assest/icons/pngtree-bell-vector-icon-png-image_470681-removebg-preview.png"
import email_notifications from "../../assest/icons/email.logo.png"
// import avatar from "./components/../images/images (4).jpg"
import { useEffect } from 'react';


function HomePage() {

  useEffect(() => {
    const images = document.querySelectorAll('.Statistica img');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('image-animate');
            observer.unobserve(entry.target); 
          }, entry.target.dataset.index * 200); 
        }
      });
    }, { threshold: 0.1 });
    
    images.forEach((image, index) => {
      image.dataset.index = index; 
      observer.observe(image);
    });
    
    return () => {
      images.forEach(image => observer.unobserve(image));
    };
  }, []);



// -----------------------------------------------------------------------------------------------


useEffect(() => {
  const elements = document.querySelectorAll('.edu-content img, .edu-content h1, .edu-feature');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('edu-animate');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
  
  return () => {
    elements.forEach(element => observer.unobserve(element));
  };
}, []);

  
  
  return (
<>
    
    <div className='BG'>


      <div className='container'>
        <div className='navbar'>
          <div className='social_links'>
            <img src={Telegram}></img>
            <img src={Instagram}></img>
            <img src={Facebook}></img>

          </div>
          <div className='tel'>
            <h1>+998 XX XXX XX XX</h1>
          </div>

          <div className='notifications'>
            <img src={Bell_notifications}></img>
            <img src={email_notifications}></img>
            <div className='language'> 
            <h1>UZ</h1>
            <img src={Uzbek_Ball}></img>
            </div>
        
          </div>
          <div className='Profile'>
           <button>Kirish</button>
          </div>
        </div>
        <div className='abaut_site'>
          <div className='abt_text'>
            <h1>
              EduSmart
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            </p>
            <button>Statistika</button>
          </div>
          <div className='abt_img'>
            <img src={Main_Photo}></img>
          </div>
        </div>
        <div className='Statistica'>
          <div> <img src={Example_Rasm}></img></div>
          <div> <img src={Example_Rasm}></img></div>
          <div> <img src={Example_Rasm}></img></div>
          <div> <img src={Example_Rasm}></img></div>
          <div> <img src={Example_Rasm}></img></div>
          <div> <img src={Example_Rasm}></img></div>
        </div>
        <div className="edu-container">
      <div className="edu-image">
        <img src={Example_Rasm} alt="Instructor" />
      </div>

      <div className="edu-content">
        <h1>Nima uchun aynan EduSmart?</h1>

        <div className="edu-features-grid">
          <div className="edu-feature">
            <h3>Onlayn O'qish</h3>
            <p>The only costs are for standard school supplies and voluntary field trips.</p>
          </div>
          <div className="edu-feature">
            <h3>Sifatli Ta'lim</h3>
            <p>Many of our Connections Academy schools have additional accreditations.</p>
          </div>
          <div className="edu-feature">
            <h3>Onlayn Dastur</h3>
            <p>Our curriculum prepares students to go further in life by giving them support.</p>
          </div>
          <div className="edu-feature">
            <h3>Onlayn Dars</h3>
            <p>Students at Connections Academy collaborate on projects together.</p>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
{/* -------------------------------------------------------------------------------------------------- */}
<footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Info */}
        <div className="footer-logo-section">
          <div className="logo-circle">
           <img src={Example_Rasm}></img>
          </div>
          <p className="footer-description">O'quv markazlar va maktablarni aqilli boshqarish tizimi</p>
          <span className="footer-copyright">Edusmart2022</span>
        </div>

      
        <div className="footer-company-section">
          <h4>Kompaniya</h4>
          <ul>
            <li>Biz haqimizda</li>
            <li>Yangiliklar</li>
            <li>Shartnoma</li>
            <li>Mutaxassislar yordami</li>
          </ul>
        </div>

     
        <div className="footer-contact-section">
          <h4>Murojaat uchun</h4>
          <p>📞 (406) 555-0120</p>
          <p>📧 mangocoding123@gmail.com</p>
          <p>
            📍 "Turon Information Technology Group" Toshkent shahar Yunusobod tumani 15-mavze 42-a uy
          </p>
        </div>

       
        <div className="footer-social-section">
          <h4>Ijtimoiy tarmoqlar</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
{/* -------------------------------------------------------------------------------------------------- */}

</>
   
  );
}

export default HomePage;






// useEffect(() => {
//   const images = document.querySelectorAll('.Statistica img');
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('image-animate');
//         observer.unobserve(entry.target); // stop observing once animated
//       }
//     });
//   }, { threshold: 0.1 });
  
//   images.forEach(image => observer.observe(image));
  
//   return () => {
//     images.forEach(image => observer.unobserve(image));
//   };
// }, []);
