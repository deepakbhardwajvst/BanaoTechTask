import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Card, Button } from 'react-bootstrap';
import { IoPeopleSharp, IoBasket , IoCalendarClearSharp, IoAddCircle ,IoLocationSharp  } from "react-icons/io5";

const GridCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust breakpoint as needed
  const gridTemplateColumns = isMobile ? "repeat(1, 2fr)" : "repeat(2, 1fr)"; // Conditional grid layout

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center',flexDirection:'column' }}> {/* Center grid horizontally */}
      <div style={{ display: 'grid', gridTemplateColumns, gap: '20px',justifyContent:'center' ,justifyItems:'center',marginTop:'50px'}}> {/* Horizontal gap of 30px */}
          <Cards
              icon={<IoPeopleSharp />}
              title="People"
              text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator."
              buttonLabel="Connect"
              color="#8064A2" // Yellow color for hover
              padding={isMobile ? "50px" : "25px"}
          />
          <Cards
              icon={<IoLocationSharp />}
              title="Place"
              text="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot s that allow booking through hobbycue."
              buttonLabel="Meet up"
              color="#77933C" // Pink color for hover
              padding={isMobile ? "50px" : "25px"}
          />
          <Cards
              icon={<IoBasket />}
              title="Product"
              text="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
              buttonLabel="Get it"
              color="#C0504D" // Light blue color for hover
              padding={isMobile ? "50px" : "25px"}

              
          />
          <Cards
              icon={<IoCalendarClearSharp />}
              title="Program"
              text="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
              buttonLabel="Attend"
              color="#0096C8" // Light green color for hover
              padding={isMobile ? "50px" : "25px"}
          />
      </div>

      <div style={{justifyContent:'center',display:'flex',marginBottom:'0px'}}>
    <Card style={{ 
                width: '1050px', 
                padding: '25px', 
               // Changing card stroke color to grey
                backgroundColor: '#fff', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow effect
                borderRadius: '10px', // Adding border radius
                textAlign: 'left', // Aligning text to the left
                fontFamily: 'DMM', // Changing font family
                marginTop:'100px',
                marginBottom:'150px'
}}>
                <Card.Title style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    fontSize: '24px' 
                }}>
                    <IoAddCircle  style={{ marginRight: '10px',color:'#8064A2' }} /> {/* Added margin to the right of the icon */}
                    <span style={{ display: 'block',fontWeight:500}}>Add your own</span>
                </Card.Title>
                <span style={{ display: 'block', margin: '10px 0' ,fontWeight:400}}> {/* Making the span occupy the whole width */}
                Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page                </span>
                <Button variant="outline-primary" style={{ 
                    backgroundColor: 'white', // Button background color white
                    borderColor: '#8064A2', // Stroke color
                    borderRadius: '10px', // Border radius
                    color: '#8064A2', // Text color blue
                    width: '20%', // Width of the button
                    alignSelf: 'flex-start', // Aligning button to the left
                    fontFamily:'DMM',
                    fontWeight:'600',
                    marginTop:'10px',
                    
                }}>Add new</Button>
            </Card> 
        </div>
    </div>
  );
};

export default GridCard;