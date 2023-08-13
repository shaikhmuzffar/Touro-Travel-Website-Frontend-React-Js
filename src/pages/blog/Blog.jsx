import React from "react"
import './blog.css'
import Navbar from '../../components/navbar/Navbar'
import BlogPost from '../../components/blogpost/BlogPost'
import PopularBlog from '../../components/popularBlog/PopularBlog'
import blogImg1 from '../../images/blog/blog1.jpg'
import blogImg2 from '../../images/blog/blog2.jpg'
import blogImg3 from '../../images/blog/blog3.jpg'
import blogImg4 from '../../images/blog/blog4.jpg'
import blogImg5 from '../../images/blog/blog5.jpg'
import blogImg6 from '../../images/blog/blog6.jpg'
import blogImg7 from '../../images/blog/blog7.jpg'
import blogImg8 from '../../images/blog/blog8.jpg'
import blogImg9 from '../../images/blog/blog9.jpg'
import blogImg10 from '../../images/blog/blog10.jpg'
import blogImg11 from '../../images/blog/blog11.jpg'
import blogPlaceImg1 from '../../images/blog/blogPlace1.jpg'
import blogPlaceImg2 from '../../images/blog/blogPlace2.jpg'
export default function Blog() {
    return (
        <>
            <div className="blogSection">
                <Navbar active="blog" />
                <div className="blogs container marginTop6">
                    <div className="featuredForMembers">
                        <h3 className="blogSectionHeading">
                            Featured for Members
                        </h3>
                        <div className="featureBox">
                            {/* large posts */}
                            <div className="largeFeatureBox">
                                <div className="largeFeatureBoxBlog">
                                    <div className="blogImg">
                                        <img src={blogImg5} alt="" />
                                    </div>
                                    <div className="blogInfo">
                                        <h2 className="blogTitle">
                                            Date from the other end
                                        </h2>
                                        <p className="blogDesc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit atque nobis voluptas, molestias nostrum.
                                        </p>
                                        <div >
                                            <span className="bloggerName">
                                                pit hemsworth & jenna sky
                                            </span>
                                            <div className="blogDate">
                                                <span>23 may</span>
                                                <span>&middot;</span>
                                                <span>5 min read</span>
                                                <span><i className="fa-solid fa-earth-americas"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* middle  posts*/}
                            <div className="middleFeatureBox">
                                <div className="middleFeatureBoxPost">
                                    <h2 className="middleFeatureBoxImg">
                                        <img src={blogPlaceImg1} alt="" />
                                    </h2>
                                    <div className="middleFeatureBoxPostInfo">
                                        <h3 className="popularPostName">Trips unforgettable</h3>
                                        <span className="popularPostDesc">Lorem ipsum dolor sit amet...</span>
                                        <p className="popularPostBlogger"><span>anitno Mclare &middot; UI/UX Designer</span> </p>
                                        <span className="popularPostDate">18 april  &middot; 3 min read <i className="fa-solid fa-earth-americas"> </i></span>
                                    </div>
                                </div>
                                <div className="middleFeatureBoxPost">
                                    <h2 className="middleFeatureBoxImg">
                                        <img src={blogPlaceImg2} alt="" />
                                    </h2>
                                    <div className="middleFeatureBoxPostInfo">
                                        <h3 className="popularPostName">Making memories</h3>
                                        <span className="popularPostDesc">Lorem ipsum dolor sit amet...</span>
                                        <p className="popularPostBlogger"><span>anitno Mclare &middot; UI/UX Designer</span> </p>
                                        <span className="popularPostDate">18 april  &middot; 3 min read <i className="fa-solid fa-earth-americas"> </i></span>
                                    </div>
                                </div>
                                {/* <middleFeatureBoxPost postName="Trips unforgettable" Desc="Lorem ipsum dolor sit amet..." author="anitno Mclare" /> */}
                            </div>
                            {/* small posts */}
                            <div className="smallFeatureBox">
    
                                <SmallFeatureBoxPost img={blogImg9} postName="New friends everywhere" author="anitno Mclare" />
                                <SmallFeatureBoxPost img={blogImg10} postName="Cheering trips" author="Jhone Cage" />
                                <SmallFeatureBoxPost img={blogImg11} postName="Vibing wanderlust" author="anna rose" />
                            </div>

                        </div>

                    </div>
                    <div className="blogsContainer marginTop4">
                        <div className="leftBox">
                            <h3 className="blogSectionHeading">
                                Latest Posts
                            </h3>
                            <div className="blogsBox">
                                <BlogPost
                                    blogImg={blogImg1}
                                    blogTitle="Discovering planet's cuteness with my Buddies"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Eric Ruskow" blogDate="may 23" />
                                <BlogPost
                                    blogImg={blogImg2}
                                    blogTitle="Epic locationer"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Alina Bloom" blogDate="jan 05" />
                                <BlogPost
                                    blogImg={blogImg3}
                                    blogTitle="Discovering islands"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Jessica rees" blogDate="feb 14" />
                                <BlogPost
                                    blogImg={blogImg4}
                                    blogTitle="Meeting awesome people"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Cristine addams" blogDate="feb 23" />
                                <BlogPost
                                    blogImg={blogImg6}
                                    blogTitle="Discovering islands"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Jessica rees" blogDate="feb 14" />
                                <BlogPost
                                    blogImg={blogImg7}
                                    blogTitle="New friends everywhere"
                                    blogDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus pariatur cupiditate, culpa dolorum eaque." bloggerName="Cristine addams" blogDate="feb 23" />
                            </div>

                        </div>
                        <div className="rightBox">
                            <h3 className="blogSectionHeading">
                                Popular Posts
                            </h3>

                            <div className="popularPosts">
                                <PopularBlog
                                    PostNumber="01"
                                    PostName="Beautiful blondy travels"
                                    PostBlogger="alina doe"
                                    PostDate="jan 23"
                                />
                                <PopularBlog
                                    PostNumber="02"
                                    PostName="Travelling after getting fired"
                                    PostBlogger="hasan amir"
                                    PostDate="dec 02"
                                />
                                <PopularBlog
                                    PostNumber="03"
                                    PostName="Long way to Antarctica"
                                    PostBlogger="hasan amir"
                                    PostDate="may 3"
                                />
                                <PopularBlog
                                    PostNumber="04"
                                    PostName="Discovering planet's cuteness with my Buddies"
                                    PostBlogger="hasan amir"
                                    PostDate="may 3"
                                />
                                <PopularBlog
                                    PostNumber="05"
                                    PostName="What's the point of homes?"
                                    PostBlogger="hasan amir"
                                    PostDate="may 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function SmallFeatureBoxPost(props) {
    return (
        <div className="smallFeatureBoxPost">
            <h2 className="smallFeatureBoxImg">
                <img src={props.img} alt="" />
            </h2>
            <div className="smallFeatureBoxPostInfo">
                <h3 className="popularPostName">{props.postName}</h3>
                <p className="popularPostBlogger"><span>{props.author}</span> </p>
                <span className="popularPostDate">18 april  &middot; 3 min read <i className="fa-solid fa-earth-americas"> </i></span>
            </div>
        </div>
    )
}

function middleFeatureBoxPost(props) {
  return (
    <div className="middleFeatureBoxPost">
    <h2 className="middleFeatureBoxImg">
        <img src={props.img} alt="" />
    </h2>
    <div className="middleFeatureBoxPostInfo">
        <h3 className="popularPostName">{props.postName}</h3>
        <span className="popularPostDesc">{props.Desc}</span>
        <p className="popularPostBlogger"><span>{props.author} &middot; UI/UX Designer</span> </p>
        <span className="popularPostDate">18 april  &middot; 3 min read <i className="fa-solid fa-earth-americas"> </i></span>
    </div>
</div>
  )
}
