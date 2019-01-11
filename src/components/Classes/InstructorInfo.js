import React, { Component } from 'react';

class InstructorInfo extends Component {
    render() {
        return (
<div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
          Original Graphics
        </div>

            <div className='ui container'>
                <div style={{marginBottom: "20px", border: "solid", marginTop: "50px"}}>
                    <div className="ui stacked segments" >

                        <div className="ui segment">
                        <strong><h1>Course Instructor: Sheila McDaniel</h1></strong>     
                        </div>

                        <div className="ui segment">
                            <strong><h3>Mon, Wed, Fri&nbsp;&nbsp;&nbsp;&nbsp;9am - 5pm</h3></strong>
                        </div>

                        <div className="ui segment">
                        </div>
                        
                        <div className="ui text container">
                        <button className="ui red button"><strong><h3>Basic Photography</h3></strong></button>

                            <p>Sheila McDaniel is a photographer whose work explores stereotypes of race and gender, most often with an emphasis on African American women.

My signature technique is photo-text, which involves including brief passages of text superimposed on her photographs, introducing new levels of meaning to the images. My photography typically explores the perception of African American women in American culture, and in 2007 my work was featured in a 20-year retrospective at the Whitney Museum of Art.</p>
                        </div>

                    </div>
                </div>
                
                <div style={{marginBottom: "20px", border: "solid", marginTop: "50px"}}>
                    <div className="ui stacked segments">

                        <div className="ui segment">
                        <strong><h1>Course Instructor: Hieu Tran</h1></strong>     
                        </div>

                        <div className="ui segment">
                            <strong><h3>Tue, Thur, Sat&nbsp;&nbsp;&nbsp;&nbsp;9am - 5pm</h3></strong>
                        </div>
                        <div className="ui text container">
                            <button className="ui blue button"><strong><h3>Intermidiate Photography</h3></strong></button>
                            
                            <button className="ui black button"><strong><h3>Advance Photography</h3></strong></button>
                        
                        </div>


                        <div className="ui text container">
                            <p>My name is Hieu Tran. I’m a professional photographer-filmmaker specializing in architectural, aerial photography and video production.

“Photography is my muse, my profession, and the thing that will undoubtedly drive me insane someday.

I don’t photograph things. I photograph the way they make me feel. Admittedly, it’s a bit of a strange concept. But it’s honest – and it’s the best way to describe my approach to the craft.</p>
                        </div>
                        
                    </div>
                </div>

                <div style={{marginBottom: "20px", border: "solid", marginTop: "50px"}}>
                    <div className="ui stacked segments">

                        <div className="ui segment">
                        <strong><h1>Course Instructor: Olritch Germain</h1></strong>
                        </div>

                        <div className="ui segment">
                            <strong><h3>Wen, Fri, Sat, &nbsp;&nbsp;&nbsp;&nbsp;9am - 5pm</h3></strong>
                        </div>

                        <div className="ui text container">
                            <button className="ui red button"><strong><h3>Basic Photography</h3></strong></button>
                            <button className="ui blue button"><strong><h3>Intermediate Photography</h3></strong></button>
                            <button className="ui black button"><strong><h3>Advance Photography</h3></strong></button>



                        </div>
                        
                        <div className="ui text container">
                            <p>I am 36 years old, born and raised in New York, and currently living in Boston Mass.

I studied fine art and photography in college, eventually graduating from Roxbury Community Colle in Boston with a degree in Art. Thought my emphasis was in Drawing and Painting, I took many photography classes which turned my art towards a more gritty, realistic direction. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default InstructorInfo;
