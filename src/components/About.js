import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address" >
                        <a style={{paddingRight:35+'px'}} href={'tel:' + resumeData.tel}>Phone</a>
       						<a style={{paddingRight:35+'px'}} href={'mailto:' + resumeData.mail}>Mail</a>
       						{/* <a style={{paddingRight:5+'px'}} href={resumeData.github}>GitHub</a> */}
       						<a style={{paddingRight:35+'px'}} href={resumeData.vk}>VK</a>

                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                  

       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}