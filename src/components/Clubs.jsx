import './style.css';
import { Club } from '../data/Club';

const Clubs = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="hero-section min-h-screen flex justify-center items-center py-20 px-6">
        <section id="hero" className="flex flex-col items-center max-w-4xl mx-auto space-y-8 sm:space-y-16">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-snug text-white text-center">
            Explore Your Passions with Unsway's Exclusive Clubs!
          </h1>
          <button className="flex mx-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-500 font-bold hover:bg-white hover:text-blue-800 duration-200">
            Join Club
          </button>
          <p className="content font-semibold bg-black bg-opacity-50 p-5 sm:p-8 rounded-lg text-center text-white">
            At <strong>Unsway</strong>, we believe in empowering students to make informed decisions about their future careers. Our exclusive clubs offer a unique opportunity to dive deep into various fields, gain practical knowledge, and connect with like-minded peers and industry experts. Whether you're curious about AI, coding, entrepreneurship, finance, public speaking, or vocabulary enhancement, we have a club for you!
          </p>
        </section>
      </div>

      {/* Clubs Section */}
     <div className="gradient-rainbow p-5 sm:p-10 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto gap-5 sm:gap-8">
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
                    <li className='text-neutral-950 font-semibold flex justify-start text-start' key={i}>{"• " +benefit}</li>
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
