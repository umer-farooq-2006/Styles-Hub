import React from 'react'
import Header from './Components/Header/page'
import TopHeader from './Components/Top Header/page'
import Footer from './Components/Footer/page'
import Image from 'next/image'
import "./style.css"

const Home = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      {/* Section One HTML */}
      <section className="section-one">
        <Image src="/Images/HomeImage.jpg" alt='' width={1400} height={1400} className='img'/>
        <article>
          <p>SUMMARY 2020</p>
          <h1>NEW COLLECTION</h1>
          <h2>We know how large objects will act, <br /> but things on a small scale.</h2>
          <button>SHOP NOW</button>
        </article>
      </section>
      {/* Section Two HTML */}
      <section className="section-two">
        <section className="sub-section-two">
          <article>
            <h1>EDITOR PICKS</h1>
            <p>Problems trying to resolve the conflict between </p>
          </article>
          <div className="images">
            <div className='img-1'>
              <Image src="/Images/Mens.jpg" alt='' width={400} height={0}/>
              <h3 className='men-title'>MEN</h3>
            </div>
            <div className='img-2'>
              <Image src="/Images/Womens.jpg" alt='' width={400} height={0}/>
              <h3 className='women-title'>WOMEN</h3>
            </div>
            <div className='imgs'>
              <div className='imgs-1'>
                <Image src="/Images/Accessories.jpg" alt='' width={190} height={0}/>
                <h3 className='accessories-title'>ACCESSORIES</h3>
              </div>
              <div className='imgs-2'>
                <Image src="/Images/Kids.jpg" alt='' width={190} height={0}/>
                <h3 className='kids-title'>KIDS</h3>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Section Three HTML */}
      <section className="section-three">
        <section className="sub-section-three">
          <article>
            <h2>Featured Products</h2>
            <h1>BESTSELLER PRODUCTS</h1>
            <p>Problems trying to resolve the conflict between </p>
          </article>
          <div className="container-one">
            <div className='one common'>
              <Image src="/Images/one.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='two common'>
              <Image src="/Images/two.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='three common'>
              <Image src="/Images/three.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='four common'>
              <Image src="/Images/four.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
          </div>
          <div className="container-two">
            <div className='five common'>
              <Image src="/Images/five.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='six common'>
              <Image src="/Images/six.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='seven common'>
              <Image src="/Images/seven.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
            <div className='eight common'>
              <Image src="/Images/eight.jpg" alt='' width={250} height={250} className='Image'/>
              <section>
                <h1 className='heading1'>Graphic Design</h1>
                <h1 className='heading2'>English Department</h1>
                <p>$16.48 <span>$6.48</span></p>
                <div className="colors">
                  <div id='blue'></div>
                  <div id='green'></div>
                  <div id="yellow"></div>
                  <div id='black'></div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
      {/* Section Four HTML */}
      <section className="section-four">
        <div className="sec-img">
          <section className="text">
            <h3>SUMMER 2020</h3>
            <h1>Vita Classic <br /> Product</h1>
            <p id='text-para'>We know how large objects will act, We know <br /> how are objects will act, We know</p>
            <div className="paragraph-btn">
              <p>$16.48</p>
              <button>ADD TO CART</button>
            </div>
          </section>
          <Image src="/Images/greenpic.png" alt='' width={400} height={0}/>
        </div>
      </section>
      {/* Section Five HTML */}
      <section className="section-five">
        <Image src="/Images/redpic.png" alt='' width={1000} height={1000} className='sec5'/>
        <div className="right-side">
          <h3>SUMMER 2020</h3>
          <h1>Part of the Neural <br /> Universe</h1>
          <p>We know how large objects will act, but things on a small scale.</p>
          <div className="buttons">
            <button id='btn-one'>BUY NOW</button>
            <button id='btn-two'>READ MORE</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home