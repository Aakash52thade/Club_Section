import './style.css';
import { Club } from '../data/Club';

const Clubs = () => {
  return (
    <div>
      {/* hero section */}
      <div className="m-[3rem] mt-[7.5rem]">
        <section id="hero">
          <div className='max-w-[60%] px-[3rem]s space-y-16'>
            <h1 className='text-5xl font-semibold leading-snug text-pink-400'>Explore Your Passions with Unsway's Exclusive Clubs!</h1>
            <p className='text-2xl font-semibold text-rose-200'>Join our specialized clubs to gain insights,
              skills, and connections in fields that matter most to you.
            </p>
            <p className='content font-semibold bg-black bg-opacity-50 p-5 rounded-lg text-center'>At <strong>Unsway</strong>, we believe
              in empowering students to make informed decisions about their future careers. Our 
              exclusive clubs offer a unique opportunity to dive deep into various fields, gain 
              practical knowledge, and connect with like-minded peers and industry experts. Whether 
              you're curious about AI, coding, entrepreneurship, finance, public speaking, or vocabulary 
              enhancement, we have a club for you!
            </p>
          </div>
        </section>
      </div>

      
    {/* Clubs Section */}
<div className='gradient-rainbow p-10'>
  <div className='grid grid-cols-1 max-w-[70%] items-center mx-auto  gap-8'>
    {Club.clubs.map((club, index) => (
      <div key={index} className='card_bg flex  cursor-pointer rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl text-black'>
        <div className='w-1/2 rounded-md'>
          <img 
            src={club.image} 
            alt={club.name} 
            className='object-cover w-full h-full p-[2rem] rounded-md'
          />
        </div>
        <div className='w-1/2 p-6'>
          <h2 className='text-3xl font-bold text-yellow-100'>{club.name}</h2>
          <p className='mt-4 text-lg text-pink-300 font-semibold'>{club.description}</p>
          <div className='mt-6'>
            <h3 className='text-2xl font-semibold text-black'>Activities:</h3>
            <ul className='list-disc list-inside ml-4'>
              {club.activities.map((activity, i) => (
                <li key={i} className='text-white'>{activity}</li>
              ))}
            </ul>
          </div>
          <div className='mt-6'>
            <h3 className='text-2xl font-semibold text-black'>Benefits:</h3>
            <ul className='list-disc list-inside ml-4'>
              {club.benefits.map((benefit, i) => (
                <li key={i} className='text-white'>{benefit}</li>
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
