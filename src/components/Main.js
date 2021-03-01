import PropTypes from 'prop-types';
import React from 'react';
// import nailed3 from '../images/nailed3.png';
// import nailed4 from '../images/nailed4.png';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Publications</h2>
          <span className="image main">
            {/* <img src={nailed3} alt=""
              style={{ filter: 'blur(2.5px)'}}
            /> */}
          </span>
            <ul>
              <h3>
                Essay, &nbsp; 
                <a href="http://www.witchcraftmag.com/" target="-blank">"Everyday Witchcraft"</a> Witchcraft Magazine,  Print. Published April 2018.
              </h3>
              <h3>
                Essay, &nbsp; 
                <a href="https://www.themanifeststation.net/2017/06/11/the-chair/" target="-blank">"The Chair"</a> Manifest-Station, Published June 11, 2017.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="https://www.hobartpulp.com/web_features/lie-game" target="-blank">"Lie Game"</a> Hobart, Published February 2017.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="http://www.forestavenuepress.com/catalog/city-of-weird/" target="-blank">"A Heft of Ashes"</a> Portland Weird Anthology, Published October 2016.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="https://www.nailedmagazine.com/features/economy-kirsten-larson" target="-blank">"In This Economy"</a> NAILED Magazine, Published June 2016.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="http://kellenlarson.com/uploads/8/3/7/8/83785532/whitetail.pdf" target="-blank">"Whitetail"</a> Perceptions Literary Magazine, Published June 2016. <em>reprinted here</em>
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="http://kellenlarson.com/uploads/8/3/7/8/83785532/crossing_the_mckenzie.pdf" target="-blank">"Crossing the McKenzie"</a> Perceptions Literary Magazine, Published June 2016. <em>reprinted here</em>
              </h3>
              <h3>
                Interview: &nbsp; 
                <a href="https://lunchticket.org/lidia-yuknavitch-author/" target="-blank">"With Lidia Yuknavitch"</a> Lunch Ticket, Published December 2015.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="https://www.nailedmagazine.com/features/blue-in-green-by-kirsten-larson" target="-blank">"Blue in Green"</a> NAILED Magazine, Published April 2015.
              </h3>
              <h3>
                Open Letter, &nbsp; 
                <a href="https://www.nailedmagazine.com/features/open-letter-id-like-to-apologize-to-a-few-people-by-kirsten-larson" target="-blank">"I'd Like to Apologize to a Few People"</a> NAILED Magazine, Published June 2014.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="https://www.huffpost.com/entry/wanting-him-to-want-me-on_b_5560651" target="-blank">"Wanting Him to Want Me: On Being Raised Without My Father"</a> Huffington Post, Published July 2014.
              </h3>
              <h3>
                Short Story, &nbsp; 
                <a href="https://www.huffpost.com/entry/why-we-reach-for-guns_b_5508314" target="-blank">"Why We Reach for Guns"</a> Huffington Post, Published June 2014.
              </h3>
              <h3>
                Essay, &nbsp; 
                <a href="https://www.themanifeststation.net/2014/06/17/trigger-finger-an-essay-on-gun-control/" target="-blank">"Trigger Finger: An Essay on Gun Control."</a> Manifest-Station, Published June 2014.
              </h3>
              <h3>
                Essay, &nbsp; 
                "One of the Warriors", winner of essay contest—Women of Courage, 2000.
              </h3>
            </ul>
          {close}
        </article>
            {/* Work section disabled at client's request for now */}
        {/* <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work History</h2>
          <h2><em>as it pertains to writing only</em></h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
            <ul>
              <h3>Portland State University, Instructor, September 2014—present.</h3>
              <h3>Contributing Editor, <a href="https://www.nailedmagazine.com/" target="-blank">NAILED Magazine,</a> 2014—Present.</h3>
            </ul>
          {close}
        </article> */}

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            {/* <img src={nailed4} alt=""
              style={{ filter: 'blur(2.5px)'}}
            /> */}
          </span>
            <h2 className="major">Writing Awards</h2>
              <ul>
                <h3><i class="fas fa-award"></i> Best of Genre (fiction), Perceptions Literary Magazine, $50 award, June 2016. <i class="fas fa-award"></i></h3>
                <h3><i class="fas fa-award"></i> Awarded Binford Writing Scholarship, $2,000/semester, Marylhurst University, 2002-2003. <i class="fas fa-award"></i></h3>
                <h3><i class="fas fa-award"></i> 1st place for creative nonfiction essay – Women of Courage, 2000. $500 award. <i class="fas fa-award"></i></h3>
              </ul>
            <h2 className="major">Writing Activities & Memberships</h2>
              <ul>
                <h3>Founder and leader at Symposium Writer’s Group, 2016.</h3>
                <h3>Participant at<em> Burnt Tongue, Grief Rites, and Legion Reader’s Group.</em></h3>
              </ul>
            <h2 className="major">Formal Education</h2>
              <ul>
                <h3>MFA, Creative Nonfiction—Antioch University, Los Angeles.</h3>
                <h3>BS Liberal Studies, Minor in Writing—Portland State University.</h3>
              </ul>
          {close}
        </article>
            {/* Contact section disabled at client's request for now */}
        {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/mehkiki"
                className="icon fa-twitter"
                target="-blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mehkiki/" className="icon fa-instagram"
              target="-blank">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
