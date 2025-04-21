const Footer = () => {
    return (
      <footer className="p-4 mt-6 text-center rounded-lg" style={{backgroundColor: '#1b263b'}}>
        <p className="font-bold">Contact Info:</p>
        <ul className="flex flex-wrap gap-3 ml-2 text-sm">
          <li>
            Email:{" "}
            <a href="mailto:joshua.birchfield32@gmail.com" className="text-pink-600">
              joshua.birchfield32@gmail.com
            </a>
          </li>
          <li>Phone Number: (479)530-9156</li>
          <li>
            X:{" "}
            <a href="https://x.com/JBirchfield32" className="text-pink-600">
              Joshua Birchfield
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/joshua-birchfield-b13304295" className="text-pink-600">
              Joshua Birchfield
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;