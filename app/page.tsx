// app/page.tsx

//import Card from '../Card'// Import the Card component
import styles from './page.module.css'; // Assuming you have page-specific styles here
import Link from 'next/link';
import Image from 'next/image'; // Import Image component for images

export default function Home() {
  // You can store your card data in an array
//   const cardData = [
//     { id: 1, title: 'Card Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
//     { id: 2, title: 'Card Title 2', description: 'Here is some different text for the second card.' },
//     { id: 3, title: 'Card Title 3', description: 'And a unique description for the third card.' },
//   ];

  return (
     <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hi, I&apos;m Billy!</h1>
          <p className={styles.heroSubtitle}>A passionate Web Developer building awesome web experiences.</p>
          <div className={styles.heroButtons}>
            <Link href="/projects" className={styles.heroButtonPrimary}>
              View Projects
            </Link>
            <Link href="/contact" className={styles.heroButtonSecondary}>
              Contact Me
            </Link>
          </div>
          {/*Optional: Profile Image */}
           <div className={styles.heroImageContainer}>
            <Image src="/me3.png" alt="Your Profile" width={300} height={300} className={styles.heroImage} priority/>
          </div>
        </div>
      </div>
    </section>
    
    // <div className={styles.container}> {/* Use a container for layout */}
    //     <div className={styles.heading}> {/* Optional header div */}
    //         <h1>Welcome to My Next.js Page! Where I can test my ideas!</h1>
    //         <p>Things might get a little wonky! </p>
    //     </div>     

       
      

    //   <div className={styles.cardContainer}> {/* Another div to wrap the cards */}
    //     {/* Map over the cardData array to render a Card component for each item */}
    //     {cardData.map(card => (
    //       <Card
    //         key={card.id} // Always add a unique 'key' prop when rendering lists
    //         title={card.title}
    //         description={card.description}
    //         // Pass other props if your Card component accepts them
    //         // imageUrl={card.imageUrl}
    //       />
    //     ))}
    //   </div>

    //   {/* ... other page content ... */}
    // </div>
  );
}