"use client"
import { Navbar, Button, Tabs } from 'flowbite-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GhibliComponent from './components/GhibliComponent';
import { pages } from 'next/dist/build/templates/app-page';

const ProjectsPage: React.FC = () => {

  type ItemType = { title: string; src: string; content: string, icons: string[], button: string, href: string };

  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('/resume.png');
  const [pageSize, setPageSize] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth > 767)
    }

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pageSize])

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
    { title: 'MangaDiction!', content: 'Mangadiction is a Fullstack application that was assigned in the last level of CodeStack before the internship. I am working in a group of 3 people, where I am one of the Front End developers. MangaDiction is an app mainly for manga readers to connect with one another. This application is still a work in progress but I am excited to see how far we can get.', src: '/md.png', icons: ['/react.png', '/flowbite.png', '/material.png', '/ts.png', '/tw.png', '/c.png'], button: 'MangaDiction!', href: 'https://manga-diction.vercel.app/' },
    { title: 'TeaAmo', content: 'TeaAmo is a business redevelopment website for a small business named TeaAmo. Me and a team of 2 others created this site to make it easy to navigate and better sell their products.', src: '/bd.png', icons: ['/js.png', '/bs.png', '/html.png'], button: 'TeaAmo', href: 'https://business-redevelop.vercel.app/' },
    { title: 'PokeGo', content: 'PokeGo is a Next JS app that I created to be able to search up any pokemons by name and id number. I coded this site to where you can only search generations 1-5 pokemons. You are able to randomize and favorite pokemons of your liking.', src: '/pr.png', icons: ['/react.png', '/ts.png', '/flowbite.png', '/material.png'], button: 'PokeGo', href: 'https://chins-pokereact.vercel.app/' },
    { title: 'RPLS', content: 'This is a game of Rock, Papers, Lizard, Spock. I had a hard time doing the logic this time around, it had a lot to do with local storage which is something that I struggle with.', src: '/rpls.png', icons: ['/js.png', '/html.png', '/bs.png'], button: 'RPLS', href: 'https://chin-s-rpsls.vercel.app/' },
    { title: 'Tip Calculator', content: 'This is a tip calculator that I built in Next JS. You can add the total amount, add how many people are paying and calculate how much everyone owes including their tip.', src: '/tip.png', icons: ['/react.png', '/ts.png', '/flowbite.png', '/tw.png'], button: 'Tip Calculator', href: 'https://tip-calc-seven.vercel.app/' },
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

          <Navbar.Link href='#unity' className='text-xl'>
            Unity
          </Navbar.Link>

          <Navbar.Link href='#getConnected' className='text-xl'>
            Get Connected
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* ABOUT ME */}
      <motion.div
        className={pageSize ? 'grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 m-5 xl:p-20 lg:p-20 md:p-10 border-8 border-double rounded-lg border-navPink' : 'grid grid-cols-1 border-8 border-double rounded-lg border-navPink p-6 m-2'}>

        <div id='aboutMe' className={pageSize ? 'col-span-2' : 'col-span-1'}>
          <p className={pageSize ? 'text-7xl font-semibold' : 'text-6xl font-semibold'}> Hey there! I&rsquo;m Sinatha.</p>
          <h1 style={{
            textShadow: "1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black",
          }} className={pageSize ? 'text-5xl custom-bounce font-semibold text-greenTxt  pt-5 pr-5' : 'text-4xl custom-bounce font-semibold text-greenTxt'}>
            Junior Developer
          </h1>
          <p className={pageSize ? 'text-lg pt-5 xl:pr-20 lg:pr-20 md:p-0' : 'text-lg'}>
            I am a junior developer currently attending CodeStack Academy since September 2023. I have experience in HTML, JavaScript, and most recently React and Next JS. I am most interested in front end developing and am excited to put my skills to the test in the real world.
          </p>

          <div className={pageSize ? 'grid grid-cols-3 pt-10 font-bold' : 'hidden'}>

          <div className='col-span-'>
              <p className='text-xl'>Libraries: </p>
              <div className='pt-1 inline-flex'>
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/react.png' />
              </div>
            </div>

            <div className='col-span-1'>
              <p className='text-xl'> Languages: </p>
              <div className='inline-flex pt-1'>
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/html.png' />
                <Image height={100} width={100} alt='' className='w-9 h-8 mr-1' src='/js.png' />
                <Image height={100} width={100} alt='' className='w-8 h-8 mr-1' src='/ts.png' />
                <Image height={100} width={100} alt='' className='w-8 h-8' src='/c.png' />
              </div>
            </div>

            

            <div className='col-span-1'>
              <p className='text-xl'>Frameworks: </p>
              <div className='inline-flex pt-1'>
                <Image height={100} width={100} alt='' className='w-8 h-8 mr-1' src='/bs.png' />
                <Image height={100} width={100} alt='' className='w-11 h-7' src='/tw.png' />
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/flowbite.png' />
                <Image height={100} width={100} alt='' className='w-10 h-8' src='/material.png' />

              </div>
            </div>

          </div>
        </div>

        <div className={pageSize ? 'col-span-1 md:pt-5 flex md:justify-center' : 'col-span-1 py-5'}>
          <motion.img alt='' className='rounded-full border-navPink border-8 h-96 w-96 object-cover'
            animate={{ borderColor: 'rgb(153,204,153)' }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            src='/headshot.jpg' />
        </div>
        
        <div className={pageSize ? 'hidden' : 'grid grid-cols-2 items-center pt-10 font-bold'}>

            <div className={pageSize ? 'col-span-1' : 'col-span-1'}>
              <p className='text-xl'> Languages: </p>
              <div className='inline-flex pt-1'>
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/html.png' />
                <Image height={100} width={100} alt='' className='w-9 h-8 mr-1' src='/js.png' />
                <Image height={100} width={100} alt='' className='w-8 h-8 mr-1' src='/ts.png' />
                <Image height={100} width={100} alt='' className='w-8 h-8' src='/c.png' />
              </div>
            </div>

            <div className='col-span-1'>
              <p className='text-xl'>Libraries: </p>
              <div className='pt-1 inline-flex'>
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/react.png' />
                <Image height={100} width={100} alt='' className='w-10 h-8 mr-1' src='/flowbite.png' />
                <Image height={100} width={100} alt='' className='w-10 h-8' src='/material.png' />
              </div>
            </div>

            <div className='col-span-1'>
              <p className='text-xl'>Frameworks: </p>
              <div className='inline-flex pt-1'>
                <Image height={100} width={100} alt='' className='w-8 h-8 mr-1' src='/bs.png' />
                <Image height={100} width={100} alt='' className='w-11 h-7' src='/tw.png' />

              </div>
            </div>

          </div>

      </motion.div>

      {/* PROJECTS */}
      <div id='projects' className={pageSize ? 'xl:p-20 lg:p-20 md:p-10 border-8 border-double border-greenTxt m-5 rounded-lg z-50' : 'p-6 m-2 border-8 border-double border-greenTxt rounded-lg z-50'}>
        <p className='text-5xl font-semibold pb-5'> Projects: </p>

        <div className='flex overflow-x-auto z-50'>

          {items.map((item, index) => (
            <motion.div
              key={index}
              className={pageSize ? "flex-none w-96 p-4 m-4 border rounded-lg bg-navPink shadow cursor-pointer" : 'flex-none w-52 p-2 m-2 rounded-lg bg-navPink'}
              onClick={() => handleClick(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image height={600} width={600} src={item.src} alt={`Image ${item.src}`} className="w-full h-auto mb-2 rounded-lg" />
              <p className={pageSize ? "text-3xl font-semibold text-center" : 'text-xl font-semibold text-center'}>{item.title}</p>
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
                  className={pageSize ? "xl:w-2/3 lg:w-5/6 md:w-5/6 bg-white border-navPink border-8 xl:p-8 lg:p-4 md:p-4 rounded-lg shadow-lg" : 'w-96 h-5/6 bg-white border-navPink border-8 p-8 rounded-lg shadow-lg'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Image height={1000} width={1000} src={selectedItem.src} alt={`Image ${selectedItem.src}`} className={pageSize ? "w-full object-top h-96 object-cover mb-2 rounded-lg" : 'hidden'} />
                  <p className={pageSize ? "text-lg p-5" : "text-md py-1"}>{selectedItem.content}</p>
                  <div className='px-5 grid grid-cols-2'>
                    <div>
                      <p className='pb-1 text-lg font-semibold'>Built With:</p>
                      {selectedItem.icons.map((icon, iconIndex) => (
                        <Image height={100} width={100} key={iconIndex} src={icon} alt={`Icon ${iconIndex}`} className="w-10 inline-flex h-10 mr-5" />
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

      {/* UNITY */}
      <div id="unity" className={pageSize ? 'pb-5' : ''}>
        <div className={pageSize ? 'xl:p-20 lg:p-20 md:p-2 border-8 border-double border-navPink ml-5 mr-5 rounded-lg' : 'p-6 m-2 border-8 border-double border-navPink rounded-lg'}>
          <p className={pageSize? 'text-5xl font-semibold xl:pb-8 lg:pb-8 xl:p-0 lg:p-0 md:p-10' : 'text-5xl font-semibold p-2'}> Unity: </p>

          <div className={pageSize ? ' grid xl:grid-cols-3 lg:grid-cols-1 lg:justify-center md:grid-cols-1' : 'grid grid-cols-1'}>
            <div className={pageSize ? 'xl:col-span-2 flex lg:justify-center  md:justify-center lg:col-span-2 md:col-span-1' : 'col-span-1 flex justify-center'}>
              <GhibliComponent />

            </div>
            <div className={pageSize ? 'col-span-1 xl:p-0 lg:p-0 md:p-10 lg:pt-5' : 'pt-5'}>
              <p className='text-lg'>This is a Studio Ghibli trivia game with easy, medium and hard modes. This project was the one that made me want to quit the academy all together but I pushed through and was able to get it to work with the help of my TAs. Unity was extremely tough for me especially since we learned this at the beginning of the academy, a time where I barely knew how to code. Although I almost quit because of Unity, looking back I actually did enjoy our little time with it. I like seeing my games/creations in this format.  </p>

              <p className='text-lg font-semibold pt-5'>Tip!!</p>
              <p className='text-lg'> Go to options menu to play music throughout the game for a nice setting.</p>

            </div>
          </div>



        </div>

      </div>

      {/* GET CONNECTED */}
      <div style={{ zIndex: 10 }} className='pb-5'>
        <div id='getConnected' className={pageSize ? 'p-20 border-8 border-double border-greenTxt ml-5 mr-5 rounded-lg' : 'p-6 m-2 border-8 border-double border-greenTxt rounded-lg'}>
          <p className='text-5xl font-semibold pb-5'> Get Connected: </p>

          <div className={pageSize ? 'grid grid-cols-2' : 'grid grid-cols-1'}>

            <div className='col-span-1'>
              <p> Sinatha Chin</p>
              <p>sinathachin@gmail.com</p>
              <p>(209) 670-6105</p>
            </div>

            <div className={pageSize ? 'col-span-1 flex justify-center items-center' : 'col-span-1 grid grid-cols-1'}>
              <div className={pageSize ? 'xl:px-5 lg:px-5 md:px-1' : 'flex justify-center py-3'}>
                <a href='https://www.linkedin.com/in/sinatha-chin-123331308' target='_blank' rel='noopener noreferrer'>
                  <Button className='px-5 text-black bg-navPink hover:underline enabled:hover:bg-navPink relative focus:ring-0'>
                    LinkedIn
                  </Button>
                </a>
              </div>

              <div className={pageSize ? 'xl:px-5 lg:px-5 md:px-1' : 'flex justify-center pb-3'}>
                <a href='https://github.com/sinnchinn' target='_blank' rel='noopener noreferrer'>
                  <Button className='px-5 text-black bg-navPink hover:underline enabled:hover:bg-navPink focus:ring-0'>
                    Github
                  </Button>
                </a>
              </div>

              <div className={pageSize ? 'xl:px-5 lg:px-5 md:px-1' : 'flex justify-center'}>
                <a rel='noopener noreferrer'>
                  <Button onClick={() => openResume('/resume.png')} className='px-5 text-black bg-navPink hover:underline enabled:hover:bg-navPink focus:ring-0'>
                    Resume
                  </Button>
                </a>
              </div>

              {isResumeOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                  <div className={pageSize ? " xl:w-2/6 lg:w-3/6 md:w-full bg-white border-navPink border-8 p-8 rounded-lg shadow-lg" : " w-full bg-white border-navPink border-8 p-8 rounded-lg shadow-lg"}>
                    <Image height={800} width={800} src={'/resume.png'} alt="Resume" className={pageSize ? "w-6/6 object-top object-cover mb-2 rounded-lg " : 'w-full'} />
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