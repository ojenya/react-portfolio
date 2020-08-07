import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" >
          <div className="row section-head" >
            <div className="twelve columns" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <p className="lead" >
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <aside className="eigth columns footer-widgets">
              <div className="widget" >
                {/* <h4>VK :
                 <a href="{resumeData.vk}"> Personal page</a> 
                </h4> */}
                <h4><a style={{paddingRight:35+'px'}} href={'tel:' + resumeData.tel}>Phone</a> <a style={{paddingRight:35+'px'}} href={'mailto:' + resumeData.mail}>Mail</a> <a style={{paddingRight:35+'px'}} href={resumeData.vk}>VK</a></h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

