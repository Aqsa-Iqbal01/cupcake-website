import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Import the Image component
import img from "/public/cupcake3.jpeg";
import '../styles/about.css'; // Import the CSS file for About page styles

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <div className="about-image">
                    {/* Image component for optimized images */}
                    <Image 
                        src={img} 
                        alt="About Cakes Galore" 
                        width={500} 
                        height={500} 
                        className="image"
                    />
                </div>
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>
                        We are a gourmet cupcake bakery and creamery, and we bake and frost 18 signature flavors every morning, fresh from scratch. Our menu features seasonal and unique flavors created by Jeff Martin, the founder of Smallcakes.
                    </p>
                    <p>
                        Our Story: Smallcakes Fort Myers is owned and operated by Don and Tonyia Moyer, a local couple, and is dedicated to bringing you the most memorable cupcake and creamery experience. We are located in the beautiful Gulf Coast town of Fort Myers and have been serving the community since 2013.
                    </p>
                    <p>
                        Featured on TV: Smallcakes has proven to be a nationwide success. Our cupcake bakery has been featured for three seasons running on the Food Network&apos;s &quot;CUPCAKE WARS&quot;, an appearance on ABC&apos;S hit daytime talk show, &quot;THE VIEW&quot;, and was selected as a &quot;Must Try Cupcake Shop&quot; by USA TODAY. We are honored to have the opportunity to bring gourmet cupcakes to the Southwest Florida community.
                    </p>
                
                    
                </div>
            </div>
        </div>
    );
};

export default About;
