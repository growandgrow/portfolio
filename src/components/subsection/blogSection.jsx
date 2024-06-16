import React from 'react';
import Blog1 from '../../assets/imgs/blog1.jpg';
import Blog2 from '../../assets/imgs/blog2.jpg';
import Blog3 from '../../assets/imgs/blog3.jpg';

const BlogSection = () => {

  return (
    <section className="section" id="blog">
      <div className="container">
        <h2 className="mb-5">Latest <span className="text-danger">News</span></h2>
        <div className="row">
          <div className="blog-card">
            <div className="img-holder">
              <img src={Blog1}
                   alt="blog1"
              />
            </div>
            <div className="content-holder">
              <h6 className="title">Consectetur adipisicing elit</h6>

              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"/> 234</a>
                <a href="#"><i className="ti-comment"/> 123</a>
              </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus
                voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia
                modi quasi distinctio.</p>

              <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
              <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum
                nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"/></a>
            </div>
          </div>
          <div className="blog-card">
            <div className="img-holder">
              <img src={Blog2}
                   alt="blog2"/>
            </div>
            <div className="content-holder">
              <h6 className="title">Explicabo illo</h6>

              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"/> 456</a>
                <a href="#"><i className="ti-comment"/> 264</a>
              </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam
                atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae
                exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum
                placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique
                doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti
                cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus
                sunt. Ipsum, rem.</p>

              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"/></a>
            </div>
          </div>
          <div className="blog-card">
            <div className="img-holder">
              <img src={Blog3} alt="blog3"/>
            </div>
            <div className="content-holder">
              <h4 className="title">Porro Quisqua</h4>

              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"/> 431</a>
                <a href="#"><i className="ti-comment"/> 312</a>
              </p>

              <p> consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto
                consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus
                eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum
                tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum
                architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere,
                delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
