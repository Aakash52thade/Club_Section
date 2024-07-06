import './style.css';
import { Club } from '../data/Club';


  

const Clubs = () => {
  return (
    <div>
    {/* Hero section */}
    <div className="hero-section w-full h-auto md:h-[90vh] flex justify-center items-center pt-10 pb-10 md:pt-0 md:pb-0">
      <section id="hero" className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2 text-center leading-6">
          <h1 className="text-5xl md:text-4xl font-bold mb-6 px-8">
            Explore Your Passions with Unsway's Exclusive Clubs!
          </h1>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg mb-6">
            Join Club
          </button>
          <p className="text-white text-[17px] max-w-[90%] mb-6 px-8 mx-auto">
            At <strong>Unsway</strong>, we believe in empowering students to make informed decisions about their future careers. Our exclusive clubs offer a unique opportunity to dive deep into various fields, gain practical knowledge, and connect with like-minded peers and industry experts. Whether you're curious about AI, coding, entrepreneurship, finance, public speaking, or vocabulary enhancement, we have a club for you!
          </p>
        </div>
  
        <div className="md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-[9rem]">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXN8ZW58MHx8MHx8fDA%3D"
            alt="Team" className="rounded-lg shadow-lg max-w-[90%]" />
        </div>
      </section>
    </div>
  
    <p className="border-t-2 items-center mx-auto max-w-[90%] border-white"></p>
  
    {/* Clubs Section */}
    <div className="p-5 sm:p-10 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto gap-8 sm:gap-12">
        {Club.clubs.map((club, index) => (
          <div
            key={index}
            className="card_bg flex flex-col cursor-pointer rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl text-white"
          >
            <div className="w-full rounded-t-lg overflow-hidden">
              <img
                src={club.image}
                alt={club.name}
                className="object-cover w-full h-64 sm:h-72 hover:scale-110 duration-300"
              />
            </div>
            <div className="w-full p-5 sm:p-8 flex flex-col card_Background rounded-b-lg">
              <h2 className="text-2xl sm:text-3xl font-semibold flex justify-start text-black">{club.name}</h2>
              <p className="mt-2 sm:mt-4 text-lg flex justify-start text-start sm:text-xl text-gray-700">{club.description}</p>
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-black flex justify-start text-start">Benefits:</h3>
                <ul className="list-disc list-inside ml-4 text-neutral-950">
                  {club.benefits.map((benefit, i) => (
                    <li className="text-neutral-950 font-semibold flex justify-start text-start" key={i}>{"• " + benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  
  
  );
}

export default Clubs;
