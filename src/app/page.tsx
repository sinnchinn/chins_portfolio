"use client"
import { Navbar, Button } from 'flowbite-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsPage: React.FC = () => {

  type ItemType = { title: string; src: string; content: string, icons: string[], button: string, href: string };

  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('/resume.png');

  // Function to open the resume picture card
  const openResume = (url: string) => {
    setResumeUrl(url);
    setIsResumeOpen(true);
  };

  // Function to close the resume picture card
  const closeResume = () => {
    setIsResumeOpen(false);
  };

  const handleClick = (item: ItemType) => {
    setSelectedItem(item);
  };

  // Sample items array
  const items = [
    { title: 'MangaDiction!', content: 'Mangadiction is a Fullstack application that was assigned in the last level of CodeStack before the internship. I am working in a group of 3 people, where I am one of the Front End developers. MangaDiction is an app mainly for manga readers to connect with one another. This application is still a work in progress but I am excited to see how far we can get.', src: '/md.png', icons: ['/react.png', 'flowbite.png', '/material.png', '/ts.png', '/tw.png', '/c.png'], button: 'MangaDiction!', href: 'https://manga-diction.vercel.app/' },
    { title: 'TeaAmo', content: 'TeaAmo is a business redevelopment website for a small business named TeaAmo. Me and a team of 2 others created this site to make it easy to navigate and better sell their products.', src: '/bd.png', icons: ['/js.png', '/bs.png', '/html.png'], button: 'TeaAmo', href: 'https://business-redevelop.vercel.app/' },
    { title: 'PokeGo', content: 'PokeGo is a Next JS app that I created to be able to search up any pokemons by name and id number. I coded this site to where you can only search generations 1-5 pokemons. You are able to randomize and favorite pokemons of your liking.', src: '/pr.png', icons: ['/react.png', '/ts.png', '/flowbite.png', '/material.png'], button: 'PokeGo', href: 'https://chins-pokereact.vercel.app/' },
  ];

  return (
    <div className=" font-mainFont bg-Pink bg-bgYellow min-h-screen">

      <Navbar className="bg-bgPink drop-shadow-md py-4">
        <Navbar.Brand>
          <p className="text-4xl font-semibold"> Sinatha Chin </p>
        </Navbar.Brand>

        <Navbar.Collapse className='cursor-pointer '>
          <Navbar.Link href='#aboutMe' className='text-xl'>
            About Me
          </Navbar.Link>

          <Navbar.Link href='#projects' className='text-xl'>
            Projects
          </Navbar.Link>

          <Navbar.Link href='#getConnected' className='text-xl'>
            Get Connected
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <motion.div
        className='grid grid-cols-3 m-5 p-20 border-8 border-double rounded-lg border-navPink'
      >
        <div id='aboutMe' className='col-span-2'>
          <p className='text-7xl font-semibold'> Hey there! I'm Sinatha.</p>
          <h1 style={{
            textShadow: "1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black",
          }} className='text-5xl custom-bounce font-semibold text-greenTxt  pt-5 pr-5 text'>
            Junior Developer
          </h1>
          <p className='text-lg pt-5 pr-20'>
            I am a junior developor currently attending CodeStack Acadmey since September 2023. I have experience in HTML, JavaScript, and most recently React and Next JS. I am most interested in front end developing and am excited to put my skills to the test in the real world.
          </p>
          <div className='grid grid-cols-3 pt-10 font-bold'>

            <div className='col-span-1'>
              <p className='text-xl'> Languages: </p>
              <div className='inline-flex pt-1'>
                <img className='w-10 h-8 mr-1' src='/html.png' />
                <img className='w-9 h-8 mr-1' src='/js.png' />
                <img className='w-8 h-8 mr-1' src='/ts.png' />
                <img className='w-8 h-8' src='/c.png' />
              </div>
            </div>

            <div className='col-span-'>
              <p className='text-xl'>Libraries: </p>
              <div className='pt-1 inline-flex'>
                <img className='w-10 h-8 mr-1' src='/react.png' />
                <img className='w-10 h-8 mr-1' src='/flowbite.png' />
                <img className='w-10 h-8' src='/material.png' />
              </div>
            </div>

            <div className='col-span-1'>
              <p className='text-xl'>Frameworks: </p>
              <div className='inline-flex pt-1'>
                <img className='w-8 h-8 mr-1' src='/bs.png' />
                <img className='w-11 h-7' src='/tw.png' />

              </div>
            </div>

          </div>
        </div>

        <div className='col-span-1'>
          <motion.img className='rounded-full border-navPink border-8 h-96 w-96 object-cover'
            animate={{ borderColor: 'rgb(153,204,153)' }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            src='/headshot.jpg' />
        </div>
      </motion.div>

      <div id='projects' className=' p-20 border-8 border-double border-greenTxt m-5 rounded-lg z-50'>
        <p className='text-5xl font-semibold pb-5'> Projects: </p>

        <div className='flex justify-center flex-wrap z-50'>
          {/* Render your items with cards */}
          {/* Render your items with cards */}
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="w-96 p-4 m-4 border rounded-lg bg-navPink shadow cursor-pointer"
              onClick={() => handleClick(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={item.src} alt={`Image ${item.src}`} className="w-full h-auto mb-2 rounded-lg" />
              <p className="text-3xl font-semibold text-center">{item.title}</p>
            </motion.div>
          ))}

          {/* Render the selected item if selectedId is not null */}
          <AnimatePresence>
            {selectedItem !== null && (
              <motion.div
                key="modal"
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="w-2/3 bg-white border-navPink border-8 p-8 rounded-lg shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <img src={selectedItem.src} alt={`Image ${selectedItem.src}`} className="w-full object-top h-96 object-cover mb-2 rounded-lg" />
                  <p className="text-lg p-5">{selectedItem.content}</p>
                  <div className='px-5 grid grid-cols-2'>
                    <div>
                      <p className='pb-1 text-lg font-semibold'>Built With:</p>
                      {selectedItem.icons.map((icon, iconIndex) => (
                        <img key={iconIndex} src={icon} alt={`Icon ${iconIndex}`} className="w-10 inline-flex h-10 mr-5" />
                      ))}
                    </div>
                    <div className='flex justify-center'>
                      <Button className='h-12 mt-5 w-44 bg-greenTxt enabled:hover:bg-greenTxt'>
                        <a href={selectedItem.href} target="_blank" rel="noopener noreferrer" className="text-black text-lg  hover:underline">{selectedItem.button}</a>
                      </Button>
                    </div>

                  </div>

                  <button className='px-5 mt-5 hover:underline' onClick={() => setSelectedItem(null)}>Close</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div style={{ zIndex: 10 }} className='pb-5'>
        <div id='getConnected' className=' p-20 border-8 border-double border-navPink ml-5 mr-5 rounded-lg'>
          <p className='text-5xl font-semibold pb-5'> Get Connected: </p>

          <div className='grid grid-cols-2'>

            <div className='col-span-1 text-center'>
              <p> Sinatha Chin</p>
              <p>sinathachin@gmail.com</p>
              <p>(209) 670-6105</p>
            </div>

            <div className='col-span-1 flex justify-center items-center'>


              <div className='px-5'>
                <a href='https://www.linkedin.com/in/sinatha-chin-123331308' target='_blank' rel='noopener noreferrer'>
                  <Button className='px-5 text-black bg-greenTxt hover:underline enabled:hover:bg-greenTxt relative focus:ring-0'>
                    LinkedIn
                  </Button>
                </a>
              </div>

              <div className='px-5'>
                <a href='https://github.com/sinnchinn' target='_blank' rel='noopener noreferrer'>
                  <Button className='px-5 text-black bg-greenTxt hover:underline enabled:hover:bg-greenTxt focus:ring-0'>
                    Github
                  </Button>
                </a>
              </div>

              <div className='px-5'>
                <a rel='noopener noreferrer'>
                  <Button onClick={() => openResume('/resume.png')} className='px-5 text-black bg-greenTxt hover:underline enabled:hover:bg-greenTxt focus:ring-0'>
                    Resume
                  </Button>
                </a>
              </div>

              {isResumeOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                  <div className=" w-2/6 bg-white border-navPink border-8 p-8 rounded-lg shadow-lg">
                    <img src={'/resume.png'} alt="Resume" className="w-6/6 object-top object-cover mb-2 rounded-lg " />
                    {/* Add any additional content for the resume card */}
                    <button className="px-5 mt-5 hover:underline" onClick={closeResume}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>


    </div>
  );
}

export default ProjectsPage;