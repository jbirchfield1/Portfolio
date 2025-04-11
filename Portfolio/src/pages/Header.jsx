const Header = () => {
    return (
      <header className="border-b-4 pb-4 text-center">
        <h1 className="text-4xl font-extrabold">Joshua Birchfield</h1>
        <h2 className="text-xl font-bold">Senior Computer Science Student</h2>
        <h3 className="text-lg font-semibold">Arkansas Tech University</h3>
        <img className="w-40 sm:w-32 md:w-48 mx-auto rounded-xl mt-4" src="/profile.jpg" alt="Profile" />
      </header>
    );
  };
  
  export default Header;