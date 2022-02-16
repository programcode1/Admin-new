import React from "react";
import "./Timeline-page.css";
import logo from "../../../../img/avatar-1.jpg";
function Timeline_page() {
  return (
    <div className="bg-color-body">
      <div className="container text-white">
        <h5 className="py-3 font-22">Timeline</h5>
        <div className="row">
          <div className="col-md-12">
            <section id="cd-timeline" className="pt m-2 bg-color">
              <div class="cd-timeline-block mb right-content">
                <div className=" text-center cd-timeline-img cd-success">
                  <i class="fa fa-tag"></i>
                </div>
                <span class="text-muted cd-date">May 23</span>
                <div className="cd-timeline-content px-5">
                  <h3 className="mb-4 pt-2">Timeline Event One</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, optio, dolorum provident rerum aut hic quasi placeat
                    iure tempora laudantium ipsa ad debitis unde? Iste
                    voluptatibus minus veritatis qui ut.
                  </p>
                </div>
              </div>
              <div class="cd-timeline-block mb left-content">
                <div className=" text-center cd-timeline-img cd-danger">
                  <i class="fa fa-thumbs-up"></i>
                </div>
                <span class="text-muted cd-date">May 30</span>
                <div className="cd-timeline-content px-5 pull-right">
                  <h3 className="mb-4 pt-2">Timeline Event Two</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, optio, dolorum provident rerum aut hic quasi placeat
                    iure tempora laudantium ipsa ad debitis unde?
                  </p>
                  <button className="btn btn-primary">See more detail</button>
                </div>
              </div>
              <div class="cd-timeline-block mb right-content">
                <div className=" text-center cd-timeline-img cd-info">
                  <i class="fa fa-star"></i>
                </div>
                <span class="text-muted cd-date">June 05</span>
                <div className="cd-timeline-content px-5">
                  <h3 className="mb-4 pt-2">Timeline Event Three</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Excepturi, obcaecati, quisquam id molestias eaque asperiores
                    voluptatibus cupiditate error assumenda delectus odit
                    similique earum voluptatem doloremque dolorem ipsam quae
                    rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi
                    eius odio natus ullam provident pariatur temporibus quia eos
                    repellat ... <a href="">Read more</a>
                  </p>
                </div>
              </div>
              <div class="cd-timeline-block mb left-content">
                <div className=" text-center cd-timeline-img cd-pink">
                  <i class="fa fa-image"></i>
                </div>
                <span class="text-muted cd-date">June 14</span>
                <div className="cd-timeline-content px-5 pull-right">
                  <h3 className="mb-4 pt-2">Timeline Event Four</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, optio, dolorum provident rerum aut hic quasi placeat
                    iure tempora laudantium ipsa ad debitis unde?
                  </p>
                  <img src={logo} style={{ width: "100%", height: "250px" }} />
                </div>
              </div>
              <div class="cd-timeline-block mb right-content">
                <div className=" text-center cd-timeline-img cd-warning">
                  <i class="fa fa-pencil-square-o"></i>
                </div>
                <span class="text-muted cd-date">June 18</span>
                <div className="cd-timeline-content px-5">
                  <h3 className="mb-4 pt-2">Timeline Event Five</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, optio, dolorum provident rerum.
                  </p>
                  <button className="btn btn-primary">See more detail</button>
                </div>
              </div>
              <div class="cd-timeline-block mb left-content">
                <div className=" text-center cd-timeline-img cd-primary">
                  <i class="fa fa-paperclip"></i>
                </div>
                <span class="text-muted cd-date">June 30</span>
                <div className="cd-timeline-content px-5 pull-right">
                  <h3 className="mb-4 pt-2">Timeline Event End</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Excepturi, obcaecati, quisquam id molestias eaque asperiores
                    voluptatibus cupiditate error assumenda delectus odit
                    similique earum voluptatem doloremque dolorem ipsam quae
                    rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi
                    eius odio natus ullam provident pariatur temporibus quia eos
                    repellat consequuntur perferendis enim amet quae quasi
                    repudiandae sed quod veniam dolore possimus rem voluptatum
                    eveniet eligendi quis fugiat aliquam sunt similique aut
                    adipisci.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline_page;
